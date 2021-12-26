import * as pr from "pareto-runtime"

export type Options = { [key: string]: Value }

export type Cardinality =
    | ["one", {}]
    | ["optional", {}]
    | ["array", {}]

export type SequenceElement = {
    name: string,
    value: Value,
}

export type ValueType =
    | ["reference", {
        "name": string
    }]
    | ["choice", {
        "options": Options
    }]
    | ["node", Node2]
    | ["sequence", {
        elements: SequenceElement[]
    }]

export type Value = {
    cardinality: Cardinality
    type: ValueType
}

export type Grammar = {
    globalValueTypes: {
        [key: string]: ValueType
    }
    root: Node2
}

export type Node2 = {
    name: string
    type:
    | ["composite", Composite]
    | ["leaf", Leaf]

}

export type Leaf = {
    hasTextContent: boolean,
}

export type Composite = Value

export function forEachEntry<T>(
    dictionary: { [key: string]: T },
    callback: (entry: T, key: string) => void,
) {
    pr.Objectkeys(dictionary).forEach((key) => {
        callback(dictionary[key], key)
    })
}