import * as pr from "pareto-runtime"

import * as g from "../interfaces"
import * as wapi from "fountain-pen/interfaces/fountain-pen"

export function generateUntypedAPI(
    grammar: g.Grammar,
    $w: wapi.Block,
    log: (str: string) => void,
) {
    $w.line(($w) => {
        $w.snippet(`export type Node<Annotation> = {`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`kindName: string`)
            })
            $w.line(($w) => {
                $w.snippet(`value: string`)
            })
            $w.line(($w) => {
                $w.snippet(`annotation: Annotation`)
            })
            $w.line(($w) => {
                $w.snippet(`children: {`)
                $w.indent(($w) => {
                    $w.line(($w) => {
                        $w.snippet(`forEach(callback: ($: Node<Annotation>) => void): void`)
                    })
                })
                $w.snippet(`}`)
            })
        })
        $w.snippet(`}`)
    })

}