import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"

export function generateAPI(
    grammar: g.TGrammar,
    $i: {
        $w: wapi.Block,
        log: (str: string) => void,
    }
) {
    function generateTypesForNode(
        $: g.TNode2,
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
            $w.snippet(`export type TN${path}<Annotation> = `)
            switch ($.type[0]) {
                case "composite":
                    pr.cc($.type[1], ($) => {
                        $w.snippet(`AnnotatedType<Annotation, TV${path}<Annotation>>`)
                    })
                    break
                case "leaf":
                    pr.cc($.type[1], ($) => {
                        if ($.hasTextContent) {
                            $w.snippet(`AnnotatedString<Annotation>`)
                        } else {
                            $w.snippet(`Annotation`)

                        }
                    })
                    break
                default:
                    pr.au($.type[0])
            }
        })

    }
    function generateTypesForValueType(
        $: g.TValueType,
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
            $w.snippet(`export type TVT${path}<Annotation> = `)

            switch ($[0]) {
                case "choice":
                    pr.cc($[1], ($) => {

                        $w.indent(($w) => {
                            pr.Objectkeys($.options).forEach((key) => {
                                const option = $.options[key]
                                $w.line(($w) => {
                                    $w.snippet(`| [ "${key}", TV${path}_${key}<Annotation>]`)
                                })
                            })
                        })
                    })
                    break
                case "reference":
                    pr.cc($[1], ($) => {
                        $w.snippet(`TG${$.name}<Annotation>`)
                    })
                    break
                case "sequence":
                    pr.cc($[1], ($) => {
                        $w.snippet(`{`)
                        $w.indent(($w) => {
                            $.elements.forEach(($) => {
                                $w.line(($w) => {
                                    $w.snippet(`readonly "${$.name}":  TV${path}_${$.name}<Annotation>`)
                                })
                            })
                        })
                        $w.snippet(`}`)
                    })
                    break
                case "node":
                    pr.cc($[1], ($) => {
                        $w.snippet(`TN${path}$<Annotation>`)
                    })
                    break
                default:
                    pr.au($[0])
            }
        })
    }
    function generateTypesForValue(
        $: g.TValue,
        $w: wapi.Block,
        path: string,
    ) {
        generateTypesForValueType(
            $.type,
            $w,
            path,
        )
        $w.line(($w) => {
            $w.snippet(`export type TV${path}<Annotation> = `)
            if ($.cardinality === undefined) {
                $w.snippet(`TVT${path}<Annotation>`)
            } else {
                switch ($.cardinality[0]) {
                    case "array":
                        pr.cc($.cardinality[1], ($) => {
                            $w.snippet(`TVT${path}<Annotation>[]`)
                        })
                        break
                    case "one":
                        pr.cc($.cardinality[1], ($) => {
                            $w.snippet(`TVT${path}<Annotation>`)
                        })
                        break
                    case "optional":
                        pr.cc($.cardinality[1], ($) => {
                            $w.snippet(`pr.optional<TVT${path}<Annotation>>`)
                        })
                        break
                    default:
                        pr.au($.cardinality[0])
                }

            }
        })
    }
    pr.cc($i.$w, ($w) => {

        $w.line(($w) => {
            $w.snippet(`import * as pr from "pareto-runtime"`)
        })
        $w.line(($w) => {
        })

        $w.line(($w) => {
            $w.snippet(`export type AnnotatedString<Annotation> = { readonly "annotation": Annotation; readonly "value": string }`)
        })
        $w.line(($w) => {
            $w.snippet(`export type AnnotatedType<Annotation, Type> = { readonly "annotation": Annotation; readonly "content": Type }`)
        })

        pr.forEachEntry(grammar.globalValueTypes, ($, key) => {
            generateTypesForValueType(
                $,
                $w,
                `G${key}`,
            )
            $w.line(($w) => {
                $w.snippet(`export type TG${key}<Annotation> =  TVTG${key}<Annotation>`)
            })
        })
        generateTypesForNode(
            grammar.root,
            $w,
            "root",
        )

        $w.line(($w) => {
            $w.snippet(`export type TRoot<Annotation> = TNroot<Annotation>`)
        })

    })

}