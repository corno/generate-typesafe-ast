#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as pt from "pareto-test"
import * as tsg from "../../data/typescriptGrammar"
import * as gta from "../../../../pub/dist"
import * as wapi from "fountain-pen"


// const [, , targetDirPath] = pr.getProcessArguments()

// if (targetDirPath === undefined) {
//     pr.logError("missing target directory path")
//     pr.processExit(1)
// }

pt.createTestContext(
    {
        numberOfFirstLine: 1,
    },
    {
        callback: ($) => {
            $.testset(
                "test generated code",
                ($i) => {
                    const targetDirPath = "./data/test"
                    const testSet = $i

                    wapi.createContext(
                        pr.trimRight,
                    ).configure(
                        {
                            indentation: "    ",
                            newline: "\r\n",
                            trimLines: true,
                        },
                        ($i) => {
                            gta.generateCode(
                                {
                                    grammar: tsg.typescriptGrammar,
                                },
                                {
                                    writeContext: $i,
                                    onError: ($) => {

                                    },
                                    createFile: (
                                        $,
                                        $i,
                                    ) => {
                                        const filePath = $

                                        let data = ""
                                        $i({
                                            onData: ($) => {
                                                data += $
                                            },
                                            onEnd: () => {
                                                const fullPath = pr.join([targetDirPath, filePath])
                                                pr.readFile(
                                                    fullPath,
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case "error":
                                                                pr.cc($[1], ($) => {
                                                                    throw new Error("IMPLEMENT ME")
                                                                })
                                                                break
                                                            case "success":
                                                                pr.cc($[1], ($) => {
                                                                    testSet.testString({
                                                                        testName: fullPath,
                                                                        expected: $.data,
                                                                        actual: data,
                                                                        fileLocation: fullPath,
                                                                    })
                                                                })
                                                                break
                                                            default: pr.au($[0])
                                                        }
                                                    }
                                                )

                                            }
                                        })
                                        // pr.mkdir(
                                        //     pr.dirname($),
                                        //     ($) => {
                                        //         switch ($[0]) {
                                        //             case "error":
                                        //                 pr.cc($, ($) => {
                                        //                     throw new Error("IMPLEMENT ME")
                                        //                 })
                                        //                 break
                                        //             case "success":
                                        //                 pr.cc($, ($) => {
                                        //                     let data = ""
                                        //                     $i({
                                        //                         onData: ($) => {
                                        //                             data += $
                                        //                         },
                                        //                         onEnd: () => {
                                        //                             pr.writeFile(filePath, data, ($) => {
                                        //                                 //FIX?
                                        //                             })

                                        //                         }
                                        //                     })
                                        //                 })
                                        //                 break
                                        //             default: pr.au($[0])
                                        //         }
                                        //     }
                                        // )
                                    }
                                }
                            )
                        }
                    )

                }
            )
        },
        log: ($) => {
            console.log($)
        },
        onEnd: ($) => {
            if ($.errorCount > 0) {
                pr.processExit(1)
            }
        },
    }
)

