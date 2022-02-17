import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"

export function generateVisitor(
    $: g.TGrammar,
    $i: {
        $w: wapi.Block,
        log: (str: string) => void,
    }
) {
    pr.cc($i.$w, ($w) => {

        $w.line(($w) => {
            $w.snippet(`import * as pr from "pareto-runtime"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as api from "../../interface/types/ts_api"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as foox from "../../interface/interfaces/visitor"`)
        })
    
        $w.line(($w) => { })
        $w.line(($w) => {
            $w.snippet(`export function visit<Annotation>(`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`$: api.TNroot<Annotation>,`)
                })
                $w.line(($w) => {
                    $w.snippet(`foo: foox.IVisitor<Annotation>,`)
                })
            })
            $w.snippet(`): void {`)
            $w.indent(($w) => {
    
                function generateNode(
                    $: g.TNode2,
                    $w: wapi.Block,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    $w.line(($w) => {
    
                        $w.snippet(`((`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`$: api.TN${pathForCode}<Annotation>,`)
                            })
                        })
                        $w.snippet(`) => {`)
                        $w.indent(($w) => {
                            switch ($.type[0]) {
                                case "composite":
                                    pr.cc($.type[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`if (foo["${pathForReporting}"] !== undefined) { foo["${pathForReporting}"].begin($) }`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`pr.cc($.content, ($) => {`)
                                            $w.indent(($w) => {
                                                generateValue(
                                                    $,
                                                    $w,
                                                    pathForCode,
                                                    pathForReporting,
                                                )
                                            })
                                            $w.snippet(`})`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`if (foo["${pathForReporting}"] !== undefined) { foo["${pathForReporting}"].end($) }`)
                                        })
                                    })
                                    break
                                case "leaf":
                                    pr.cc($.type[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`if (foo["${pathForReporting}"] !== undefined) { foo["${pathForReporting}"]($) }`)
                                        })
                                    })
                                    break
                                default:
                                    pr.au($.type[0])
                            }
                        })
                        $w.snippet(`})($)`)
                    })
                }
                function generateValueType(
                    $: g.TValueType,
                    $w: wapi.Block,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    switch ($[0]) {
                        case "choice":
                            pr.cc($[1], ($) => {
                                $w.line(($w) => {
    
                                    $w.snippet(`switch ($[0]) {`)
                                    $w.indent(($w) => {
                                        pr.Objectkeys($.options).forEach((key) => {
                                            const option = $.options[key]
                                            $w.line(($w) => {
                                                $w.snippet(`case "${key}": {`)
                                                $w.indent(($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`pr.cc($[1], ($) => {`)
                                                        $w.indent(($w) => {
                                                            generateValue(
                                                                option,
                                                                $w,
                                                                `${pathForCode}_${key}`,
                                                                `${pathForReporting}/?${key}`,
                                                            )
                                                        })
                                                        $w.snippet(`})`)
                                                    })
                                                    $w.line(($w) => {
                                                        $w.snippet(`break`)
                                                    })
                                                })
                                                $w.snippet(`}`)
                                            })
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`default: pr.au($[0])`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                            })
                            break
                        case "reference":
                            pr.cc($[1], ($) => {
    
                                $w.line(($w) => {
                                    $w.snippet(`X_${$.name}($)`)
                                })
                            })
                            break
                        case "sequence":
                            pr.cc($[1], ($) => {
                                $.elements.forEach(($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`pr.cc($["${$.name}"], ($) => {`)
                                        $w.indent(($w) => {
                                            generateValue(
                                                $.value,
                                                $w,
                                                `${pathForCode}_${$.name}`,
                                                `${pathForReporting}/.${$.name}`,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                            })
                            break
                        case "node":
                            pr.cc($[1], ($) => {
                                generateNode(
                                    $,
                                    $w,
                                    `${pathForCode}$`,
                                    `${pathForReporting}/*${$.name}`,
                                )
                            })
                            break
                        default:
                            pr.au($[0])
                    }
    
                }
                function generateValue(
                    $: g.TValue,
                    $w: wapi.Block,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    const symbol = $
                    if ($.cardinality === undefined) {
                        generateValueType(
                            symbol.type,
                            $w,
                            `${pathForCode}`,
                            `${pathForReporting}`,
                        )
                    } else {
                        switch ($.cardinality[0]) {
                            case "array":
                                pr.cc($.cardinality[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`$.forEach(($) => {`)
                                        $w.indent(($w) => {
                                            generateValueType(
                                                symbol.type,
                                                $w,
                                                `${pathForCode}`,
                                                `${pathForReporting}`,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            case "one":
                                pr.cc($.cardinality[1], ($) => {
                                    generateValueType(
                                        symbol.type,
                                        $w,
                                        `${pathForCode}`,
                                        `${pathForReporting}`,
                                    )
        
                                })
                                break
                            case "optional":
                                pr.cc($.cardinality[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`if ($ === null) {`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`//FIXME??`)
                                            })
                                        })
                                        $w.snippet(`} else {`)
                                        $w.indent(($w) => {
                                            generateValueType(
                                                symbol.type,
                                                $w,
                                                `${pathForCode}`,
                                                `${pathForReporting}`,
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })
                                })
                                break
                            default:
                                pr.au($.cardinality[0])
                        }

                    }
                }
                pr.forEachEntry($.globalValueTypes, ($, key) => {
                    $w.line(($w) => {
    
                        $w.snippet(`function X_${key}(`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`$: api.TG${key}<Annotation>,`)
                            })
                        })
                        $w.snippet(`) {`)
                        $w.indent(($w) => {
                            generateValueType(
                                $,
                                $w,
                                `G${key}`,
                                `$${key}`,
                            )
                        })
                        $w.snippet(`}`)
    
                    })
                })
    
                generateNode(
                    $.root,
                    $w,
                    "root",
                    "",
                )
    
            })
            $w.snippet(`}`)
        })
    })
}
