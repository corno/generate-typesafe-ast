import * as pr from "pareto-runtime"

export type TUntypedNode<Annotation> = {
    readonly "kindName": string
    readonly "value": string
    readonly "annotation": Annotation
    readonly "children": pr.IReadonlyArray<TUntypedNode<Annotation>>
}