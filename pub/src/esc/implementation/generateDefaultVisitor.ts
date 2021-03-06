import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"

export function generateDefaultVisitor(
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
            $w.snippet(`import * as f from "../../interface/interfaces/visitor"`)
        })
        $w.line(($w) => { })
        $w.line(($w) => {
            $w.snippet(`export function createDefaultVisistor(): f.IVisitor<string> {`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`return {`)
                    $w.indent(($w) => {
                        function generateNode(
                            $: g.TNode2,
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
                            $: g.TValueType,
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
                                                `${path}/?${key}`
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
                                                `${path}/.${$.name}`
                                            )
                                        })
                                    })
                                    break
                                case "node":
                                    pr.cc($[1], ($) => {
                                        generateNode(
                                            $,
                                            $w,
                                            `${path}/*${$.name}`
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
                                `$${key}`,
                            )
                        })
        
                        generateNode(
                            grammar.root,
                            $w,
                            "",
                        )
        
        
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`}`)
        })
    })
}
