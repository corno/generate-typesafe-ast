#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as pt from "pareto-test"
import * as pf from "pareto-filesystem"
import * as tsg from "../../data/typescriptGrammar"
import * as gta from "../../../../pub/dist"
import * as wapi from "fountain-pen"


const [, , dataDir] = pr.getProcessArguments()

if (dataDir === undefined) {
    pr.logError("missing data directory path")
    pr.processExit(1)
}

pt.runTests(
    {
        callback: ($i) => {
            $i.asyncSubset(
                {
                    name: "test generated code",
                },
                {
                    registerListener: ($i) => {
                        const testSet = $i.testSet

                        pf.wrapDirectory(
                            {
                                rootDirectory: dataDir,
                            },
                            {
                                callback: ($i) => {

                                    const targetDir = $i
    
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
                                                                targetDir.readFile(
                                                                    filePath,
                                                                    ($) => {
                                                                        testSet.testString({
                                                                            testName: pr.join([dataDir, filePath]),
                                                                            expected: $,
                                                                            actual: data,
                                                                            fileLocation: filePath,
                                                                        })
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
    
                                },
                                onError: ($) => {
                                    $i.testSet.assert({
                                        testName: `filesystem error: ${pf.printFSError($)}`,
                                        condition: false,
                                    })
                                },
                                onEnd: () => {
                                    $i.done()
                                }
                            }
                        )
                    },
                }
            )
        },
        log: pr.log,
    }
)

