import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"

export function generateParser(
    grammar: g.TGrammar,
    $i: {
        $w: wapi.Block,
        log: (str: string) => void,
    }
) {
    function findNextPossibleTokensInSymbolType(
        $: g.TValueType,
        onToken: (token: string) => void,
        onEnd: () => void,
    ) {
        switch ($[0]) {
            case "choice":
                pr.cc($[1], ($) => {
                    pr.forEachEntry($.options, ($, key) => {
                        findNextPossibleTokensInSymbolType(
                            $.type,
                            onToken,
                            onEnd
                        )
                    })
                })
                break
            case "reference":
                pr.cc($[1], ($) => {
                    const x = grammar.globalValueTypes[$.name]
                    if (x === undefined) {
                        throw new Error(`no such value type: '${$.name}'`)
                    }
                    findNextPossibleTokensInSymbolType(
                        x,
                        onToken,
                        onEnd,
                    )
                })
                break
            case "sequence":
                pr.cc($[1], ($) => {
                    const elements = $.elements.slice().reverse()
                    function doNextElement() {
                        const element = elements.pop()
                        if (element === undefined) {
                            onEnd()
                        } else {
                            findNextPossibleTokensInSymbolType(
                                element.value.type,
                                onToken,
                                () => {
                                    doNextElement()
                                },
                            )
                        }
                    }
                    doNextElement()
                })
                break
            case "node":
                pr.cc($[1], ($) => {
                    onToken($.name)
                })
                break
            default:
                pr.au($[0])
        }
    }
    pr.cc($i.$w, ($w) => {

        $w.line(($w) => {
            $w.snippet(`import * as pr from "pareto-runtime"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as tast from "../../interface/types/ts_api"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as uast from "../../interface/types/uast"`)
        })

        $w.line(($w) => { })

        $w.line(($w) => {
            $w.snippet(`export function parse<Annotation>(`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`$: uast.TUntypedNode<Annotation>,`)
                })
                
                $w.line(($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`callback: ($: tast.TRoot<Annotation>) => void,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`reportUnexpectedRoot: ($: { root: uast.TUntypedNode<Annotation>, }) => void,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`reportUnexpectedChild: ($: { path: string, child: uast.TUntypedNode<Annotation>, expected: pr.optional<string[]> }) => void,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,`)
                        })
                    })
                    $w.snippet(`},`)
                })
            })
            $w.snippet(`): void {`)
            $w.indent(($w) => {

                $w.line(($w) => {
                    $w.snippet(`const $x = $i`)
                })
                function nextChild(
                    $w: wapi.Block,
                    onNoChild: (
                        $w: wapi.Block,
                    ) => void,
                    onChild: (
                        $w: wapi.Block,
                    ) => void,
                ) {
                    $w.line(($w) => {
                        $w.snippet(`if (children.length === 0) {`)
                        $w.indent(($w) => {
                            onNoChild($w)
                        })
                        $w.snippet(`} else {`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`nextChild = children[children.length - 1]`)
                            })
                            onChild($w)
                        })
                        $w.snippet(`}`)
                    })
                }
                function generateNode(
                    $: g.TNode2,
                    path: string,
                    $w: wapi.Block,
                    call: ($w: wapi.Line) => void
                ) {

                    $w.line(($w) => {

                        $w.snippet(`((`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`$: uast.TUntypedNode<Annotation>,`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`callback: ($: tast.TN${path}<Annotation>) => void,`)
                            })
                        })
                        $w.snippet(`): void => {`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`const node = $`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`const children: uast.TUntypedNode<Annotation>[] = []`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`$.children.forEach(($) => { children.push($) })`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`children.reverse()`)
                            })
                            switch ($.type[0]) {
                                case "composite":
                                    pr.cc($.type[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`let currentChild: uast.TUntypedNode<Annotation> | undefined`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`let nextChild: uast.TUntypedNode<Annotation> | undefined`)
                                        })
                                        generateValue(
                                            $,
                                            path,
                                            $w,
                                            ($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`callback({`)
                                                    $w.indent(($w) => {
                                                        $w.line(($w) => {
                                                            $w.snippet(`annotation: node.annotation,`)
                                                        })
                                                        $w.line(($w) => {
                                                            $w.snippet(`content: $,`)
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            }
                                        )
                                    })
                                    break
                                case "leaf":
                                    pr.cc($.type[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`callback(`)
                                            if ($.hasTextContent) {
                                                $w.snippet(`{`)
                                                $w.indent(($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`annotation: $.annotation,`)
                                                    })
                                                    $w.line(($w) => {
                                                        $w.snippet(`value: $.value`)
                                                    })
                                                })
                                                $w.snippet(`}`)
                                            } else {
                                                $w.snippet(`$.annotation`)
                                            }
                                            $w.snippet(`)`)
                                        })
                                    })
                                    break
                                default:
                                    pr.au($.type[0])
                            }
                            $w.line(($w) => {
                                $w.snippet(`if (children.length > 0) {`)
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`$x.reportUnexpectedChild({`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`path: "${path}",`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`child: children[children.length - 1],`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`expected: null,`)
                                            })
                                        })
                                        $w.snippet(`})`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`return`)
                                    })
                                })
                                $w.snippet(`}`)
                            })
                        })
                        $w.snippet(`})`)
                        call($w)
                    })

                }
                function generateValue(
                    $: g.TValue,
                    path: string,
                    $w: wapi.Block,
                    endCallback: (
                        $w: wapi.Block,
                    ) => void,
                ) {
                    const symbol = $
                    if ($.cardinality === undefined) {
                        generateValueType(
                            symbol.type,
                            path,
                            $w,
                            endCallback,
                        )
                    } else {
                        switch ($.cardinality[0]) {
                            case "array":
                                pr.cc($.cardinality[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`const elements: tast.TVT${path}<Annotation>[] = []`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`const processElement = () => {`)
                                        $w.indent(($w) => {
                                            generateValueType(
                                                symbol.type,
                                                path,
                                                $w,
                                                ($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`elements.push($)`)
                                                    })
                                                },
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`arrayLoop: while (true) {`)
                                        $w.indent(($w) => {
                                            nextChild(
                                                $w,
                                                ($w) => {
    
                                                    $w.line(($w) => {
                                                        $w.snippet(`break arrayLoop`)
                                                    })
                                                },
                                                ($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`switch (nextChild.kindName) {`)
                                                        $w.indent(($w) => {
    
                                                            const possibleTokens: { [key: string]: null } = {}
                                                            findNextPossibleTokensInSymbolType(
                                                                symbol.type,
                                                                ($) => {
                                                                    // if (possibleTokens[$] !== undefined) {
                                                                    //     throw new Error("UNEXPECTED")
    
                                                                    // }
                                                                    possibleTokens[$] = null
                                                                },
                                                                () => {
                                                                    throw new Error("IMPLEMENT ME 4")
                                                                }
                                                            )
                                                            pr.Objectkeys(possibleTokens).forEach((key) => {
                                                                $w.line(($w) => {
                                                                    $w.snippet(`case "${key}":`)
                                                                    $w.indent(($w) => {
                                                                        $w.line(($w) => {
                                                                            $w.snippet(`processElement()`)
                                                                        })
                                                                        $w.line(($w) => {
                                                                            $w.snippet(`break`)
                                                                        })
                                                                    })
                                                                })
                                                            })
    
                                                            $w.line(($w) => {
                                                                $w.snippet(`default: break arrayLoop`)
                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                }
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`pr.cc(elements, ($) => {`)
                                        $w.indent(($w) => {
                                            endCallback($w)
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            case "one":
                                pr.cc($.cardinality[1], ($) => {
                                    generateValueType(
                                        symbol.type,
                                        path,
                                        $w,
                                        endCallback,
                                    )
                                })
                                break
                            case "optional":
                                pr.cc($.cardinality[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`let optional: null | tast.TVT${path}<Annotation> = null`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`const setOptional = () => {`)
                                        $w.indent(($w) => {
                                            generateValueType(
                                                symbol.type,
                                                path,
                                                $w,
                                                ($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`optional = $`)
                                                    })
                                                },
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })
                                    // $w.line(($w) => {
                                    //     $w.snippet(`const processNotSet = () => {`)
                                    //     $w.indent(($w) => {
                                    //         $w.line(($w) => {
                                    //             $w.snippet(`pr.cc(null, ($) => {`)
                                    //             $w.indent(($w) => {
                                    //                 generateType(
                                    //                     $w,
                                    //                     ($w) => {
                                    //                         endCallback($w)
                                    //                     },
                                    //                 )
                                    //             })
                                    //             $w.snippet(`})`)
                                    //         })
                                    //     })
                                    //     $w.snippet(`}`)
                                    // })
                                    nextChild(
                                        $w,
                                        ($w) => {
                                            //
                                        },
                                        ($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`switch (nextChild.kindName) {`)
                                                $w.indent(($w) => {
    
                                                    const possibleTokens: { [key: string]: null } = {}
                                                    findNextPossibleTokensInSymbolType(
                                                        symbol.type,
                                                        ($) => {
                                                            // if (possibleTokens[$] !== undefined) {
                                                            //     throw new Error("UNEXPECTED")
    
                                                            // }
                                                            possibleTokens[$] = null
                                                        },
                                                        () => {
                                                            throw new Error("IMPLEMENT ME 5")
                                                        }
                                                    )
                                                    pr.Objectkeys(possibleTokens).forEach((key) => {
                                                        $w.line(($w) => {
                                                            $w.snippet(`case "${key}":`)
                                                            $w.indent(($w) => {
                                                                $w.line(($w) => {
                                                                    $w.snippet(`setOptional()`)
                                                                })
                                                                $w.line(($w) => {
                                                                    $w.snippet(`break`)
                                                                })
                                                            })
                                                        })
                                                    })
    
                                                    // $w.line(($w) => {
                                                    //     $w.snippet(`default: processNotSet()`)
                                                    // })
                                                })
                                                $w.snippet(`}`)
                                            })
                                        }
                                    )
                                    $w.line(($w) => {
                                        $w.snippet(`pr.cc(optional, ($) => {`)
                                        $w.indent(($w) => {
                                            endCallback($w)
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            default:
                                pr.au($.cardinality[0])
                        }

                    }
                }
                function generateValueType(
                    $: g.TValueType,
                    path: string,
                    $w: wapi.Block,
                    endCallback: (
                        $w: wapi.Block,
                    ) => void,
                ) {
                    switch ($[0]) {
                        case "choice":
                            pr.cc($[1], ($) => {
                                const possibleTokens: { [key: string]: string } = {}
                                pr.Objectkeys($.options).forEach((key) => {
                                    const option = $.options[key]
                                    findNextPossibleTokensInSymbolType(
                                        option.type,
                                        ($) => {
                                            if (possibleTokens[$] !== undefined) {
                                                throw new Error("UNEXPECTED")

                                            }
                                            possibleTokens[$] = key
                                        },
                                        () => {
                                            throw new Error("IMPLEMENT ME 1")
                                        }
                                    )
                                })
                                $w.line(($w) => {
                                    $w.snippet(`const choiceEnd_${path} = ($: tast.TVT${path}<Annotation>) => {`)
                                    $w.indent(($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`}`)
                                })
                                nextChild(
                                    $w,
                                    ($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`$x.reportMissingToken({`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`parentAnnotation: node.annotation,`)
                                                })
                                                $w.line(($w) => {
                                                    $w.snippet(`path: "${path}",`)
                                                })
                                                $w.line(($w) => {
                                                    $w.snippet(`kindNameOptions: [${pr.Objectkeys(possibleTokens).map(($) => `"${$}"`).join(", ")}],`)
                                                })
                                            })
                                            $w.snippet(`})`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`return`)
                                        })
                                    },
                                    ($w) => {
                                        pr.Objectkeys($.options).forEach((key) => {
                                            const option = $.options[key]
                                            $w.line(($w) => {
                                                $w.snippet(`const choose_${key} = () => {`)
                                                $w.indent(($w) => {

                                                    generateValue(
                                                        option,
                                                        `${path}_${key}`,
                                                        $w,
                                                        ($w) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`choiceEnd_${path}(["${key}", $])`)
                                                            })
                                                        }
                                                    )
                                                })
                                                $w.snippet(`}`)
                                            })
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`switch (nextChild.kindName) {`)
                                            $w.indent(($w) => {
                                                const possibleTokens: { [key: string]: string } = {}
                                                pr.Objectkeys($.options).forEach((key) => {
                                                    const option = $.options[key]
                                                    findNextPossibleTokensInSymbolType(
                                                        option.type,
                                                        ($) => {
                                                            if (possibleTokens[$] !== undefined) {
                                                                throw new Error("UNEXPECTED")

                                                            }
                                                            possibleTokens[$] = key
                                                        },
                                                        () => {
                                                            throw new Error("IMPLEMENT ME 2")
                                                        }
                                                    )
                                                })
                                                pr.Objectkeys(possibleTokens).forEach((key) => {
                                                    const optionKey = possibleTokens[key]
                                                    $w.line(($w) => {
                                                        $w.snippet(`case "${key}": {`)
                                                        $w.indent(($w) => {

                                                            $w.line(($w) => {
                                                                $w.snippet(`choose_${optionKey}()`)
                                                            })
                                                            $w.line(($w) => {
                                                                $w.snippet(`break`)
                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.line(($w) => {
                                                    $w.snippet(`default: {`)
                                                    $w.indent(($w) => {
                                                        $w.line(($w) => {
                                                            $w.snippet(`$x.reportUnexpectedChild({`)
                                                            $w.indent(($w) => {
                                                                $w.line(($w) => {
                                                                    $w.snippet(`path: "${path}",`)
                                                                })
                                                                $w.line(($w) => {
                                                                    $w.snippet(`child: nextChild,`)
                                                                })
                                                                $w.line(($w) => {
                                                                    $w.snippet(`expected: [${pr.Objectkeys(possibleTokens).map(($) => `"${$}"`).join(", ")}],`)
                                                                })
                                                            })
                                                            $w.snippet(`})`)
                                                        })
                                                    })
                                                    $w.snippet(`}`)

                                                })
                                            })
                                            $w.snippet(`}`)
                                        })
                                    }
                                )
                            })
                            break
                        case "reference":
                            pr.cc($[1], ($) => {
                                $w.line(($w) => {
                                    $w.snippet(`G${$.name}(node, children, ($) => {`)
                                    $w.indent(($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`})`)
                                })
                            })
                            break
                        case "sequence":
                            pr.cc($[1], ($) => {
                                $w.line(($w) => {
                                    $w.snippet(`const sequenceEnd = ($: tast.TVT${path}<Annotation>) => {`)
                                    $w.indent(($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`}`)
                                })
                                function generateElements(
                                    elements: g.TSequenceElement[],
                                    $w: wapi.Block,
                                ) {
                                    const element = elements.pop()
                                    if (element !== undefined) {
                                        generateValue(
                                            element.value,
                                            `${path}_${element.name}`,
                                            $w,
                                            ($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`const _${element.name} = $`)
                                                })
                                                generateElements(
                                                    elements,
                                                    $w,
                                                )
                                            }
                                        )
                                    } else {
                                        $w.line(($w) => {
                                            $w.snippet(`sequenceEnd({`)
                                            $w.indent(($w) => {
                                                $.elements.forEach(($) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`"${$.name}": _${$.name},`)
                                                    })
                                                })
                                            })
                                            $w.snippet(`})`)
                                        })
                                    }
                                }
                                generateElements(
                                    $.elements.slice().reverse(),
                                    $w,
                                )
                            })
                            break
                        case "node":
                            pr.cc($[1], ($) => {
                                $w.line(($w) => {
                                    $w.snippet(`currentChild = children.pop()`)
                                })
                                $w.line(($w) => {
                                    $w.snippet(`if (currentChild === undefined) {`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`$x.reportMissingToken({`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`parentAnnotation: node.annotation,`)
                                                })
                                                $w.line(($w) => {
                                                    $w.snippet(`path: "${path}",`)
                                                })
                                                $w.line(($w) => {
                                                    $w.snippet(`kindNameOptions: [ "${$.name}"],`)
                                                })
                                            })
                                            $w.snippet(`})`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`return`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                                $w.line(($w) => {
                                    $w.snippet(`if (currentChild.kindName !== "${$.name}") {`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`$x.reportUnexpectedChild({`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`path: "${path}",`)
                                                })
                                                $w.line(($w) => {
                                                    $w.snippet(`child: currentChild,`)
                                                })
                                                $w.line(($w) => {
                                                    $w.snippet(`expected: ["${$.name}"],`)
                                                })
                                            })
                                            $w.snippet(`})`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`return`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                                generateNode(
                                    $,
                                    `${path}$`,
                                    $w,
                                    ($w) => {
                                        $w.snippet(`(`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`currentChild,`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`($) => {`)
                                                $w.indent(($w) => {
                                                    endCallback($w)
                                                })
                                                $w.snippet(`}`)
                                            })
                                        })
                                        $w.snippet(`)`)
                                    }
                                )
                            })
                            break
                        default:
                            pr.au($[0])
                    }
                }
                pr.forEachEntry(grammar.globalValueTypes, ($, key) => {

                    $w.line(($w) => {

                        $w.snippet(`function G${key}(`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`node: uast.TUntypedNode<Annotation>,`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`children: uast.TUntypedNode<Annotation>[],`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`callback: ($: tast.TG${key}<Annotation>) => void,`)
                            })
                        })
                        $w.snippet(`): void {`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`let currentChild: uast.TUntypedNode<Annotation> | undefined`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`let nextChild: uast.TUntypedNode<Annotation> | undefined`)
                            })
                            generateValueType(
                                $,
                                `G${key}`,
                                $w,
                                ($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`callback($)`)
                                    })
                                }
                            )
                        })
                        $w.snippet(`}`)
                    })
                })

                $w.line(($w) => {
                    $w.snippet(`if ($.kindName !== "${grammar.root.name}") {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$x.reportUnexpectedRoot({`)
                            $w.indent(($w) => {
                                $w.line(($w) => {
                                    $w.snippet(`root: $,`)
                                })
                            })
                            $w.snippet(`})`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`return`)
                        })
                    })
                    $w.snippet(`} else {`)
                    $w.indent(($w) => {
                        generateNode(
                            grammar.root,
                            "root",
                            $w,
                            ($w) => {

                                $w.snippet(`(`)
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`$,`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`($) => {`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`$x.callback($)`)
                                            })
                                        })
                                        $w.snippet(`},`)
                                    })
                                })
                                $w.snippet(`)`)
                            },
                        )
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`}`)
        })

    })
}
