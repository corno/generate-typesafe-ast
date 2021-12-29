import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen/esc/interfaces/fountain-pen"

export function generateVisitorTemplate(
    grammar: g.Grammar,
    $w: wapi.Block,
    log: (str: string) => void,
) {

    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as api from "../../interface/types/ts_api.generated"`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`export type FOO<Annotation> = {`)
        $w.indent(($w) => {

            function generateNode(
                $: g.Node2,
                $w: wapi.Block,
                path: string,
            ) {

                switch ($.type[0]) {
                    case "composite":
                        pr.cc($.type[1], ($) => {
                            generateValue(
                                $,
                                $w,
                                path,
                            )
                        })
                        break
                    case "leaf":
                        pr.cc($.type[1], ($) => {
                        })
                        break
                    default:
                        pr.au($.type[0])
                }
                $w.line(($w) => {
                    $w.snippet(`"${path}"?: `)
                    switch ($.type[0]) {
                        case "composite":
                            pr.cc($.type[1], ($) => {
                                $w.snippet(`{`)
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`begin: ($: api.N${path}<Annotation>) => void,`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`end: ($: api.N${path}<Annotation>) => void,`)
                                    })
                                })
                                $w.snippet(`}`)
                            })
                            break
                        case "leaf":
                            pr.cc($.type[1], ($) => {
                                $w.snippet(`($: api.N${path}<Annotation>) => void`)
                            })
                            break
                        default:
                            pr.au($.type[0])
                    }
                })
            }
            function generateValueType(
                $: g.ValueType,
                $w: wapi.Block,
                path: string,
            ) {
                switch ($[0]) {
                    case "choice":
                        pr.cc($[1], ($) => {
                            pr.Objectkeys($.options).forEach((key) => {
                                const option = $.options[key]
                                generateValue(
                                    option,
                                    $w,
                                    `${path}_${key}`
                                )
                            })
                        })
                        break
                    case "reference":
                        pr.cc($[1], ($) => {

                        })
                        break
                    case "sequence":
                        pr.cc($[1], ($) => {
                            $.elements.forEach(($) => {
                                generateValue(
                                    $.value,
                                    $w,
                                    `${path}_${$.name}`
                                )
                            })
                        })
                        break
                    case "node":
                        pr.cc($[1], ($) => {
                            generateNode(
                                $,
                                $w,
                                `${path}$`
                            )
                        })
                        break
                    default:
                        pr.au($[0])
                }

            }
            function generateValue(
                $: g.Value,
                $w: wapi.Block,
                path: string,
            ) {
                const symbol = $
                generateValueType(
                    symbol.type,
                    $w,
                    path,
                )
            }
            pr.Objectkeys(grammar.globalValueTypes).forEach((key) => {
                const $ = grammar.globalValueTypes[key]
                generateValueType(
                    $,
                    $w,
                    `G${key}`,
                )
            })

            generateNode(
                grammar.root,
                $w,
                "root",
            )
        })
        $w.snippet(`}`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`export const foo: FOO<string> = {`)
        $w.indent(($w) => {
            function generateNode(
                $: g.Node2,
                $w: wapi.Block,
                path: string,
            ) {
                switch ($.type[0]) {
                    case "composite":
                        pr.cc($.type[1], ($) => {
                            generateValue(
                                $,
                                $w,
                                path,
                            )
                        })
                        break
                    case "leaf":
                        pr.cc($.type[1], ($) => {
                        })
                        break
                    default:
                        pr.au($.type[0])
                }
                $w.line(($w) => {
                    $w.snippet(`"${path}": `)
                    switch ($.type[0]) {
                        case "composite":
                            pr.cc($.type[1], ($) => {
                                $w.snippet(`{`)
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`begin: ($) => { console.log("${path} begin") },`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`end: ($) => { console.log("${path} end") },`)
                                    })
                                })
                                $w.snippet(`},`)
                            })
                            break
                        case "leaf":
                            pr.cc($.type[1], ($) => {
                                $w.snippet(`($) => { console.log("${path}") },`)
                            })
                            break
                        default:
                            pr.au($.type[0])
                    }
                })

            }
            function generateValueType(
                $: g.ValueType,
                $w: wapi.Block,
                path: string,
            ) {
                switch ($[0]) {
                    case "choice":
                        pr.cc($[1], ($) => {
                            pr.Objectkeys($.options).forEach((key) => {
                                const option = $.options[key]
                                generateValue(
                                    option,
                                    $w,
                                    `${path}_${key}`
                                )
                            })
                        })
                        break
                    case "reference":
                        pr.cc($[1], ($) => {

                        })
                        break
                    case "sequence":
                        pr.cc($[1], ($) => {
                            $.elements.forEach(($) => {
                                generateValue(
                                    $.value,
                                    $w,
                                    `${path}_${$.name}`
                                )
                            })
                        })
                        break
                    case "node":
                        pr.cc($[1], ($) => {
                            generateNode(
                                $,
                                $w,
                                `${path}$`
                            )
                        })
                        break
                    default:
                        pr.au($[0])
                }

            }
            function generateValue(
                $: g.Value,
                $w: wapi.Block,
                path: string,
            ) {
                const symbol = $
                generateValueType(
                    symbol.type,
                    $w,
                    path,
                )
            }
            pr.Objectkeys(grammar.globalValueTypes).forEach((key) => {
                const $ = grammar.globalValueTypes[key]
                generateValueType(
                    $,
                    $w,
                    `G${key}`,
                )
            })

            generateNode(
                grammar.root,
                $w,
                "root",
            )


        })
        $w.snippet(`}`)
    })

    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`export function visit<Annotation>(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`$: api.Nroot<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`foo: FOO<Annotation>,`)
            })
        })
        $w.snippet(`): void {`)
        $w.indent(($w) => {

            function generateNode(
                $: g.Node2,
                $w: wapi.Block,
                path: string,
            ) {
                $w.line(($w) => {

                    $w.snippet(`((`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: api.N${path}<Annotation>,`)
                        })
                    })
                    $w.snippet(`) => {`)
                    $w.indent(($w) => {
                        switch ($.type[0]) {
                            case "composite":
                                pr.cc($.type[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`if (foo["${path}"] !== undefined) { foo["${path}"].begin($) }`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`pr.cc($.content, ($) => {`)
                                        $w.indent(($w) => {
                                            generateValue(
                                                $,
                                                $w,
                                                path,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`if (foo["${path}"] !== undefined) { foo["${path}"].end($) }`)
                                    })
                                })
                                break
                            case "leaf":
                                pr.cc($.type[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`if (foo["${path}"] !== undefined) { foo["${path}"]($) }`)
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
                $: g.ValueType,
                $w: wapi.Block,
                path: string,
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
                                                            `${path}_${key}`,
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
                                            `${path}_${$.name}`,
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
                                `${path}$`
                            )
                        })
                        break
                    default:
                        pr.au($[0])
                }

            }
            function generateValue(
                $: g.Value,
                $w: wapi.Block,
                path: string,
            ) {
                const symbol = $
                switch ($.cardinality[0]) {
                    case "array":
                        pr.cc($.cardinality[1], ($) => {
                            $w.line(($w) => {
                                $w.snippet(`$.forEach(($) => {`)
                                $w.indent(($w) => {
                                    generateValueType(
                                        symbol.type,
                                        $w,
                                        `${path}`
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
                                path,
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
                                        path,
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
            pr.forEachEntry(grammar.globalValueTypes, ($, key) => {
                $w.line(($w) => {

                    $w.snippet(`function X_${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: api.G${key}<Annotation>,`)
                        })
                    })
                    $w.snippet(`) {`)
                    $w.indent(($w) => {
                        generateValueType(
                            $,
                            $w,
                            `G${key}`
                        )
                    })
                    $w.snippet(`}`)

                })
            })

            generateNode(
                grammar.root,
                $w,
                "root",
            )

        })
        $w.snippet(`}`)
    })
}
