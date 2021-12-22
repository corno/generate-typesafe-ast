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
    | ["node", {
        "name": string
    }]
    | ["sequence", {
        elements: SequenceElement[]
    }]

export type Value = {
    cardinality: Cardinality
    type: ValueType
}

export type Grammar = {
    valueTypes: {
        [key: string]: ValueType
    }
    nodes: {
        [key: string]: Node
    }
    rootNode: string
}

export type Leaf = {
    hasTextContent: boolean,
}

export type Composite = Value

export type Node = {
    type:
    | ["composite", Composite]
    | ["leaf", Leaf]
}

export function forEachEntry<T>(
    dictionary: { [key: string]: T },
    callback: (entry: T, key: string) => void,
) {
    pr.Objectkeys(dictionary).forEach((key) => {
        callback(dictionary[key], key)
    })
}