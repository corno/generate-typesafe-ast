import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen/esc/interfaces/fountain-pen"

export function generateUntypedAPI(
    grammar: g.Grammar,
    $w: wapi.Block,
    log: (str: string) => void,
) {
    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
    })
    $w.line(($w) => {
        $w.snippet(`export type Node<Annotation> = {`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`readonly "kindName": string`)
            })
            $w.line(($w) => {
                $w.snippet(`readonly "value": string`)
            })
            $w.line(($w) => {
                $w.snippet(`readonly "annotation": Annotation`)
            })
            $w.line(($w) => {
                $w.snippet(`readonly "children": pr.IReadonlyArray<Node<Annotation>>`)
            })
        })
        $w.snippet(`}`)
    })

}