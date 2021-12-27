import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen/interfaces/fountain-pen"

export function generateAPI(
    grammar: g.Grammar,
    $w: wapi.Block,
    log: (str: string) => void,
) {
    function generateTypesForNode(
        $: g.Node2,
        $w: wapi.Block,
        path: string
    ) {
        switch ($.type[0]) {
            case "composite":
                pr.cc($.type[1], ($) => {
                    generateTypesForValue(
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
            $w.snippet(``)
        })
        $w.line(($w) => {
            $w.snippet(`export type N${path}<Annotation> = {`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`annotation: Annotation,`)
                })
                $w.line(($w) => {
                    $w.snippet(`content: `)
                    switch ($.type[0]) {
                        case "composite":
                            pr.cc($.type[1], ($) => {
                                $w.snippet(`V${path}<Annotation>`)
                            })
                            break
                        case "leaf":
                            pr.cc($.type[1], ($) => {
                                if ($.hasTextContent) {
                                    $w.snippet(`string`)
                                } else {
                                    $w.snippet(`null`)
                                }
                            })
                            break
                        default:
                            pr.au($.type[0])
                    }
                    $w.snippet(`,`)
                })
            })
            $w.snippet(`}`)
        })

    }
    function generateTypesForValueType(
        $: g.ValueType,
        $w: wapi.Block,
        path: string,
    ) {
        switch ($[0]) {
            case "choice":
                pr.cc($[1], ($) => {
                    pr.Objectkeys($.options).forEach((key) => {
                        const option = $.options[key]
                        generateTypesForValue(
                            option,
                            $w,
                            path + "_" + key
                        )
                    })
                })
                break
            case "reference":
                pr.cc($[1], ($) => {
                    //
                })
                break
            case "sequence":
                pr.cc($[1], ($) => {
                    $.elements.forEach(($) => {
                        generateTypesForValue(
                            $.value,
                            $w,
                            path + "_" + $.name,
                        )
                    })
                })
                break
            case "node":
                pr.cc($[1], ($) => {
                    generateTypesForNode(
                        $,
                        $w,
                        `${path}$`,
                    )
                })
                break
            default:
                pr.au($[0])
        }
        $w.line(($w) => {
            $w.snippet(`export type VT${path}<Annotation> = `)

            switch ($[0]) {
                case "choice":
                    pr.cc($[1], ($) => {

                        $w.indent(($w) => {
                            pr.Objectkeys($.options).forEach((key) => {
                                const option = $.options[key]
                                $w.line(($w) => {
                                    $w.snippet(`| [ "${key}", V${path}_${key}<Annotation>]`)
                                })
                            })
                        })
                    })
                    break
                case "reference":
                    pr.cc($[1], ($) => {
                        $w.snippet(`G${$.name}<Annotation>`)
                    })
                    break
                case "sequence":
                    pr.cc($[1], ($) => {
                        $w.snippet(`{`)
                        $w.indent(($w) => {
                            $.elements.forEach(($) => {
                                $w.line(($w) => {
                                    $w.snippet(`readonly ${$.name}:  V${path}_${$.name}<Annotation>`)
                                })
                            })
                        })
                        $w.snippet(`}`)
                    })
                    break
                case "node":
                    pr.cc($[1], ($) => {
                        $w.snippet(`N${path}$<Annotation>`)
                    })
                    break
                default:
                    pr.au($[0])
            }
        })
    }
    function generateTypesForValue(
        $: g.Value,
        $w: wapi.Block,
        path: string,
    ) {
        generateTypesForValueType(
            $.type,
            $w,
            path,
        )
        $w.line(($w) => {
            $w.snippet(`export type V${path}<Annotation> = `)
            switch ($.cardinality[0]) {
                case "array":
                    pr.cc($.cardinality[1], ($) => {
                        $w.snippet(`VT${path}<Annotation>[]`)
                    })
                    break
                case "one":
                    pr.cc($.cardinality[1], ($) => {
                        $w.snippet(`VT${path}<Annotation>`)
                    })
                    break
                case "optional":
                    pr.cc($.cardinality[1], ($) => {
                        $w.snippet(`null | VT${path}<Annotation>`)
                    })
                    break
                default:
                    pr.au($.cardinality[0])
            }
        })
    }
    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    pr.forEachEntry(grammar.globalValueTypes, ($, key) => {
        generateTypesForValueType(
            $,
            $w,
            `G${key}`,
        )
        $w.line(($w) => {
            $w.snippet(`export type G${key}<Annotation> =  VTG${key}<Annotation>`)
        })
    })
    // g.forEachEntry(grammar.nodes, ($, key) => {
    //     switch ($.type[0]) {
    //         case "composite":
    //             pr.cc($.type[1], ($) => {
    //                 generateSymbolTypesForSymbol(
    //                     $,
    //                     $w,
    //                     `T${key}`,
    //                 )
    //             })
    //             break
    //         case "leaf":
    //             break
    //         default:
    //             pr.au($.type[0])
    //     }
    //     $w.line(($w) => {
    //         $w.snippet(``)
    //     })
    //     $w.line(($w) => {
    //         $w.snippet(`export type T${key}<Annotation> = {`)
    //         $w.indent(($w) => {
    //             $w.line(($w) => {
    //                 $w.snippet(`annotation: Annotation,`)
    //             })
    //             $w.line(($w) => {
    //                 $w.snippet(`content: `)
    //                 switch ($.type[0]) {
    //                     case "composite":
    //                         pr.cc($.type[1], ($) => {
    //                             $w.snippet(`ST${key}<Annotation>`)
    //                         })
    //                         break
    //                     case "leaf":
    //                         pr.cc($.type[1], ($) => {
    //                             if ($.hasTextContent) {
    //                                 $w.snippet(`string`)
    //                             } else {
    //                                 $w.snippet(`null`)
    //                             }
    //                         })
    //                         break
    //                     default:
    //                         pr.au($.type[0])
    //                 }
    //                 $w.snippet(`,`)
    //             })
    //         })
    //         $w.snippet(`}`)
    //     })
    // })

    generateTypesForNode(
        grammar.root,
        $w,
        "root",
    )

    $w.line(($w) => {
        $w.snippet(`export type Root<Annotation> = Nroot<Annotation>`)
    })

}