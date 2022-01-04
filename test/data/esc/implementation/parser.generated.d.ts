import * as pr from "pareto-runtime";
import * as tast from "../../interface/types/ts_api.generated";
import * as uast from "../../interface/types/uast.generated";
export declare function parse<Annotation>($: uast.Node<Annotation>, callback: ($: tast.TRoot<Annotation>) => void, reportUnexpectedRoot: ($: {
    root: uast.Node<Annotation>;
}) => void, reportUnexpectedChild: ($: {
    path: string;
    child: uast.Node<Annotation>;
    expected: pr.optional<string[]>;
}) => void, reportMissingToken: ($: {
    parentAnnotation: Annotation;
    path: string;
    kindNameOptions: string[];
}) => void): void;
