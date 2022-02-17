import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"

export function generateVisitorInterface(
    grammar: g.TGrammar,
    $i: {
        $w: wapi.Block,
        log: (str: string) => void,
    }
) {
    pr.cc(($i.$w), $w => {

        $w.line(($w) => {
            $w.snippet(`import * as pr from "pareto-runtime"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as api from "../../interface/types/ts_api"`)
        })
        $w.line(($w) => { })
        $w.line(($w) => {
            $w.snippet(`export type IVisitor<Annotation> = {`)
            $w.indent(($w) => {

                function generateNode(
                    $: g.TNode2,
                    $w: wapi.Block,
                    pathForCode: string,
                    pathForReporting: string,
                ) {

                    switch ($.type[0]) {
                        case "composite":
                            pr.cc($.type[1], ($) => {
                                generateValue(
                                    $,
                                    $w,
                                    pathForCode,
                                    pathForReporting,
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
                        $w.snippet(`readonly "${pathForReporting}"?: `)
                        switch ($.type[0]) {
                            case "composite":
                                pr.cc($.type[1], ($) => {
                                    $w.snippet(`{`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`readonly "begin": ($: api.TN${pathForCode}<Annotation>) => void,`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`readonly "end": ($: api.TN${pathForCode}<Annotation>) => void,`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                                break
                            case "leaf":
                                pr.cc($.type[1], ($) => {
                                    $w.snippet(`($: api.TN${pathForCode}<Annotation>) => void`)
                                })
                                break
                            default:
                                pr.au($.type[0])
                        }
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
                                pr.Objectkeys($.options).forEach((key) => {
                                    const option = $.options[key]
                                    generateValue(
                                        option,
                                        $w,
                                        `${pathForCode}_${key}`,
                                        `${pathForReporting}/?${key}`,
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
                                        `${pathForCode}_${$.name}`,
                                        `${pathForReporting}/.${$.name}`,
                                    )
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
                    generateValueType(
                        symbol.type,
                        $w,
                        pathForCode,
                        pathForReporting,
                    )
                }
                pr.Objectkeys(grammar.globalValueTypes).forEach((key) => {
                    const $ = grammar.globalValueTypes[key]
                    generateValueType(
                        $,
                        $w,
                        `G${key}`,
                        `$${key}`,
                    )
                })

                generateNode(
                    grammar.root,
                    $w,
                    "root",
                    "",
                )
            })
            $w.snippet(`}`)
        })
    })
}
