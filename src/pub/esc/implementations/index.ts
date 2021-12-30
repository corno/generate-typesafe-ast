import * as pr from "pareto-runtime"

import * as g from "../../interface/types"
import * as wapi from "fountain-pen"

import { generateAPI } from "./generateAPI"
import { generateParser } from "./generateParser"
import { generateVisitorTemplate } from "./generateVisitorTemplate"
import { generateUntypedAPI } from "./generateUntypedAPI"

export type Directory = {
    createFile(
        name: string,
        callback: ($: wapi.Block) => void,
    ): void
    createDirectory(
        name: string,
        callback: ($: Directory) => void,
    ): void
}

function wrapDirectory(
    writeContext: wapi.ConfiguredContext,
    mkDir: (
        name: string,
        x: () => void,
    ) => void,
    writeFile: (
        name: string,
        data: string,
    ) => void
): Directory {
    return {
        createDirectory(
            dirName,
            callback,
        ) {
            mkDir(
                dirName,
                () => {

                    callback(
                        wrapDirectory(
                            writeContext,
                            (
                                subDirName,
                                x
                            ) => {
                                mkDir(pr.join([dirName, subDirName]), x)
                            },
                            (
                                fileName,
                                data,
                            ) => {
                                writeFile(pr.join([dirName, fileName]), data)
                            }
                        )
                    )
                }
            )


        },
        createFile(
            name,
            callback,
        ) {
            let out = ""
            writeContext.processBlock(
                ($i) => {
                    callback($i)
                },
                {
                    onData: ($) => {
                        out += $
                    },
                    onEnd: ($) => {
                        writeFile(name, out)
                    },
                }
            )
        }
    }
}

export function generateCode(
    writeContext: wapi.ConfiguredContext,
    grammar: g.Grammar,
    targetDirPath: string,
) {
    function generate(
        block: wapi.Block,
        func: (
            grammar: g.Grammar,
            $w: wapi.Block,
            log: (str: string) => void,
        ) => void,
    ) {
        func(
            grammar,
            block,
            ($) => {
                console.log($)
            }
        )
    }

    function x($: Directory) {

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
            })

        })
    }

    const targetDir = wrapDirectory(
        writeContext,
        (
            dirName,
            x
        ) => {
            pr.mkdir(pr.join([targetDirPath, dirName]), ($) => {
                switch ($[0]) {
                    case "error":
                        pr.cc($[1], ($) => {
                            switch ($.type[0]) {
                                case "other":
                                    pr.cc($.type[1], ($) => {
                                        throw new Error("IMPLEMENT ME")
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
            pr.writeFile(
                pr.join([targetDirPath, fileName]),
                data,
                ($) => {
                    switch ($[0]) {
                        case "error":
                            pr.cc($[1], ($) => {
                                console.error(`error while writing`, pr.join([targetDirPath, fileName]))
                                switch ($.type[0]) {
                                    case "no entity":
                                        pr.cc($.type[1], ($) => {
                                            console.error(`no entity`)

                                        })
                                        break
                                    case "other":
                                        pr.cc($.type[1], ($) => {
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
