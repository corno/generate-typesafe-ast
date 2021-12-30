import * as pr from "pareto-runtime"
import * as wapi from "fountain-pen"

export type Directory = {
    createFile(
        $: string,
        $i: ($: wapi.Block) => void,
    ): void
    createDirectory(
        $: string,
        $i: ($: Directory) => void,
    ): void
}

export function wrapDirectory(
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