import * as pr from "pareto-runtime"
import * as tast from "../../interfaces/typedAST"
import * as uast from "../../interfaces/untypedAST"

export function parse<Annotation>(
    $: uast.Node<Annotation>,
    callback: ($: tast.TSourceFile<Annotation>) => void,
    reportUnexpectedRoot: ($: { root: uast.Node<Annotation>, }) => void,
    reportUnexpectedChild: ($: { path: string, child: uast.Node<Annotation>, }) => void,
    reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
): void {
    function X_expression(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gexpression<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gexpression = ($: tast.XGexpression<Annotation>) => {
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
                    })
                    return
                }
                ArrayLiteralExpression(
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
                    })
                    return
                }
                ArrowFunction(
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
                    })
                    return
                }
                BinaryExpression(
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
                    })
                    return
                }
                CallExpression(
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
                    })
                    return
                }
                ConditionalExpression(
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
                    })
                    return
                }
                ElementAccessExpression(
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
                    })
                    return
                }
                FalseKeyword(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["false", $])
                    }
                )
            }
            const choose_identifier = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "Gexpression_identifier",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["identifier", $])
                    }
                )
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
                    })
                    return
                }
                NewExpression(
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
                    })
                    return
                }
                NoSubstitutionTemplateLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["noSubstitutionTemplateLiteral", $])
                    }
                )
            }
            const choose_numericLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_numericLiteral",
                        kindNameOptions: [ "NumericLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NumericLiteral") {
                    reportUnexpectedChild({
                        path: "Gexpression_numericLiteral",
                        child: currentChild,
                    })
                    return
                }
                NumericLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["numericLiteral", $])
                    }
                )
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
                    })
                    return
                }
                NullKeyword(
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
                    })
                    return
                }
                ObjectLiteralExpression(
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
                    })
                    return
                }
                ParenthesizedExpression(
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
                    })
                    return
                }
                PostfixUnaryExpression(
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
                    })
                    return
                }
                PrefixUnaryExpression(
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
                    })
                    return
                }
                PropertyAccessExpression(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["propertyAccess", $])
                    }
                )
            }
            const choose_stringLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_stringLiteral",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "Gexpression_stringLiteral",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["stringLiteral", $])
                    }
                )
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
                    })
                    return
                }
                TemplateExpression(
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
                    })
                    return
                }
                TrueKeyword(
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
                    })
                }
            }
        }
    }
    function X_functionDefinition(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GfunctionDefinition<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XGfunctionDefinition<Annotation>) => {
            callback($)
        }
        const elements: tast.SGfunctionDefinition_typeParameters<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "GfunctionDefinition_typeParameters",
                    kindNameOptions: [ "TypeParameter"],
                })
                return
            }
            if (currentChild.kindName !== "TypeParameter") {
                reportUnexpectedChild({
                    path: "GfunctionDefinition_typeParameters",
                    child: currentChild,
                })
                return
            }
            TypeParameter(
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
                    case "TypeParameter":
                        processElement()
                        break
                    default: break arrayLoop
                }
            }
        }
        pr.cc(elements, ($) => {
            const _typeParameters = $
            const elements: tast.SGfunctionDefinition_parameters<Annotation> = []
            const processElement = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GfunctionDefinition_parameters",
                        kindNameOptions: [ "Parameter"],
                    })
                    return
                }
                if (currentChild.kindName !== "Parameter") {
                    reportUnexpectedChild({
                        path: "GfunctionDefinition_parameters",
                        child: currentChild,
                    })
                    return
                }
                Parameter(
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
                        case "Parameter":
                            processElement()
                            break
                        default: break arrayLoop
                    }
                }
            }
            pr.cc(elements, ($) => {
                const _parameters = $
                let optional: tast.SGfunctionDefinition_returnType<Annotation> = null
                const setOptional = () => {
                    X_type(node, children, ($) => {
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
    function X_identifierOrStringLiteral(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GidentifierOrStringLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_GidentifierOrStringLiteral = ($: tast.XGidentifierOrStringLiteral<Annotation>) => {
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
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GidentifierOrStringLiteral_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "GidentifierOrStringLiteral_identifier",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        choiceEnd_GidentifierOrStringLiteral(["identifier", $])
                    }
                )
            }
            const choose_stringLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GidentifierOrStringLiteral_stringLiteral",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "GidentifierOrStringLiteral_stringLiteral",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_GidentifierOrStringLiteral(["stringLiteral", $])
                    }
                )
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
                    })
                }
            }
        }
    }
    function X_modifier(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gmodifier<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gmodifier = ($: tast.XGmodifier<Annotation>) => {
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
                    })
                    return
                }
                DeclareKeyword(
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
                    })
                    return
                }
                ExportKeyword(
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
                    })
                    return
                }
                ReadonlyKeyword(
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
                    })
                }
            }
        }
    }
    function X_statement(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gstatement<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gstatement = ($: tast.XGstatement<Annotation>) => {
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
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_block",
                        kindNameOptions: [ "Block"],
                    })
                    return
                }
                if (currentChild.kindName !== "Block") {
                    reportUnexpectedChild({
                        path: "Gstatement_block",
                        child: currentChild,
                    })
                    return
                }
                Block(
                    currentChild,
                    ($) => {
                        choiceEnd_Gstatement(["block", $])
                    }
                )
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
                    })
                    return
                }
                BreakStatement(
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
                    })
                    return
                }
                ExportDeclaration(
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
                    })
                    return
                }
                ExpressionStatement(
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
                    })
                    return
                }
                ForStatement(
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
                    })
                    return
                }
                FunctionDeclaration(
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
                    })
                    return
                }
                IfStatement(
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
                    })
                    return
                }
                ImportDeclaration(
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
                    })
                    return
                }
                InterfaceDeclaration(
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
                    })
                    return
                }
                LabeledStatement(
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
                    })
                    return
                }
                ReturnStatement(
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
                    })
                    return
                }
                SwitchStatement(
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
                    })
                    return
                }
                ThrowStatement(
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
                    })
                    return
                }
                TryStatement(
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
                    })
                    return
                }
                TypeAliasDeclaration(
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
                    })
                    return
                }
                VariableStatement(
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
                    })
                    return
                }
                WhileStatement(
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
                    })
                }
            }
        }
    }
    function X_type(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gtype<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gtype = ($: tast.XGtype<Annotation>) => {
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
                    })
                    return
                }
                AnyKeyword(
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
                    })
                    return
                }
                ArrayType(
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
                    })
                    return
                }
                BooleanKeyword(
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
                    })
                    return
                }
                FunctionType(
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
                    })
                    return
                }
                LiteralType(
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
                    })
                    return
                }
                ParenthesizedType(
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
                    })
                    return
                }
                NeverKeyword(
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
                    })
                    return
                }
                NumberKeyword(
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
                    })
                    return
                }
                OptionalType(
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
                    })
                    return
                }
                TupleType(
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
                    })
                    return
                }
                TypeLiteral(
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
                    })
                    return
                }
                StringKeyword(
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
                    })
                    return
                }
                TypeReference(
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
                    })
                    return
                }
                UndefinedKeyword(
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
                    })
                    return
                }
                UnionType(
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
                    })
                    return
                }
                VoidKeyword(
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
                    })
                }
            }
        }
    }
    function X_typeSignature(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.GtypeSignature<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_GtypeSignature = ($: tast.XGtypeSignature<Annotation>) => {
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
                    })
                    return
                }
                ConstructSignature(
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
                    })
                    return
                }
                IndexSignature(
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
                    })
                    return
                }
                MethodSignature(
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
                    })
                    return
                }
                PropertySignature(
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
                    })
                }
            }
        }
    }
    function AnyKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TAnyKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "AnyKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ArrayLiteralExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TArrayLiteralExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STArrayLiteralExpression<Annotation> = []
        const processElement = () => {
            X_expression(node, children, ($) => {
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
                path: "ArrayLiteralExpression",
                child: children[0],
            })
        }
        return
    }
    function ArrayType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TArrayType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_type(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ArrayType",
                child: children[0],
            })
        }
        return
    }
    function ArrowFunction(
        $: uast.Node<Annotation>,
        callback: ($: tast.TArrowFunction<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTArrowFunction<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STArrowFunction_parameters<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TArrowFunction_parameters",
                    kindNameOptions: [ "Parameter"],
                })
                return
            }
            if (currentChild.kindName !== "Parameter") {
                reportUnexpectedChild({
                    path: "TArrowFunction_parameters",
                    child: currentChild,
                })
                return
            }
            Parameter(
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
                    case "Parameter":
                        processElement()
                        break
                    default: break arrayLoop
                }
            }
        }
        pr.cc(elements, ($) => {
            const _parameters = $
            let optional: tast.STArrowFunction_returnType<Annotation> = null
            const setOptional = () => {
                X_type(node, children, ($) => {
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
                        path: "TArrowFunction_equalsGreaterThan",
                        kindNameOptions: [ "EqualsGreaterThanToken"],
                    })
                    return
                }
                if (currentChild.kindName !== "EqualsGreaterThanToken") {
                    reportUnexpectedChild({
                        path: "TArrowFunction_equalsGreaterThan",
                        child: currentChild,
                    })
                    return
                }
                EqualsGreaterThanToken(
                    currentChild,
                    ($) => {
                        const _equalsGreaterThan = $
                        const choiceEnd_TArrowFunction_implementation = ($: tast.XTArrowFunction_implementation<Annotation>) => {
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
                                path: "TArrowFunction_implementation",
                                kindNameOptions: ["Block", "ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
                            })
                            return
                        } else {
                            nextChild = children[children.length - 1]
                            const choose_block = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "TArrowFunction_implementation_block",
                                        kindNameOptions: [ "Block"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "Block") {
                                    reportUnexpectedChild({
                                        path: "TArrowFunction_implementation_block",
                                        child: currentChild,
                                    })
                                    return
                                }
                                Block(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_TArrowFunction_implementation(["block", $])
                                    }
                                )
                            }
                            const choose_expression = () => {
                                X_expression(node, children, ($) => {
                                    choiceEnd_TArrowFunction_implementation(["expression", $])
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
                                        path: "TArrowFunction_implementation",
                                        child: nextChild,
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
                path: "ArrowFunction",
                child: children[0],
            })
        }
        return
    }
    function BinaryExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TBinaryExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTBinaryExpression<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _leftHandSide = $
            const choiceEnd_TBinaryExpression_operator = ($: tast.XTBinaryExpression_operator<Annotation>) => {
                const _operator = $
                X_expression(node, children, ($) => {
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
                    path: "TBinaryExpression_operator",
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
                            path: "TBinaryExpression_operator_ampersandAmpersand",
                            kindNameOptions: [ "AmpersandAmpersandToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "AmpersandAmpersandToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_ampersandAmpersand",
                            child: currentChild,
                        })
                        return
                    }
                    AmpersandAmpersandToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["ampersandAmpersand", $])
                        }
                    )
                }
                const choose_barBar = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_barBar",
                            kindNameOptions: [ "BarBarToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "BarBarToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_barBar",
                            child: currentChild,
                        })
                        return
                    }
                    BarBarToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["barBar", $])
                        }
                    )
                }
                const choose_equals = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_equals",
                            kindNameOptions: [ "EqualsToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "EqualsToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_equals",
                            child: currentChild,
                        })
                        return
                    }
                    EqualsToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["equals", $])
                        }
                    )
                }
                const choose_equalsEqualsEquals = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_equalsEqualsEquals",
                            kindNameOptions: [ "EqualsEqualsEqualsToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "EqualsEqualsEqualsToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_equalsEqualsEquals",
                            child: currentChild,
                        })
                        return
                    }
                    EqualsEqualsEqualsToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["equalsEqualsEquals", $])
                        }
                    )
                }
                const choose_exclamationEqualsEquals = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_exclamationEqualsEquals",
                            kindNameOptions: [ "ExclamationEqualsEqualsToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "ExclamationEqualsEqualsToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_exclamationEqualsEquals",
                            child: currentChild,
                        })
                        return
                    }
                    ExclamationEqualsEqualsToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["exclamationEqualsEquals", $])
                        }
                    )
                }
                const choose_greaterThan = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_greaterThan",
                            kindNameOptions: [ "GreaterThanToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "GreaterThanToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_greaterThan",
                            child: currentChild,
                        })
                        return
                    }
                    GreaterThanToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["greaterThan", $])
                        }
                    )
                }
                const choose_lessThan = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_lessThan",
                            kindNameOptions: [ "LessThanToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "LessThanToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_lessThan",
                            child: currentChild,
                        })
                        return
                    }
                    LessThanToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["lessThan", $])
                        }
                    )
                }
                const choose_minus = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_minus",
                            kindNameOptions: [ "MinusToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "MinusToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_minus",
                            child: currentChild,
                        })
                        return
                    }
                    MinusToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["minus", $])
                        }
                    )
                }
                const choose_minusEquals = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_minusEquals",
                            kindNameOptions: [ "MinusEqualsToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "MinusEqualsToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_minusEquals",
                            child: currentChild,
                        })
                        return
                    }
                    MinusEqualsToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["minusEquals", $])
                        }
                    )
                }
                const choose_plus = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_plus",
                            kindNameOptions: [ "PlusToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "PlusToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_plus",
                            child: currentChild,
                        })
                        return
                    }
                    PlusToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["plus", $])
                        }
                    )
                }
                const choose_plusEquals = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TBinaryExpression_operator_plusEquals",
                            kindNameOptions: [ "PlusEqualsToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "PlusEqualsToken") {
                        reportUnexpectedChild({
                            path: "TBinaryExpression_operator_plusEquals",
                            child: currentChild,
                        })
                        return
                    }
                    PlusEqualsToken(
                        currentChild,
                        ($) => {
                            choiceEnd_TBinaryExpression_operator(["plusEquals", $])
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
                            path: "TBinaryExpression_operator",
                            child: nextChild,
                        })
                    }
                }
            }
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "BinaryExpression",
                child: children[0],
            })
        }
        return
    }
    function AmpersandAmpersandToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TAmpersandAmpersandToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "AmpersandAmpersandToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function BarBarToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TBarBarToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "BarBarToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function BreakStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TBreakStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        let optional: tast.STBreakStatement<Annotation> = null
        const setOptional = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TBreakStatement",
                    kindNameOptions: [ "Identifier"],
                })
                return
            }
            if (currentChild.kindName !== "Identifier") {
                reportUnexpectedChild({
                    path: "TBreakStatement",
                    child: currentChild,
                })
                return
            }
            Identifier(
                currentChild,
                ($) => {
                    optional = $
                }
            )
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
                path: "BreakStatement",
                child: children[0],
            })
        }
        return
    }
    function EqualsEqualsEqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEqualsEqualsEqualsToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "EqualsEqualsEqualsToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function EqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEqualsToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "EqualsToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ExclamationEqualsEqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TExclamationEqualsEqualsToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ExclamationEqualsEqualsToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function GreaterThanToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TGreaterThanToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "GreaterThanToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function LessThanToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TLessThanToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "LessThanToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function MinusToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TMinusToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "MinusToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function MinusEqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TMinusEqualsToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "MinusEqualsToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function PlusToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPlusToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "PlusToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function PlusEqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPlusEqualsToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "PlusEqualsToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function BooleanKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TBooleanKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "BooleanKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function Block(
        $: uast.Node<Annotation>,
        callback: ($: tast.TBlock<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STBlock<Annotation> = []
        const processElement = () => {
            X_statement(node, children, ($) => {
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
                path: "Block",
                child: children[0],
            })
        }
        return
    }
    function CallExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TCallExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTCallExpression<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _function = $
            const elements: tast.STCallExpression_typeParameters<Annotation> = []
            const processElement = () => {
                X_type(node, children, ($) => {
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
                const elements: tast.STCallExpression_parameters<Annotation> = []
                const processElement = () => {
                    X_expression(node, children, ($) => {
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
                path: "CallExpression",
                child: children[0],
            })
        }
        return
    }
    function CaseBlock(
        $: uast.Node<Annotation>,
        callback: ($: tast.TCaseBlock<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STCaseBlock<Annotation> = []
        const processElement = () => {
            const choiceEnd_TCaseBlock = ($: tast.XTCaseBlock<Annotation>) => {
                elements.push($)
            }
            if (children.length === 0) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TCaseBlock",
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
                            path: "TCaseBlock_case",
                            kindNameOptions: [ "CaseClause"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "CaseClause") {
                        reportUnexpectedChild({
                            path: "TCaseBlock_case",
                            child: currentChild,
                        })
                        return
                    }
                    CaseClause(
                        currentChild,
                        ($) => {
                            choiceEnd_TCaseBlock(["case", $])
                        }
                    )
                }
                const choose_default = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TCaseBlock_default",
                            kindNameOptions: [ "DefaultClause"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "DefaultClause") {
                        reportUnexpectedChild({
                            path: "TCaseBlock_default",
                            child: currentChild,
                        })
                        return
                    }
                    DefaultClause(
                        currentChild,
                        ($) => {
                            choiceEnd_TCaseBlock(["default", $])
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
                            path: "TCaseBlock",
                            child: nextChild,
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
                path: "CaseBlock",
                child: children[0],
            })
        }
        return
    }
    function CaseClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TCaseClause<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTCaseClause<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _case = $
            const elements: tast.STCaseClause_statements<Annotation> = []
            const processElement = () => {
                X_statement(node, children, ($) => {
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
                path: "CaseClause",
                child: children[0],
            })
        }
        return
    }
    function CatchClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TCatchClause<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTCatchClause<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TCatchClause_variable",
                kindNameOptions: [ "VariableDeclaration"],
            })
            return
        }
        if (currentChild.kindName !== "VariableDeclaration") {
            reportUnexpectedChild({
                path: "TCatchClause_variable",
                child: currentChild,
            })
            return
        }
        VariableDeclaration(
            currentChild,
            ($) => {
                const _variable = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TCatchClause_block",
                        kindNameOptions: [ "Block"],
                    })
                    return
                }
                if (currentChild.kindName !== "Block") {
                    reportUnexpectedChild({
                        path: "TCatchClause_block",
                        child: currentChild,
                    })
                    return
                }
                Block(
                    currentChild,
                    ($) => {
                        const _block = $
                        sequenceEnd({
                            "variable": _variable,
                            "block": _block,
                        })
                    }
                )
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "CatchClause",
                child: children[0],
            })
        }
        return
    }
    function ColonToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TColonToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ColonToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ConditionalExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TConditionalExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTConditionalExpression<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _test = $
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TConditionalExpression_questionToken",
                    kindNameOptions: [ "QuestionToken"],
                })
                return
            }
            if (currentChild.kindName !== "QuestionToken") {
                reportUnexpectedChild({
                    path: "TConditionalExpression_questionToken",
                    child: currentChild,
                })
                return
            }
            QuestionToken(
                currentChild,
                ($) => {
                    const _questionToken = $
                    X_expression(node, children, ($) => {
                        const _ifExpression = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "TConditionalExpression_colonToken",
                                kindNameOptions: [ "ColonToken"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "ColonToken") {
                            reportUnexpectedChild({
                                path: "TConditionalExpression_colonToken",
                                child: currentChild,
                            })
                            return
                        }
                        ColonToken(
                            currentChild,
                            ($) => {
                                const _colonToken = $
                                X_expression(node, children, ($) => {
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
                path: "ConditionalExpression",
                child: children[0],
            })
        }
        return
    }
    function ConstructSignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TConstructSignature<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTConstructSignature<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STConstructSignature_parameters<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TConstructSignature_parameters",
                    kindNameOptions: [ "Parameter"],
                })
                return
            }
            if (currentChild.kindName !== "Parameter") {
                reportUnexpectedChild({
                    path: "TConstructSignature_parameters",
                    child: currentChild,
                })
                return
            }
            Parameter(
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
                    case "Parameter":
                        processElement()
                        break
                    default: break arrayLoop
                }
            }
        }
        pr.cc(elements, ($) => {
            const _parameters = $
            X_type(node, children, ($) => {
                const _returnType = $
                sequenceEnd({
                    "parameters": _parameters,
                    "returnType": _returnType,
                })
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ConstructSignature",
                child: children[0],
            })
        }
        return
    }
    function DeclareKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TDeclareKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "DeclareKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function DefaultClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TDefaultClause<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STDefaultClause<Annotation> = []
        const processElement = () => {
            X_statement(node, children, ($) => {
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
                path: "DefaultClause",
                child: children[0],
            })
        }
        return
    }
    function ElementAccessExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TElementAccessExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTElementAccessExpression<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _array = $
            X_expression(node, children, ($) => {
                const _element = $
                sequenceEnd({
                    "array": _array,
                    "element": _element,
                })
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ElementAccessExpression",
                child: children[0],
            })
        }
        return
    }
    function EndOfFileToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEndOfFileToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "EndOfFileToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function EqualsGreaterThanToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEqualsGreaterThanToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "EqualsGreaterThanToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ExportDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TExportDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TExportDeclaration",
                kindNameOptions: [ "StringLiteral"],
            })
            return
        }
        if (currentChild.kindName !== "StringLiteral") {
            reportUnexpectedChild({
                path: "TExportDeclaration",
                child: currentChild,
            })
            return
        }
        StringLiteral(
            currentChild,
            ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ExportDeclaration",
                child: children[0],
            })
        }
        return
    }
    function ExportKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TExportKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ExportKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ExpressionStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TExpressionStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_expression(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ExpressionStatement",
                child: children[0],
            })
        }
        return
    }
    function FalseKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TFalseKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "FalseKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ForStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TForStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTForStatement<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TForStatement_initializer",
                kindNameOptions: [ "VariableDeclarationList"],
            })
            return
        }
        if (currentChild.kindName !== "VariableDeclarationList") {
            reportUnexpectedChild({
                path: "TForStatement_initializer",
                child: currentChild,
            })
            return
        }
        VariableDeclarationList(
            currentChild,
            ($) => {
                const _initializer = $
                X_expression(node, children, ($) => {
                    const _condition = $
                    X_expression(node, children, ($) => {
                        const _incrementer = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "TForStatement_block",
                                kindNameOptions: [ "Block"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "Block") {
                            reportUnexpectedChild({
                                path: "TForStatement_block",
                                child: currentChild,
                            })
                            return
                        }
                        Block(
                            currentChild,
                            ($) => {
                                const _block = $
                                sequenceEnd({
                                    "initializer": _initializer,
                                    "condition": _condition,
                                    "incrementer": _incrementer,
                                    "block": _block,
                                })
                            }
                        )
                    })
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ForStatement",
                child: children[0],
            })
        }
        return
    }
    function FunctionDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TFunctionDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTFunctionDeclaration<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STFunctionDeclaration_modifiers<Annotation> = []
        const processElement = () => {
            X_modifier(node, children, ($) => {
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
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TFunctionDeclaration_name",
                    kindNameOptions: [ "Identifier"],
                })
                return
            }
            if (currentChild.kindName !== "Identifier") {
                reportUnexpectedChild({
                    path: "TFunctionDeclaration_name",
                    child: currentChild,
                })
                return
            }
            Identifier(
                currentChild,
                ($) => {
                    const _name = $
                    X_functionDefinition(node, children, ($) => {
                        const _definition = $
                        let optional: tast.STFunctionDeclaration_block<Annotation> = null
                        const setOptional = () => {
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "TFunctionDeclaration_block",
                                    kindNameOptions: [ "Block"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "Block") {
                                reportUnexpectedChild({
                                    path: "TFunctionDeclaration_block",
                                    child: currentChild,
                                })
                                return
                            }
                            Block(
                                currentChild,
                                ($) => {
                                    optional = $
                                }
                            )
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
                }
            )
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "FunctionDeclaration",
                child: children[0],
            })
        }
        return
    }
    function Identifier(
        $: uast.Node<Annotation>,
        callback: ($: tast.TIdentifier<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "Identifier",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: $.value
        })
        return
    }
    function IfStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TIfStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTIfStatement<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _expression = $
            X_statement(node, children, ($) => {
                const _thenStatement = $
                let optional: tast.STIfStatement_elseStatement<Annotation> = null
                const setOptional = () => {
                    X_statement(node, children, ($) => {
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
                path: "IfStatement",
                child: children[0],
            })
        }
        return
    }
    function FunctionType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TFunctionType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTFunctionType<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STFunctionType_parameters<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TFunctionType_parameters",
                    kindNameOptions: [ "Parameter"],
                })
                return
            }
            if (currentChild.kindName !== "Parameter") {
                reportUnexpectedChild({
                    path: "TFunctionType_parameters",
                    child: currentChild,
                })
                return
            }
            Parameter(
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
                    case "Parameter":
                        processElement()
                        break
                    default: break arrayLoop
                }
            }
        }
        pr.cc(elements, ($) => {
            const _parameters = $
            let optional: tast.STFunctionType_returnType<Annotation> = null
            const setOptional = () => {
                X_type(node, children, ($) => {
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
                path: "FunctionType",
                child: children[0],
            })
        }
        return
    }
    function ImportClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TImportClause<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_TImportClause = ($: tast.XTImportClause<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TImportClause",
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
                        path: "TImportClause_namespace",
                        kindNameOptions: [ "NamespaceImport"],
                    })
                    return
                }
                if (currentChild.kindName !== "NamespaceImport") {
                    reportUnexpectedChild({
                        path: "TImportClause_namespace",
                        child: currentChild,
                    })
                    return
                }
                NamespaceImport(
                    currentChild,
                    ($) => {
                        choiceEnd_TImportClause(["namespace", $])
                    }
                )
            }
            const choose_named = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TImportClause_named",
                        kindNameOptions: [ "NamedImports"],
                    })
                    return
                }
                if (currentChild.kindName !== "NamedImports") {
                    reportUnexpectedChild({
                        path: "TImportClause_named",
                        child: currentChild,
                    })
                    return
                }
                NamedImports(
                    currentChild,
                    ($) => {
                        choiceEnd_TImportClause(["named", $])
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
                        path: "TImportClause",
                        child: nextChild,
                    })
                }
            }
        }
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ImportClause",
                child: children[0],
            })
        }
        return
    }
    function ImportDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TImportDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTImportDeclaration<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TImportDeclaration_clause",
                kindNameOptions: [ "ImportClause"],
            })
            return
        }
        if (currentChild.kindName !== "ImportClause") {
            reportUnexpectedChild({
                path: "TImportDeclaration_clause",
                child: currentChild,
            })
            return
        }
        ImportClause(
            currentChild,
            ($) => {
                const _clause = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TImportDeclaration_file",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "TImportDeclaration_file",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        const _file = $
                        sequenceEnd({
                            "clause": _clause,
                            "file": _file,
                        })
                    }
                )
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ImportDeclaration",
                child: children[0],
            })
        }
        return
    }
    function IndexSignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TIndexSignature<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTIndexSignature<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STIndexSignature_modifiers<Annotation> = []
        const processElement = () => {
            X_modifier(node, children, ($) => {
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
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TIndexSignature_parameter",
                    kindNameOptions: [ "Parameter"],
                })
                return
            }
            if (currentChild.kindName !== "Parameter") {
                reportUnexpectedChild({
                    path: "TIndexSignature_parameter",
                    child: currentChild,
                })
                return
            }
            Parameter(
                currentChild,
                ($) => {
                    const _parameter = $
                    let optional: tast.STIndexSignature_type<Annotation> = null
                    const setOptional = () => {
                        X_type(node, children, ($) => {
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
                }
            )
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "IndexSignature",
                child: children[0],
            })
        }
        return
    }
    function InterfaceDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TInterfaceDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTInterfaceDeclaration<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STInterfaceDeclaration_modifiers<Annotation> = []
        const processElement = () => {
            X_modifier(node, children, ($) => {
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
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TInterfaceDeclaration_name",
                    kindNameOptions: [ "Identifier"],
                })
                return
            }
            if (currentChild.kindName !== "Identifier") {
                reportUnexpectedChild({
                    path: "TInterfaceDeclaration_name",
                    child: currentChild,
                })
                return
            }
            Identifier(
                currentChild,
                ($) => {
                    const _name = $
                    const elements: tast.STInterfaceDeclaration_typeParameters<Annotation> = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "TInterfaceDeclaration_typeParameters",
                                kindNameOptions: [ "TypeParameter"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "TypeParameter") {
                            reportUnexpectedChild({
                                path: "TInterfaceDeclaration_typeParameters",
                                child: currentChild,
                            })
                            return
                        }
                        TypeParameter(
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
                                case "TypeParameter":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _typeParameters = $
                        const elements: tast.STInterfaceDeclaration_signature<Annotation> = []
                        const processElement = () => {
                            X_typeSignature(node, children, ($) => {
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
                }
            )
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "InterfaceDeclaration",
                child: children[0],
            })
        }
        return
    }
    function ImportSpecifier(
        $: uast.Node<Annotation>,
        callback: ($: tast.TImportSpecifier<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTImportSpecifier<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TImportSpecifier_name",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TImportSpecifier_name",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _name = $
                let optional: tast.STImportSpecifier_as<Annotation> = null
                const setOptional = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TImportSpecifier_as",
                            kindNameOptions: [ "Identifier"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "Identifier") {
                        reportUnexpectedChild({
                            path: "TImportSpecifier_as",
                            child: currentChild,
                        })
                        return
                    }
                    Identifier(
                        currentChild,
                        ($) => {
                            optional = $
                        }
                    )
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
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ImportSpecifier",
                child: children[0],
            })
        }
        return
    }
    function LabeledStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TLabeledStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTLabeledStatement<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TLabeledStatement_label",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TLabeledStatement_label",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _label = $
                X_statement(node, children, ($) => {
                    const _statement = $
                    sequenceEnd({
                        "label": _label,
                        "statement": _statement,
                    })
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "LabeledStatement",
                child: children[0],
            })
        }
        return
    }
    function LiteralType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TLiteralType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_TLiteralType = ($: tast.XTLiteralType<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TLiteralType",
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
                        path: "TLiteralType_null",
                        kindNameOptions: [ "NullKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NullKeyword") {
                    reportUnexpectedChild({
                        path: "TLiteralType_null",
                        child: currentChild,
                    })
                    return
                }
                NullKeyword(
                    currentChild,
                    ($) => {
                        choiceEnd_TLiteralType(["null", $])
                    }
                )
            }
            const choose_string = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TLiteralType_string",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "TLiteralType_string",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_TLiteralType(["string", $])
                    }
                )
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
                        path: "TLiteralType",
                        child: nextChild,
                    })
                }
            }
        }
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "LiteralType",
                child: children[0],
            })
        }
        return
    }
    function MethodSignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TMethodSignature<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTMethodSignature<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TMethodSignature_name",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TMethodSignature_name",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _name = $
                X_functionDefinition(node, children, ($) => {
                    const _definition = $
                    sequenceEnd({
                        "name": _name,
                        "definition": _definition,
                    })
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "MethodSignature",
                child: children[0],
            })
        }
        return
    }
    function NamespaceImport(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNamespaceImport<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TNamespaceImport",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TNamespaceImport",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NamespaceImport",
                child: children[0],
            })
        }
        return
    }
    function NamedImports(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNamedImports<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STNamedImports<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TNamedImports",
                    kindNameOptions: [ "ImportSpecifier"],
                })
                return
            }
            if (currentChild.kindName !== "ImportSpecifier") {
                reportUnexpectedChild({
                    path: "TNamedImports",
                    child: currentChild,
                })
                return
            }
            ImportSpecifier(
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
                path: "NamedImports",
                child: children[0],
            })
        }
        return
    }
    function NeverKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNeverKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NeverKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function NumberKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNumberKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NumberKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function NumericLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNumericLiteral<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NumericLiteral",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: $.value
        })
        return
    }
    function NewExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNewExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTNewExpression<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TNewExpression_class",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TNewExpression_class",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _class = $
                const elements: tast.STNewExpression_parameters<Annotation> = []
                const processElement = () => {
                    X_expression(node, children, ($) => {
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
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NewExpression",
                child: children[0],
            })
        }
        return
    }
    function NullKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNullKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NullKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function NoSubstitutionTemplateLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNoSubstitutionTemplateLiteral<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NoSubstitutionTemplateLiteral",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ObjectLiteralExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TObjectLiteralExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STObjectLiteralExpression<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TObjectLiteralExpression",
                    kindNameOptions: [ "PropertyAssignment"],
                })
                return
            }
            if (currentChild.kindName !== "PropertyAssignment") {
                reportUnexpectedChild({
                    path: "TObjectLiteralExpression",
                    child: currentChild,
                })
                return
            }
            PropertyAssignment(
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
                path: "ObjectLiteralExpression",
                child: children[0],
            })
        }
        return
    }
    function OptionalType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TOptionalType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_type(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "OptionalType",
                child: children[0],
            })
        }
        return
    }
    function Parameter(
        $: uast.Node<Annotation>,
        callback: ($: tast.TParameter<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTParameter<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TParameter_name",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TParameter_name",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _name = $
                let optional: tast.STParameter_questionToken<Annotation> = null
                const setOptional = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TParameter_questionToken",
                            kindNameOptions: [ "QuestionToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "QuestionToken") {
                        reportUnexpectedChild({
                            path: "TParameter_questionToken",
                            child: currentChild,
                        })
                        return
                    }
                    QuestionToken(
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
                    let optional: tast.STParameter_type<Annotation> = null
                    const setOptional = () => {
                        X_type(node, children, ($) => {
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
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "Parameter",
                child: children[0],
            })
        }
        return
    }
    function ParenthesizedExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TParenthesizedExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_expression(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ParenthesizedExpression",
                child: children[0],
            })
        }
        return
    }
    function ParenthesizedType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TParenthesizedType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_type(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ParenthesizedType",
                child: children[0],
            })
        }
        return
    }
    function PostfixUnaryExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPostfixUnaryExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_expression(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "PostfixUnaryExpression",
                child: children[0],
            })
        }
        return
    }
    function PrefixUnaryExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPrefixUnaryExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_expression(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "PrefixUnaryExpression",
                child: children[0],
            })
        }
        return
    }
    function PropertyAccessExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPropertyAccessExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTPropertyAccessExpression<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _object = $
            X_expression(node, children, ($) => {
                const _property = $
                sequenceEnd({
                    "object": _object,
                    "property": _property,
                })
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "PropertyAccessExpression",
                child: children[0],
            })
        }
        return
    }
    function PropertyAssignment(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPropertyAssignment<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTPropertyAssignment<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const choiceEnd_TPropertyAssignment_name = ($: tast.XTPropertyAssignment_name<Annotation>) => {
            const _name = $
            X_expression(node, children, ($) => {
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
                path: "TPropertyAssignment_name",
                kindNameOptions: ["Identifier", "NumericLiteral", "StringLiteral"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_identifier = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TPropertyAssignment_name_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "TPropertyAssignment_name_identifier",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        choiceEnd_TPropertyAssignment_name(["identifier", $])
                    }
                )
            }
            const choose_numericLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TPropertyAssignment_name_numericLiteral",
                        kindNameOptions: [ "NumericLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NumericLiteral") {
                    reportUnexpectedChild({
                        path: "TPropertyAssignment_name_numericLiteral",
                        child: currentChild,
                    })
                    return
                }
                NumericLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_TPropertyAssignment_name(["numericLiteral", $])
                    }
                )
            }
            const choose_stringLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TPropertyAssignment_name_stringLiteral",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "TPropertyAssignment_name_stringLiteral",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_TPropertyAssignment_name(["stringLiteral", $])
                    }
                )
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
                        path: "TPropertyAssignment_name",
                        child: nextChild,
                    })
                }
            }
        }
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "PropertyAssignment",
                child: children[0],
            })
        }
        return
    }
    function PropertySignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPropertySignature<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTPropertySignature<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STPropertySignature_modifiers<Annotation> = []
        const processElement = () => {
            X_modifier(node, children, ($) => {
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
            X_identifierOrStringLiteral(node, children, ($) => {
                const _name = $
                let optional: tast.STPropertySignature_quesionToken<Annotation> = null
                const setOptional = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TPropertySignature_quesionToken",
                            kindNameOptions: [ "QuestionToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "QuestionToken") {
                        reportUnexpectedChild({
                            path: "TPropertySignature_quesionToken",
                            child: currentChild,
                        })
                        return
                    }
                    QuestionToken(
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
                    let optional: tast.STPropertySignature_type<Annotation> = null
                    const setOptional = () => {
                        X_type(node, children, ($) => {
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
                path: "PropertySignature",
                child: children[0],
            })
        }
        return
    }
    function QualifiedName(
        $: uast.Node<Annotation>,
        callback: ($: tast.TQualifiedName<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTQualifiedName<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TQualifiedName_context",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TQualifiedName_context",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _context = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TQualifiedName_type",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "TQualifiedName_type",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        const _type = $
                        sequenceEnd({
                            "context": _context,
                            "type": _type,
                        })
                    }
                )
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "QualifiedName",
                child: children[0],
            })
        }
        return
    }
    function QuestionToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TQuestionToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "QuestionToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ReadonlyKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TReadonlyKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ReadonlyKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ReturnStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TReturnStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        let optional: tast.STReturnStatement<Annotation> = null
        const setOptional = () => {
            X_expression(node, children, ($) => {
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
                path: "ReturnStatement",
                child: children[0],
            })
        }
        return
    }
    function SourceFile(
        $: uast.Node<Annotation>,
        callback: ($: tast.TSourceFile<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTSourceFile<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STSourceFile_statements<Annotation> = []
        const processElement = () => {
            X_statement(node, children, ($) => {
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
                    path: "TSourceFile_endOfFile",
                    kindNameOptions: [ "EndOfFileToken"],
                })
                return
            }
            if (currentChild.kindName !== "EndOfFileToken") {
                reportUnexpectedChild({
                    path: "TSourceFile_endOfFile",
                    child: currentChild,
                })
                return
            }
            EndOfFileToken(
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
                path: "SourceFile",
                child: children[0],
            })
        }
        return
    }
    function StringKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TStringKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "StringKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function StringLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TStringLiteral<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "StringLiteral",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: $.value
        })
        return
    }
    function SwitchStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TSwitchStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTSwitchStatement<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _expression = $
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TSwitchStatement_caseBlock",
                    kindNameOptions: [ "CaseBlock"],
                })
                return
            }
            if (currentChild.kindName !== "CaseBlock") {
                reportUnexpectedChild({
                    path: "TSwitchStatement_caseBlock",
                    child: currentChild,
                })
                return
            }
            CaseBlock(
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
                path: "SwitchStatement",
                child: children[0],
            })
        }
        return
    }
    function TemplateExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTTemplateExpression<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TTemplateExpression_head",
                kindNameOptions: [ "TemplateHead"],
            })
            return
        }
        if (currentChild.kindName !== "TemplateHead") {
            reportUnexpectedChild({
                path: "TTemplateExpression_head",
                child: currentChild,
            })
            return
        }
        TemplateHead(
            currentChild,
            ($) => {
                const _head = $
                const elements: tast.STTemplateExpression_spans<Annotation> = []
                const processElement = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TTemplateExpression_spans",
                            kindNameOptions: [ "TemplateSpan"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "TemplateSpan") {
                        reportUnexpectedChild({
                            path: "TTemplateExpression_spans",
                            child: currentChild,
                        })
                        return
                    }
                    TemplateSpan(
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
                path: "TemplateExpression",
                child: children[0],
            })
        }
        return
    }
    function TemplateHead(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateHead<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TemplateHead",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: $.value
        })
        return
    }
    function TemplateMiddle(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateMiddle<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TemplateMiddle",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function TemplateSpan(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateSpan<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTTemplateSpan<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _expression = $
            const choiceEnd_TTemplateSpan_x = ($: tast.XTTemplateSpan_x<Annotation>) => {
                const _x = $
                sequenceEnd({
                    "expression": _expression,
                    "x": _x,
                })
            }
            if (children.length === 0) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TTemplateSpan_x",
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
                            path: "TTemplateSpan_x_middle",
                            kindNameOptions: [ "TemplateMiddle"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "TemplateMiddle") {
                        reportUnexpectedChild({
                            path: "TTemplateSpan_x_middle",
                            child: currentChild,
                        })
                        return
                    }
                    TemplateMiddle(
                        currentChild,
                        ($) => {
                            choiceEnd_TTemplateSpan_x(["middle", $])
                        }
                    )
                }
                const choose_tail = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TTemplateSpan_x_tail",
                            kindNameOptions: [ "TemplateTail"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "TemplateTail") {
                        reportUnexpectedChild({
                            path: "TTemplateSpan_x_tail",
                            child: currentChild,
                        })
                        return
                    }
                    TemplateTail(
                        currentChild,
                        ($) => {
                            choiceEnd_TTemplateSpan_x(["tail", $])
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
                            path: "TTemplateSpan_x",
                            child: nextChild,
                        })
                    }
                }
            }
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TemplateSpan",
                child: children[0],
            })
        }
        return
    }
    function TemplateTail(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateTail<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TemplateTail",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ThrowStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TThrowStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_expression(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ThrowStatement",
                child: children[0],
            })
        }
        return
    }
    function TrueKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTrueKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TrueKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function TryStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTryStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTTryStatement<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TTryStatement_block",
                kindNameOptions: [ "Block"],
            })
            return
        }
        if (currentChild.kindName !== "Block") {
            reportUnexpectedChild({
                path: "TTryStatement_block",
                child: currentChild,
            })
            return
        }
        Block(
            currentChild,
            ($) => {
                const _block = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TTryStatement_catchClause",
                        kindNameOptions: [ "CatchClause"],
                    })
                    return
                }
                if (currentChild.kindName !== "CatchClause") {
                    reportUnexpectedChild({
                        path: "TTryStatement_catchClause",
                        child: currentChild,
                    })
                    return
                }
                CatchClause(
                    currentChild,
                    ($) => {
                        const _catchClause = $
                        sequenceEnd({
                            "block": _block,
                            "catchClause": _catchClause,
                        })
                    }
                )
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TryStatement",
                child: children[0],
            })
        }
        return
    }
    function TupleType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTupleType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STTupleType<Annotation> = []
        const processElement = () => {
            X_type(node, children, ($) => {
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
                path: "TupleType",
                child: children[0],
            })
        }
        return
    }
    function TypeAliasDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeAliasDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTTypeAliasDeclaration<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STTypeAliasDeclaration_modifiers<Annotation> = []
        const processElement = () => {
            X_modifier(node, children, ($) => {
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
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TTypeAliasDeclaration_name",
                    kindNameOptions: [ "Identifier"],
                })
                return
            }
            if (currentChild.kindName !== "Identifier") {
                reportUnexpectedChild({
                    path: "TTypeAliasDeclaration_name",
                    child: currentChild,
                })
                return
            }
            Identifier(
                currentChild,
                ($) => {
                    const _name = $
                    const elements: tast.STTypeAliasDeclaration_typeParameters<Annotation> = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "TTypeAliasDeclaration_typeParameters",
                                kindNameOptions: [ "TypeParameter"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "TypeParameter") {
                            reportUnexpectedChild({
                                path: "TTypeAliasDeclaration_typeParameters",
                                child: currentChild,
                            })
                            return
                        }
                        TypeParameter(
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
                                case "TypeParameter":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _typeParameters = $
                        X_type(node, children, ($) => {
                            const _type = $
                            sequenceEnd({
                                "modifiers": _modifiers,
                                "name": _name,
                                "typeParameters": _typeParameters,
                                "type": _type,
                            })
                        })
                    })
                }
            )
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TypeAliasDeclaration",
                child: children[0],
            })
        }
        return
    }
    function TypeLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeLiteral<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STTypeLiteral<Annotation> = []
        const processElement = () => {
            X_typeSignature(node, children, ($) => {
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
                path: "TypeLiteral",
                child: children[0],
            })
        }
        return
    }
    function TypeParameter(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeParameter<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TTypeParameter",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TTypeParameter",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TypeParameter",
                child: children[0],
            })
        }
        return
    }
    function TypeReference(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeReference<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTTypeReference<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const choiceEnd_TTypeReference_x = ($: tast.XTTypeReference_x<Annotation>) => {
            const _x = $
            const elements: tast.STTypeReference_parameters<Annotation> = []
            const processElement = () => {
                X_type(node, children, ($) => {
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
                path: "TTypeReference_x",
                kindNameOptions: ["Identifier", "QualifiedName"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_identifier = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TTypeReference_x_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "TTypeReference_x_identifier",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        choiceEnd_TTypeReference_x(["identifier", $])
                    }
                )
            }
            const choose_qualifiedName = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TTypeReference_x_qualifiedName",
                        kindNameOptions: [ "QualifiedName"],
                    })
                    return
                }
                if (currentChild.kindName !== "QualifiedName") {
                    reportUnexpectedChild({
                        path: "TTypeReference_x_qualifiedName",
                        child: currentChild,
                    })
                    return
                }
                QualifiedName(
                    currentChild,
                    ($) => {
                        choiceEnd_TTypeReference_x(["qualifiedName", $])
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
                        path: "TTypeReference_x",
                        child: nextChild,
                    })
                }
            }
        }
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TypeReference",
                child: children[0],
            })
        }
        return
    }
    function UndefinedKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TUndefinedKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "UndefinedKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function UnionType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TUnionType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STUnionType<Annotation> = []
        const processElement = () => {
            X_type(node, children, ($) => {
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
                path: "UnionType",
                child: children[0],
            })
        }
        return
    }
    function VariableDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTVariableDeclaration<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TVariableDeclaration_name",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TVariableDeclaration_name",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _name = $
                let optional: tast.STVariableDeclaration_type<Annotation> = null
                const setOptional = () => {
                    X_type(node, children, ($) => {
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
                    let optional: tast.STVariableDeclaration_expression<Annotation> = null
                    const setOptional = () => {
                        X_expression(node, children, ($) => {
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
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "VariableDeclaration",
                child: children[0],
            })
        }
        return
    }
    function VariableDeclarationList(
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableDeclarationList<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STVariableDeclarationList<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TVariableDeclarationList",
                    kindNameOptions: [ "VariableDeclaration"],
                })
                return
            }
            if (currentChild.kindName !== "VariableDeclaration") {
                reportUnexpectedChild({
                    path: "TVariableDeclarationList",
                    child: currentChild,
                })
                return
            }
            VariableDeclaration(
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
                path: "VariableDeclarationList",
                child: children[0],
            })
        }
        return
    }
    function VariableStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTVariableStatement<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const elements: tast.STVariableStatement_modifiers<Annotation> = []
        const processElement = () => {
            X_modifier(node, children, ($) => {
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
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TVariableStatement_variableDeclarationList",
                    kindNameOptions: [ "VariableDeclarationList"],
                })
                return
            }
            if (currentChild.kindName !== "VariableDeclarationList") {
                reportUnexpectedChild({
                    path: "TVariableStatement_variableDeclarationList",
                    child: currentChild,
                })
                return
            }
            VariableDeclarationList(
                currentChild,
                ($) => {
                    const _variableDeclarationList = $
                    sequenceEnd({
                        "modifiers": _modifiers,
                        "variableDeclarationList": _variableDeclarationList,
                    })
                }
            )
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "VariableStatement",
                child: children[0],
            })
        }
        return
    }
    function VoidKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TVoidKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "VoidKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function WhileStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TWhileStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTWhileStatement<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        X_expression(node, children, ($) => {
            const _condition = $
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TWhileStatement_block",
                    kindNameOptions: [ "Block"],
                })
                return
            }
            if (currentChild.kindName !== "Block") {
                reportUnexpectedChild({
                    path: "TWhileStatement_block",
                    child: currentChild,
                })
                return
            }
            Block(
                currentChild,
                ($) => {
                    const _block = $
                    sequenceEnd({
                        "condition": _condition,
                        "block": _block,
                    })
                }
            )
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "WhileStatement",
                child: children[0],
            })
        }
        return
    }
    if ($.kindName !== "SourceFile") {
        reportUnexpectedRoot({
            root: $,
        })
        return
    } else {
        SourceFile(
            $,
            ($) => {
                callback($)
            },
        )
        return
    }
}