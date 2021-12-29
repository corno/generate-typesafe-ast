//import * as pr from "pareto-runtime"

export type Options = { [key: string]: Value }

export type Cardinality =
    | ["one", {}]
    | ["optional", {}]
    | ["array", {}]

export type SequenceElement = {
    readonly "name": string,
    readonly "value": Value,
}

export type ValueType =
    | ["reference", {
        readonly "name": string
    }]
    | ["choice", {
        readonly "options": Options
    }]
    | ["node", Node2]
    | ["sequence", {
        readonly "elements": SequenceElement[]
    }]

export type Value = {
    readonly "cardinality": Cardinality
    readonly "type": ValueType
}

export type Grammar = {
    readonly "globalValueTypes": {
        [key: string]: ValueType
    }
    readonly "root": Node2
}

export type Node2 = {
    readonly "name": string
    readonly "type":
    | ["composite", Composite]
    | ["leaf", Leaf]

}

export type Leaf = {
    readonly "hasTextContent": boolean,
}

export type Composite = Value
