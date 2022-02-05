import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as fp from "fountain-pen"

import { generateAPI } from "./generateAPI"
import { generateParser } from "./generateParser"
import { generateVisitorTemplate } from "./generateVisitorTemplate"
import { generateUntypedAPI } from "./generateUntypedAPI"
import { generateVisitorTemplate2 } from "./generateVisitorTemplate2"
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
        'esc/implementation/visitor_template.ts',
        generateVisitorTemplate,
    )
    doIt(
        'esc/implementation/visitor_template2.ts',
        generateVisitorTemplate2,
    )
    doIt(
        'index.ts',
        generateIndex,
    )


    // const targetDir = dir.wrapDirectory(
    //     $i.writeContext,
    //     (
    //         dirName,
    //         x
    //     ) => {
    //         const dirPath = pr.join([$.targetDirPath, dirName])
    //         pr.mkdir(dirPath, ($) => {
    //             switch ($[0]) {
    //                 case "error":
    //                     pr.cc($[1], ($) => {
    //                         switch ($.type[0]) {
    //                             case "no entity":
    //                                 pr.cc($.type[1], ($) => {
    //                                     $i.onError(`could not create directory (no entity): ${dirPath}`)
    //                                 })
    //                                 break
    //                             case "other":
    //                                 pr.cc($.type[1], ($) => {
    //                                     $i.onError(`could not create directory (${$.message}): ${dirPath}`)
    //                                 })
    //                                 break
    //                             default:
    //                                 pr.au($.type[0])
    //                         }
    //                     })
    //                     break
    //                 case "success":
    //                     pr.cc($[1], ($) => {
    //                         x()
    //                     })
    //                     break
    //                 default:
    //                     pr.au($[0])
    //             }
    //         })
    //     },
    //     (
    //         fileName,
    //         data,
    //     ) => {
    //         const fp = pr.join([$.targetDirPath, fileName])
    //         pr.writeFile(
    //             fp,
    //             data,
    //             ($) => {
    //                 switch ($[0]) {
    //                     case "error":
    //                         pr.cc($[1], ($) => {
    //                             switch ($.type[0]) {
    //                                 case "no entity":
    //                                     pr.cc($.type[1], ($) => {
    //                                         $i.onError(`error while writing, no entity: ${fp}`)
    //                                     })
    //                                     break
    //                                 case "other":
    //                                     pr.cc($.type[1], ($) => {
    //                                         $i.onError(`error while writing, no entity: ${fp}`)
    //                                     })
    //                                     break
    //                                 default:
    //                                     pr.au($.type[0])
    //                             }
    //                         })
    //                         break
    //                     case "success":
    //                         pr.cc($[1], ($) => {
    //                         })
    //                         break
    //                     default:
    //                         pr.au($[0])
    //                 }
    //             },
    //         )
    //     }
    // )
    // x(targetDir)


}
