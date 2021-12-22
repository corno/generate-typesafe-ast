import * as pr from "pareto-runtime"

import * as g from "../interfaces"
import * as wapi from "fountain-pen/interfaces/fountain-pen"

export function generateParser(
    grammar: g.Grammar,
    $w: wapi.Block,
    log: (str: string) => void,
) {
    function findNextPossibleTokensInSymbolType(
        $: g.ValueType,
        onToken: (token: string) => void,
        onEnd: () => void,
    ) {
        switch ($[0]) {
            case "choice":
                pr.cc($[1], ($) => {
                    pr.Objectkeys($.options).forEach((key) => {
                        const option = $.options[key]
                        findNextPossibleTokensInSymbolType(
                            option.type,
                            onToken,
                            onEnd
                        )
                    })
                })
                break
            case "reference":
                pr.cc($[1], ($) => {
                    const x = grammar.valueTypes[$.name]
                    if (x === undefined) {
                        throw new Error("HMMM")
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
    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as tast from "../../interfaces/typedAST"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as uast from "../../interfaces/untypedAST"`)
    })

    $w.line(($w) => { })

    $w.line(($w) => {
        $w.snippet(`export function parse<Annotation>(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`$: uast.Node<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`callback: ($: tast.T${grammar.rootNode}<Annotation>) => void,`)
            })
            $w.line(($w) => {
                $w.snippet(`reportUnexpectedRoot: ($: { root: uast.Node<Annotation>, }) => void,`)
            })
            $w.line(($w) => {
                $w.snippet(`reportUnexpectedChild: ($: { path: string, child: uast.Node<Annotation>, }) => void,`)
            })
            $w.line(($w) => {
                $w.snippet(`reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,`)
            })
        })
        $w.snippet(`): void {`)
        $w.indent(($w) => {

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
            function generateSymbol(
                $: g.Value,
                path: string,
                $w: wapi.Block,
                endCallback: (
                    $w: wapi.Block,
                ) => void,
            ) {
                const symbol = $
                switch ($.cardinality[0]) {
                    case "array":
                        pr.cc($.cardinality[1], ($) => {
                            $w.line(($w) => {
                                $w.snippet(`const elements: tast.S${path}<Annotation> = []`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`const processElement = () => {`)
                                $w.indent(($w) => {
                                    generateSymbolType(
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
                            generateSymbolType(
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
                                $w.snippet(`let optional: tast.S${path}<Annotation> = null`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`const setOptional = () => {`)
                                $w.indent(($w) => {
                                    generateSymbolType(
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
            function generateSymbolType(
                $: g.ValueType,
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
                                $w.snippet(`const choiceEnd_${path} = ($: tast.X${path}<Annotation>) => {`)
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
                                        $w.snippet(`reportMissingToken({`)
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

                                                generateSymbol(
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
                                                        $w.snippet(`reportUnexpectedChild({`)
                                                        $w.indent(($w) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`path: "${path}",`)
                                                            })
                                                            $w.line(($w) => {
                                                                $w.snippet(`child: nextChild,`)
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
                                $w.snippet(`X_${$.name}(node, children, ($) => {`)
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
                                $w.snippet(`const sequenceEnd = ($: tast.X${path}<Annotation>) => {`)
                                $w.indent(($w) => {
                                    endCallback(
                                        $w,
                                    )
                                })
                                $w.snippet(`}`)
                            })
                            function generateElements(
                                elements: g.SequenceElement[],
                                $w: wapi.Block,
                            ) {
                                const element = elements.pop()
                                if (element !== undefined) {
                                    generateSymbol(
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
                                        $w.snippet(`reportMissingToken({`)
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
                                        $w.snippet(`reportUnexpectedChild({`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`path: "${path}",`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`child: currentChild,`)
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
                                $w.snippet(`${$.name}(`)
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
                            })
                        })
                        break
                    default:
                        pr.au($[0])
                }
            }
            g.forEachEntry(grammar.valueTypes, ($, key) => {

                $w.line(($w) => {

                    $w.snippet(`function X_${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`node: uast.Node<Annotation>,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`children: uast.Node<Annotation>[],`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`callback: ($: tast.G${key}<Annotation>) => void,`)
                        })
                    })
                    $w.snippet(`): void {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`let currentChild: uast.Node<Annotation> | undefined`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`let nextChild: uast.Node<Annotation> | undefined`)
                        })
                        generateSymbolType(
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

            g.forEachEntry(grammar.nodes, ($, key) => {
                const tokenName = key

                $w.line(($w) => {

                    $w.snippet(`function ${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: uast.Node<Annotation>,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`callback: ($: tast.T${key}<Annotation>) => void,`)
                        })
                    })
                    $w.snippet(`): void {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`const node = $`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`const children: uast.Node<Annotation>[] = []`)
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
                                        $w.snippet(`let currentChild: uast.Node<Annotation> | undefined`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`let nextChild: uast.Node<Annotation> | undefined`)
                                    })
                                    generateSymbol(
                                        $,
                                        `T${key}`,
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
                                    $w.line(($w) => {
                                        $w.snippet(`if (children.length > 0) {`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`reportUnexpectedChild({`)
                                                $w.indent(($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`path: "${key}",`)
                                                    })
                                                    $w.line(($w) => {
                                                        $w.snippet(`child: children[0],`)
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                        })
                                        $w.snippet(`}`)
                                    })
                                    // $w.line(($w) => {
                                    //     $w.snippet(`callback({`)
                                    //     $w.indent(($w) => {
                                    //         $w.line(($w) => {
                                    //             $w.snippet(`annotation: $.annotation,`)
                                    //         })
                                    //         $w.line(($w) => {
                                    //             $w.snippet(`content: `)
                                    //             $w.snippet(`FIXME`)
                                    //         })
                                    //     })
                                    //     $w.snippet(`})`)
                                    // })
                                    $w.line(($w) => {
                                        $w.snippet(`return`)
                                    })
                                })
                                break
                            case "leaf":
                                pr.cc($.type[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`if (children.length > 0) {`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`reportUnexpectedChild({`)
                                                $w.indent(($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`path: "${key}",`)
                                                    })
                                                    $w.line(($w) => {
                                                        $w.snippet(`child: children[0],`)
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                        })
                                        $w.snippet(`}`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`callback({`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`annotation: $.annotation,`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`content: `)
                                                if ($.hasTextContent) {
                                                    $w.snippet(`$.value`)
                                                } else {
                                                    $w.snippet(`null`)
                                                }
                                            })
                                        })
                                        $w.snippet(`})`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`return`)
                                    })
                                })
                                break
                            default:
                                pr.au($.type[0])
                        }
                    })
                    $w.snippet(`}`)
                })
            })


            $w.line(($w) => {
                $w.snippet(`if ($.kindName !== "${grammar.rootNode}") {`)
                $w.indent(($w) => {
                    $w.line(($w) => {
                        $w.snippet(`reportUnexpectedRoot({`)
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
                    $w.line(($w) => {
                        $w.snippet(`${grammar.rootNode}(`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`$,`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`($) => {`)
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`callback($)`)
                                    })
                                })
                                $w.snippet(`},`)
                            })
                        })
                        $w.snippet(`)`)
                    })
                    $w.line(($w) => {
                        $w.snippet(`return`)
                    })
                })
                $w.snippet(`}`)
            })
        })
        $w.snippet(`}`)
    })
}
