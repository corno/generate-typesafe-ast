import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"

export function generateIndex(
    grammar: g.TGrammar,
    $i: {
        $w: wapi.Block,
        log: (str: string) => void,
    }
) {
    pr.cc($i.$w, ($w) => {

        $w.line(($w) => {
            $w.snippet(`export * from "./interface/types/ts_api"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./interface/types/uast"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./interface/interfaces/visitor"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./esc/implementation/parser"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./esc/implementation/visit"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./esc/implementation/default_visitor"`)
        })
    })
}
