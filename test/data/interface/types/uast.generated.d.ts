import * as pr from "pareto-runtime";
export declare type TUntypedNode<Annotation> = {
    readonly "kindName": string;
    readonly "value": string;
    readonly "annotation": Annotation;
    readonly "children": pr.IReadonlyArray<Node<Annotation>>;
};
