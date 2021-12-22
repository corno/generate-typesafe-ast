import * as pr from "pareto-runtime"

import * as g from "../interfaces"
import * as wapi from "fountain-pen/interfaces/fountain-pen"

import { createBlock } from "fountain-pen/implementations/fountain-pen"
import { generateAPI } from "./generateAPI"
import { generateParser } from "./generateParser"
import { generateVisitorTemplate } from "./generateVisitorTemplate"

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

function createDirectory(
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
            callback(
                createDirectory(
                    (
                        fileName,
                        data,
                    ) => {
                        writeFile(pr.join([dirName, fileName]), data)
                    }
                )
            )
        },
        createFile(
            name,
            callback,
        ) {
            let out = ""
            const block = createBlock(
                {
                    indentation: "    ",
                    newline: "\r\n",
                    trimLines: true,
                },
                (str) => {
                    out += str
                }
            )
            callback(block)
            writeFile(name, out)
        }
    }
}

export function generateCode(
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

    const targetDir = createDirectory(
        (
            fileName,
            data,
        ) => {
            pr.writeFile(
                pr.join([targetDirPath, fileName]),
                data,
                () => {},
            )
        }
    )

    targetDir.createDirectory("interface", ($) => {
        $.createFile("ts_api.generated.ts", ($) => {
            generate(
                $,
                generateAPI,
            )
        })

    })
    targetDir.createDirectory("implementation", ($) => {

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

}
