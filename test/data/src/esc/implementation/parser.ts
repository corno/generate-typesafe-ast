import * as pr from "pareto-runtime"
import * as tast from "../../interface/types/ts_api"
import * as uast from "../../interface/types/uast"

export function parse<Annotation>(
    $: uast.TUntypedNode<Annotation>,
    $i: {
        callback: ($: tast.TRoot<Annotation>) => void,
        reportUnexpectedRoot: ($: { root: uast.TUntypedNode<Annotation>, }) => void,
        reportUnexpectedChild: ($: { path: string, child: uast.TUntypedNode<Annotation>, expected: pr.optional<string[]> }) => void,
        reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
    },
): void {
    const $x = $i
    function Gblock(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGblock<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gblock",
                kindNameOptions: [ "Block"],
            })
            return
        }
        if (currentChild.kindName !== "Block") {
            $x.reportUnexpectedChild({
                path: "Gblock",
                child: currentChild,
                expected: ["Block"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGblock$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const elements: tast.TVTGblock$<Annotation>[] = []
            const processElement = () => {
                Gstatement(node, children, ($) => {
                    elements.push($)
                })
            }
            arrayLoop: while (true) {
                if (children.length === 0) {
                    break arrayLoop
                } else {
                    nextChild = children[children.length - 1]
                    switch (nextChild.kindName) {
                        case "Block":
                            processElement()
                            break
                        case "BreakStatement":
                            processElement()
                            break
                        case "ExportDeclaration":
                            processElement()
                            break
                        case "ExpressionStatement":
                            processElement()
                            break
                        case "ForStatement":
                            processElement()
                            break
                        case "FunctionDeclaration":
                            processElement()
                            break
                        case "IfStatement":
                            processElement()
                            break
                        case "ImportDeclaration":
                            processElement()
                            break
                        case "InterfaceDeclaration":
                            processElement()
                            break
                        case "LabeledStatement":
                            processElement()
                            break
                        case "ReturnStatement":
                            processElement()
                            break
                        case "SwitchStatement":
                            processElement()
                            break
                        case "ThrowStatement":
                            processElement()
                            break
                        case "TryStatement":
                            processElement()
                            break
                        case "TypeAliasDeclaration":
                            processElement()
                            break
                        case "VariableStatement":
                            processElement()
                            break
                        case "WhileStatement":
                            processElement()
                            break
                        default: break arrayLoop
                    }
                }
            }
            pr.cc(elements, ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "Gblock$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    function Gexpression(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGexpression<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gexpression = ($: tast.TVTGexpression<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gexpression",
                kindNameOptions: ["ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_arrayLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_arrayLiteral",
                        kindNameOptions: [ "ArrayLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayLiteralExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_arrayLiteral",
                        child: currentChild,
                        expected: ["ArrayLiteralExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_arrayLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements: tast.TVTGexpression_arrayLiteral$<Annotation>[] = []
                    const processElement = () => {
                        Gexpression(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "ArrayLiteralExpression":
                                    processElement()
                                    break
                                case "ArrowFunction":
                                    processElement()
                                    break
                                case "BinaryExpression":
                                    processElement()
                                    break
                                case "CallExpression":
                                    processElement()
                                    break
                                case "ConditionalExpression":
                                    processElement()
                                    break
                                case "ElementAccessExpression":
                                    processElement()
                                    break
                                case "FalseKeyword":
                                    processElement()
                                    break
                                case "Identifier":
                                    processElement()
                                    break
                                case "NewExpression":
                                    processElement()
                                    break
                                case "NoSubstitutionTemplateLiteral":
                                    processElement()
                                    break
                                case "NumericLiteral":
                                    processElement()
                                    break
                                case "NullKeyword":
                                    processElement()
                                    break
                                case "ObjectLiteralExpression":
                                    processElement()
                                    break
                                case "ParenthesizedExpression":
                                    processElement()
                                    break
                                case "PostfixUnaryExpression":
                                    processElement()
                                    break
                                case "PrefixUnaryExpression":
                                    processElement()
                                    break
                                case "PropertyAccessExpression":
                                    processElement()
                                    break
                                case "StringLiteral":
                                    processElement()
                                    break
                                case "TemplateExpression":
                                    processElement()
                                    break
                                case "TrueKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_arrayLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["arrayLiteral", $])
                    }
                )
            }
            const choose_arrowFunction = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_arrowFunction",
                        kindNameOptions: [ "ArrowFunction"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrowFunction") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_arrowFunction",
                        child: currentChild,
                        expected: ["ArrowFunction"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_arrowFunction$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGexpression_arrowFunction$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGexpression_arrowFunction$_parameters<Annotation>[] = []
                    const processElement = () => {
                        Gparameter(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "Parameter":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _parameters = $
                        let optional: null | tast.TVTGexpression_arrowFunction$_returnType<Annotation> = null
                        const setOptional = () => {
                            Gtype(node, children, ($) => {
                                optional = $
                            })
                        }
                        if (children.length === 0) {} else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "AnyKeyword":
                                    setOptional()
                                    break
                                case "ArrayType":
                                    setOptional()
                                    break
                                case "BooleanKeyword":
                                    setOptional()
                                    break
                                case "FunctionType":
                                    setOptional()
                                    break
                                case "LiteralType":
                                    setOptional()
                                    break
                                case "ParenthesizedType":
                                    setOptional()
                                    break
                                case "NeverKeyword":
                                    setOptional()
                                    break
                                case "NumberKeyword":
                                    setOptional()
                                    break
                                case "OptionalType":
                                    setOptional()
                                    break
                                case "TupleType":
                                    setOptional()
                                    break
                                case "TypeLiteral":
                                    setOptional()
                                    break
                                case "StringKeyword":
                                    setOptional()
                                    break
                                case "TypeReference":
                                    setOptional()
                                    break
                                case "UndefinedKeyword":
                                    setOptional()
                                    break
                                case "UnionType":
                                    setOptional()
                                    break
                                case "VoidKeyword":
                                    setOptional()
                                    break
                            }
                        }
                        pr.cc(optional, ($) => {
                            const _returnType = $
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                    kindNameOptions: [ "EqualsGreaterThanToken"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "EqualsGreaterThanToken") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                    child: currentChild,
                                    expected: ["EqualsGreaterThanToken"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback($.annotation)
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_arrowFunction$_equalsGreaterThan$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    const _equalsGreaterThan = $
                                    const choiceEnd_Gexpression_arrowFunction$_implementation = ($: tast.TVTGexpression_arrowFunction$_implementation<Annotation>) => {
                                        const _implementation = $
                                        sequenceEnd({
                                            "parameters": _parameters,
                                            "returnType": _returnType,
                                            "equalsGreaterThan": _equalsGreaterThan,
                                            "implementation": _implementation,
                                        })
                                    }
                                    if (children.length === 0) {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Gexpression_arrowFunction$_implementation",
                                            kindNameOptions: ["Block", "ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
                                        })
                                        return
                                    } else {
                                        nextChild = children[children.length - 1]
                                        const choose_block = () => {
                                            Gblock(node, children, ($) => {
                                                choiceEnd_Gexpression_arrowFunction$_implementation(["block", $])
                                            })
                                        }
                                        const choose_expression = () => {
                                            Gexpression(node, children, ($) => {
                                                choiceEnd_Gexpression_arrowFunction$_implementation(["expression", $])
                                            })
                                        }
                                        switch (nextChild.kindName) {
                                            case "Block": {
                                                choose_block()
                                                break
                                            }
                                            case "ArrayLiteralExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "ArrowFunction": {
                                                choose_expression()
                                                break
                                            }
                                            case "BinaryExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "CallExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "ConditionalExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "ElementAccessExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "FalseKeyword": {
                                                choose_expression()
                                                break
                                            }
                                            case "Identifier": {
                                                choose_expression()
                                                break
                                            }
                                            case "NewExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "NoSubstitutionTemplateLiteral": {
                                                choose_expression()
                                                break
                                            }
                                            case "NumericLiteral": {
                                                choose_expression()
                                                break
                                            }
                                            case "NullKeyword": {
                                                choose_expression()
                                                break
                                            }
                                            case "ObjectLiteralExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "ParenthesizedExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "PostfixUnaryExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "PrefixUnaryExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "PropertyAccessExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "StringLiteral": {
                                                choose_expression()
                                                break
                                            }
                                            case "TemplateExpression": {
                                                choose_expression()
                                                break
                                            }
                                            case "TrueKeyword": {
                                                choose_expression()
                                                break
                                            }
                                            default: {
                                                $x.reportUnexpectedChild({
                                                    path: "Gexpression_arrowFunction$_implementation",
                                                    child: nextChild,
                                                    expected: ["Block", "ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
                                                })
                                            }
                                        }
                                    }
                                }
                            )
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_arrowFunction$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["arrowFunction", $])
                    }
                )
            }
            const choose_binary = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_binary",
                        kindNameOptions: [ "BinaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "BinaryExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_binary",
                        child: currentChild,
                        expected: ["BinaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_binary$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGexpression_binary$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _leftHandSide = $
                        const choiceEnd_Gexpression_binary$_operator = ($: tast.TVTGexpression_binary$_operator<Annotation>) => {
                            const _operator = $
                            Gexpression(node, children, ($) => {
                                const _rightHandSide = $
                                sequenceEnd({
                                    "leftHandSide": _leftHandSide,
                                    "operator": _operator,
                                    "rightHandSide": _rightHandSide,
                                })
                            })
                        }
                        if (children.length === 0) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gexpression_binary$_operator",
                                kindNameOptions: ["AmpersandAmpersandToken", "BarBarToken", "EqualsToken", "EqualsEqualsEqualsToken", "ExclamationEqualsEqualsToken", "GreaterThanToken", "LessThanToken", "MinusToken", "MinusEqualsToken", "PlusToken", "PlusEqualsToken"],
                            })
                            return
                        } else {
                            nextChild = children[children.length - 1]
                            const choose_ampersandAmpersand = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_ampersandAmpersand",
                                        kindNameOptions: [ "AmpersandAmpersandToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "AmpersandAmpersandToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_ampersandAmpersand",
                                        child: currentChild,
                                        expected: ["AmpersandAmpersandToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_ampersandAmpersand$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["ampersandAmpersand", $])
                                    }
                                )
                            }
                            const choose_barBar = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_barBar",
                                        kindNameOptions: [ "BarBarToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "BarBarToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_barBar",
                                        child: currentChild,
                                        expected: ["BarBarToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_barBar$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_barBar$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["barBar", $])
                                    }
                                )
                            }
                            const choose_equals = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_equals",
                                        kindNameOptions: [ "EqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "EqualsToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_equals",
                                        child: currentChild,
                                        expected: ["EqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_equals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_equals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["equals", $])
                                    }
                                )
                            }
                            const choose_equalsEqualsEquals = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                        kindNameOptions: [ "EqualsEqualsEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "EqualsEqualsEqualsToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                        child: currentChild,
                                        expected: ["EqualsEqualsEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_equalsEqualsEquals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["equalsEqualsEquals", $])
                                    }
                                )
                            }
                            const choose_exclamationEqualsEquals = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                        kindNameOptions: [ "ExclamationEqualsEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "ExclamationEqualsEqualsToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                        child: currentChild,
                                        expected: ["ExclamationEqualsEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_exclamationEqualsEquals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["exclamationEqualsEquals", $])
                                    }
                                )
                            }
                            const choose_greaterThan = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_greaterThan",
                                        kindNameOptions: [ "GreaterThanToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "GreaterThanToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_greaterThan",
                                        child: currentChild,
                                        expected: ["GreaterThanToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_greaterThan$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_greaterThan$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["greaterThan", $])
                                    }
                                )
                            }
                            const choose_lessThan = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_lessThan",
                                        kindNameOptions: [ "LessThanToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "LessThanToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_lessThan",
                                        child: currentChild,
                                        expected: ["LessThanToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_lessThan$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_lessThan$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["lessThan", $])
                                    }
                                )
                            }
                            const choose_minus = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_minus",
                                        kindNameOptions: [ "MinusToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "MinusToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_minus",
                                        child: currentChild,
                                        expected: ["MinusToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_minus$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_minus$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["minus", $])
                                    }
                                )
                            }
                            const choose_minusEquals = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_minusEquals",
                                        kindNameOptions: [ "MinusEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "MinusEqualsToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_minusEquals",
                                        child: currentChild,
                                        expected: ["MinusEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_minusEquals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_minusEquals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["minusEquals", $])
                                    }
                                )
                            }
                            const choose_plus = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_plus",
                                        kindNameOptions: [ "PlusToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "PlusToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_plus",
                                        child: currentChild,
                                        expected: ["PlusToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_plus$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_plus$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["plus", $])
                                    }
                                )
                            }
                            const choose_plusEquals = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_plusEquals",
                                        kindNameOptions: [ "PlusEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "PlusEqualsToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_plusEquals",
                                        child: currentChild,
                                        expected: ["PlusEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_binary$_operator_plusEquals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_plusEquals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression_binary$_operator(["plusEquals", $])
                                    }
                                )
                            }
                            switch (nextChild.kindName) {
                                case "AmpersandAmpersandToken": {
                                    choose_ampersandAmpersand()
                                    break
                                }
                                case "BarBarToken": {
                                    choose_barBar()
                                    break
                                }
                                case "EqualsToken": {
                                    choose_equals()
                                    break
                                }
                                case "EqualsEqualsEqualsToken": {
                                    choose_equalsEqualsEquals()
                                    break
                                }
                                case "ExclamationEqualsEqualsToken": {
                                    choose_exclamationEqualsEquals()
                                    break
                                }
                                case "GreaterThanToken": {
                                    choose_greaterThan()
                                    break
                                }
                                case "LessThanToken": {
                                    choose_lessThan()
                                    break
                                }
                                case "MinusToken": {
                                    choose_minus()
                                    break
                                }
                                case "MinusEqualsToken": {
                                    choose_minusEquals()
                                    break
                                }
                                case "PlusToken": {
                                    choose_plus()
                                    break
                                }
                                case "PlusEqualsToken": {
                                    choose_plusEquals()
                                    break
                                }
                                default: {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator",
                                        child: nextChild,
                                        expected: ["AmpersandAmpersandToken", "BarBarToken", "EqualsToken", "EqualsEqualsEqualsToken", "ExclamationEqualsEqualsToken", "GreaterThanToken", "LessThanToken", "MinusToken", "MinusEqualsToken", "PlusToken", "PlusEqualsToken"],
                                    })
                                }
                            }
                        }
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_binary$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["binary", $])
                    }
                )
            }
            const choose_call = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_call",
                        kindNameOptions: [ "CallExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "CallExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_call",
                        child: currentChild,
                        expected: ["CallExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_call$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGexpression_call$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _function = $
                        const elements: tast.TVTGexpression_call$_typeParameters<Annotation>[] = []
                        const processElement = () => {
                            Gtype(node, children, ($) => {
                                elements.push($)
                            })
                        }
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop
                            } else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "AnyKeyword":
                                        processElement()
                                        break
                                    case "ArrayType":
                                        processElement()
                                        break
                                    case "BooleanKeyword":
                                        processElement()
                                        break
                                    case "FunctionType":
                                        processElement()
                                        break
                                    case "LiteralType":
                                        processElement()
                                        break
                                    case "ParenthesizedType":
                                        processElement()
                                        break
                                    case "NeverKeyword":
                                        processElement()
                                        break
                                    case "NumberKeyword":
                                        processElement()
                                        break
                                    case "OptionalType":
                                        processElement()
                                        break
                                    case "TupleType":
                                        processElement()
                                        break
                                    case "TypeLiteral":
                                        processElement()
                                        break
                                    case "StringKeyword":
                                        processElement()
                                        break
                                    case "TypeReference":
                                        processElement()
                                        break
                                    case "UndefinedKeyword":
                                        processElement()
                                        break
                                    case "UnionType":
                                        processElement()
                                        break
                                    case "VoidKeyword":
                                        processElement()
                                        break
                                    default: break arrayLoop
                                }
                            }
                        }
                        pr.cc(elements, ($) => {
                            const _typeParameters = $
                            const elements: tast.TVTGexpression_call$_parameters<Annotation>[] = []
                            const processElement = () => {
                                Gexpression(node, children, ($) => {
                                    elements.push($)
                                })
                            }
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop
                                } else {
                                    nextChild = children[children.length - 1]
                                    switch (nextChild.kindName) {
                                        case "ArrayLiteralExpression":
                                            processElement()
                                            break
                                        case "ArrowFunction":
                                            processElement()
                                            break
                                        case "BinaryExpression":
                                            processElement()
                                            break
                                        case "CallExpression":
                                            processElement()
                                            break
                                        case "ConditionalExpression":
                                            processElement()
                                            break
                                        case "ElementAccessExpression":
                                            processElement()
                                            break
                                        case "FalseKeyword":
                                            processElement()
                                            break
                                        case "Identifier":
                                            processElement()
                                            break
                                        case "NewExpression":
                                            processElement()
                                            break
                                        case "NoSubstitutionTemplateLiteral":
                                            processElement()
                                            break
                                        case "NumericLiteral":
                                            processElement()
                                            break
                                        case "NullKeyword":
                                            processElement()
                                            break
                                        case "ObjectLiteralExpression":
                                            processElement()
                                            break
                                        case "ParenthesizedExpression":
                                            processElement()
                                            break
                                        case "PostfixUnaryExpression":
                                            processElement()
                                            break
                                        case "PrefixUnaryExpression":
                                            processElement()
                                            break
                                        case "PropertyAccessExpression":
                                            processElement()
                                            break
                                        case "StringLiteral":
                                            processElement()
                                            break
                                        case "TemplateExpression":
                                            processElement()
                                            break
                                        case "TrueKeyword":
                                            processElement()
                                            break
                                        default: break arrayLoop
                                    }
                                }
                            }
                            pr.cc(elements, ($) => {
                                const _parameters = $
                                sequenceEnd({
                                    "function": _function,
                                    "typeParameters": _typeParameters,
                                    "parameters": _parameters,
                                })
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_call$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["call", $])
                    }
                )
            }
            const choose_conditional = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_conditional",
                        kindNameOptions: [ "ConditionalExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ConditionalExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_conditional",
                        child: currentChild,
                        expected: ["ConditionalExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_conditional$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGexpression_conditional$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _test = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gexpression_conditional$_questionToken",
                                kindNameOptions: [ "QuestionToken"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "QuestionToken") {
                            $x.reportUnexpectedChild({
                                path: "Gexpression_conditional$_questionToken",
                                child: currentChild,
                                expected: ["QuestionToken"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGexpression_conditional$_questionToken$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            callback($.annotation)
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_conditional$_questionToken$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
                            currentChild,
                            ($) => {
                                const _questionToken = $
                                Gexpression(node, children, ($) => {
                                    const _ifExpression = $
                                    currentChild = children.pop()
                                    if (currentChild === undefined) {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Gexpression_conditional$_colonToken",
                                            kindNameOptions: [ "ColonToken"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "ColonToken") {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_conditional$_colonToken",
                                            child: currentChild,
                                            expected: ["ColonToken"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.TUntypedNode<Annotation>,
                                        callback: ($: tast.TNGexpression_conditional$_colonToken$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.TUntypedNode<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        callback($.annotation)
                                        if (children.length > 0) {
                                            $x.reportUnexpectedChild({
                                                path: "Gexpression_conditional$_colonToken$",
                                                child: children[children.length - 1],
                                                expected: null,
                                            })
                                            return
                                        }
                                    })(
                                        currentChild,
                                        ($) => {
                                            const _colonToken = $
                                            Gexpression(node, children, ($) => {
                                                const _elseExpression = $
                                                sequenceEnd({
                                                    "test": _test,
                                                    "questionToken": _questionToken,
                                                    "ifExpression": _ifExpression,
                                                    "colonToken": _colonToken,
                                                    "elseExpression": _elseExpression,
                                                })
                                            })
                                        }
                                    )
                                })
                            }
                        )
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_conditional$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["conditional", $])
                    }
                )
            }
            const choose_elementAccess = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_elementAccess",
                        kindNameOptions: [ "ElementAccessExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ElementAccessExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_elementAccess",
                        child: currentChild,
                        expected: ["ElementAccessExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_elementAccess$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGexpression_elementAccess$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _array = $
                        Gexpression(node, children, ($) => {
                            const _element = $
                            sequenceEnd({
                                "array": _array,
                                "element": _element,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_elementAccess$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["elementAccess", $])
                    }
                )
            }
            const choose_false = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_false",
                        kindNameOptions: [ "FalseKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "FalseKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_false",
                        child: currentChild,
                        expected: ["FalseKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_false$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_false$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["false", $])
                    }
                )
            }
            const choose_identifier = () => {
                Gidentifier(node, children, ($) => {
                    choiceEnd_Gexpression(["identifier", $])
                })
            }
            const choose_new = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_new",
                        kindNameOptions: [ "NewExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "NewExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_new",
                        child: currentChild,
                        expected: ["NewExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_new$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGexpression_new$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _class = $
                        const elements: tast.TVTGexpression_new$_parameters<Annotation>[] = []
                        const processElement = () => {
                            Gexpression(node, children, ($) => {
                                elements.push($)
                            })
                        }
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop
                            } else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "ArrayLiteralExpression":
                                        processElement()
                                        break
                                    case "ArrowFunction":
                                        processElement()
                                        break
                                    case "BinaryExpression":
                                        processElement()
                                        break
                                    case "CallExpression":
                                        processElement()
                                        break
                                    case "ConditionalExpression":
                                        processElement()
                                        break
                                    case "ElementAccessExpression":
                                        processElement()
                                        break
                                    case "FalseKeyword":
                                        processElement()
                                        break
                                    case "Identifier":
                                        processElement()
                                        break
                                    case "NewExpression":
                                        processElement()
                                        break
                                    case "NoSubstitutionTemplateLiteral":
                                        processElement()
                                        break
                                    case "NumericLiteral":
                                        processElement()
                                        break
                                    case "NullKeyword":
                                        processElement()
                                        break
                                    case "ObjectLiteralExpression":
                                        processElement()
                                        break
                                    case "ParenthesizedExpression":
                                        processElement()
                                        break
                                    case "PostfixUnaryExpression":
                                        processElement()
                                        break
                                    case "PrefixUnaryExpression":
                                        processElement()
                                        break
                                    case "PropertyAccessExpression":
                                        processElement()
                                        break
                                    case "StringLiteral":
                                        processElement()
                                        break
                                    case "TemplateExpression":
                                        processElement()
                                        break
                                    case "TrueKeyword":
                                        processElement()
                                        break
                                    default: break arrayLoop
                                }
                            }
                        }
                        pr.cc(elements, ($) => {
                            const _parameters = $
                            sequenceEnd({
                                "class": _class,
                                "parameters": _parameters,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_new$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["new", $])
                    }
                )
            }
            const choose_noSubstitutionTemplateLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_noSubstitutionTemplateLiteral",
                        kindNameOptions: [ "NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NoSubstitutionTemplateLiteral") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_noSubstitutionTemplateLiteral",
                        child: currentChild,
                        expected: ["NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_noSubstitutionTemplateLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["noSubstitutionTemplateLiteral", $])
                    }
                )
            }
            const choose_numericLiteral = () => {
                GnumericLiteral(node, children, ($) => {
                    choiceEnd_Gexpression(["numericLiteral", $])
                })
            }
            const choose_nullKeyword = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_nullKeyword",
                        kindNameOptions: [ "NullKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NullKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_nullKeyword",
                        child: currentChild,
                        expected: ["NullKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_nullKeyword$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_nullKeyword$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["nullKeyword", $])
                    }
                )
            }
            const choose_objectLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_objectLiteral",
                        kindNameOptions: [ "ObjectLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ObjectLiteralExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_objectLiteral",
                        child: currentChild,
                        expected: ["ObjectLiteralExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_objectLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements: tast.TVTGexpression_objectLiteral$<Annotation>[] = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gexpression_objectLiteral$",
                                kindNameOptions: [ "PropertyAssignment"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "PropertyAssignment") {
                            $x.reportUnexpectedChild({
                                path: "Gexpression_objectLiteral$",
                                child: currentChild,
                                expected: ["PropertyAssignment"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGexpression_objectLiteral$$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                            const sequenceEnd = ($: tast.TVTGexpression_objectLiteral$$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            const choiceEnd_Gexpression_objectLiteral$$_name = ($: tast.TVTGexpression_objectLiteral$$_name<Annotation>) => {
                                const _name = $
                                Gexpression(node, children, ($) => {
                                    const _expression = $
                                    sequenceEnd({
                                        "name": _name,
                                        "expression": _expression,
                                    })
                                })
                            }
                            if (children.length === 0) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gexpression_objectLiteral$$_name",
                                    kindNameOptions: ["Identifier", "NumericLiteral", "StringLiteral"],
                                })
                                return
                            } else {
                                nextChild = children[children.length - 1]
                                const choose_identifier = () => {
                                    Gidentifier(node, children, ($) => {
                                        choiceEnd_Gexpression_objectLiteral$$_name(["identifier", $])
                                    })
                                }
                                const choose_numericLiteral = () => {
                                    GnumericLiteral(node, children, ($) => {
                                        choiceEnd_Gexpression_objectLiteral$$_name(["numericLiteral", $])
                                    })
                                }
                                const choose_stringLiteral = () => {
                                    GstringLiteral(node, children, ($) => {
                                        choiceEnd_Gexpression_objectLiteral$$_name(["stringLiteral", $])
                                    })
                                }
                                switch (nextChild.kindName) {
                                    case "Identifier": {
                                        choose_identifier()
                                        break
                                    }
                                    case "NumericLiteral": {
                                        choose_numericLiteral()
                                        break
                                    }
                                    case "StringLiteral": {
                                        choose_stringLiteral()
                                        break
                                    }
                                    default: {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_objectLiteral$$_name",
                                            child: nextChild,
                                            expected: ["Identifier", "NumericLiteral", "StringLiteral"],
                                        })
                                    }
                                }
                            }
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_objectLiteral$$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
                            currentChild,
                            ($) => {
                                elements.push($)
                            }
                        )
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "PropertyAssignment":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_objectLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["objectLiteral", $])
                    }
                )
            }
            const choose_parenthesizedExpression = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_parenthesizedExpression",
                        kindNameOptions: [ "ParenthesizedExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ParenthesizedExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_parenthesizedExpression",
                        child: currentChild,
                        expected: ["ParenthesizedExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_parenthesizedExpression$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_parenthesizedExpression$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["parenthesizedExpression", $])
                    }
                )
            }
            const choose_postfixUnary = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_postfixUnary",
                        kindNameOptions: [ "PostfixUnaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "PostfixUnaryExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_postfixUnary",
                        child: currentChild,
                        expected: ["PostfixUnaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_postfixUnary$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_postfixUnary$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["postfixUnary", $])
                    }
                )
            }
            const choose_prefixUnary = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_prefixUnary",
                        kindNameOptions: [ "PrefixUnaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "PrefixUnaryExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_prefixUnary",
                        child: currentChild,
                        expected: ["PrefixUnaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_prefixUnary$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_prefixUnary$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["prefixUnary", $])
                    }
                )
            }
            const choose_propertyAccess = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_propertyAccess",
                        kindNameOptions: [ "PropertyAccessExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "PropertyAccessExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_propertyAccess",
                        child: currentChild,
                        expected: ["PropertyAccessExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_propertyAccess$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGexpression_propertyAccess$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _object = $
                        Gexpression(node, children, ($) => {
                            const _property = $
                            sequenceEnd({
                                "object": _object,
                                "property": _property,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_propertyAccess$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["propertyAccess", $])
                    }
                )
            }
            const choose_stringLiteral = () => {
                GstringLiteral(node, children, ($) => {
                    choiceEnd_Gexpression(["stringLiteral", $])
                })
            }
            const choose_template = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_template",
                        kindNameOptions: [ "TemplateExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "TemplateExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_template",
                        child: currentChild,
                        expected: ["TemplateExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_template$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGexpression_template$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gexpression_template$_head",
                            kindNameOptions: [ "TemplateHead"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "TemplateHead") {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_template$_head",
                            child: currentChild,
                            expected: ["TemplateHead"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGexpression_template$_head$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        callback({
                            annotation: $.annotation,
                            value: $.value
                        })
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "Gexpression_template$_head$",
                                child: children[children.length - 1],
                                expected: null,
                            })
                            return
                        }
                    })(
                        currentChild,
                        ($) => {
                            const _head = $
                            const elements: tast.TVTGexpression_template$_spans<Annotation>[] = []
                            const processElement = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_template$_spans",
                                        kindNameOptions: [ "TemplateSpan"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "TemplateSpan") {
                                    $x.reportUnexpectedChild({
                                        path: "Gexpression_template$_spans",
                                        child: currentChild,
                                        expected: ["TemplateSpan"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGexpression_template$_spans$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const sequenceEnd = ($: tast.TVTGexpression_template$_spans$<Annotation>) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _expression = $
                                        const choiceEnd_Gexpression_template$_spans$_x = ($: tast.TVTGexpression_template$_spans$_x<Annotation>) => {
                                            const _x = $
                                            sequenceEnd({
                                                "expression": _expression,
                                                "x": _x,
                                            })
                                        }
                                        if (children.length === 0) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gexpression_template$_spans$_x",
                                                kindNameOptions: ["TemplateMiddle", "TemplateTail"],
                                            })
                                            return
                                        } else {
                                            nextChild = children[children.length - 1]
                                            const choose_middle = () => {
                                                currentChild = children.pop()
                                                if (currentChild === undefined) {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "Gexpression_template$_spans$_x_middle",
                                                        kindNameOptions: [ "TemplateMiddle"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "TemplateMiddle") {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gexpression_template$_spans$_x_middle",
                                                        child: currentChild,
                                                        expected: ["TemplateMiddle"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.TUntypedNode<Annotation>,
                                                    callback: ($: tast.TNGexpression_template$_spans$_x_middle$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children: uast.TUntypedNode<Annotation>[] = []
                                                    $.children.forEach(($) => { children.push($) })
                                                    children.reverse()
                                                    callback({
                                                        annotation: $.annotation,
                                                        value: $.value
                                                    })
                                                    if (children.length > 0) {
                                                        $x.reportUnexpectedChild({
                                                            path: "Gexpression_template$_spans$_x_middle$",
                                                            child: children[children.length - 1],
                                                            expected: null,
                                                        })
                                                        return
                                                    }
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        choiceEnd_Gexpression_template$_spans$_x(["middle", $])
                                                    }
                                                )
                                            }
                                            const choose_tail = () => {
                                                currentChild = children.pop()
                                                if (currentChild === undefined) {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "Gexpression_template$_spans$_x_tail",
                                                        kindNameOptions: [ "TemplateTail"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "TemplateTail") {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gexpression_template$_spans$_x_tail",
                                                        child: currentChild,
                                                        expected: ["TemplateTail"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.TUntypedNode<Annotation>,
                                                    callback: ($: tast.TNGexpression_template$_spans$_x_tail$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children: uast.TUntypedNode<Annotation>[] = []
                                                    $.children.forEach(($) => { children.push($) })
                                                    children.reverse()
                                                    callback({
                                                        annotation: $.annotation,
                                                        value: $.value
                                                    })
                                                    if (children.length > 0) {
                                                        $x.reportUnexpectedChild({
                                                            path: "Gexpression_template$_spans$_x_tail$",
                                                            child: children[children.length - 1],
                                                            expected: null,
                                                        })
                                                        return
                                                    }
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        choiceEnd_Gexpression_template$_spans$_x(["tail", $])
                                                    }
                                                )
                                            }
                                            switch (nextChild.kindName) {
                                                case "TemplateMiddle": {
                                                    choose_middle()
                                                    break
                                                }
                                                case "TemplateTail": {
                                                    choose_tail()
                                                    break
                                                }
                                                default: {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gexpression_template$_spans$_x",
                                                        child: nextChild,
                                                        expected: ["TemplateMiddle", "TemplateTail"],
                                                    })
                                                }
                                            }
                                        }
                                    })
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_template$_spans$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        elements.push($)
                                    }
                                )
                            }
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop
                                } else {
                                    nextChild = children[children.length - 1]
                                    switch (nextChild.kindName) {
                                        case "TemplateSpan":
                                            processElement()
                                            break
                                        default: break arrayLoop
                                    }
                                }
                            }
                            pr.cc(elements, ($) => {
                                const _spans = $
                                sequenceEnd({
                                    "head": _head,
                                    "spans": _spans,
                                })
                            })
                        }
                    )
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_template$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["template", $])
                    }
                )
            }
            const choose_true = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_true",
                        kindNameOptions: [ "TrueKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "TrueKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gexpression_true",
                        child: currentChild,
                        expected: ["TrueKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGexpression_true$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gexpression_true$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["true", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "ArrayLiteralExpression": {
                    choose_arrayLiteral()
                    break
                }
                case "ArrowFunction": {
                    choose_arrowFunction()
                    break
                }
                case "BinaryExpression": {
                    choose_binary()
                    break
                }
                case "CallExpression": {
                    choose_call()
                    break
                }
                case "ConditionalExpression": {
                    choose_conditional()
                    break
                }
                case "ElementAccessExpression": {
                    choose_elementAccess()
                    break
                }
                case "FalseKeyword": {
                    choose_false()
                    break
                }
                case "Identifier": {
                    choose_identifier()
                    break
                }
                case "NewExpression": {
                    choose_new()
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    choose_noSubstitutionTemplateLiteral()
                    break
                }
                case "NumericLiteral": {
                    choose_numericLiteral()
                    break
                }
                case "NullKeyword": {
                    choose_nullKeyword()
                    break
                }
                case "ObjectLiteralExpression": {
                    choose_objectLiteral()
                    break
                }
                case "ParenthesizedExpression": {
                    choose_parenthesizedExpression()
                    break
                }
                case "PostfixUnaryExpression": {
                    choose_postfixUnary()
                    break
                }
                case "PrefixUnaryExpression": {
                    choose_prefixUnary()
                    break
                }
                case "PropertyAccessExpression": {
                    choose_propertyAccess()
                    break
                }
                case "StringLiteral": {
                    choose_stringLiteral()
                    break
                }
                case "TemplateExpression": {
                    choose_template()
                    break
                }
                case "TrueKeyword": {
                    choose_true()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Gexpression",
                        child: nextChild,
                        expected: ["ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
                    })
                }
            }
        }
    }
    function GfunctionDefinition(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGfunctionDefinition<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const sequenceEnd = ($: tast.TVTGfunctionDefinition<Annotation>) => {
            callback($)
        }
        const elements: tast.TVTGfunctionDefinition_typeParameters<Annotation>[] = []
        const processElement = () => {
            GtypeParameter(node, children, ($) => {
                elements.push($)
            })
        }
        arrayLoop: while (true) {
            if (children.length === 0) {
                break arrayLoop
            } else {
                nextChild = children[children.length - 1]
                switch (nextChild.kindName) {
                    case "TypeParameter":
                        processElement()
                        break
                    default: break arrayLoop
                }
            }
        }
        pr.cc(elements, ($) => {
            const _typeParameters = $
            const elements: tast.TVTGfunctionDefinition_parameters<Annotation>[] = []
            const processElement = () => {
                Gparameter(node, children, ($) => {
                    elements.push($)
                })
            }
            arrayLoop: while (true) {
                if (children.length === 0) {
                    break arrayLoop
                } else {
                    nextChild = children[children.length - 1]
                    switch (nextChild.kindName) {
                        case "Parameter":
                            processElement()
                            break
                        default: break arrayLoop
                    }
                }
            }
            pr.cc(elements, ($) => {
                const _parameters = $
                let optional: null | tast.TVTGfunctionDefinition_returnType<Annotation> = null
                const setOptional = () => {
                    Gtype(node, children, ($) => {
                        optional = $
                    })
                }
                if (children.length === 0) {} else {
                    nextChild = children[children.length - 1]
                    switch (nextChild.kindName) {
                        case "AnyKeyword":
                            setOptional()
                            break
                        case "ArrayType":
                            setOptional()
                            break
                        case "BooleanKeyword":
                            setOptional()
                            break
                        case "FunctionType":
                            setOptional()
                            break
                        case "LiteralType":
                            setOptional()
                            break
                        case "ParenthesizedType":
                            setOptional()
                            break
                        case "NeverKeyword":
                            setOptional()
                            break
                        case "NumberKeyword":
                            setOptional()
                            break
                        case "OptionalType":
                            setOptional()
                            break
                        case "TupleType":
                            setOptional()
                            break
                        case "TypeLiteral":
                            setOptional()
                            break
                        case "StringKeyword":
                            setOptional()
                            break
                        case "TypeReference":
                            setOptional()
                            break
                        case "UndefinedKeyword":
                            setOptional()
                            break
                        case "UnionType":
                            setOptional()
                            break
                        case "VoidKeyword":
                            setOptional()
                            break
                    }
                }
                pr.cc(optional, ($) => {
                    const _returnType = $
                    sequenceEnd({
                        "typeParameters": _typeParameters,
                        "parameters": _parameters,
                        "returnType": _returnType,
                    })
                })
            })
        })
    }
    function Gidentifier(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGidentifier<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gidentifier",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            $x.reportUnexpectedChild({
                path: "Gidentifier",
                child: currentChild,
                expected: ["Identifier"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGidentifier$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            callback({
                annotation: $.annotation,
                value: $.value
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "Gidentifier$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    function GidentifierOrStringLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGidentifierOrStringLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_GidentifierOrStringLiteral = ($: tast.TVTGidentifierOrStringLiteral<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GidentifierOrStringLiteral",
                kindNameOptions: ["Identifier", "StringLiteral"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_identifier = () => {
                Gidentifier(node, children, ($) => {
                    choiceEnd_GidentifierOrStringLiteral(["identifier", $])
                })
            }
            const choose_stringLiteral = () => {
                GstringLiteral(node, children, ($) => {
                    choiceEnd_GidentifierOrStringLiteral(["stringLiteral", $])
                })
            }
            switch (nextChild.kindName) {
                case "Identifier": {
                    choose_identifier()
                    break
                }
                case "StringLiteral": {
                    choose_stringLiteral()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "GidentifierOrStringLiteral",
                        child: nextChild,
                        expected: ["Identifier", "StringLiteral"],
                    })
                }
            }
        }
    }
    function Gmodifier(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGmodifier<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gmodifier = ($: tast.TVTGmodifier<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gmodifier",
                kindNameOptions: ["DeclareKeyword", "ExportKeyword", "ReadonlyKeyword"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_declare = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_declare",
                        kindNameOptions: [ "DeclareKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "DeclareKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gmodifier_declare",
                        child: currentChild,
                        expected: ["DeclareKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGmodifier_declare$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gmodifier_declare$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gmodifier(["declare", $])
                    }
                )
            }
            const choose_export = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_export",
                        kindNameOptions: [ "ExportKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "ExportKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gmodifier_export",
                        child: currentChild,
                        expected: ["ExportKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGmodifier_export$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gmodifier_export$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gmodifier(["export", $])
                    }
                )
            }
            const choose_readonly = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_readonly",
                        kindNameOptions: [ "ReadonlyKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "ReadonlyKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gmodifier_readonly",
                        child: currentChild,
                        expected: ["ReadonlyKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGmodifier_readonly$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gmodifier_readonly$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gmodifier(["readonly", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "DeclareKeyword": {
                    choose_declare()
                    break
                }
                case "ExportKeyword": {
                    choose_export()
                    break
                }
                case "ReadonlyKeyword": {
                    choose_readonly()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Gmodifier",
                        child: nextChild,
                        expected: ["DeclareKeyword", "ExportKeyword", "ReadonlyKeyword"],
                    })
                }
            }
        }
    }
    function GnumericLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGnumericLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GnumericLiteral",
                kindNameOptions: [ "NumericLiteral"],
            })
            return
        }
        if (currentChild.kindName !== "NumericLiteral") {
            $x.reportUnexpectedChild({
                path: "GnumericLiteral",
                child: currentChild,
                expected: ["NumericLiteral"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGnumericLiteral$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            callback({
                annotation: $.annotation,
                value: $.value
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "GnumericLiteral$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    function Gparameter(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGparameter<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gparameter",
                kindNameOptions: [ "Parameter"],
            })
            return
        }
        if (currentChild.kindName !== "Parameter") {
            $x.reportUnexpectedChild({
                path: "Gparameter",
                child: currentChild,
                expected: ["Parameter"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGparameter$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTGparameter$<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            Gidentifier(node, children, ($) => {
                const _name = $
                let optional: null | tast.TVTGparameter$_questionToken<Annotation> = null
                const setOptional = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gparameter$_questionToken",
                            kindNameOptions: [ "QuestionToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "QuestionToken") {
                        $x.reportUnexpectedChild({
                            path: "Gparameter$_questionToken",
                            child: currentChild,
                            expected: ["QuestionToken"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGparameter$_questionToken$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        callback($.annotation)
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "Gparameter$_questionToken$",
                                child: children[children.length - 1],
                                expected: null,
                            })
                            return
                        }
                    })(
                        currentChild,
                        ($) => {
                            optional = $
                        }
                    )
                }
                if (children.length === 0) {} else {
                    nextChild = children[children.length - 1]
                    switch (nextChild.kindName) {
                        case "QuestionToken":
                            setOptional()
                            break
                    }
                }
                pr.cc(optional, ($) => {
                    const _questionToken = $
                    let optional: null | tast.TVTGparameter$_type<Annotation> = null
                    const setOptional = () => {
                        Gtype(node, children, ($) => {
                            optional = $
                        })
                    }
                    if (children.length === 0) {} else {
                        nextChild = children[children.length - 1]
                        switch (nextChild.kindName) {
                            case "AnyKeyword":
                                setOptional()
                                break
                            case "ArrayType":
                                setOptional()
                                break
                            case "BooleanKeyword":
                                setOptional()
                                break
                            case "FunctionType":
                                setOptional()
                                break
                            case "LiteralType":
                                setOptional()
                                break
                            case "ParenthesizedType":
                                setOptional()
                                break
                            case "NeverKeyword":
                                setOptional()
                                break
                            case "NumberKeyword":
                                setOptional()
                                break
                            case "OptionalType":
                                setOptional()
                                break
                            case "TupleType":
                                setOptional()
                                break
                            case "TypeLiteral":
                                setOptional()
                                break
                            case "StringKeyword":
                                setOptional()
                                break
                            case "TypeReference":
                                setOptional()
                                break
                            case "UndefinedKeyword":
                                setOptional()
                                break
                            case "UnionType":
                                setOptional()
                                break
                            case "VoidKeyword":
                                setOptional()
                                break
                        }
                    }
                    pr.cc(optional, ($) => {
                        const _type = $
                        sequenceEnd({
                            "name": _name,
                            "questionToken": _questionToken,
                            "type": _type,
                        })
                    })
                })
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "Gparameter$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    function Gstatement(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGstatement<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gstatement = ($: tast.TVTGstatement<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gstatement",
                kindNameOptions: ["Block", "BreakStatement", "ExportDeclaration", "ExpressionStatement", "ForStatement", "FunctionDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TypeAliasDeclaration", "VariableStatement", "WhileStatement"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_block = () => {
                Gblock(node, children, ($) => {
                    choiceEnd_Gstatement(["block", $])
                })
            }
            const choose_break = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_break",
                        kindNameOptions: [ "BreakStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "BreakStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_break",
                        child: currentChild,
                        expected: ["BreakStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_break$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    let optional: null | tast.TVTGstatement_break$<Annotation> = null
                    const setOptional = () => {
                        Gidentifier(node, children, ($) => {
                            optional = $
                        })
                    }
                    if (children.length === 0) {} else {
                        nextChild = children[children.length - 1]
                        switch (nextChild.kindName) {
                            case "Identifier":
                                setOptional()
                                break
                        }
                    }
                    pr.cc(optional, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_break$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["break", $])
                    }
                )
            }
            const choose_export = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_export",
                        kindNameOptions: [ "ExportDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "ExportDeclaration") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_export",
                        child: currentChild,
                        expected: ["ExportDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_export$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    GstringLiteral(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_export$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["export", $])
                    }
                )
            }
            const choose_expression = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_expression",
                        kindNameOptions: [ "ExpressionStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "ExpressionStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_expression",
                        child: currentChild,
                        expected: ["ExpressionStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_expression$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_expression$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["expression", $])
                    }
                )
            }
            const choose_for = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_for",
                        kindNameOptions: [ "ForStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "ForStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_for",
                        child: currentChild,
                        expected: ["ForStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_for$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_for$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    GvariableDeclarationList(node, children, ($) => {
                        const _initializer = $
                        Gexpression(node, children, ($) => {
                            const _condition = $
                            Gexpression(node, children, ($) => {
                                const _incrementer = $
                                Gblock(node, children, ($) => {
                                    const _block = $
                                    sequenceEnd({
                                        "initializer": _initializer,
                                        "condition": _condition,
                                        "incrementer": _incrementer,
                                        "block": _block,
                                    })
                                })
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_for$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["for", $])
                    }
                )
            }
            const choose_function = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_function",
                        kindNameOptions: [ "FunctionDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "FunctionDeclaration") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_function",
                        child: currentChild,
                        expected: ["FunctionDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_function$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_function$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGstatement_function$_modifiers<Annotation>[] = []
                    const processElement = () => {
                        Gmodifier(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement()
                                    break
                                case "ExportKeyword":
                                    processElement()
                                    break
                                case "ReadonlyKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _modifiers = $
                        Gidentifier(node, children, ($) => {
                            const _name = $
                            GfunctionDefinition(node, children, ($) => {
                                const _definition = $
                                let optional: null | tast.TVTGstatement_function$_block<Annotation> = null
                                const setOptional = () => {
                                    Gblock(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                if (children.length === 0) {} else {
                                    nextChild = children[children.length - 1]
                                    switch (nextChild.kindName) {
                                        case "Block":
                                            setOptional()
                                            break
                                    }
                                }
                                pr.cc(optional, ($) => {
                                    const _block = $
                                    sequenceEnd({
                                        "modifiers": _modifiers,
                                        "name": _name,
                                        "definition": _definition,
                                        "block": _block,
                                    })
                                })
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_function$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["function", $])
                    }
                )
            }
            const choose_if = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_if",
                        kindNameOptions: [ "IfStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "IfStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_if",
                        child: currentChild,
                        expected: ["IfStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_if$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_if$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _expression = $
                        Gstatement(node, children, ($) => {
                            const _thenStatement = $
                            let optional: null | tast.TVTGstatement_if$_elseStatement<Annotation> = null
                            const setOptional = () => {
                                Gstatement(node, children, ($) => {
                                    optional = $
                                })
                            }
                            if (children.length === 0) {} else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "Block":
                                        setOptional()
                                        break
                                    case "BreakStatement":
                                        setOptional()
                                        break
                                    case "ExportDeclaration":
                                        setOptional()
                                        break
                                    case "ExpressionStatement":
                                        setOptional()
                                        break
                                    case "ForStatement":
                                        setOptional()
                                        break
                                    case "FunctionDeclaration":
                                        setOptional()
                                        break
                                    case "IfStatement":
                                        setOptional()
                                        break
                                    case "ImportDeclaration":
                                        setOptional()
                                        break
                                    case "InterfaceDeclaration":
                                        setOptional()
                                        break
                                    case "LabeledStatement":
                                        setOptional()
                                        break
                                    case "ReturnStatement":
                                        setOptional()
                                        break
                                    case "SwitchStatement":
                                        setOptional()
                                        break
                                    case "ThrowStatement":
                                        setOptional()
                                        break
                                    case "TryStatement":
                                        setOptional()
                                        break
                                    case "TypeAliasDeclaration":
                                        setOptional()
                                        break
                                    case "VariableStatement":
                                        setOptional()
                                        break
                                    case "WhileStatement":
                                        setOptional()
                                        break
                                }
                            }
                            pr.cc(optional, ($) => {
                                const _elseStatement = $
                                sequenceEnd({
                                    "expression": _expression,
                                    "thenStatement": _thenStatement,
                                    "elseStatement": _elseStatement,
                                })
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_if$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["if", $])
                    }
                )
            }
            const choose_import = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_import",
                        kindNameOptions: [ "ImportDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "ImportDeclaration") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_import",
                        child: currentChild,
                        expected: ["ImportDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_import$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_import$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gstatement_import$_clause",
                            kindNameOptions: [ "ImportClause"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "ImportClause") {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_import$_clause",
                            child: currentChild,
                            expected: ["ImportClause"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGstatement_import$_clause$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const choiceEnd_Gstatement_import$_clause$ = ($: tast.TVTGstatement_import$_clause$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        if (children.length === 0) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gstatement_import$_clause$",
                                kindNameOptions: ["NamespaceImport", "NamedImports"],
                            })
                            return
                        } else {
                            nextChild = children[children.length - 1]
                            const choose_namespace = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gstatement_import$_clause$_namespace",
                                        kindNameOptions: [ "NamespaceImport"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamespaceImport") {
                                    $x.reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$_namespace",
                                        child: currentChild,
                                        expected: ["NamespaceImport"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    Gidentifier(node, children, ($) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    })
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_import$_clause$_namespace$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement_import$_clause$(["namespace", $])
                                    }
                                )
                            }
                            const choose_named = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gstatement_import$_clause$_named",
                                        kindNameOptions: [ "NamedImports"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamedImports") {
                                    $x.reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$_named",
                                        child: currentChild,
                                        expected: ["NamedImports"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGstatement_import$_clause$_named$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const elements: tast.TVTGstatement_import$_clause$_named$<Annotation>[] = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_import$_clause$_named$",
                                                kindNameOptions: [ "ImportSpecifier"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "ImportSpecifier") {
                                            $x.reportUnexpectedChild({
                                                path: "Gstatement_import$_clause$_named$",
                                                child: currentChild,
                                                expected: ["ImportSpecifier"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNGstatement_import$_clause$_named$$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.TUntypedNode<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                            const sequenceEnd = ($: tast.TVTGstatement_import$_clause$_named$$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            Gidentifier(node, children, ($) => {
                                                const _name = $
                                                let optional: null | tast.TVTGstatement_import$_clause$_named$$_as<Annotation> = null
                                                const setOptional = () => {
                                                    Gidentifier(node, children, ($) => {
                                                        optional = $
                                                    })
                                                }
                                                if (children.length === 0) {} else {
                                                    nextChild = children[children.length - 1]
                                                    switch (nextChild.kindName) {
                                                        case "Identifier":
                                                            setOptional()
                                                            break
                                                    }
                                                }
                                                pr.cc(optional, ($) => {
                                                    const _as = $
                                                    sequenceEnd({
                                                        "name": _name,
                                                        "as": _as,
                                                    })
                                                })
                                            })
                                            if (children.length > 0) {
                                                $x.reportUnexpectedChild({
                                                    path: "Gstatement_import$_clause$_named$$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                elements.push($)
                                            }
                                        )
                                    }
                                    arrayLoop: while (true) {
                                        if (children.length === 0) {
                                            break arrayLoop
                                        } else {
                                            nextChild = children[children.length - 1]
                                            switch (nextChild.kindName) {
                                                case "ImportSpecifier":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        }
                                    }
                                    pr.cc(elements, ($) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    })
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_import$_clause$_named$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement_import$_clause$(["named", $])
                                    }
                                )
                            }
                            switch (nextChild.kindName) {
                                case "NamespaceImport": {
                                    choose_namespace()
                                    break
                                }
                                case "NamedImports": {
                                    choose_named()
                                    break
                                }
                                default: {
                                    $x.reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$",
                                        child: nextChild,
                                        expected: ["NamespaceImport", "NamedImports"],
                                    })
                                }
                            }
                        }
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "Gstatement_import$_clause$",
                                child: children[children.length - 1],
                                expected: null,
                            })
                            return
                        }
                    })(
                        currentChild,
                        ($) => {
                            const _clause = $
                            GstringLiteral(node, children, ($) => {
                                const _file = $
                                sequenceEnd({
                                    "clause": _clause,
                                    "file": _file,
                                })
                            })
                        }
                    )
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_import$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["import", $])
                    }
                )
            }
            const choose_interface = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_interface",
                        kindNameOptions: [ "InterfaceDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "InterfaceDeclaration") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_interface",
                        child: currentChild,
                        expected: ["InterfaceDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_interface$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_interface$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGstatement_interface$_modifiers<Annotation>[] = []
                    const processElement = () => {
                        Gmodifier(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement()
                                    break
                                case "ExportKeyword":
                                    processElement()
                                    break
                                case "ReadonlyKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _modifiers = $
                        Gidentifier(node, children, ($) => {
                            const _name = $
                            const elements: tast.TVTGstatement_interface$_typeParameters<Annotation>[] = []
                            const processElement = () => {
                                GtypeParameter(node, children, ($) => {
                                    elements.push($)
                                })
                            }
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop
                                } else {
                                    nextChild = children[children.length - 1]
                                    switch (nextChild.kindName) {
                                        case "TypeParameter":
                                            processElement()
                                            break
                                        default: break arrayLoop
                                    }
                                }
                            }
                            pr.cc(elements, ($) => {
                                const _typeParameters = $
                                const elements: tast.TVTGstatement_interface$_signature<Annotation>[] = []
                                const processElement = () => {
                                    GtypeSignature(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    if (children.length === 0) {
                                        break arrayLoop
                                    } else {
                                        nextChild = children[children.length - 1]
                                        switch (nextChild.kindName) {
                                            case "ConstructSignature":
                                                processElement()
                                                break
                                            case "IndexSignature":
                                                processElement()
                                                break
                                            case "MethodSignature":
                                                processElement()
                                                break
                                            case "PropertySignature":
                                                processElement()
                                                break
                                            default: break arrayLoop
                                        }
                                    }
                                }
                                pr.cc(elements, ($) => {
                                    const _signature = $
                                    sequenceEnd({
                                        "modifiers": _modifiers,
                                        "name": _name,
                                        "typeParameters": _typeParameters,
                                        "signature": _signature,
                                    })
                                })
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_interface$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["interface", $])
                    }
                )
            }
            const choose_labeled = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_labeled",
                        kindNameOptions: [ "LabeledStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "LabeledStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_labeled",
                        child: currentChild,
                        expected: ["LabeledStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_labeled$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_labeled$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _label = $
                        Gstatement(node, children, ($) => {
                            const _statement = $
                            sequenceEnd({
                                "label": _label,
                                "statement": _statement,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_labeled$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["labeled", $])
                    }
                )
            }
            const choose_return = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_return",
                        kindNameOptions: [ "ReturnStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "ReturnStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_return",
                        child: currentChild,
                        expected: ["ReturnStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_return$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    let optional: null | tast.TVTGstatement_return$<Annotation> = null
                    const setOptional = () => {
                        Gexpression(node, children, ($) => {
                            optional = $
                        })
                    }
                    if (children.length === 0) {} else {
                        nextChild = children[children.length - 1]
                        switch (nextChild.kindName) {
                            case "ArrayLiteralExpression":
                                setOptional()
                                break
                            case "ArrowFunction":
                                setOptional()
                                break
                            case "BinaryExpression":
                                setOptional()
                                break
                            case "CallExpression":
                                setOptional()
                                break
                            case "ConditionalExpression":
                                setOptional()
                                break
                            case "ElementAccessExpression":
                                setOptional()
                                break
                            case "FalseKeyword":
                                setOptional()
                                break
                            case "Identifier":
                                setOptional()
                                break
                            case "NewExpression":
                                setOptional()
                                break
                            case "NoSubstitutionTemplateLiteral":
                                setOptional()
                                break
                            case "NumericLiteral":
                                setOptional()
                                break
                            case "NullKeyword":
                                setOptional()
                                break
                            case "ObjectLiteralExpression":
                                setOptional()
                                break
                            case "ParenthesizedExpression":
                                setOptional()
                                break
                            case "PostfixUnaryExpression":
                                setOptional()
                                break
                            case "PrefixUnaryExpression":
                                setOptional()
                                break
                            case "PropertyAccessExpression":
                                setOptional()
                                break
                            case "StringLiteral":
                                setOptional()
                                break
                            case "TemplateExpression":
                                setOptional()
                                break
                            case "TrueKeyword":
                                setOptional()
                                break
                        }
                    }
                    pr.cc(optional, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_return$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["return", $])
                    }
                )
            }
            const choose_switch = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_switch",
                        kindNameOptions: [ "SwitchStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "SwitchStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_switch",
                        child: currentChild,
                        expected: ["SwitchStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_switch$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_switch$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _expression = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gstatement_switch$_caseBlock",
                                kindNameOptions: [ "CaseBlock"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "CaseBlock") {
                            $x.reportUnexpectedChild({
                                path: "Gstatement_switch$_caseBlock",
                                child: currentChild,
                                expected: ["CaseBlock"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGstatement_switch$_caseBlock$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                            const elements: tast.TVTGstatement_switch$_caseBlock$<Annotation>[] = []
                            const processElement = () => {
                                const choiceEnd_Gstatement_switch$_caseBlock$ = ($: tast.TVTGstatement_switch$_caseBlock$<Annotation>) => {
                                    elements.push($)
                                }
                                if (children.length === 0) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gstatement_switch$_caseBlock$",
                                        kindNameOptions: ["CaseClause", "DefaultClause"],
                                    })
                                    return
                                } else {
                                    nextChild = children[children.length - 1]
                                    const choose_case = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_switch$_caseBlock$_case",
                                                kindNameOptions: [ "CaseClause"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "CaseClause") {
                                            $x.reportUnexpectedChild({
                                                path: "Gstatement_switch$_caseBlock$_case",
                                                child: currentChild,
                                                expected: ["CaseClause"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.TUntypedNode<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                            const sequenceEnd = ($: tast.TVTGstatement_switch$_caseBlock$_case$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            Gexpression(node, children, ($) => {
                                                const _case = $
                                                const elements: tast.TVTGstatement_switch$_caseBlock$_case$_statements<Annotation>[] = []
                                                const processElement = () => {
                                                    Gstatement(node, children, ($) => {
                                                        elements.push($)
                                                    })
                                                }
                                                arrayLoop: while (true) {
                                                    if (children.length === 0) {
                                                        break arrayLoop
                                                    } else {
                                                        nextChild = children[children.length - 1]
                                                        switch (nextChild.kindName) {
                                                            case "Block":
                                                                processElement()
                                                                break
                                                            case "BreakStatement":
                                                                processElement()
                                                                break
                                                            case "ExportDeclaration":
                                                                processElement()
                                                                break
                                                            case "ExpressionStatement":
                                                                processElement()
                                                                break
                                                            case "ForStatement":
                                                                processElement()
                                                                break
                                                            case "FunctionDeclaration":
                                                                processElement()
                                                                break
                                                            case "IfStatement":
                                                                processElement()
                                                                break
                                                            case "ImportDeclaration":
                                                                processElement()
                                                                break
                                                            case "InterfaceDeclaration":
                                                                processElement()
                                                                break
                                                            case "LabeledStatement":
                                                                processElement()
                                                                break
                                                            case "ReturnStatement":
                                                                processElement()
                                                                break
                                                            case "SwitchStatement":
                                                                processElement()
                                                                break
                                                            case "ThrowStatement":
                                                                processElement()
                                                                break
                                                            case "TryStatement":
                                                                processElement()
                                                                break
                                                            case "TypeAliasDeclaration":
                                                                processElement()
                                                                break
                                                            case "VariableStatement":
                                                                processElement()
                                                                break
                                                            case "WhileStatement":
                                                                processElement()
                                                                break
                                                            default: break arrayLoop
                                                        }
                                                    }
                                                }
                                                pr.cc(elements, ($) => {
                                                    const _statements = $
                                                    sequenceEnd({
                                                        "case": _case,
                                                        "statements": _statements,
                                                    })
                                                })
                                            })
                                            if (children.length > 0) {
                                                $x.reportUnexpectedChild({
                                                    path: "Gstatement_switch$_caseBlock$_case$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_Gstatement_switch$_caseBlock$(["case", $])
                                            }
                                        )
                                    }
                                    const choose_default = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_switch$_caseBlock$_default",
                                                kindNameOptions: [ "DefaultClause"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "DefaultClause") {
                                            $x.reportUnexpectedChild({
                                                path: "Gstatement_switch$_caseBlock$_default",
                                                child: currentChild,
                                                expected: ["DefaultClause"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.TUntypedNode<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                            const elements: tast.TVTGstatement_switch$_caseBlock$_default$<Annotation>[] = []
                                            const processElement = () => {
                                                Gstatement(node, children, ($) => {
                                                    elements.push($)
                                                })
                                            }
                                            arrayLoop: while (true) {
                                                if (children.length === 0) {
                                                    break arrayLoop
                                                } else {
                                                    nextChild = children[children.length - 1]
                                                    switch (nextChild.kindName) {
                                                        case "Block":
                                                            processElement()
                                                            break
                                                        case "BreakStatement":
                                                            processElement()
                                                            break
                                                        case "ExportDeclaration":
                                                            processElement()
                                                            break
                                                        case "ExpressionStatement":
                                                            processElement()
                                                            break
                                                        case "ForStatement":
                                                            processElement()
                                                            break
                                                        case "FunctionDeclaration":
                                                            processElement()
                                                            break
                                                        case "IfStatement":
                                                            processElement()
                                                            break
                                                        case "ImportDeclaration":
                                                            processElement()
                                                            break
                                                        case "InterfaceDeclaration":
                                                            processElement()
                                                            break
                                                        case "LabeledStatement":
                                                            processElement()
                                                            break
                                                        case "ReturnStatement":
                                                            processElement()
                                                            break
                                                        case "SwitchStatement":
                                                            processElement()
                                                            break
                                                        case "ThrowStatement":
                                                            processElement()
                                                            break
                                                        case "TryStatement":
                                                            processElement()
                                                            break
                                                        case "TypeAliasDeclaration":
                                                            processElement()
                                                            break
                                                        case "VariableStatement":
                                                            processElement()
                                                            break
                                                        case "WhileStatement":
                                                            processElement()
                                                            break
                                                        default: break arrayLoop
                                                    }
                                                }
                                            }
                                            pr.cc(elements, ($) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            })
                                            if (children.length > 0) {
                                                $x.reportUnexpectedChild({
                                                    path: "Gstatement_switch$_caseBlock$_default$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_Gstatement_switch$_caseBlock$(["default", $])
                                            }
                                        )
                                    }
                                    switch (nextChild.kindName) {
                                        case "CaseClause": {
                                            choose_case()
                                            break
                                        }
                                        case "DefaultClause": {
                                            choose_default()
                                            break
                                        }
                                        default: {
                                            $x.reportUnexpectedChild({
                                                path: "Gstatement_switch$_caseBlock$",
                                                child: nextChild,
                                                expected: ["CaseClause", "DefaultClause"],
                                            })
                                        }
                                    }
                                }
                            }
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop
                                } else {
                                    nextChild = children[children.length - 1]
                                    switch (nextChild.kindName) {
                                        case "CaseClause":
                                            processElement()
                                            break
                                        case "DefaultClause":
                                            processElement()
                                            break
                                        default: break arrayLoop
                                    }
                                }
                            }
                            pr.cc(elements, ($) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            })
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_switch$_caseBlock$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
                            currentChild,
                            ($) => {
                                const _caseBlock = $
                                sequenceEnd({
                                    "expression": _expression,
                                    "caseBlock": _caseBlock,
                                })
                            }
                        )
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_switch$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["switch", $])
                    }
                )
            }
            const choose_throw = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_throw",
                        kindNameOptions: [ "ThrowStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "ThrowStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_throw",
                        child: currentChild,
                        expected: ["ThrowStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_throw$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_throw$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["throw", $])
                    }
                )
            }
            const choose_try = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_try",
                        kindNameOptions: [ "TryStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "TryStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_try",
                        child: currentChild,
                        expected: ["TryStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_try$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_try$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gblock(node, children, ($) => {
                        const _block = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gstatement_try$_catchClause",
                                kindNameOptions: [ "CatchClause"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "CatchClause") {
                            $x.reportUnexpectedChild({
                                path: "Gstatement_try$_catchClause",
                                child: currentChild,
                                expected: ["CatchClause"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGstatement_try$_catchClause$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                            const sequenceEnd = ($: tast.TVTGstatement_try$_catchClause$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            GvariableDeclaration(node, children, ($) => {
                                const _variable = $
                                Gblock(node, children, ($) => {
                                    const _block = $
                                    sequenceEnd({
                                        "variable": _variable,
                                        "block": _block,
                                    })
                                })
                            })
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_try$_catchClause$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
                            currentChild,
                            ($) => {
                                const _catchClause = $
                                sequenceEnd({
                                    "block": _block,
                                    "catchClause": _catchClause,
                                })
                            }
                        )
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_try$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["try", $])
                    }
                )
            }
            const choose_typeAlias = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_typeAlias",
                        kindNameOptions: [ "TypeAliasDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeAliasDeclaration") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_typeAlias",
                        child: currentChild,
                        expected: ["TypeAliasDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_typeAlias$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_typeAlias$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGstatement_typeAlias$_modifiers<Annotation>[] = []
                    const processElement = () => {
                        Gmodifier(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement()
                                    break
                                case "ExportKeyword":
                                    processElement()
                                    break
                                case "ReadonlyKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _modifiers = $
                        Gidentifier(node, children, ($) => {
                            const _name = $
                            const elements: tast.TVTGstatement_typeAlias$_typeParameters<Annotation>[] = []
                            const processElement = () => {
                                GtypeParameter(node, children, ($) => {
                                    elements.push($)
                                })
                            }
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop
                                } else {
                                    nextChild = children[children.length - 1]
                                    switch (nextChild.kindName) {
                                        case "TypeParameter":
                                            processElement()
                                            break
                                        default: break arrayLoop
                                    }
                                }
                            }
                            pr.cc(elements, ($) => {
                                const _typeParameters = $
                                Gtype(node, children, ($) => {
                                    const _type = $
                                    sequenceEnd({
                                        "modifiers": _modifiers,
                                        "name": _name,
                                        "typeParameters": _typeParameters,
                                        "type": _type,
                                    })
                                })
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_typeAlias$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["typeAlias", $])
                    }
                )
            }
            const choose_variable = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_variable",
                        kindNameOptions: [ "VariableStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "VariableStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_variable",
                        child: currentChild,
                        expected: ["VariableStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_variable$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_variable$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGstatement_variable$_modifiers<Annotation>[] = []
                    const processElement = () => {
                        Gmodifier(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement()
                                    break
                                case "ExportKeyword":
                                    processElement()
                                    break
                                case "ReadonlyKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _modifiers = $
                        GvariableDeclarationList(node, children, ($) => {
                            const _variableDeclarationList = $
                            sequenceEnd({
                                "modifiers": _modifiers,
                                "variableDeclarationList": _variableDeclarationList,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_variable$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["variable", $])
                    }
                )
            }
            const choose_while = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_while",
                        kindNameOptions: [ "WhileStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "WhileStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gstatement_while",
                        child: currentChild,
                        expected: ["WhileStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstatement_while$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGstatement_while$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _condition = $
                        Gblock(node, children, ($) => {
                            const _block = $
                            sequenceEnd({
                                "condition": _condition,
                                "block": _block,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gstatement_while$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["while", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "Block": {
                    choose_block()
                    break
                }
                case "BreakStatement": {
                    choose_break()
                    break
                }
                case "ExportDeclaration": {
                    choose_export()
                    break
                }
                case "ExpressionStatement": {
                    choose_expression()
                    break
                }
                case "ForStatement": {
                    choose_for()
                    break
                }
                case "FunctionDeclaration": {
                    choose_function()
                    break
                }
                case "IfStatement": {
                    choose_if()
                    break
                }
                case "ImportDeclaration": {
                    choose_import()
                    break
                }
                case "InterfaceDeclaration": {
                    choose_interface()
                    break
                }
                case "LabeledStatement": {
                    choose_labeled()
                    break
                }
                case "ReturnStatement": {
                    choose_return()
                    break
                }
                case "SwitchStatement": {
                    choose_switch()
                    break
                }
                case "ThrowStatement": {
                    choose_throw()
                    break
                }
                case "TryStatement": {
                    choose_try()
                    break
                }
                case "TypeAliasDeclaration": {
                    choose_typeAlias()
                    break
                }
                case "VariableStatement": {
                    choose_variable()
                    break
                }
                case "WhileStatement": {
                    choose_while()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Gstatement",
                        child: nextChild,
                        expected: ["Block", "BreakStatement", "ExportDeclaration", "ExpressionStatement", "ForStatement", "FunctionDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TypeAliasDeclaration", "VariableStatement", "WhileStatement"],
                    })
                }
            }
        }
    }
    function GstringLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGstringLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GstringLiteral",
                kindNameOptions: [ "StringLiteral"],
            })
            return
        }
        if (currentChild.kindName !== "StringLiteral") {
            $x.reportUnexpectedChild({
                path: "GstringLiteral",
                child: currentChild,
                expected: ["StringLiteral"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGstringLiteral$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            callback({
                annotation: $.annotation,
                value: $.value
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "GstringLiteral$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    function Gtype(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGtype<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gtype = ($: tast.TVTGtype<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gtype",
                kindNameOptions: ["AnyKeyword", "ArrayType", "BooleanKeyword", "FunctionType", "LiteralType", "ParenthesizedType", "NeverKeyword", "NumberKeyword", "OptionalType", "TupleType", "TypeLiteral", "StringKeyword", "TypeReference", "UndefinedKeyword", "UnionType", "VoidKeyword"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_any = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_any",
                        kindNameOptions: [ "AnyKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "AnyKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_any",
                        child: currentChild,
                        expected: ["AnyKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_any$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_any$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["any", $])
                    }
                )
            }
            const choose_array = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_array",
                        kindNameOptions: [ "ArrayType"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_array",
                        child: currentChild,
                        expected: ["ArrayType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_array$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gtype(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_array$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["array", $])
                    }
                )
            }
            const choose_boolean = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_boolean",
                        kindNameOptions: [ "BooleanKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "BooleanKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_boolean",
                        child: currentChild,
                        expected: ["BooleanKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_boolean$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_boolean$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["boolean", $])
                    }
                )
            }
            const choose_function = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_function",
                        kindNameOptions: [ "FunctionType"],
                    })
                    return
                }
                if (currentChild.kindName !== "FunctionType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_function",
                        child: currentChild,
                        expected: ["FunctionType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_function$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGtype_function$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGtype_function$_parameters<Annotation>[] = []
                    const processElement = () => {
                        Gparameter(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "Parameter":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _parameters = $
                        let optional: null | tast.TVTGtype_function$_returnType<Annotation> = null
                        const setOptional = () => {
                            Gtype(node, children, ($) => {
                                optional = $
                            })
                        }
                        if (children.length === 0) {} else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "AnyKeyword":
                                    setOptional()
                                    break
                                case "ArrayType":
                                    setOptional()
                                    break
                                case "BooleanKeyword":
                                    setOptional()
                                    break
                                case "FunctionType":
                                    setOptional()
                                    break
                                case "LiteralType":
                                    setOptional()
                                    break
                                case "ParenthesizedType":
                                    setOptional()
                                    break
                                case "NeverKeyword":
                                    setOptional()
                                    break
                                case "NumberKeyword":
                                    setOptional()
                                    break
                                case "OptionalType":
                                    setOptional()
                                    break
                                case "TupleType":
                                    setOptional()
                                    break
                                case "TypeLiteral":
                                    setOptional()
                                    break
                                case "StringKeyword":
                                    setOptional()
                                    break
                                case "TypeReference":
                                    setOptional()
                                    break
                                case "UndefinedKeyword":
                                    setOptional()
                                    break
                                case "UnionType":
                                    setOptional()
                                    break
                                case "VoidKeyword":
                                    setOptional()
                                    break
                            }
                        }
                        pr.cc(optional, ($) => {
                            const _returnType = $
                            sequenceEnd({
                                "parameters": _parameters,
                                "returnType": _returnType,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_function$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["function", $])
                    }
                )
            }
            const choose_literal = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_literal",
                        kindNameOptions: [ "LiteralType"],
                    })
                    return
                }
                if (currentChild.kindName !== "LiteralType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_literal",
                        child: currentChild,
                        expected: ["LiteralType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_literal$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const choiceEnd_Gtype_literal$ = ($: tast.TVTGtype_literal$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    if (children.length === 0) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gtype_literal$",
                            kindNameOptions: ["NullKeyword", "StringLiteral"],
                        })
                        return
                    } else {
                        nextChild = children[children.length - 1]
                        const choose_null = () => {
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gtype_literal$_null",
                                    kindNameOptions: [ "NullKeyword"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "NullKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_literal$_null",
                                    child: currentChild,
                                    expected: ["NullKeyword"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_literal$_null$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback($.annotation)
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
                                        path: "Gtype_literal$_null$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype_literal$(["null", $])
                                }
                            )
                        }
                        const choose_string = () => {
                            GstringLiteral(node, children, ($) => {
                                choiceEnd_Gtype_literal$(["string", $])
                            })
                        }
                        switch (nextChild.kindName) {
                            case "NullKeyword": {
                                choose_null()
                                break
                            }
                            case "StringLiteral": {
                                choose_string()
                                break
                            }
                            default: {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_literal$",
                                    child: nextChild,
                                    expected: ["NullKeyword", "StringLiteral"],
                                })
                            }
                        }
                    }
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_literal$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["literal", $])
                    }
                )
            }
            const choose_parenthesized = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_parenthesized",
                        kindNameOptions: [ "ParenthesizedType"],
                    })
                    return
                }
                if (currentChild.kindName !== "ParenthesizedType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_parenthesized",
                        child: currentChild,
                        expected: ["ParenthesizedType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_parenthesized$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gtype(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_parenthesized$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["parenthesized", $])
                    }
                )
            }
            const choose_never = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_never",
                        kindNameOptions: [ "NeverKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NeverKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_never",
                        child: currentChild,
                        expected: ["NeverKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_never$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_never$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["never", $])
                    }
                )
            }
            const choose_number = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_number",
                        kindNameOptions: [ "NumberKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NumberKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_number",
                        child: currentChild,
                        expected: ["NumberKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_number$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_number$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["number", $])
                    }
                )
            }
            const choose_optional = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_optional",
                        kindNameOptions: [ "OptionalType"],
                    })
                    return
                }
                if (currentChild.kindName !== "OptionalType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_optional",
                        child: currentChild,
                        expected: ["OptionalType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_optional$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gtype(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_optional$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["optional", $])
                    }
                )
            }
            const choose_tuple = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_tuple",
                        kindNameOptions: [ "TupleType"],
                    })
                    return
                }
                if (currentChild.kindName !== "TupleType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_tuple",
                        child: currentChild,
                        expected: ["TupleType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_tuple$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements: tast.TVTGtype_tuple$<Annotation>[] = []
                    const processElement = () => {
                        Gtype(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "AnyKeyword":
                                    processElement()
                                    break
                                case "ArrayType":
                                    processElement()
                                    break
                                case "BooleanKeyword":
                                    processElement()
                                    break
                                case "FunctionType":
                                    processElement()
                                    break
                                case "LiteralType":
                                    processElement()
                                    break
                                case "ParenthesizedType":
                                    processElement()
                                    break
                                case "NeverKeyword":
                                    processElement()
                                    break
                                case "NumberKeyword":
                                    processElement()
                                    break
                                case "OptionalType":
                                    processElement()
                                    break
                                case "TupleType":
                                    processElement()
                                    break
                                case "TypeLiteral":
                                    processElement()
                                    break
                                case "StringKeyword":
                                    processElement()
                                    break
                                case "TypeReference":
                                    processElement()
                                    break
                                case "UndefinedKeyword":
                                    processElement()
                                    break
                                case "UnionType":
                                    processElement()
                                    break
                                case "VoidKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_tuple$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["tuple", $])
                    }
                )
            }
            const choose_typeLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeLiteral",
                        kindNameOptions: [ "TypeLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeLiteral") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_typeLiteral",
                        child: currentChild,
                        expected: ["TypeLiteral"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_typeLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements: tast.TVTGtype_typeLiteral$<Annotation>[] = []
                    const processElement = () => {
                        GtypeSignature(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "ConstructSignature":
                                    processElement()
                                    break
                                case "IndexSignature":
                                    processElement()
                                    break
                                case "MethodSignature":
                                    processElement()
                                    break
                                case "PropertySignature":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_typeLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["typeLiteral", $])
                    }
                )
            }
            const choose_string = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_string",
                        kindNameOptions: [ "StringKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_string",
                        child: currentChild,
                        expected: ["StringKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_string$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_string$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["string", $])
                    }
                )
            }
            const choose_typeReference = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeReference",
                        kindNameOptions: [ "TypeReference"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeReference") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_typeReference",
                        child: currentChild,
                        expected: ["TypeReference"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_typeReference$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGtype_typeReference$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const choiceEnd_Gtype_typeReference$_x = ($: tast.TVTGtype_typeReference$_x<Annotation>) => {
                        const _x = $
                        const elements: tast.TVTGtype_typeReference$_parameters<Annotation>[] = []
                        const processElement = () => {
                            Gtype(node, children, ($) => {
                                elements.push($)
                            })
                        }
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop
                            } else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "AnyKeyword":
                                        processElement()
                                        break
                                    case "ArrayType":
                                        processElement()
                                        break
                                    case "BooleanKeyword":
                                        processElement()
                                        break
                                    case "FunctionType":
                                        processElement()
                                        break
                                    case "LiteralType":
                                        processElement()
                                        break
                                    case "ParenthesizedType":
                                        processElement()
                                        break
                                    case "NeverKeyword":
                                        processElement()
                                        break
                                    case "NumberKeyword":
                                        processElement()
                                        break
                                    case "OptionalType":
                                        processElement()
                                        break
                                    case "TupleType":
                                        processElement()
                                        break
                                    case "TypeLiteral":
                                        processElement()
                                        break
                                    case "StringKeyword":
                                        processElement()
                                        break
                                    case "TypeReference":
                                        processElement()
                                        break
                                    case "UndefinedKeyword":
                                        processElement()
                                        break
                                    case "UnionType":
                                        processElement()
                                        break
                                    case "VoidKeyword":
                                        processElement()
                                        break
                                    default: break arrayLoop
                                }
                            }
                        }
                        pr.cc(elements, ($) => {
                            const _parameters = $
                            sequenceEnd({
                                "x": _x,
                                "parameters": _parameters,
                            })
                        })
                    }
                    if (children.length === 0) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gtype_typeReference$_x",
                            kindNameOptions: ["Identifier", "QualifiedName"],
                        })
                        return
                    } else {
                        nextChild = children[children.length - 1]
                        const choose_identifier = () => {
                            Gidentifier(node, children, ($) => {
                                choiceEnd_Gtype_typeReference$_x(["identifier", $])
                            })
                        }
                        const choose_qualifiedName = () => {
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gtype_typeReference$_x_qualifiedName",
                                    kindNameOptions: [ "QualifiedName"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "QualifiedName") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_typeReference$_x_qualifiedName",
                                    child: currentChild,
                                    expected: ["QualifiedName"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGtype_typeReference$_x_qualifiedName$<Annotation>) => {
                                    callback({
                                        annotation: node.annotation,
                                        content: $,
                                    })
                                }
                                Gidentifier(node, children, ($) => {
                                    const _context = $
                                    Gidentifier(node, children, ($) => {
                                        const _type = $
                                        sequenceEnd({
                                            "context": _context,
                                            "type": _type,
                                        })
                                    })
                                })
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
                                        path: "Gtype_typeReference$_x_qualifiedName$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype_typeReference$_x(["qualifiedName", $])
                                }
                            )
                        }
                        switch (nextChild.kindName) {
                            case "Identifier": {
                                choose_identifier()
                                break
                            }
                            case "QualifiedName": {
                                choose_qualifiedName()
                                break
                            }
                            default: {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_typeReference$_x",
                                    child: nextChild,
                                    expected: ["Identifier", "QualifiedName"],
                                })
                            }
                        }
                    }
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_typeReference$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["typeReference", $])
                    }
                )
            }
            const choose_undefined = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_undefined",
                        kindNameOptions: [ "UndefinedKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "UndefinedKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_undefined",
                        child: currentChild,
                        expected: ["UndefinedKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_undefined$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_undefined$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["undefined", $])
                    }
                )
            }
            const choose_union = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_union",
                        kindNameOptions: [ "UnionType"],
                    })
                    return
                }
                if (currentChild.kindName !== "UnionType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_union",
                        child: currentChild,
                        expected: ["UnionType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_union$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements: tast.TVTGtype_union$<Annotation>[] = []
                    const processElement = () => {
                        Gtype(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "AnyKeyword":
                                    processElement()
                                    break
                                case "ArrayType":
                                    processElement()
                                    break
                                case "BooleanKeyword":
                                    processElement()
                                    break
                                case "FunctionType":
                                    processElement()
                                    break
                                case "LiteralType":
                                    processElement()
                                    break
                                case "ParenthesizedType":
                                    processElement()
                                    break
                                case "NeverKeyword":
                                    processElement()
                                    break
                                case "NumberKeyword":
                                    processElement()
                                    break
                                case "OptionalType":
                                    processElement()
                                    break
                                case "TupleType":
                                    processElement()
                                    break
                                case "TypeLiteral":
                                    processElement()
                                    break
                                case "StringKeyword":
                                    processElement()
                                    break
                                case "TypeReference":
                                    processElement()
                                    break
                                case "UndefinedKeyword":
                                    processElement()
                                    break
                                case "UnionType":
                                    processElement()
                                    break
                                case "VoidKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_union$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["union", $])
                    }
                )
            }
            const choose_void = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_void",
                        kindNameOptions: [ "VoidKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "VoidKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_void",
                        child: currentChild,
                        expected: ["VoidKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_void$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_void$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["void", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "AnyKeyword": {
                    choose_any()
                    break
                }
                case "ArrayType": {
                    choose_array()
                    break
                }
                case "BooleanKeyword": {
                    choose_boolean()
                    break
                }
                case "FunctionType": {
                    choose_function()
                    break
                }
                case "LiteralType": {
                    choose_literal()
                    break
                }
                case "ParenthesizedType": {
                    choose_parenthesized()
                    break
                }
                case "NeverKeyword": {
                    choose_never()
                    break
                }
                case "NumberKeyword": {
                    choose_number()
                    break
                }
                case "OptionalType": {
                    choose_optional()
                    break
                }
                case "TupleType": {
                    choose_tuple()
                    break
                }
                case "TypeLiteral": {
                    choose_typeLiteral()
                    break
                }
                case "StringKeyword": {
                    choose_string()
                    break
                }
                case "TypeReference": {
                    choose_typeReference()
                    break
                }
                case "UndefinedKeyword": {
                    choose_undefined()
                    break
                }
                case "UnionType": {
                    choose_union()
                    break
                }
                case "VoidKeyword": {
                    choose_void()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Gtype",
                        child: nextChild,
                        expected: ["AnyKeyword", "ArrayType", "BooleanKeyword", "FunctionType", "LiteralType", "ParenthesizedType", "NeverKeyword", "NumberKeyword", "OptionalType", "TupleType", "TypeLiteral", "StringKeyword", "TypeReference", "UndefinedKeyword", "UnionType", "VoidKeyword"],
                    })
                }
            }
        }
    }
    function GtypeParameter(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGtypeParameter<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GtypeParameter",
                kindNameOptions: [ "TypeParameter"],
            })
            return
        }
        if (currentChild.kindName !== "TypeParameter") {
            $x.reportUnexpectedChild({
                path: "GtypeParameter",
                child: currentChild,
                expected: ["TypeParameter"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGtypeParameter$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            Gidentifier(node, children, ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "GtypeParameter$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    function GtypeSignature(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGtypeSignature<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_GtypeSignature = ($: tast.TVTGtypeSignature<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GtypeSignature",
                kindNameOptions: ["ConstructSignature", "IndexSignature", "MethodSignature", "PropertySignature"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_construct = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_construct",
                        kindNameOptions: [ "ConstructSignature"],
                    })
                    return
                }
                if (currentChild.kindName !== "ConstructSignature") {
                    $x.reportUnexpectedChild({
                        path: "GtypeSignature_construct",
                        child: currentChild,
                        expected: ["ConstructSignature"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtypeSignature_construct$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGtypeSignature_construct$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGtypeSignature_construct$_parameters<Annotation>[] = []
                    const processElement = () => {
                        Gparameter(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "Parameter":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _parameters = $
                        Gtype(node, children, ($) => {
                            const _returnType = $
                            sequenceEnd({
                                "parameters": _parameters,
                                "returnType": _returnType,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GtypeSignature_construct$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GtypeSignature(["construct", $])
                    }
                )
            }
            const choose_index = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_index",
                        kindNameOptions: [ "IndexSignature"],
                    })
                    return
                }
                if (currentChild.kindName !== "IndexSignature") {
                    $x.reportUnexpectedChild({
                        path: "GtypeSignature_index",
                        child: currentChild,
                        expected: ["IndexSignature"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtypeSignature_index$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGtypeSignature_index$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGtypeSignature_index$_modifiers<Annotation>[] = []
                    const processElement = () => {
                        Gmodifier(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement()
                                    break
                                case "ExportKeyword":
                                    processElement()
                                    break
                                case "ReadonlyKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _modifiers = $
                        Gparameter(node, children, ($) => {
                            const _parameter = $
                            let optional: null | tast.TVTGtypeSignature_index$_type<Annotation> = null
                            const setOptional = () => {
                                Gtype(node, children, ($) => {
                                    optional = $
                                })
                            }
                            if (children.length === 0) {} else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "AnyKeyword":
                                        setOptional()
                                        break
                                    case "ArrayType":
                                        setOptional()
                                        break
                                    case "BooleanKeyword":
                                        setOptional()
                                        break
                                    case "FunctionType":
                                        setOptional()
                                        break
                                    case "LiteralType":
                                        setOptional()
                                        break
                                    case "ParenthesizedType":
                                        setOptional()
                                        break
                                    case "NeverKeyword":
                                        setOptional()
                                        break
                                    case "NumberKeyword":
                                        setOptional()
                                        break
                                    case "OptionalType":
                                        setOptional()
                                        break
                                    case "TupleType":
                                        setOptional()
                                        break
                                    case "TypeLiteral":
                                        setOptional()
                                        break
                                    case "StringKeyword":
                                        setOptional()
                                        break
                                    case "TypeReference":
                                        setOptional()
                                        break
                                    case "UndefinedKeyword":
                                        setOptional()
                                        break
                                    case "UnionType":
                                        setOptional()
                                        break
                                    case "VoidKeyword":
                                        setOptional()
                                        break
                                }
                            }
                            pr.cc(optional, ($) => {
                                const _type = $
                                sequenceEnd({
                                    "modifiers": _modifiers,
                                    "parameter": _parameter,
                                    "type": _type,
                                })
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GtypeSignature_index$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GtypeSignature(["index", $])
                    }
                )
            }
            const choose_method = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_method",
                        kindNameOptions: [ "MethodSignature"],
                    })
                    return
                }
                if (currentChild.kindName !== "MethodSignature") {
                    $x.reportUnexpectedChild({
                        path: "GtypeSignature_method",
                        child: currentChild,
                        expected: ["MethodSignature"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtypeSignature_method$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGtypeSignature_method$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _name = $
                        GfunctionDefinition(node, children, ($) => {
                            const _definition = $
                            sequenceEnd({
                                "name": _name,
                                "definition": _definition,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GtypeSignature_method$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GtypeSignature(["method", $])
                    }
                )
            }
            const choose_property = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_property",
                        kindNameOptions: [ "PropertySignature"],
                    })
                    return
                }
                if (currentChild.kindName !== "PropertySignature") {
                    $x.reportUnexpectedChild({
                        path: "GtypeSignature_property",
                        child: currentChild,
                        expected: ["PropertySignature"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtypeSignature_property$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGtypeSignature_property$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.TVTGtypeSignature_property$_modifiers<Annotation>[] = []
                    const processElement = () => {
                        Gmodifier(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement()
                                    break
                                case "ExportKeyword":
                                    processElement()
                                    break
                                case "ReadonlyKeyword":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _modifiers = $
                        GidentifierOrStringLiteral(node, children, ($) => {
                            const _name = $
                            let optional: null | tast.TVTGtypeSignature_property$_quesionToken<Annotation> = null
                            const setOptional = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "GtypeSignature_property$_quesionToken",
                                        kindNameOptions: [ "QuestionToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "QuestionToken") {
                                    $x.reportUnexpectedChild({
                                        path: "GtypeSignature_property$_quesionToken",
                                        child: currentChild,
                                        expected: ["QuestionToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGtypeSignature_property$_quesionToken$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "GtypeSignature_property$_quesionToken$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        optional = $
                                    }
                                )
                            }
                            if (children.length === 0) {} else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "QuestionToken":
                                        setOptional()
                                        break
                                }
                            }
                            pr.cc(optional, ($) => {
                                const _quesionToken = $
                                let optional: null | tast.TVTGtypeSignature_property$_type<Annotation> = null
                                const setOptional = () => {
                                    Gtype(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                if (children.length === 0) {} else {
                                    nextChild = children[children.length - 1]
                                    switch (nextChild.kindName) {
                                        case "AnyKeyword":
                                            setOptional()
                                            break
                                        case "ArrayType":
                                            setOptional()
                                            break
                                        case "BooleanKeyword":
                                            setOptional()
                                            break
                                        case "FunctionType":
                                            setOptional()
                                            break
                                        case "LiteralType":
                                            setOptional()
                                            break
                                        case "ParenthesizedType":
                                            setOptional()
                                            break
                                        case "NeverKeyword":
                                            setOptional()
                                            break
                                        case "NumberKeyword":
                                            setOptional()
                                            break
                                        case "OptionalType":
                                            setOptional()
                                            break
                                        case "TupleType":
                                            setOptional()
                                            break
                                        case "TypeLiteral":
                                            setOptional()
                                            break
                                        case "StringKeyword":
                                            setOptional()
                                            break
                                        case "TypeReference":
                                            setOptional()
                                            break
                                        case "UndefinedKeyword":
                                            setOptional()
                                            break
                                        case "UnionType":
                                            setOptional()
                                            break
                                        case "VoidKeyword":
                                            setOptional()
                                            break
                                    }
                                }
                                pr.cc(optional, ($) => {
                                    const _type = $
                                    sequenceEnd({
                                        "modifiers": _modifiers,
                                        "name": _name,
                                        "quesionToken": _quesionToken,
                                        "type": _type,
                                    })
                                })
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GtypeSignature_property$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GtypeSignature(["property", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "ConstructSignature": {
                    choose_construct()
                    break
                }
                case "IndexSignature": {
                    choose_index()
                    break
                }
                case "MethodSignature": {
                    choose_method()
                    break
                }
                case "PropertySignature": {
                    choose_property()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "GtypeSignature",
                        child: nextChild,
                        expected: ["ConstructSignature", "IndexSignature", "MethodSignature", "PropertySignature"],
                    })
                }
            }
        }
    }
    function GvariableDeclaration(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGvariableDeclaration<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GvariableDeclaration",
                kindNameOptions: [ "VariableDeclaration"],
            })
            return
        }
        if (currentChild.kindName !== "VariableDeclaration") {
            $x.reportUnexpectedChild({
                path: "GvariableDeclaration",
                child: currentChild,
                expected: ["VariableDeclaration"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGvariableDeclaration$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTGvariableDeclaration$<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            Gidentifier(node, children, ($) => {
                const _name = $
                let optional: null | tast.TVTGvariableDeclaration$_type<Annotation> = null
                const setOptional = () => {
                    Gtype(node, children, ($) => {
                        optional = $
                    })
                }
                if (children.length === 0) {} else {
                    nextChild = children[children.length - 1]
                    switch (nextChild.kindName) {
                        case "AnyKeyword":
                            setOptional()
                            break
                        case "ArrayType":
                            setOptional()
                            break
                        case "BooleanKeyword":
                            setOptional()
                            break
                        case "FunctionType":
                            setOptional()
                            break
                        case "LiteralType":
                            setOptional()
                            break
                        case "ParenthesizedType":
                            setOptional()
                            break
                        case "NeverKeyword":
                            setOptional()
                            break
                        case "NumberKeyword":
                            setOptional()
                            break
                        case "OptionalType":
                            setOptional()
                            break
                        case "TupleType":
                            setOptional()
                            break
                        case "TypeLiteral":
                            setOptional()
                            break
                        case "StringKeyword":
                            setOptional()
                            break
                        case "TypeReference":
                            setOptional()
                            break
                        case "UndefinedKeyword":
                            setOptional()
                            break
                        case "UnionType":
                            setOptional()
                            break
                        case "VoidKeyword":
                            setOptional()
                            break
                    }
                }
                pr.cc(optional, ($) => {
                    const _type = $
                    let optional: null | tast.TVTGvariableDeclaration$_expression<Annotation> = null
                    const setOptional = () => {
                        Gexpression(node, children, ($) => {
                            optional = $
                        })
                    }
                    if (children.length === 0) {} else {
                        nextChild = children[children.length - 1]
                        switch (nextChild.kindName) {
                            case "ArrayLiteralExpression":
                                setOptional()
                                break
                            case "ArrowFunction":
                                setOptional()
                                break
                            case "BinaryExpression":
                                setOptional()
                                break
                            case "CallExpression":
                                setOptional()
                                break
                            case "ConditionalExpression":
                                setOptional()
                                break
                            case "ElementAccessExpression":
                                setOptional()
                                break
                            case "FalseKeyword":
                                setOptional()
                                break
                            case "Identifier":
                                setOptional()
                                break
                            case "NewExpression":
                                setOptional()
                                break
                            case "NoSubstitutionTemplateLiteral":
                                setOptional()
                                break
                            case "NumericLiteral":
                                setOptional()
                                break
                            case "NullKeyword":
                                setOptional()
                                break
                            case "ObjectLiteralExpression":
                                setOptional()
                                break
                            case "ParenthesizedExpression":
                                setOptional()
                                break
                            case "PostfixUnaryExpression":
                                setOptional()
                                break
                            case "PrefixUnaryExpression":
                                setOptional()
                                break
                            case "PropertyAccessExpression":
                                setOptional()
                                break
                            case "StringLiteral":
                                setOptional()
                                break
                            case "TemplateExpression":
                                setOptional()
                                break
                            case "TrueKeyword":
                                setOptional()
                                break
                        }
                    }
                    pr.cc(optional, ($) => {
                        const _expression = $
                        sequenceEnd({
                            "name": _name,
                            "type": _type,
                            "expression": _expression,
                        })
                    })
                })
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "GvariableDeclaration$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    function GvariableDeclarationList(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGvariableDeclarationList<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GvariableDeclarationList",
                kindNameOptions: [ "VariableDeclarationList"],
            })
            return
        }
        if (currentChild.kindName !== "VariableDeclarationList") {
            $x.reportUnexpectedChild({
                path: "GvariableDeclarationList",
                child: currentChild,
                expected: ["VariableDeclarationList"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGvariableDeclarationList$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const elements: tast.TVTGvariableDeclarationList$<Annotation>[] = []
            const processElement = () => {
                GvariableDeclaration(node, children, ($) => {
                    elements.push($)
                })
            }
            arrayLoop: while (true) {
                if (children.length === 0) {
                    break arrayLoop
                } else {
                    nextChild = children[children.length - 1]
                    switch (nextChild.kindName) {
                        case "VariableDeclaration":
                            processElement()
                            break
                        default: break arrayLoop
                    }
                }
            }
            pr.cc(elements, ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "GvariableDeclarationList$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    if ($.kindName !== "SourceFile") {
        $x.reportUnexpectedRoot({
            root: $,
        })
        return
    } else {
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNroot<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTroot<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            const elements: tast.TVTroot_statements<Annotation>[] = []
            const processElement = () => {
                Gstatement(node, children, ($) => {
                    elements.push($)
                })
            }
            arrayLoop: while (true) {
                if (children.length === 0) {
                    break arrayLoop
                } else {
                    nextChild = children[children.length - 1]
                    switch (nextChild.kindName) {
                        case "Block":
                            processElement()
                            break
                        case "BreakStatement":
                            processElement()
                            break
                        case "ExportDeclaration":
                            processElement()
                            break
                        case "ExpressionStatement":
                            processElement()
                            break
                        case "ForStatement":
                            processElement()
                            break
                        case "FunctionDeclaration":
                            processElement()
                            break
                        case "IfStatement":
                            processElement()
                            break
                        case "ImportDeclaration":
                            processElement()
                            break
                        case "InterfaceDeclaration":
                            processElement()
                            break
                        case "LabeledStatement":
                            processElement()
                            break
                        case "ReturnStatement":
                            processElement()
                            break
                        case "SwitchStatement":
                            processElement()
                            break
                        case "ThrowStatement":
                            processElement()
                            break
                        case "TryStatement":
                            processElement()
                            break
                        case "TypeAliasDeclaration":
                            processElement()
                            break
                        case "VariableStatement":
                            processElement()
                            break
                        case "WhileStatement":
                            processElement()
                            break
                        default: break arrayLoop
                    }
                }
            }
            pr.cc(elements, ($) => {
                const _statements = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "root_endOfFile",
                        kindNameOptions: [ "EndOfFileToken"],
                    })
                    return
                }
                if (currentChild.kindName !== "EndOfFileToken") {
                    $x.reportUnexpectedChild({
                        path: "root_endOfFile",
                        child: currentChild,
                        expected: ["EndOfFileToken"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNroot_endOfFile$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "root_endOfFile$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        const _endOfFile = $
                        sequenceEnd({
                            "statements": _statements,
                            "endOfFile": _endOfFile,
                        })
                    }
                )
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "root",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            $,
            ($) => {
                $x.callback($)
            },
        )
    }
}