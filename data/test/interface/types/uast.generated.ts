import * as pr from "pareto-runtime"

export type Node<Annotation> = {
    readonly "kindName": string
    readonly "value": string
    readonly "annotation": Annotation
    readonly "children": pr.IReadonlyArray<Node<Annotation>>
}