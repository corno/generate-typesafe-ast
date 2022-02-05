import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as fp from "fountain-pen"

import { generateAPI } from "./generateAPI"
import { generateParser } from "./generateParser"
import { generateVisitor } from "./generateVisitor"
import { generateUntypedAPI } from "./generateUntypedAPI"
import { generateVisitorInterface } from "./generateVisitorInterface"
import { generateDefaultVisitor } from "./generateDefaultVisitor"
import { generateIndex } from "./generateIndex"

export type FileWriter = {
    write: (str: string) => void
    end: () => void
}

export function generateCode(
    $: {
        grammar: g.TGrammar,
    },
    $i: {
        onError: (str: string) => void,
        createWriteStream: (
            $: {
                path: string,
            },
            $i: ($i: fp.Block) => void,
        ) => void,
    }
) {
    const grammar = $.grammar

    function doIt(
        filePath: string,
        func: (
            grammar: g.TGrammar,
            $i: {
                $w: fp.Block,
                log: (str: string) => void,
            },
        ) => void,
    ) {

        $i.createWriteStream(
            {
                path: filePath
            },
            ($i) => {
                func(
                    grammar,
                    {
                        $w: $i,
                        log: ($) => {
                            console.log($)
                        }
                    }
                )
            }
        )
    }
    doIt(
        'interface/types/ts_api.ts',
        generateAPI,
    )
    doIt(
        'interface/types/uast.ts',
        generateUntypedAPI,
    )
    doIt(
        'esc/implementation/parser.ts',
        generateParser,
    )
    doIt(
        'esc/implementation/visit.ts',
        generateVisitor,
    )
    doIt(
        'interface/interfaces/visitor.ts',
        generateVisitorInterface,
    )
    doIt(
        'esc/implementation/default_visitor.ts',
        generateDefaultVisitor,
    )
    doIt(
        'index.ts',
        generateIndex,
    )
}
