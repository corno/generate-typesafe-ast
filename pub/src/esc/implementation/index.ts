import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"
import * as dir from "../../modules/dir"

import { generateAPI } from "./generateAPI"
import { generateParser } from "./generateParser"
import { generateVisitorTemplate } from "./generateVisitorTemplate"
import { generateUntypedAPI } from "./generateUntypedAPI"
import { generateVisitorTemplate2 } from "./generateVisitorTemplate2"

export function generateCode(
    $: {
        grammar: g.TGrammar,
        targetDirPath: string,
    },
    $i: {
        writeContext: wapi.ConfiguredContext,
        onError: (str: string) => void
    }
) {
    function generate(
        block: wapi.Block,
        func: (
            grammar: g.TGrammar,
            $w: wapi.Block,
            log: (str: string) => void,
        ) => void,
    ) {
        func(
            $.grammar,
            block,
            ($) => {
                console.log($)
            }
        )
    }

    function x($: dir.Directory) {

        $.createDirectory("interface", ($) => {
            $.createDirectory("types", ($) => {
                $.createFile("ts_api.generated.ts", ($) => {
                    generate(
                        $,
                        generateAPI,
                    )
                })
                $.createFile("uast.generated.ts", ($) => {
                    generate(
                        $,
                        generateUntypedAPI,
                    )
                })

            })

        })
        $.createDirectory("esc", ($) => {
            $.createDirectory("implementation", ($) => {

                $.createFile("parser.generated.ts", ($) => {
                    generate(
                        $,
                        generateParser,
                    )
                })
                $.createFile("visitor_template.generated.ts", ($) => {
                    generate(
                        $,
                        generateVisitorTemplate,
                    )
                })
                $.createFile("visitor_template.generated.ts", ($) => {
                    generate(
                        $,
                        generateVisitorTemplate2,
                    )
                })
            })

        })
    }

    const targetDir = dir.wrapDirectory(
        $i.writeContext,
        (
            dirName,
            x
        ) => {
            const dirPath = pr.join([$.targetDirPath, dirName])
            pr.mkdir(dirPath, ($) => {
                switch ($[0]) {
                    case "error":
                        pr.cc($[1], ($) => {
                            switch ($.type[0]) {
                                case "other":
                                    pr.cc($.type[1], ($) => {
                                        $i.onError(`could not create directory (${$.message}): ${dirPath}`)
                                    })
                                    break
                                default:
                                    pr.au($.type[0])
                            }
                        })
                        break
                    case "success":
                        pr.cc($[1], ($) => {
                            x()
                        })
                        break
                    default:
                        pr.au($[0])
                }
            })
        },
        (
            fileName,
            data,
        ) => {
            const fp = pr.join([$.targetDirPath, fileName])
            pr.writeFile(
                fp,
                data,
                ($) => {
                    switch ($[0]) {
                        case "error":
                            pr.cc($[1], ($) => {
                                switch ($.type[0]) {
                                    case "no entity":
                                        pr.cc($.type[1], ($) => {
                                            $i.onError(`error while writing, no entity: ${fp}`)
                                        })
                                        break
                                    case "other":
                                        pr.cc($.type[1], ($) => {
                                            $i.onError(`error while writing, no entity: ${fp}`)
                                        })
                                        break
                                    default:
                                        pr.au($.type[0])
                                }
                            })
                            break
                        case "success":
                            pr.cc($[1], ($) => {
                            })
                            break
                        default:
                            pr.au($[0])
                    }
                },
            )
        }
    )
    x(targetDir)


}
