import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"
import * as dir from "../../modules/dir"

import { generateAPI } from "./generateAPI"
import { generateParser } from "./generateParser"
import { generateVisitorTemplate } from "./generateVisitorTemplate"
import { generateUntypedAPI } from "./generateUntypedAPI"
import { generateVisitorTemplate2 } from "./generateVisitorTemplate2"

export type FileWriter = {
    write: (str: string) => void
    end: () => void
}

export function generateCode(
    $: {
        grammar: g.TGrammar,
    },
    $i: {
        writeContext: wapi.ConfiguredContext,
        onError: (str: string) => void,
        createFile: (
            $: string,
            $i: ($i: pr.IStreamConsumer<string, null>) => void,
        ) => void,
    }
) {
    const grammar = $.grammar
    const wc = $i.writeContext

    function doIt(
        filePath: string,
        func: (
            grammar: g.TGrammar,
            $i: {
                $w: wapi.Block,
                log: (str: string) => void,
            },
        ) => void,
    ) {

        $i.createFile(
            filePath,
            ($i) => {
                wc.processBlock({
                    onBlock: ($i) => {
                        function generate(
                            block: wapi.Block,
                        ) {
                            func(
                                grammar,
                                {
                                    $w: block,
                                    log: ($) => {
                                        console.log($)
                                    }
                                }
                            )
                        }
                        generate(
                            $i,
                        )

                    },
                    consumer: $i
                })
            }
        )
    }
    doIt(
        'interface/types/ts_api.generated.ts',
        generateAPI,
    )
    doIt(
        'interface/types/uast.generated.ts',
        generateUntypedAPI,
    )
    doIt(
        'esc/implementation/parser.generated.ts',
        generateParser,
    )
    doIt(
        'esc/implementation/visitor_template.generated.ts',
        generateVisitorTemplate,
    )
    doIt(
        'esc/implementation/visitor_template2.generated.ts',
        generateVisitorTemplate2,
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
