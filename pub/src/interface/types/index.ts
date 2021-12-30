//import * as pr from "pareto-runtime"

export type TOptions = { [key: string]: TValue }

export type TCardinality =
    | ["one", {}]
    | ["optional", {}]
    | ["array", {}]

export type TSequenceElement = {
    readonly "name": string,
    readonly "value": TValue,
}

export type TValueType =
    | ["reference", {
        readonly "name": string
    }]
    | ["choice", {
        readonly "options": TOptions
    }]
    | ["node", TNode2]
    | ["sequence", {
        readonly "elements": TSequenceElement[]
    }]

export type TValue = {
    readonly "cardinality": TCardinality
    readonly "type": TValueType
}

export type TGrammar = {
    readonly "globalValueTypes": {
        [key: string]: TValueType
    }
    readonly "root": TNode2
}

export type TNode2 = {
    readonly "name": string
    readonly "type":
    | ["composite", TComposite]
    | ["leaf", TLeaf]

}

export type TLeaf = {
    readonly "hasTextContent": boolean,
}

export type TComposite = TValue
