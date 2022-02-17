#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as pt from "pareto-test"
import * as pf from "pareto-filesystem"
import * as tsg from "../../data/typescriptGrammar"
import * as gta from "../../../../pub/dist"
import * as fp from "fountain-pen"

pr.runProgram(
    ($) => {
        const dataDir = $.argument
        if (dataDir === undefined) {
            pr.logError("missing data directory path")
            pr.processExit(1)
        } else {

            pt.runTests(
                {
                    callback: ($i) => {
                        $i.asyncSubset(
                            {
                                name: "test generated code",
                            },
                            ($i) => {
                                const testSet = $i.testSet

                                pf.wrapDirectory(
                                    {
                                        rootDirectory: pr.join([dataDir, "src"]),
                                    },
                                    {
                                        callback: ($i) => {

                                            const targetDir = $i

                                            fp.createContext(
                                                pr.trimRight,
                                            ).configure(
                                                {
                                                    indentation: "    ",
                                                    newline: "\r\n",
                                                    trimLines: true,
                                                },
                                                ($i) => {
                                                    const wc = $i
                                                    gta.generateCode(
                                                        {
                                                            grammar: tsg._typescriptGrammar,
                                                        },
                                                        {
                                                            onError: ($) => {

                                                            },
                                                            createWriteStream: (
                                                                $,
                                                                $i,
                                                            ) => {
                                                                const filePath = $.path
                                                                const blockCallback = $i

                                                                let data = ""

                                                                wc.processBlock({
                                                                    onBlock: ($i) => {
                                                                        blockCallback($i)
                                                                    },
                                                                    consumer: {
                                                                        onData: ($) => {
                                                                            data += $
                                                                        },
                                                                        onEnd: () => {
                                                                            targetDir.unlink(
                                                                                {
                                                                                    path: filePath + ".actual",

                                                                                },
                                                                                {
                                                                                    onNotExists: () => {
                                                                                        //no problem
                                                                                    },
                                                                                    onDone: ()=> {
                                                                                        targetDir.readFile(
                                                                                            filePath,
                                                                                            {
                                                                                                callback: ($) => {
                                                                                                    if ($ !== data) {
                                                                                                        targetDir.writeFile(
                                                                                                            {
                                                                                                                path: filePath + ".actual",
                                                                                                                data: data,
                                                                                                                createMissingDirectories: false,
                                                                                                            },
                                                                                                            {}
                                                                                                        )
                                                                                                    }
                                                                                                    testSet.testString({
                                                                                                        testName: pr.join([dataDir, filePath]),
                                                                                                        expected: $,
                                                                                                        actual: data,
                                                                                                        fileLocation: filePath,
                                                                                                    })
                                                                                                }
                                                                                            }
                                                                                        )

                                                                                    }
                                                                                }
                                                                            )

                                                                        }
                                                                    }
                                                                })
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
                                            $i.done({})
                                        }
                                    }
                                )
                            },
                        )
                    },
                    log: pr.log,
                }
            )
        }
    }
)
