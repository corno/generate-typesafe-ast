#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as tsg from "../../data/typescriptGrammar"
import * as gta from "../../../pub/esc/implementations"
import * as wapi from "fountain-pen"


const [, , targetDirPath] = pr.getProcessArguments()

if (targetDirPath === undefined) {
    pr.logError("missing target directory path")
    pr.processExit(1)
}

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
            $i,
            tsg.typescriptGrammar,
            targetDirPath
        )
    }
)

