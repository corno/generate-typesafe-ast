import * as pr from "pareto-runtime"
import * as tast from "../interface/ts_api.generated"
import * as uast from "../interface/uast.generated"

export function parse<Annotation>(
    $: uast.Node<Annotation>,
    callback: ($: tast.Nroot<Annotation>) => void,
    reportUnexpectedRoot: ($: { root: uast.Node<Annotation>, }) => void,
    reportUnexpectedChild: ($: { path: string, child: uast.Node<Annotation>, expected: null | string[] }) => void,
    reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
): void {
    function Gblock(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gblock<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gblock",
                kindNameOptions: [ "Block"],
            })
            return
        }
        if (currentChild.kindName !== "Block") {
            reportUnexpectedChild({
                path: "Gblock",
                child: currentChild,
                expected: ["Block"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGblock$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            const elements: tast.VGblock$<Annotation> = []
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
                reportUnexpectedChild({
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gexpression<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gexpression = ($: tast.VTGexpression<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_arrayLiteral",
                        kindNameOptions: [ "ArrayLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayLiteralExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_arrayLiteral",
                        child: currentChild,
                        expected: ["ArrayLiteralExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_arrayLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const elements: tast.VGexpression_arrayLiteral$<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_arrowFunction",
                        kindNameOptions: [ "ArrowFunction"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrowFunction") {
                    reportUnexpectedChild({
                        path: "Gexpression_arrowFunction",
                        child: currentChild,
                        expected: ["ArrowFunction"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_arrowFunction$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGexpression_arrowFunction$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGexpression_arrowFunction$_parameters<Annotation> = []
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
                        let optional: tast.VGexpression_arrowFunction$_returnType<Annotation> = null
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
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                    kindNameOptions: [ "EqualsGreaterThanToken"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "EqualsGreaterThanToken") {
                                reportUnexpectedChild({
                                    path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                    child: currentChild,
                                    expected: ["EqualsGreaterThanToken"],
                                })
                                return
                            }
                            ((
                                $: uast.Node<Annotation>,
                                callback: ($: tast.NGexpression_arrowFunction$_equalsGreaterThan$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.Node<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback({
                                    annotation: $.annotation,
                                    content: null
                                })
                                if (children.length > 0) {
                                    reportUnexpectedChild({
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
                                    const choiceEnd_Gexpression_arrowFunction$_implementation = ($: tast.VTGexpression_arrowFunction$_implementation<Annotation>) => {
                                        const _implementation = $
                                        sequenceEnd({
                                            "parameters": _parameters,
                                            "returnType": _returnType,
                                            "equalsGreaterThan": _equalsGreaterThan,
                                            "implementation": _implementation,
                                        })
                                    }
                                    if (children.length === 0) {
                                        reportMissingToken({
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
                                                reportUnexpectedChild({
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_binary",
                        kindNameOptions: [ "BinaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "BinaryExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_binary",
                        child: currentChild,
                        expected: ["BinaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_binary$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGexpression_binary$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _leftHandSide = $
                        const choiceEnd_Gexpression_binary$_operator = ($: tast.VTGexpression_binary$_operator<Annotation>) => {
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
                            reportMissingToken({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_ampersandAmpersand",
                                        kindNameOptions: [ "AmpersandAmpersandToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "AmpersandAmpersandToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_ampersandAmpersand",
                                        child: currentChild,
                                        expected: ["AmpersandAmpersandToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_ampersandAmpersand$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_barBar",
                                        kindNameOptions: [ "BarBarToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "BarBarToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_barBar",
                                        child: currentChild,
                                        expected: ["BarBarToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_barBar$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_equals",
                                        kindNameOptions: [ "EqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "EqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_equals",
                                        child: currentChild,
                                        expected: ["EqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_equals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                        kindNameOptions: [ "EqualsEqualsEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "EqualsEqualsEqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                        child: currentChild,
                                        expected: ["EqualsEqualsEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_equalsEqualsEquals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                        kindNameOptions: [ "ExclamationEqualsEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "ExclamationEqualsEqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                        child: currentChild,
                                        expected: ["ExclamationEqualsEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_greaterThan",
                                        kindNameOptions: [ "GreaterThanToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "GreaterThanToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_greaterThan",
                                        child: currentChild,
                                        expected: ["GreaterThanToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_greaterThan$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_lessThan",
                                        kindNameOptions: [ "LessThanToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "LessThanToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_lessThan",
                                        child: currentChild,
                                        expected: ["LessThanToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_lessThan$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_minus",
                                        kindNameOptions: [ "MinusToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "MinusToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_minus",
                                        child: currentChild,
                                        expected: ["MinusToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_minus$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_minusEquals",
                                        kindNameOptions: [ "MinusEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "MinusEqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_minusEquals",
                                        child: currentChild,
                                        expected: ["MinusEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_minusEquals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_plus",
                                        kindNameOptions: [ "PlusToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "PlusToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_plus",
                                        child: currentChild,
                                        expected: ["PlusToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_plus$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_plusEquals",
                                        kindNameOptions: [ "PlusEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "PlusEqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_plusEquals",
                                        child: currentChild,
                                        expected: ["PlusEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_binary$_operator_plusEquals$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator",
                                        child: nextChild,
                                        expected: ["AmpersandAmpersandToken", "BarBarToken", "EqualsToken", "EqualsEqualsEqualsToken", "ExclamationEqualsEqualsToken", "GreaterThanToken", "LessThanToken", "MinusToken", "MinusEqualsToken", "PlusToken", "PlusEqualsToken"],
                                    })
                                }
                            }
                        }
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_call",
                        kindNameOptions: [ "CallExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "CallExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_call",
                        child: currentChild,
                        expected: ["CallExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_call$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGexpression_call$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _function = $
                        const elements: tast.VGexpression_call$_typeParameters<Annotation> = []
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
                            const elements: tast.VGexpression_call$_parameters<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_conditional",
                        kindNameOptions: [ "ConditionalExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ConditionalExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_conditional",
                        child: currentChild,
                        expected: ["ConditionalExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_conditional$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGexpression_conditional$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _test = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gexpression_conditional$_questionToken",
                                kindNameOptions: [ "QuestionToken"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "QuestionToken") {
                            reportUnexpectedChild({
                                path: "Gexpression_conditional$_questionToken",
                                child: currentChild,
                                expected: ["QuestionToken"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.NGexpression_conditional$_questionToken$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.Node<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            callback({
                                annotation: $.annotation,
                                content: null
                            })
                            if (children.length > 0) {
                                reportUnexpectedChild({
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
                                        reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Gexpression_conditional$_colonToken",
                                            kindNameOptions: [ "ColonToken"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "ColonToken") {
                                        reportUnexpectedChild({
                                            path: "Gexpression_conditional$_colonToken",
                                            child: currentChild,
                                            expected: ["ColonToken"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.Node<Annotation>,
                                        callback: ($: tast.NGexpression_conditional$_colonToken$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.Node<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        callback({
                                            annotation: $.annotation,
                                            content: null
                                        })
                                        if (children.length > 0) {
                                            reportUnexpectedChild({
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_elementAccess",
                        kindNameOptions: [ "ElementAccessExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ElementAccessExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_elementAccess",
                        child: currentChild,
                        expected: ["ElementAccessExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_elementAccess$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGexpression_elementAccess$<Annotation>) => {
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_false",
                        kindNameOptions: [ "FalseKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "FalseKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_false",
                        child: currentChild,
                        expected: ["FalseKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_false$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_new",
                        kindNameOptions: [ "NewExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "NewExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_new",
                        child: currentChild,
                        expected: ["NewExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_new$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGexpression_new$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _class = $
                        const elements: tast.VGexpression_new$_parameters<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_noSubstitutionTemplateLiteral",
                        kindNameOptions: [ "NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NoSubstitutionTemplateLiteral") {
                    reportUnexpectedChild({
                        path: "Gexpression_noSubstitutionTemplateLiteral",
                        child: currentChild,
                        expected: ["NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_nullKeyword",
                        kindNameOptions: [ "NullKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NullKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_nullKeyword",
                        child: currentChild,
                        expected: ["NullKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_nullKeyword$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_objectLiteral",
                        kindNameOptions: [ "ObjectLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ObjectLiteralExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_objectLiteral",
                        child: currentChild,
                        expected: ["ObjectLiteralExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_objectLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const elements: tast.VGexpression_objectLiteral$<Annotation> = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gexpression_objectLiteral$",
                                kindNameOptions: [ "PropertyAssignment"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "PropertyAssignment") {
                            reportUnexpectedChild({
                                path: "Gexpression_objectLiteral$",
                                child: currentChild,
                                expected: ["PropertyAssignment"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.NGexpression_objectLiteral$$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.Node<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.Node<Annotation> | undefined
                            let nextChild: uast.Node<Annotation> | undefined
                            const sequenceEnd = ($: tast.VTGexpression_objectLiteral$$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            const choiceEnd_Gexpression_objectLiteral$$_name = ($: tast.VTGexpression_objectLiteral$$_name<Annotation>) => {
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
                                reportMissingToken({
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
                                        reportUnexpectedChild({
                                            path: "Gexpression_objectLiteral$$_name",
                                            child: nextChild,
                                            expected: ["Identifier", "NumericLiteral", "StringLiteral"],
                                        })
                                    }
                                }
                            }
                            if (children.length > 0) {
                                reportUnexpectedChild({
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_parenthesizedExpression",
                        kindNameOptions: [ "ParenthesizedExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ParenthesizedExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_parenthesizedExpression",
                        child: currentChild,
                        expected: ["ParenthesizedExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_parenthesizedExpression$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_postfixUnary",
                        kindNameOptions: [ "PostfixUnaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "PostfixUnaryExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_postfixUnary",
                        child: currentChild,
                        expected: ["PostfixUnaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_postfixUnary$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_prefixUnary",
                        kindNameOptions: [ "PrefixUnaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "PrefixUnaryExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_prefixUnary",
                        child: currentChild,
                        expected: ["PrefixUnaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_prefixUnary$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_propertyAccess",
                        kindNameOptions: [ "PropertyAccessExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "PropertyAccessExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_propertyAccess",
                        child: currentChild,
                        expected: ["PropertyAccessExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_propertyAccess$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGexpression_propertyAccess$<Annotation>) => {
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_template",
                        kindNameOptions: [ "TemplateExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "TemplateExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_template",
                        child: currentChild,
                        expected: ["TemplateExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_template$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGexpression_template$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gexpression_template$_head",
                            kindNameOptions: [ "TemplateHead"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "TemplateHead") {
                        reportUnexpectedChild({
                            path: "Gexpression_template$_head",
                            child: currentChild,
                            expected: ["TemplateHead"],
                        })
                        return
                    }
                    ((
                        $: uast.Node<Annotation>,
                        callback: ($: tast.NGexpression_template$_head$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.Node<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        callback({
                            annotation: $.annotation,
                            content: $.value
                        })
                        if (children.length > 0) {
                            reportUnexpectedChild({
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
                            const elements: tast.VGexpression_template$_spans<Annotation> = []
                            const processElement = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_template$_spans",
                                        kindNameOptions: [ "TemplateSpan"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "TemplateSpan") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_template$_spans",
                                        child: currentChild,
                                        expected: ["TemplateSpan"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGexpression_template$_spans$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.Node<Annotation> | undefined
                                    let nextChild: uast.Node<Annotation> | undefined
                                    const sequenceEnd = ($: tast.VTGexpression_template$_spans$<Annotation>) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _expression = $
                                        const choiceEnd_Gexpression_template$_spans$_x = ($: tast.VTGexpression_template$_spans$_x<Annotation>) => {
                                            const _x = $
                                            sequenceEnd({
                                                "expression": _expression,
                                                "x": _x,
                                            })
                                        }
                                        if (children.length === 0) {
                                            reportMissingToken({
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
                                                    reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "Gexpression_template$_spans$_x_middle",
                                                        kindNameOptions: [ "TemplateMiddle"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "TemplateMiddle") {
                                                    reportUnexpectedChild({
                                                        path: "Gexpression_template$_spans$_x_middle",
                                                        child: currentChild,
                                                        expected: ["TemplateMiddle"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.Node<Annotation>,
                                                    callback: ($: tast.NGexpression_template$_spans$_x_middle$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children: uast.Node<Annotation>[] = []
                                                    $.children.forEach(($) => { children.push($) })
                                                    children.reverse()
                                                    callback({
                                                        annotation: $.annotation,
                                                        content: $.value
                                                    })
                                                    if (children.length > 0) {
                                                        reportUnexpectedChild({
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
                                                    reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "Gexpression_template$_spans$_x_tail",
                                                        kindNameOptions: [ "TemplateTail"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "TemplateTail") {
                                                    reportUnexpectedChild({
                                                        path: "Gexpression_template$_spans$_x_tail",
                                                        child: currentChild,
                                                        expected: ["TemplateTail"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.Node<Annotation>,
                                                    callback: ($: tast.NGexpression_template$_spans$_x_tail$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children: uast.Node<Annotation>[] = []
                                                    $.children.forEach(($) => { children.push($) })
                                                    children.reverse()
                                                    callback({
                                                        annotation: $.annotation,
                                                        content: $.value
                                                    })
                                                    if (children.length > 0) {
                                                        reportUnexpectedChild({
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
                                                    reportUnexpectedChild({
                                                        path: "Gexpression_template$_spans$_x",
                                                        child: nextChild,
                                                        expected: ["TemplateMiddle", "TemplateTail"],
                                                    })
                                                }
                                            }
                                        }
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_true",
                        kindNameOptions: [ "TrueKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "TrueKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_true",
                        child: currentChild,
                        expected: ["TrueKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGexpression_true$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportUnexpectedChild({
                        path: "Gexpression",
                        child: nextChild,
                        expected: ["ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
                    })
                }
            }
        }
    }
    function GfunctionDefinition(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GfunctionDefinition<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.VTGfunctionDefinition<Annotation>) => {
            callback($)
        }
        const elements: tast.VGfunctionDefinition_typeParameters<Annotation> = []
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
            const elements: tast.VGfunctionDefinition_parameters<Annotation> = []
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
                let optional: tast.VGfunctionDefinition_returnType<Annotation> = null
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gidentifier<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gidentifier",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "Gidentifier",
                child: currentChild,
                expected: ["Identifier"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGidentifier$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            callback({
                annotation: $.annotation,
                content: $.value
            })
            if (children.length > 0) {
                reportUnexpectedChild({
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GidentifierOrStringLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_GidentifierOrStringLiteral = ($: tast.VTGidentifierOrStringLiteral<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
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
                    reportUnexpectedChild({
                        path: "GidentifierOrStringLiteral",
                        child: nextChild,
                        expected: ["Identifier", "StringLiteral"],
                    })
                }
            }
        }
    }
    function Gmodifier(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gmodifier<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gmodifier = ($: tast.VTGmodifier<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_declare",
                        kindNameOptions: [ "DeclareKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "DeclareKeyword") {
                    reportUnexpectedChild({
                        path: "Gmodifier_declare",
                        child: currentChild,
                        expected: ["DeclareKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGmodifier_declare$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_export",
                        kindNameOptions: [ "ExportKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "ExportKeyword") {
                    reportUnexpectedChild({
                        path: "Gmodifier_export",
                        child: currentChild,
                        expected: ["ExportKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGmodifier_export$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_readonly",
                        kindNameOptions: [ "ReadonlyKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "ReadonlyKeyword") {
                    reportUnexpectedChild({
                        path: "Gmodifier_readonly",
                        child: currentChild,
                        expected: ["ReadonlyKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGmodifier_readonly$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportUnexpectedChild({
                        path: "Gmodifier",
                        child: nextChild,
                        expected: ["DeclareKeyword", "ExportKeyword", "ReadonlyKeyword"],
                    })
                }
            }
        }
    }
    function GnumericLiteral(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GnumericLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GnumericLiteral",
                kindNameOptions: [ "NumericLiteral"],
            })
            return
        }
        if (currentChild.kindName !== "NumericLiteral") {
            reportUnexpectedChild({
                path: "GnumericLiteral",
                child: currentChild,
                expected: ["NumericLiteral"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGnumericLiteral$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            callback({
                annotation: $.annotation,
                content: $.value
            })
            if (children.length > 0) {
                reportUnexpectedChild({
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gparameter<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gparameter",
                kindNameOptions: [ "Parameter"],
            })
            return
        }
        if (currentChild.kindName !== "Parameter") {
            reportUnexpectedChild({
                path: "Gparameter",
                child: currentChild,
                expected: ["Parameter"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGparameter$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            const sequenceEnd = ($: tast.VTGparameter$<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            Gidentifier(node, children, ($) => {
                const _name = $
                let optional: tast.VGparameter$_questionToken<Annotation> = null
                const setOptional = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gparameter$_questionToken",
                            kindNameOptions: [ "QuestionToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "QuestionToken") {
                        reportUnexpectedChild({
                            path: "Gparameter$_questionToken",
                            child: currentChild,
                            expected: ["QuestionToken"],
                        })
                        return
                    }
                    ((
                        $: uast.Node<Annotation>,
                        callback: ($: tast.NGparameter$_questionToken$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.Node<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        callback({
                            annotation: $.annotation,
                            content: null
                        })
                        if (children.length > 0) {
                            reportUnexpectedChild({
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
                    let optional: tast.VGparameter$_type<Annotation> = null
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
                reportUnexpectedChild({
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gstatement<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gstatement = ($: tast.VTGstatement<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_break",
                        kindNameOptions: [ "BreakStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "BreakStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_break",
                        child: currentChild,
                        expected: ["BreakStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_break$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    let optional: tast.VGstatement_break$<Annotation> = null
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_export",
                        kindNameOptions: [ "ExportDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "ExportDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_export",
                        child: currentChild,
                        expected: ["ExportDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_export$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    GstringLiteral(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_expression",
                        kindNameOptions: [ "ExpressionStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "ExpressionStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_expression",
                        child: currentChild,
                        expected: ["ExpressionStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_expression$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_for",
                        kindNameOptions: [ "ForStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "ForStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_for",
                        child: currentChild,
                        expected: ["ForStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_for$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_for$<Annotation>) => {
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_function",
                        kindNameOptions: [ "FunctionDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "FunctionDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_function",
                        child: currentChild,
                        expected: ["FunctionDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_function$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_function$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGstatement_function$_modifiers<Annotation> = []
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
                                let optional: tast.VGstatement_function$_block<Annotation> = null
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_if",
                        kindNameOptions: [ "IfStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "IfStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_if",
                        child: currentChild,
                        expected: ["IfStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_if$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_if$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _expression = $
                        Gstatement(node, children, ($) => {
                            const _thenStatement = $
                            let optional: tast.VGstatement_if$_elseStatement<Annotation> = null
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_import",
                        kindNameOptions: [ "ImportDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "ImportDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_import",
                        child: currentChild,
                        expected: ["ImportDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_import$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_import$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gstatement_import$_clause",
                            kindNameOptions: [ "ImportClause"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "ImportClause") {
                        reportUnexpectedChild({
                            path: "Gstatement_import$_clause",
                            child: currentChild,
                            expected: ["ImportClause"],
                        })
                        return
                    }
                    ((
                        $: uast.Node<Annotation>,
                        callback: ($: tast.NGstatement_import$_clause$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.Node<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.Node<Annotation> | undefined
                        let nextChild: uast.Node<Annotation> | undefined
                        const choiceEnd_Gstatement_import$_clause$ = ($: tast.VTGstatement_import$_clause$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        if (children.length === 0) {
                            reportMissingToken({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gstatement_import$_clause$_namespace",
                                        kindNameOptions: [ "NamespaceImport"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamespaceImport") {
                                    reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$_namespace",
                                        child: currentChild,
                                        expected: ["NamespaceImport"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGstatement_import$_clause$_namespace$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.Node<Annotation> | undefined
                                    let nextChild: uast.Node<Annotation> | undefined
                                    Gidentifier(node, children, ($) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gstatement_import$_clause$_named",
                                        kindNameOptions: [ "NamedImports"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamedImports") {
                                    reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$_named",
                                        child: currentChild,
                                        expected: ["NamedImports"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGstatement_import$_clause$_named$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.Node<Annotation> | undefined
                                    let nextChild: uast.Node<Annotation> | undefined
                                    const elements: tast.VGstatement_import$_clause$_named$<Annotation> = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_import$_clause$_named$",
                                                kindNameOptions: [ "ImportSpecifier"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "ImportSpecifier") {
                                            reportUnexpectedChild({
                                                path: "Gstatement_import$_clause$_named$",
                                                child: currentChild,
                                                expected: ["ImportSpecifier"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.NGstatement_import$_clause$_named$$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.Node<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.Node<Annotation> | undefined
                                            let nextChild: uast.Node<Annotation> | undefined
                                            const sequenceEnd = ($: tast.VTGstatement_import$_clause$_named$$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            Gidentifier(node, children, ($) => {
                                                const _name = $
                                                let optional: tast.VGstatement_import$_clause$_named$$_as<Annotation> = null
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
                                                reportUnexpectedChild({
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
                                        reportUnexpectedChild({
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
                                    reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$",
                                        child: nextChild,
                                        expected: ["NamespaceImport", "NamedImports"],
                                    })
                                }
                            }
                        }
                        if (children.length > 0) {
                            reportUnexpectedChild({
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_interface",
                        kindNameOptions: [ "InterfaceDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "InterfaceDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_interface",
                        child: currentChild,
                        expected: ["InterfaceDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_interface$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_interface$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGstatement_interface$_modifiers<Annotation> = []
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
                            const elements: tast.VGstatement_interface$_typeParameters<Annotation> = []
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
                                const elements: tast.VGstatement_interface$_signature<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_labeled",
                        kindNameOptions: [ "LabeledStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "LabeledStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_labeled",
                        child: currentChild,
                        expected: ["LabeledStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_labeled$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_labeled$<Annotation>) => {
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_return",
                        kindNameOptions: [ "ReturnStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "ReturnStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_return",
                        child: currentChild,
                        expected: ["ReturnStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_return$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    let optional: tast.VGstatement_return$<Annotation> = null
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_switch",
                        kindNameOptions: [ "SwitchStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "SwitchStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_switch",
                        child: currentChild,
                        expected: ["SwitchStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_switch$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_switch$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gexpression(node, children, ($) => {
                        const _expression = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gstatement_switch$_caseBlock",
                                kindNameOptions: [ "CaseBlock"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "CaseBlock") {
                            reportUnexpectedChild({
                                path: "Gstatement_switch$_caseBlock",
                                child: currentChild,
                                expected: ["CaseBlock"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.NGstatement_switch$_caseBlock$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.Node<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.Node<Annotation> | undefined
                            let nextChild: uast.Node<Annotation> | undefined
                            const elements: tast.VGstatement_switch$_caseBlock$<Annotation> = []
                            const processElement = () => {
                                const choiceEnd_Gstatement_switch$_caseBlock$ = ($: tast.VTGstatement_switch$_caseBlock$<Annotation>) => {
                                    elements.push($)
                                }
                                if (children.length === 0) {
                                    reportMissingToken({
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
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_switch$_caseBlock$_case",
                                                kindNameOptions: [ "CaseClause"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "CaseClause") {
                                            reportUnexpectedChild({
                                                path: "Gstatement_switch$_caseBlock$_case",
                                                child: currentChild,
                                                expected: ["CaseClause"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.NGstatement_switch$_caseBlock$_case$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.Node<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.Node<Annotation> | undefined
                                            let nextChild: uast.Node<Annotation> | undefined
                                            const sequenceEnd = ($: tast.VTGstatement_switch$_caseBlock$_case$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            Gexpression(node, children, ($) => {
                                                const _case = $
                                                const elements: tast.VGstatement_switch$_caseBlock$_case$_statements<Annotation> = []
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
                                                reportUnexpectedChild({
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
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_switch$_caseBlock$_default",
                                                kindNameOptions: [ "DefaultClause"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "DefaultClause") {
                                            reportUnexpectedChild({
                                                path: "Gstatement_switch$_caseBlock$_default",
                                                child: currentChild,
                                                expected: ["DefaultClause"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.NGstatement_switch$_caseBlock$_default$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.Node<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.Node<Annotation> | undefined
                                            let nextChild: uast.Node<Annotation> | undefined
                                            const elements: tast.VGstatement_switch$_caseBlock$_default$<Annotation> = []
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
                                                reportUnexpectedChild({
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
                                            reportUnexpectedChild({
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
                                reportUnexpectedChild({
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_throw",
                        kindNameOptions: [ "ThrowStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "ThrowStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_throw",
                        child: currentChild,
                        expected: ["ThrowStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_throw$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    Gexpression(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_try",
                        kindNameOptions: [ "TryStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "TryStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_try",
                        child: currentChild,
                        expected: ["TryStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_try$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_try$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gblock(node, children, ($) => {
                        const _block = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gstatement_try$_catchClause",
                                kindNameOptions: [ "CatchClause"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "CatchClause") {
                            reportUnexpectedChild({
                                path: "Gstatement_try$_catchClause",
                                child: currentChild,
                                expected: ["CatchClause"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.NGstatement_try$_catchClause$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.Node<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.Node<Annotation> | undefined
                            let nextChild: uast.Node<Annotation> | undefined
                            const sequenceEnd = ($: tast.VTGstatement_try$_catchClause$<Annotation>) => {
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
                                reportUnexpectedChild({
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_typeAlias",
                        kindNameOptions: [ "TypeAliasDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeAliasDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_typeAlias",
                        child: currentChild,
                        expected: ["TypeAliasDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_typeAlias$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_typeAlias$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGstatement_typeAlias$_modifiers<Annotation> = []
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
                            const elements: tast.VGstatement_typeAlias$_typeParameters<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_variable",
                        kindNameOptions: [ "VariableStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "VariableStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_variable",
                        child: currentChild,
                        expected: ["VariableStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_variable$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_variable$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGstatement_variable$_modifiers<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_while",
                        kindNameOptions: [ "WhileStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "WhileStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_while",
                        child: currentChild,
                        expected: ["WhileStatement"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGstatement_while$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGstatement_while$<Annotation>) => {
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
                        reportUnexpectedChild({
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
                    reportUnexpectedChild({
                        path: "Gstatement",
                        child: nextChild,
                        expected: ["Block", "BreakStatement", "ExportDeclaration", "ExpressionStatement", "ForStatement", "FunctionDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TypeAliasDeclaration", "VariableStatement", "WhileStatement"],
                    })
                }
            }
        }
    }
    function GstringLiteral(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GstringLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GstringLiteral",
                kindNameOptions: [ "StringLiteral"],
            })
            return
        }
        if (currentChild.kindName !== "StringLiteral") {
            reportUnexpectedChild({
                path: "GstringLiteral",
                child: currentChild,
                expected: ["StringLiteral"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGstringLiteral$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            callback({
                annotation: $.annotation,
                content: $.value
            })
            if (children.length > 0) {
                reportUnexpectedChild({
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gtype<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gtype = ($: tast.VTGtype<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_any",
                        kindNameOptions: [ "AnyKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "AnyKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_any",
                        child: currentChild,
                        expected: ["AnyKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_any$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_array",
                        kindNameOptions: [ "ArrayType"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayType") {
                    reportUnexpectedChild({
                        path: "Gtype_array",
                        child: currentChild,
                        expected: ["ArrayType"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_array$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    Gtype(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_boolean",
                        kindNameOptions: [ "BooleanKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "BooleanKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_boolean",
                        child: currentChild,
                        expected: ["BooleanKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_boolean$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_function",
                        kindNameOptions: [ "FunctionType"],
                    })
                    return
                }
                if (currentChild.kindName !== "FunctionType") {
                    reportUnexpectedChild({
                        path: "Gtype_function",
                        child: currentChild,
                        expected: ["FunctionType"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_function$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGtype_function$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGtype_function$_parameters<Annotation> = []
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
                        let optional: tast.VGtype_function$_returnType<Annotation> = null
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_literal",
                        kindNameOptions: [ "LiteralType"],
                    })
                    return
                }
                if (currentChild.kindName !== "LiteralType") {
                    reportUnexpectedChild({
                        path: "Gtype_literal",
                        child: currentChild,
                        expected: ["LiteralType"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_literal$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const choiceEnd_Gtype_literal$ = ($: tast.VTGtype_literal$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    if (children.length === 0) {
                        reportMissingToken({
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
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gtype_literal$_null",
                                    kindNameOptions: [ "NullKeyword"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "NullKeyword") {
                                reportUnexpectedChild({
                                    path: "Gtype_literal$_null",
                                    child: currentChild,
                                    expected: ["NullKeyword"],
                                })
                                return
                            }
                            ((
                                $: uast.Node<Annotation>,
                                callback: ($: tast.NGtype_literal$_null$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.Node<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback({
                                    annotation: $.annotation,
                                    content: null
                                })
                                if (children.length > 0) {
                                    reportUnexpectedChild({
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
                                reportUnexpectedChild({
                                    path: "Gtype_literal$",
                                    child: nextChild,
                                    expected: ["NullKeyword", "StringLiteral"],
                                })
                            }
                        }
                    }
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_parenthesized",
                        kindNameOptions: [ "ParenthesizedType"],
                    })
                    return
                }
                if (currentChild.kindName !== "ParenthesizedType") {
                    reportUnexpectedChild({
                        path: "Gtype_parenthesized",
                        child: currentChild,
                        expected: ["ParenthesizedType"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_parenthesized$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    Gtype(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_never",
                        kindNameOptions: [ "NeverKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NeverKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_never",
                        child: currentChild,
                        expected: ["NeverKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_never$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_number",
                        kindNameOptions: [ "NumberKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NumberKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_number",
                        child: currentChild,
                        expected: ["NumberKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_number$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_optional",
                        kindNameOptions: [ "OptionalType"],
                    })
                    return
                }
                if (currentChild.kindName !== "OptionalType") {
                    reportUnexpectedChild({
                        path: "Gtype_optional",
                        child: currentChild,
                        expected: ["OptionalType"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_optional$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    Gtype(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_tuple",
                        kindNameOptions: [ "TupleType"],
                    })
                    return
                }
                if (currentChild.kindName !== "TupleType") {
                    reportUnexpectedChild({
                        path: "Gtype_tuple",
                        child: currentChild,
                        expected: ["TupleType"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_tuple$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const elements: tast.VGtype_tuple$<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeLiteral",
                        kindNameOptions: [ "TypeLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeLiteral") {
                    reportUnexpectedChild({
                        path: "Gtype_typeLiteral",
                        child: currentChild,
                        expected: ["TypeLiteral"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_typeLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const elements: tast.VGtype_typeLiteral$<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_string",
                        kindNameOptions: [ "StringKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_string",
                        child: currentChild,
                        expected: ["StringKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_string$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeReference",
                        kindNameOptions: [ "TypeReference"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeReference") {
                    reportUnexpectedChild({
                        path: "Gtype_typeReference",
                        child: currentChild,
                        expected: ["TypeReference"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_typeReference$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGtype_typeReference$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const choiceEnd_Gtype_typeReference$_x = ($: tast.VTGtype_typeReference$_x<Annotation>) => {
                        const _x = $
                        const elements: tast.VGtype_typeReference$_parameters<Annotation> = []
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
                        reportMissingToken({
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
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gtype_typeReference$_x_qualifiedName",
                                    kindNameOptions: [ "QualifiedName"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "QualifiedName") {
                                reportUnexpectedChild({
                                    path: "Gtype_typeReference$_x_qualifiedName",
                                    child: currentChild,
                                    expected: ["QualifiedName"],
                                })
                                return
                            }
                            ((
                                $: uast.Node<Annotation>,
                                callback: ($: tast.NGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.Node<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                let currentChild: uast.Node<Annotation> | undefined
                                let nextChild: uast.Node<Annotation> | undefined
                                const sequenceEnd = ($: tast.VTGtype_typeReference$_x_qualifiedName$<Annotation>) => {
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
                                    reportUnexpectedChild({
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
                                reportUnexpectedChild({
                                    path: "Gtype_typeReference$_x",
                                    child: nextChild,
                                    expected: ["Identifier", "QualifiedName"],
                                })
                            }
                        }
                    }
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_undefined",
                        kindNameOptions: [ "UndefinedKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "UndefinedKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_undefined",
                        child: currentChild,
                        expected: ["UndefinedKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_undefined$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_union",
                        kindNameOptions: [ "UnionType"],
                    })
                    return
                }
                if (currentChild.kindName !== "UnionType") {
                    reportUnexpectedChild({
                        path: "Gtype_union",
                        child: currentChild,
                        expected: ["UnionType"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_union$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const elements: tast.VGtype_union$<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_void",
                        kindNameOptions: [ "VoidKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "VoidKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_void",
                        child: currentChild,
                        expected: ["VoidKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtype_void$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                    reportUnexpectedChild({
                        path: "Gtype",
                        child: nextChild,
                        expected: ["AnyKeyword", "ArrayType", "BooleanKeyword", "FunctionType", "LiteralType", "ParenthesizedType", "NeverKeyword", "NumberKeyword", "OptionalType", "TupleType", "TypeLiteral", "StringKeyword", "TypeReference", "UndefinedKeyword", "UnionType", "VoidKeyword"],
                    })
                }
            }
        }
    }
    function GtypeParameter(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GtypeParameter<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GtypeParameter",
                kindNameOptions: [ "TypeParameter"],
            })
            return
        }
        if (currentChild.kindName !== "TypeParameter") {
            reportUnexpectedChild({
                path: "GtypeParameter",
                child: currentChild,
                expected: ["TypeParameter"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGtypeParameter$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            Gidentifier(node, children, ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            })
            if (children.length > 0) {
                reportUnexpectedChild({
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GtypeSignature<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_GtypeSignature = ($: tast.VTGtypeSignature<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_construct",
                        kindNameOptions: [ "ConstructSignature"],
                    })
                    return
                }
                if (currentChild.kindName !== "ConstructSignature") {
                    reportUnexpectedChild({
                        path: "GtypeSignature_construct",
                        child: currentChild,
                        expected: ["ConstructSignature"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtypeSignature_construct$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGtypeSignature_construct$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGtypeSignature_construct$_parameters<Annotation> = []
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_index",
                        kindNameOptions: [ "IndexSignature"],
                    })
                    return
                }
                if (currentChild.kindName !== "IndexSignature") {
                    reportUnexpectedChild({
                        path: "GtypeSignature_index",
                        child: currentChild,
                        expected: ["IndexSignature"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtypeSignature_index$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGtypeSignature_index$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGtypeSignature_index$_modifiers<Annotation> = []
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
                            let optional: tast.VGtypeSignature_index$_type<Annotation> = null
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_method",
                        kindNameOptions: [ "MethodSignature"],
                    })
                    return
                }
                if (currentChild.kindName !== "MethodSignature") {
                    reportUnexpectedChild({
                        path: "GtypeSignature_method",
                        child: currentChild,
                        expected: ["MethodSignature"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtypeSignature_method$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGtypeSignature_method$<Annotation>) => {
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
                        reportUnexpectedChild({
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_property",
                        kindNameOptions: [ "PropertySignature"],
                    })
                    return
                }
                if (currentChild.kindName !== "PropertySignature") {
                    reportUnexpectedChild({
                        path: "GtypeSignature_property",
                        child: currentChild,
                        expected: ["PropertySignature"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGtypeSignature_property$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.VTGtypeSignature_property$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const elements: tast.VGtypeSignature_property$_modifiers<Annotation> = []
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
                            let optional: tast.VGtypeSignature_property$_quesionToken<Annotation> = null
                            const setOptional = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "GtypeSignature_property$_quesionToken",
                                        kindNameOptions: [ "QuestionToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "QuestionToken") {
                                    reportUnexpectedChild({
                                        path: "GtypeSignature_property$_quesionToken",
                                        child: currentChild,
                                        expected: ["QuestionToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.NGtypeSignature_property$_quesionToken$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback({
                                        annotation: $.annotation,
                                        content: null
                                    })
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
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
                                let optional: tast.VGtypeSignature_property$_type<Annotation> = null
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
                        reportUnexpectedChild({
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
                    reportUnexpectedChild({
                        path: "GtypeSignature",
                        child: nextChild,
                        expected: ["ConstructSignature", "IndexSignature", "MethodSignature", "PropertySignature"],
                    })
                }
            }
        }
    }
    function GvariableDeclaration(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GvariableDeclaration<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GvariableDeclaration",
                kindNameOptions: [ "VariableDeclaration"],
            })
            return
        }
        if (currentChild.kindName !== "VariableDeclaration") {
            reportUnexpectedChild({
                path: "GvariableDeclaration",
                child: currentChild,
                expected: ["VariableDeclaration"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGvariableDeclaration$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            const sequenceEnd = ($: tast.VTGvariableDeclaration$<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            Gidentifier(node, children, ($) => {
                const _name = $
                let optional: tast.VGvariableDeclaration$_type<Annotation> = null
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
                    let optional: tast.VGvariableDeclaration$_expression<Annotation> = null
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
                reportUnexpectedChild({
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GvariableDeclarationList<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GvariableDeclarationList",
                kindNameOptions: [ "VariableDeclarationList"],
            })
            return
        }
        if (currentChild.kindName !== "VariableDeclarationList") {
            reportUnexpectedChild({
                path: "GvariableDeclarationList",
                child: currentChild,
                expected: ["VariableDeclarationList"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGvariableDeclarationList$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            const elements: tast.VGvariableDeclarationList$<Annotation> = []
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
                reportUnexpectedChild({
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
        reportUnexpectedRoot({
            root: $,
        })
        return
    } else {
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.Nroot<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            const sequenceEnd = ($: tast.VTroot<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            const elements: tast.Vroot_statements<Annotation> = []
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "root_endOfFile",
                        kindNameOptions: [ "EndOfFileToken"],
                    })
                    return
                }
                if (currentChild.kindName !== "EndOfFileToken") {
                    reportUnexpectedChild({
                        path: "root_endOfFile",
                        child: currentChild,
                        expected: ["EndOfFileToken"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.Nroot_endOfFile$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: null
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
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
                reportUnexpectedChild({
                    path: "root",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            $,
            ($) => {
                callback($)
            },
        )
    }
}