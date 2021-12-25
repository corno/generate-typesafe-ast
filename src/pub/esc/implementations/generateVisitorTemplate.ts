import * as pr from "pareto-runtime"

import * as g from "../interfaces"
import * as wapi from "fountain-pen/interfaces/fountain-pen"

export function generateVisitorTemplate(
    grammar: g.Grammar,
    $w: wapi.Block,
    log: (str: string) => void,
) {

    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as api from "../interface/ts_api.generated"`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`export type FOO<Annotation> = {`)
        $w.indent(($w) => {
            pr.Objectkeys(grammar.nodes).forEach((key) => {
                const token = grammar.nodes[key]
                $w.line(($w) => {
                    $w.snippet(`"${key}"?: `)
                    switch (token.type[0]) {
                        case "composite":
                            pr.cc(token.type[1], ($) => {
                                $w.snippet(`{`)
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`begin: ($: api.T${key}<Annotation>) => void,`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`end: ($: api.T${key}<Annotation>) => void,`)
                                    })
                                })
                                $w.snippet(`}`)
                            })
                            break
                        case "leaf":
                            pr.cc(token.type[1], ($) => {
                                $w.snippet(`($: api.T${key}<Annotation>) => void`)
                            })
                            break
                        default:
                            pr.au(token.type[0])
                    }
                })
            })
        })
        $w.snippet(`}`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`export const foo: FOO<string> = {`)
        $w.indent(($w) => {
            pr.Objectkeys(grammar.nodes).forEach((key) => {
                const token = grammar.nodes[key]
                $w.line(($w) => {
                    $w.snippet(`"${key}": `)
                    switch (token.type[0]) {
                        case "composite":
                            pr.cc(token.type[1], ($) => {
                                $w.snippet(`{`)
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`begin: ($) => { console.log("${key} begin") },`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`end: ($) => { console.log("${key} end") },`)
                                    })
                                })
                                $w.snippet(`},`)
                            })
                            break
                        case "leaf":
                            pr.cc(token.type[1], ($) => {
                                $w.snippet(`($) => { console.log("${key}") },`)
                            })
                            break
                        default:
                            pr.au(token.type[0])
                    }
                })
            })
        })
        $w.snippet(`}`)
    })

    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`export function visit<Annotation>(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`$: api.T${grammar.rootNode}<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`foo: FOO<Annotation>,`)
            })
        })
        $w.snippet(`): void {`)
        $w.indent(($w) => {

            function doSymbolType(
                $: g.ValueType,
                $w: wapi.Block,
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
                                                        generateSymbol(
                                                            option,
                                                            $w,
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
                                        generateSymbol(
                                            $.value,
                                            $w,
                                        )
                                    })
                                    $w.snippet(`})`)
                                })
                            })
                        })
                        break
                    case "node":
                        pr.cc($[1], ($) => {
                            $w.line(($w) => {
                                $w.snippet(`_${$.name}($)`)
                            })
                        })
                        break
                    default:
                        pr.au($[0])
                }

            }
            function generateSymbol(
                $: g.Value,
                $w: wapi.Block
            ) {
                const symbol = $
                switch ($.cardinality[0]) {
                    case "array":
                        pr.cc($.cardinality[1], ($) => {
                            $w.line(($w) => {
                                $w.snippet(`$.forEach(($) => {`)
                                $w.indent(($w) => {
                                    doSymbolType(
                                        symbol.type,
                                        $w,
                                    )
                                })
                                $w.snippet(`})`)
                            })
                        })
                        break
                    case "one":
                        pr.cc($.cardinality[1], ($) => {
                            doSymbolType(
                                symbol.type,
                                $w,
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
                                    doSymbolType(
                                        symbol.type,
                                        $w,
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
            g.forEachEntry(grammar.valueTypes, ($, key) => {
                $w.line(($w) => {

                    $w.snippet(`function X_${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: api.G${key}<Annotation>,`)
                        })
                    })
                    $w.snippet(`) {`)
                    $w.indent(($w) => {
                        doSymbolType(
                            $,
                            $w,
                        )
                    })
                    $w.snippet(`}`)

                })
            })

            g.forEachEntry(grammar.nodes, ($, key) => {
                $w.line(($w) => {

                    $w.snippet(`function _${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: api.T${key}<Annotation>,`)
                        })
                    })
                    $w.snippet(`) {`)
                    $w.indent(($w) => {
                        switch ($.type[0]) {
                            case "composite":
                                pr.cc($.type[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`if (foo["${key}"] !== undefined) { foo["${key}"].begin($) }`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`pr.cc($.content, ($) => {`)
                                        $w.indent(($w) => {
                                            generateSymbol(
                                                $,
                                                $w,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`if (foo["${key}"] !== undefined) { foo["${key}"].end($) }`)
                                    })
                                })
                                break
                            case "leaf":
                                pr.cc($.type[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`if (foo["${key}"] !== undefined) { foo["${key}"]($) }`)
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
                $w.snippet(`return _${grammar.rootNode}($)`)
            })
        })
        $w.snippet(`}`)
    })
}
