import * as pr from "pareto-runtime"
import * as api from "../interfaces/typedAST"

export type FOO<Annotation> = {
    "AnyKeyword"?: ($: api.TAnyKeyword<Annotation>) => void
    "ArrayLiteralExpression"?: {
        begin: ($: api.TArrayLiteralExpression<Annotation>) => void,
        end: ($: api.TArrayLiteralExpression<Annotation>) => void,
    }
    "ArrayType"?: {
        begin: ($: api.TArrayType<Annotation>) => void,
        end: ($: api.TArrayType<Annotation>) => void,
    }
    "ArrowFunction"?: {
        begin: ($: api.TArrowFunction<Annotation>) => void,
        end: ($: api.TArrowFunction<Annotation>) => void,
    }
    "BinaryExpression"?: {
        begin: ($: api.TBinaryExpression<Annotation>) => void,
        end: ($: api.TBinaryExpression<Annotation>) => void,
    }
    "AmpersandAmpersandToken"?: ($: api.TAmpersandAmpersandToken<Annotation>) => void
    "BarBarToken"?: ($: api.TBarBarToken<Annotation>) => void
    "BreakStatement"?: {
        begin: ($: api.TBreakStatement<Annotation>) => void,
        end: ($: api.TBreakStatement<Annotation>) => void,
    }
    "EqualsEqualsEqualsToken"?: ($: api.TEqualsEqualsEqualsToken<Annotation>) => void
    "EqualsToken"?: ($: api.TEqualsToken<Annotation>) => void
    "ExclamationEqualsEqualsToken"?: ($: api.TExclamationEqualsEqualsToken<Annotation>) => void
    "GreaterThanToken"?: ($: api.TGreaterThanToken<Annotation>) => void
    "LessThanToken"?: ($: api.TLessThanToken<Annotation>) => void
    "MinusToken"?: ($: api.TMinusToken<Annotation>) => void
    "MinusEqualsToken"?: ($: api.TMinusEqualsToken<Annotation>) => void
    "PlusToken"?: ($: api.TPlusToken<Annotation>) => void
    "PlusEqualsToken"?: ($: api.TPlusEqualsToken<Annotation>) => void
    "BooleanKeyword"?: ($: api.TBooleanKeyword<Annotation>) => void
    "Block"?: {
        begin: ($: api.TBlock<Annotation>) => void,
        end: ($: api.TBlock<Annotation>) => void,
    }
    "CallExpression"?: {
        begin: ($: api.TCallExpression<Annotation>) => void,
        end: ($: api.TCallExpression<Annotation>) => void,
    }
    "CaseBlock"?: {
        begin: ($: api.TCaseBlock<Annotation>) => void,
        end: ($: api.TCaseBlock<Annotation>) => void,
    }
    "CaseClause"?: {
        begin: ($: api.TCaseClause<Annotation>) => void,
        end: ($: api.TCaseClause<Annotation>) => void,
    }
    "CatchClause"?: {
        begin: ($: api.TCatchClause<Annotation>) => void,
        end: ($: api.TCatchClause<Annotation>) => void,
    }
    "ColonToken"?: ($: api.TColonToken<Annotation>) => void
    "ConditionalExpression"?: {
        begin: ($: api.TConditionalExpression<Annotation>) => void,
        end: ($: api.TConditionalExpression<Annotation>) => void,
    }
    "ConstructSignature"?: {
        begin: ($: api.TConstructSignature<Annotation>) => void,
        end: ($: api.TConstructSignature<Annotation>) => void,
    }
    "DeclareKeyword"?: ($: api.TDeclareKeyword<Annotation>) => void
    "DefaultClause"?: {
        begin: ($: api.TDefaultClause<Annotation>) => void,
        end: ($: api.TDefaultClause<Annotation>) => void,
    }
    "ElementAccessExpression"?: {
        begin: ($: api.TElementAccessExpression<Annotation>) => void,
        end: ($: api.TElementAccessExpression<Annotation>) => void,
    }
    "EndOfFileToken"?: ($: api.TEndOfFileToken<Annotation>) => void
    "EqualsGreaterThanToken"?: ($: api.TEqualsGreaterThanToken<Annotation>) => void
    "ExportDeclaration"?: {
        begin: ($: api.TExportDeclaration<Annotation>) => void,
        end: ($: api.TExportDeclaration<Annotation>) => void,
    }
    "ExportKeyword"?: ($: api.TExportKeyword<Annotation>) => void
    "ExpressionStatement"?: {
        begin: ($: api.TExpressionStatement<Annotation>) => void,
        end: ($: api.TExpressionStatement<Annotation>) => void,
    }
    "FalseKeyword"?: ($: api.TFalseKeyword<Annotation>) => void
    "ForStatement"?: {
        begin: ($: api.TForStatement<Annotation>) => void,
        end: ($: api.TForStatement<Annotation>) => void,
    }
    "FunctionDeclaration"?: {
        begin: ($: api.TFunctionDeclaration<Annotation>) => void,
        end: ($: api.TFunctionDeclaration<Annotation>) => void,
    }
    "Identifier"?: ($: api.TIdentifier<Annotation>) => void
    "IfStatement"?: {
        begin: ($: api.TIfStatement<Annotation>) => void,
        end: ($: api.TIfStatement<Annotation>) => void,
    }
    "FunctionType"?: {
        begin: ($: api.TFunctionType<Annotation>) => void,
        end: ($: api.TFunctionType<Annotation>) => void,
    }
    "ImportClause"?: {
        begin: ($: api.TImportClause<Annotation>) => void,
        end: ($: api.TImportClause<Annotation>) => void,
    }
    "ImportDeclaration"?: {
        begin: ($: api.TImportDeclaration<Annotation>) => void,
        end: ($: api.TImportDeclaration<Annotation>) => void,
    }
    "IndexSignature"?: {
        begin: ($: api.TIndexSignature<Annotation>) => void,
        end: ($: api.TIndexSignature<Annotation>) => void,
    }
    "InterfaceDeclaration"?: {
        begin: ($: api.TInterfaceDeclaration<Annotation>) => void,
        end: ($: api.TInterfaceDeclaration<Annotation>) => void,
    }
    "ImportSpecifier"?: {
        begin: ($: api.TImportSpecifier<Annotation>) => void,
        end: ($: api.TImportSpecifier<Annotation>) => void,
    }
    "LabeledStatement"?: {
        begin: ($: api.TLabeledStatement<Annotation>) => void,
        end: ($: api.TLabeledStatement<Annotation>) => void,
    }
    "LiteralType"?: {
        begin: ($: api.TLiteralType<Annotation>) => void,
        end: ($: api.TLiteralType<Annotation>) => void,
    }
    "MethodSignature"?: {
        begin: ($: api.TMethodSignature<Annotation>) => void,
        end: ($: api.TMethodSignature<Annotation>) => void,
    }
    "NamespaceImport"?: {
        begin: ($: api.TNamespaceImport<Annotation>) => void,
        end: ($: api.TNamespaceImport<Annotation>) => void,
    }
    "NamedImports"?: {
        begin: ($: api.TNamedImports<Annotation>) => void,
        end: ($: api.TNamedImports<Annotation>) => void,
    }
    "NeverKeyword"?: ($: api.TNeverKeyword<Annotation>) => void
    "NumberKeyword"?: ($: api.TNumberKeyword<Annotation>) => void
    "NumericLiteral"?: ($: api.TNumericLiteral<Annotation>) => void
    "NewExpression"?: {
        begin: ($: api.TNewExpression<Annotation>) => void,
        end: ($: api.TNewExpression<Annotation>) => void,
    }
    "NullKeyword"?: ($: api.TNullKeyword<Annotation>) => void
    "NoSubstitutionTemplateLiteral"?: ($: api.TNoSubstitutionTemplateLiteral<Annotation>) => void
    "ObjectLiteralExpression"?: {
        begin: ($: api.TObjectLiteralExpression<Annotation>) => void,
        end: ($: api.TObjectLiteralExpression<Annotation>) => void,
    }
    "OptionalType"?: {
        begin: ($: api.TOptionalType<Annotation>) => void,
        end: ($: api.TOptionalType<Annotation>) => void,
    }
    "Parameter"?: {
        begin: ($: api.TParameter<Annotation>) => void,
        end: ($: api.TParameter<Annotation>) => void,
    }
    "ParenthesizedExpression"?: {
        begin: ($: api.TParenthesizedExpression<Annotation>) => void,
        end: ($: api.TParenthesizedExpression<Annotation>) => void,
    }
    "ParenthesizedType"?: {
        begin: ($: api.TParenthesizedType<Annotation>) => void,
        end: ($: api.TParenthesizedType<Annotation>) => void,
    }
    "PostfixUnaryExpression"?: {
        begin: ($: api.TPostfixUnaryExpression<Annotation>) => void,
        end: ($: api.TPostfixUnaryExpression<Annotation>) => void,
    }
    "PrefixUnaryExpression"?: {
        begin: ($: api.TPrefixUnaryExpression<Annotation>) => void,
        end: ($: api.TPrefixUnaryExpression<Annotation>) => void,
    }
    "PropertyAccessExpression"?: {
        begin: ($: api.TPropertyAccessExpression<Annotation>) => void,
        end: ($: api.TPropertyAccessExpression<Annotation>) => void,
    }
    "PropertyAssignment"?: {
        begin: ($: api.TPropertyAssignment<Annotation>) => void,
        end: ($: api.TPropertyAssignment<Annotation>) => void,
    }
    "PropertySignature"?: {
        begin: ($: api.TPropertySignature<Annotation>) => void,
        end: ($: api.TPropertySignature<Annotation>) => void,
    }
    "QualifiedName"?: {
        begin: ($: api.TQualifiedName<Annotation>) => void,
        end: ($: api.TQualifiedName<Annotation>) => void,
    }
    "QuestionToken"?: ($: api.TQuestionToken<Annotation>) => void
    "ReadonlyKeyword"?: ($: api.TReadonlyKeyword<Annotation>) => void
    "ReturnStatement"?: {
        begin: ($: api.TReturnStatement<Annotation>) => void,
        end: ($: api.TReturnStatement<Annotation>) => void,
    }
    "SourceFile"?: {
        begin: ($: api.TSourceFile<Annotation>) => void,
        end: ($: api.TSourceFile<Annotation>) => void,
    }
    "StringKeyword"?: ($: api.TStringKeyword<Annotation>) => void
    "StringLiteral"?: ($: api.TStringLiteral<Annotation>) => void
    "SwitchStatement"?: {
        begin: ($: api.TSwitchStatement<Annotation>) => void,
        end: ($: api.TSwitchStatement<Annotation>) => void,
    }
    "TemplateExpression"?: {
        begin: ($: api.TTemplateExpression<Annotation>) => void,
        end: ($: api.TTemplateExpression<Annotation>) => void,
    }
    "TemplateHead"?: ($: api.TTemplateHead<Annotation>) => void
    "TemplateMiddle"?: ($: api.TTemplateMiddle<Annotation>) => void
    "TemplateSpan"?: {
        begin: ($: api.TTemplateSpan<Annotation>) => void,
        end: ($: api.TTemplateSpan<Annotation>) => void,
    }
    "TemplateTail"?: ($: api.TTemplateTail<Annotation>) => void
    "ThrowStatement"?: {
        begin: ($: api.TThrowStatement<Annotation>) => void,
        end: ($: api.TThrowStatement<Annotation>) => void,
    }
    "TrueKeyword"?: ($: api.TTrueKeyword<Annotation>) => void
    "TryStatement"?: {
        begin: ($: api.TTryStatement<Annotation>) => void,
        end: ($: api.TTryStatement<Annotation>) => void,
    }
    "TupleType"?: {
        begin: ($: api.TTupleType<Annotation>) => void,
        end: ($: api.TTupleType<Annotation>) => void,
    }
    "TypeAliasDeclaration"?: {
        begin: ($: api.TTypeAliasDeclaration<Annotation>) => void,
        end: ($: api.TTypeAliasDeclaration<Annotation>) => void,
    }
    "TypeLiteral"?: {
        begin: ($: api.TTypeLiteral<Annotation>) => void,
        end: ($: api.TTypeLiteral<Annotation>) => void,
    }
    "TypeParameter"?: {
        begin: ($: api.TTypeParameter<Annotation>) => void,
        end: ($: api.TTypeParameter<Annotation>) => void,
    }
    "TypeReference"?: {
        begin: ($: api.TTypeReference<Annotation>) => void,
        end: ($: api.TTypeReference<Annotation>) => void,
    }
    "UndefinedKeyword"?: ($: api.TUndefinedKeyword<Annotation>) => void
    "UnionType"?: {
        begin: ($: api.TUnionType<Annotation>) => void,
        end: ($: api.TUnionType<Annotation>) => void,
    }
    "VariableDeclaration"?: {
        begin: ($: api.TVariableDeclaration<Annotation>) => void,
        end: ($: api.TVariableDeclaration<Annotation>) => void,
    }
    "VariableDeclarationList"?: {
        begin: ($: api.TVariableDeclarationList<Annotation>) => void,
        end: ($: api.TVariableDeclarationList<Annotation>) => void,
    }
    "VariableStatement"?: {
        begin: ($: api.TVariableStatement<Annotation>) => void,
        end: ($: api.TVariableStatement<Annotation>) => void,
    }
    "VoidKeyword"?: ($: api.TVoidKeyword<Annotation>) => void
    "WhileStatement"?: {
        begin: ($: api.TWhileStatement<Annotation>) => void,
        end: ($: api.TWhileStatement<Annotation>) => void,
    }
}

export const foo: FOO<string> = {
    "AnyKeyword": ($) => { console.log("AnyKeyword") },
    "ArrayLiteralExpression": {
        begin: ($) => { console.log("ArrayLiteralExpression begin") },
        end: ($) => { console.log("ArrayLiteralExpression end") },
    },
    "ArrayType": {
        begin: ($) => { console.log("ArrayType begin") },
        end: ($) => { console.log("ArrayType end") },
    },
    "ArrowFunction": {
        begin: ($) => { console.log("ArrowFunction begin") },
        end: ($) => { console.log("ArrowFunction end") },
    },
    "BinaryExpression": {
        begin: ($) => { console.log("BinaryExpression begin") },
        end: ($) => { console.log("BinaryExpression end") },
    },
    "AmpersandAmpersandToken": ($) => { console.log("AmpersandAmpersandToken") },
    "BarBarToken": ($) => { console.log("BarBarToken") },
    "BreakStatement": {
        begin: ($) => { console.log("BreakStatement begin") },
        end: ($) => { console.log("BreakStatement end") },
    },
    "EqualsEqualsEqualsToken": ($) => { console.log("EqualsEqualsEqualsToken") },
    "EqualsToken": ($) => { console.log("EqualsToken") },
    "ExclamationEqualsEqualsToken": ($) => { console.log("ExclamationEqualsEqualsToken") },
    "GreaterThanToken": ($) => { console.log("GreaterThanToken") },
    "LessThanToken": ($) => { console.log("LessThanToken") },
    "MinusToken": ($) => { console.log("MinusToken") },
    "MinusEqualsToken": ($) => { console.log("MinusEqualsToken") },
    "PlusToken": ($) => { console.log("PlusToken") },
    "PlusEqualsToken": ($) => { console.log("PlusEqualsToken") },
    "BooleanKeyword": ($) => { console.log("BooleanKeyword") },
    "Block": {
        begin: ($) => { console.log("Block begin") },
        end: ($) => { console.log("Block end") },
    },
    "CallExpression": {
        begin: ($) => { console.log("CallExpression begin") },
        end: ($) => { console.log("CallExpression end") },
    },
    "CaseBlock": {
        begin: ($) => { console.log("CaseBlock begin") },
        end: ($) => { console.log("CaseBlock end") },
    },
    "CaseClause": {
        begin: ($) => { console.log("CaseClause begin") },
        end: ($) => { console.log("CaseClause end") },
    },
    "CatchClause": {
        begin: ($) => { console.log("CatchClause begin") },
        end: ($) => { console.log("CatchClause end") },
    },
    "ColonToken": ($) => { console.log("ColonToken") },
    "ConditionalExpression": {
        begin: ($) => { console.log("ConditionalExpression begin") },
        end: ($) => { console.log("ConditionalExpression end") },
    },
    "ConstructSignature": {
        begin: ($) => { console.log("ConstructSignature begin") },
        end: ($) => { console.log("ConstructSignature end") },
    },
    "DeclareKeyword": ($) => { console.log("DeclareKeyword") },
    "DefaultClause": {
        begin: ($) => { console.log("DefaultClause begin") },
        end: ($) => { console.log("DefaultClause end") },
    },
    "ElementAccessExpression": {
        begin: ($) => { console.log("ElementAccessExpression begin") },
        end: ($) => { console.log("ElementAccessExpression end") },
    },
    "EndOfFileToken": ($) => { console.log("EndOfFileToken") },
    "EqualsGreaterThanToken": ($) => { console.log("EqualsGreaterThanToken") },
    "ExportDeclaration": {
        begin: ($) => { console.log("ExportDeclaration begin") },
        end: ($) => { console.log("ExportDeclaration end") },
    },
    "ExportKeyword": ($) => { console.log("ExportKeyword") },
    "ExpressionStatement": {
        begin: ($) => { console.log("ExpressionStatement begin") },
        end: ($) => { console.log("ExpressionStatement end") },
    },
    "FalseKeyword": ($) => { console.log("FalseKeyword") },
    "ForStatement": {
        begin: ($) => { console.log("ForStatement begin") },
        end: ($) => { console.log("ForStatement end") },
    },
    "FunctionDeclaration": {
        begin: ($) => { console.log("FunctionDeclaration begin") },
        end: ($) => { console.log("FunctionDeclaration end") },
    },
    "Identifier": ($) => { console.log("Identifier") },
    "IfStatement": {
        begin: ($) => { console.log("IfStatement begin") },
        end: ($) => { console.log("IfStatement end") },
    },
    "FunctionType": {
        begin: ($) => { console.log("FunctionType begin") },
        end: ($) => { console.log("FunctionType end") },
    },
    "ImportClause": {
        begin: ($) => { console.log("ImportClause begin") },
        end: ($) => { console.log("ImportClause end") },
    },
    "ImportDeclaration": {
        begin: ($) => { console.log("ImportDeclaration begin") },
        end: ($) => { console.log("ImportDeclaration end") },
    },
    "IndexSignature": {
        begin: ($) => { console.log("IndexSignature begin") },
        end: ($) => { console.log("IndexSignature end") },
    },
    "InterfaceDeclaration": {
        begin: ($) => { console.log("InterfaceDeclaration begin") },
        end: ($) => { console.log("InterfaceDeclaration end") },
    },
    "ImportSpecifier": {
        begin: ($) => { console.log("ImportSpecifier begin") },
        end: ($) => { console.log("ImportSpecifier end") },
    },
    "LabeledStatement": {
        begin: ($) => { console.log("LabeledStatement begin") },
        end: ($) => { console.log("LabeledStatement end") },
    },
    "LiteralType": {
        begin: ($) => { console.log("LiteralType begin") },
        end: ($) => { console.log("LiteralType end") },
    },
    "MethodSignature": {
        begin: ($) => { console.log("MethodSignature begin") },
        end: ($) => { console.log("MethodSignature end") },
    },
    "NamespaceImport": {
        begin: ($) => { console.log("NamespaceImport begin") },
        end: ($) => { console.log("NamespaceImport end") },
    },
    "NamedImports": {
        begin: ($) => { console.log("NamedImports begin") },
        end: ($) => { console.log("NamedImports end") },
    },
    "NeverKeyword": ($) => { console.log("NeverKeyword") },
    "NumberKeyword": ($) => { console.log("NumberKeyword") },
    "NumericLiteral": ($) => { console.log("NumericLiteral") },
    "NewExpression": {
        begin: ($) => { console.log("NewExpression begin") },
        end: ($) => { console.log("NewExpression end") },
    },
    "NullKeyword": ($) => { console.log("NullKeyword") },
    "NoSubstitutionTemplateLiteral": ($) => { console.log("NoSubstitutionTemplateLiteral") },
    "ObjectLiteralExpression": {
        begin: ($) => { console.log("ObjectLiteralExpression begin") },
        end: ($) => { console.log("ObjectLiteralExpression end") },
    },
    "OptionalType": {
        begin: ($) => { console.log("OptionalType begin") },
        end: ($) => { console.log("OptionalType end") },
    },
    "Parameter": {
        begin: ($) => { console.log("Parameter begin") },
        end: ($) => { console.log("Parameter end") },
    },
    "ParenthesizedExpression": {
        begin: ($) => { console.log("ParenthesizedExpression begin") },
        end: ($) => { console.log("ParenthesizedExpression end") },
    },
    "ParenthesizedType": {
        begin: ($) => { console.log("ParenthesizedType begin") },
        end: ($) => { console.log("ParenthesizedType end") },
    },
    "PostfixUnaryExpression": {
        begin: ($) => { console.log("PostfixUnaryExpression begin") },
        end: ($) => { console.log("PostfixUnaryExpression end") },
    },
    "PrefixUnaryExpression": {
        begin: ($) => { console.log("PrefixUnaryExpression begin") },
        end: ($) => { console.log("PrefixUnaryExpression end") },
    },
    "PropertyAccessExpression": {
        begin: ($) => { console.log("PropertyAccessExpression begin") },
        end: ($) => { console.log("PropertyAccessExpression end") },
    },
    "PropertyAssignment": {
        begin: ($) => { console.log("PropertyAssignment begin") },
        end: ($) => { console.log("PropertyAssignment end") },
    },
    "PropertySignature": {
        begin: ($) => { console.log("PropertySignature begin") },
        end: ($) => { console.log("PropertySignature end") },
    },
    "QualifiedName": {
        begin: ($) => { console.log("QualifiedName begin") },
        end: ($) => { console.log("QualifiedName end") },
    },
    "QuestionToken": ($) => { console.log("QuestionToken") },
    "ReadonlyKeyword": ($) => { console.log("ReadonlyKeyword") },
    "ReturnStatement": {
        begin: ($) => { console.log("ReturnStatement begin") },
        end: ($) => { console.log("ReturnStatement end") },
    },
    "SourceFile": {
        begin: ($) => { console.log("SourceFile begin") },
        end: ($) => { console.log("SourceFile end") },
    },
    "StringKeyword": ($) => { console.log("StringKeyword") },
    "StringLiteral": ($) => { console.log("StringLiteral") },
    "SwitchStatement": {
        begin: ($) => { console.log("SwitchStatement begin") },
        end: ($) => { console.log("SwitchStatement end") },
    },
    "TemplateExpression": {
        begin: ($) => { console.log("TemplateExpression begin") },
        end: ($) => { console.log("TemplateExpression end") },
    },
    "TemplateHead": ($) => { console.log("TemplateHead") },
    "TemplateMiddle": ($) => { console.log("TemplateMiddle") },
    "TemplateSpan": {
        begin: ($) => { console.log("TemplateSpan begin") },
        end: ($) => { console.log("TemplateSpan end") },
    },
    "TemplateTail": ($) => { console.log("TemplateTail") },
    "ThrowStatement": {
        begin: ($) => { console.log("ThrowStatement begin") },
        end: ($) => { console.log("ThrowStatement end") },
    },
    "TrueKeyword": ($) => { console.log("TrueKeyword") },
    "TryStatement": {
        begin: ($) => { console.log("TryStatement begin") },
        end: ($) => { console.log("TryStatement end") },
    },
    "TupleType": {
        begin: ($) => { console.log("TupleType begin") },
        end: ($) => { console.log("TupleType end") },
    },
    "TypeAliasDeclaration": {
        begin: ($) => { console.log("TypeAliasDeclaration begin") },
        end: ($) => { console.log("TypeAliasDeclaration end") },
    },
    "TypeLiteral": {
        begin: ($) => { console.log("TypeLiteral begin") },
        end: ($) => { console.log("TypeLiteral end") },
    },
    "TypeParameter": {
        begin: ($) => { console.log("TypeParameter begin") },
        end: ($) => { console.log("TypeParameter end") },
    },
    "TypeReference": {
        begin: ($) => { console.log("TypeReference begin") },
        end: ($) => { console.log("TypeReference end") },
    },
    "UndefinedKeyword": ($) => { console.log("UndefinedKeyword") },
    "UnionType": {
        begin: ($) => { console.log("UnionType begin") },
        end: ($) => { console.log("UnionType end") },
    },
    "VariableDeclaration": {
        begin: ($) => { console.log("VariableDeclaration begin") },
        end: ($) => { console.log("VariableDeclaration end") },
    },
    "VariableDeclarationList": {
        begin: ($) => { console.log("VariableDeclarationList begin") },
        end: ($) => { console.log("VariableDeclarationList end") },
    },
    "VariableStatement": {
        begin: ($) => { console.log("VariableStatement begin") },
        end: ($) => { console.log("VariableStatement end") },
    },
    "VoidKeyword": ($) => { console.log("VoidKeyword") },
    "WhileStatement": {
        begin: ($) => { console.log("WhileStatement begin") },
        end: ($) => { console.log("WhileStatement end") },
    },
}

export function visit<Annotation>(
    $: api.TSourceFile<Annotation>,
    foo: FOO<Annotation>,
): void {
    function X_expression(
        $: api.Gexpression<Annotation>,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pr.cc($[1], ($) => {
                    _ArrayLiteralExpression($)
                })
                break
            }
            case "arrowFunction": {
                pr.cc($[1], ($) => {
                    _ArrowFunction($)
                })
                break
            }
            case "binary": {
                pr.cc($[1], ($) => {
                    _BinaryExpression($)
                })
                break
            }
            case "call": {
                pr.cc($[1], ($) => {
                    _CallExpression($)
                })
                break
            }
            case "conditional": {
                pr.cc($[1], ($) => {
                    _ConditionalExpression($)
                })
                break
            }
            case "elementAccess": {
                pr.cc($[1], ($) => {
                    _ElementAccessExpression($)
                })
                break
            }
            case "false": {
                pr.cc($[1], ($) => {
                    _FalseKeyword($)
                })
                break
            }
            case "identifier": {
                pr.cc($[1], ($) => {
                    _Identifier($)
                })
                break
            }
            case "new": {
                pr.cc($[1], ($) => {
                    _NewExpression($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pr.cc($[1], ($) => {
                    _NoSubstitutionTemplateLiteral($)
                })
                break
            }
            case "numericLiteral": {
                pr.cc($[1], ($) => {
                    _NumericLiteral($)
                })
                break
            }
            case "nullKeyword": {
                pr.cc($[1], ($) => {
                    _NullKeyword($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    _ObjectLiteralExpression($)
                })
                break
            }
            case "parenthesizedExpression": {
                pr.cc($[1], ($) => {
                    _ParenthesizedExpression($)
                })
                break
            }
            case "postfixUnary": {
                pr.cc($[1], ($) => {
                    _PostfixUnaryExpression($)
                })
                break
            }
            case "prefixUnary": {
                pr.cc($[1], ($) => {
                    _PrefixUnaryExpression($)
                })
                break
            }
            case "propertyAccess": {
                pr.cc($[1], ($) => {
                    _PropertyAccessExpression($)
                })
                break
            }
            case "stringLiteral": {
                pr.cc($[1], ($) => {
                    _StringLiteral($)
                })
                break
            }
            case "template": {
                pr.cc($[1], ($) => {
                    _TemplateExpression($)
                })
                break
            }
            case "true": {
                pr.cc($[1], ($) => {
                    _TrueKeyword($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_functionDefinition(
        $: api.GfunctionDefinition<Annotation>,
    ) {
        pr.cc($["typeParameters"], ($) => {
            $.forEach(($) => {
                _TypeParameter($)
            })
        })
        pr.cc($["parameters"], ($) => {
            $.forEach(($) => {
                _Parameter($)
            })
        })
        pr.cc($["returnType"], ($) => {
            if ($ === null) {
                //FIXME??
            } else {
                X_type($)
            }
        })
    }
    function X_identifierOrStringLiteral(
        $: api.GidentifierOrStringLiteral<Annotation>,
    ) {
        switch ($[0]) {
            case "identifier": {
                pr.cc($[1], ($) => {
                    _Identifier($)
                })
                break
            }
            case "stringLiteral": {
                pr.cc($[1], ($) => {
                    _StringLiteral($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_modifier(
        $: api.Gmodifier<Annotation>,
    ) {
        switch ($[0]) {
            case "declare": {
                pr.cc($[1], ($) => {
                    _DeclareKeyword($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    _ExportKeyword($)
                })
                break
            }
            case "readonly": {
                pr.cc($[1], ($) => {
                    _ReadonlyKeyword($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_statement(
        $: api.Gstatement<Annotation>,
    ) {
        switch ($[0]) {
            case "block": {
                pr.cc($[1], ($) => {
                    _Block($)
                })
                break
            }
            case "break": {
                pr.cc($[1], ($) => {
                    _BreakStatement($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    _ExportDeclaration($)
                })
                break
            }
            case "expression": {
                pr.cc($[1], ($) => {
                    _ExpressionStatement($)
                })
                break
            }
            case "for": {
                pr.cc($[1], ($) => {
                    _ForStatement($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    _FunctionDeclaration($)
                })
                break
            }
            case "if": {
                pr.cc($[1], ($) => {
                    _IfStatement($)
                })
                break
            }
            case "import": {
                pr.cc($[1], ($) => {
                    _ImportDeclaration($)
                })
                break
            }
            case "interface": {
                pr.cc($[1], ($) => {
                    _InterfaceDeclaration($)
                })
                break
            }
            case "labeled": {
                pr.cc($[1], ($) => {
                    _LabeledStatement($)
                })
                break
            }
            case "return": {
                pr.cc($[1], ($) => {
                    _ReturnStatement($)
                })
                break
            }
            case "switch": {
                pr.cc($[1], ($) => {
                    _SwitchStatement($)
                })
                break
            }
            case "throw": {
                pr.cc($[1], ($) => {
                    _ThrowStatement($)
                })
                break
            }
            case "try": {
                pr.cc($[1], ($) => {
                    _TryStatement($)
                })
                break
            }
            case "typeAlias": {
                pr.cc($[1], ($) => {
                    _TypeAliasDeclaration($)
                })
                break
            }
            case "variable": {
                pr.cc($[1], ($) => {
                    _VariableStatement($)
                })
                break
            }
            case "while": {
                pr.cc($[1], ($) => {
                    _WhileStatement($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_type(
        $: api.Gtype<Annotation>,
    ) {
        switch ($[0]) {
            case "any": {
                pr.cc($[1], ($) => {
                    _AnyKeyword($)
                })
                break
            }
            case "array": {
                pr.cc($[1], ($) => {
                    _ArrayType($)
                })
                break
            }
            case "boolean": {
                pr.cc($[1], ($) => {
                    _BooleanKeyword($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    _FunctionType($)
                })
                break
            }
            case "literal": {
                pr.cc($[1], ($) => {
                    _LiteralType($)
                })
                break
            }
            case "parenthesized": {
                pr.cc($[1], ($) => {
                    _ParenthesizedType($)
                })
                break
            }
            case "never": {
                pr.cc($[1], ($) => {
                    _NeverKeyword($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    _NumberKeyword($)
                })
                break
            }
            case "optional": {
                pr.cc($[1], ($) => {
                    _OptionalType($)
                })
                break
            }
            case "tuple": {
                pr.cc($[1], ($) => {
                    _TupleType($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    _TypeLiteral($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    _StringKeyword($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    _TypeReference($)
                })
                break
            }
            case "undefined": {
                pr.cc($[1], ($) => {
                    _UndefinedKeyword($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    _UnionType($)
                })
                break
            }
            case "void": {
                pr.cc($[1], ($) => {
                    _VoidKeyword($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_typeSignature(
        $: api.GtypeSignature<Annotation>,
    ) {
        switch ($[0]) {
            case "construct": {
                pr.cc($[1], ($) => {
                    _ConstructSignature($)
                })
                break
            }
            case "index": {
                pr.cc($[1], ($) => {
                    _IndexSignature($)
                })
                break
            }
            case "method": {
                pr.cc($[1], ($) => {
                    _MethodSignature($)
                })
                break
            }
            case "property": {
                pr.cc($[1], ($) => {
                    _PropertySignature($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function _AnyKeyword(
        $: api.TAnyKeyword<Annotation>,
    ) {
        if (foo["AnyKeyword"] !== undefined) { foo["AnyKeyword"]($) }
    }
    function _ArrayLiteralExpression(
        $: api.TArrayLiteralExpression<Annotation>,
    ) {
        if (foo["ArrayLiteralExpression"] !== undefined) { foo["ArrayLiteralExpression"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_expression($)
            })
        })
        if (foo["ArrayLiteralExpression"] !== undefined) { foo["ArrayLiteralExpression"].end($) }
    }
    function _ArrayType(
        $: api.TArrayType<Annotation>,
    ) {
        if (foo["ArrayType"] !== undefined) { foo["ArrayType"].begin($) }
        pr.cc($.content, ($) => {
            X_type($)
        })
        if (foo["ArrayType"] !== undefined) { foo["ArrayType"].end($) }
    }
    function _ArrowFunction(
        $: api.TArrowFunction<Annotation>,
    ) {
        if (foo["ArrowFunction"] !== undefined) { foo["ArrowFunction"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["parameters"], ($) => {
                $.forEach(($) => {
                    _Parameter($)
                })
            })
            pr.cc($["returnType"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
            pr.cc($["equalsGreaterThan"], ($) => {
                _EqualsGreaterThanToken($)
            })
            pr.cc($["implementation"], ($) => {
                switch ($[0]) {
                    case "block": {
                        pr.cc($[1], ($) => {
                            _Block($)
                        })
                        break
                    }
                    case "expression": {
                        pr.cc($[1], ($) => {
                            X_expression($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
        })
        if (foo["ArrowFunction"] !== undefined) { foo["ArrowFunction"].end($) }
    }
    function _BinaryExpression(
        $: api.TBinaryExpression<Annotation>,
    ) {
        if (foo["BinaryExpression"] !== undefined) { foo["BinaryExpression"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["leftHandSide"], ($) => {
                X_expression($)
            })
            pr.cc($["operator"], ($) => {
                switch ($[0]) {
                    case "ampersandAmpersand": {
                        pr.cc($[1], ($) => {
                            _AmpersandAmpersandToken($)
                        })
                        break
                    }
                    case "barBar": {
                        pr.cc($[1], ($) => {
                            _BarBarToken($)
                        })
                        break
                    }
                    case "equals": {
                        pr.cc($[1], ($) => {
                            _EqualsToken($)
                        })
                        break
                    }
                    case "equalsEqualsEquals": {
                        pr.cc($[1], ($) => {
                            _EqualsEqualsEqualsToken($)
                        })
                        break
                    }
                    case "exclamationEqualsEquals": {
                        pr.cc($[1], ($) => {
                            _ExclamationEqualsEqualsToken($)
                        })
                        break
                    }
                    case "greaterThan": {
                        pr.cc($[1], ($) => {
                            _GreaterThanToken($)
                        })
                        break
                    }
                    case "lessThan": {
                        pr.cc($[1], ($) => {
                            _LessThanToken($)
                        })
                        break
                    }
                    case "minus": {
                        pr.cc($[1], ($) => {
                            _MinusToken($)
                        })
                        break
                    }
                    case "minusEquals": {
                        pr.cc($[1], ($) => {
                            _MinusEqualsToken($)
                        })
                        break
                    }
                    case "plus": {
                        pr.cc($[1], ($) => {
                            _PlusToken($)
                        })
                        break
                    }
                    case "plusEquals": {
                        pr.cc($[1], ($) => {
                            _PlusEqualsToken($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
            pr.cc($["rightHandSide"], ($) => {
                X_expression($)
            })
        })
        if (foo["BinaryExpression"] !== undefined) { foo["BinaryExpression"].end($) }
    }
    function _AmpersandAmpersandToken(
        $: api.TAmpersandAmpersandToken<Annotation>,
    ) {
        if (foo["AmpersandAmpersandToken"] !== undefined) { foo["AmpersandAmpersandToken"]($) }
    }
    function _BarBarToken(
        $: api.TBarBarToken<Annotation>,
    ) {
        if (foo["BarBarToken"] !== undefined) { foo["BarBarToken"]($) }
    }
    function _BreakStatement(
        $: api.TBreakStatement<Annotation>,
    ) {
        if (foo["BreakStatement"] !== undefined) { foo["BreakStatement"].begin($) }
        pr.cc($.content, ($) => {
            if ($ === null) {
                //FIXME??
            } else {
                _Identifier($)
            }
        })
        if (foo["BreakStatement"] !== undefined) { foo["BreakStatement"].end($) }
    }
    function _EqualsEqualsEqualsToken(
        $: api.TEqualsEqualsEqualsToken<Annotation>,
    ) {
        if (foo["EqualsEqualsEqualsToken"] !== undefined) { foo["EqualsEqualsEqualsToken"]($) }
    }
    function _EqualsToken(
        $: api.TEqualsToken<Annotation>,
    ) {
        if (foo["EqualsToken"] !== undefined) { foo["EqualsToken"]($) }
    }
    function _ExclamationEqualsEqualsToken(
        $: api.TExclamationEqualsEqualsToken<Annotation>,
    ) {
        if (foo["ExclamationEqualsEqualsToken"] !== undefined) { foo["ExclamationEqualsEqualsToken"]($) }
    }
    function _GreaterThanToken(
        $: api.TGreaterThanToken<Annotation>,
    ) {
        if (foo["GreaterThanToken"] !== undefined) { foo["GreaterThanToken"]($) }
    }
    function _LessThanToken(
        $: api.TLessThanToken<Annotation>,
    ) {
        if (foo["LessThanToken"] !== undefined) { foo["LessThanToken"]($) }
    }
    function _MinusToken(
        $: api.TMinusToken<Annotation>,
    ) {
        if (foo["MinusToken"] !== undefined) { foo["MinusToken"]($) }
    }
    function _MinusEqualsToken(
        $: api.TMinusEqualsToken<Annotation>,
    ) {
        if (foo["MinusEqualsToken"] !== undefined) { foo["MinusEqualsToken"]($) }
    }
    function _PlusToken(
        $: api.TPlusToken<Annotation>,
    ) {
        if (foo["PlusToken"] !== undefined) { foo["PlusToken"]($) }
    }
    function _PlusEqualsToken(
        $: api.TPlusEqualsToken<Annotation>,
    ) {
        if (foo["PlusEqualsToken"] !== undefined) { foo["PlusEqualsToken"]($) }
    }
    function _BooleanKeyword(
        $: api.TBooleanKeyword<Annotation>,
    ) {
        if (foo["BooleanKeyword"] !== undefined) { foo["BooleanKeyword"]($) }
    }
    function _Block(
        $: api.TBlock<Annotation>,
    ) {
        if (foo["Block"] !== undefined) { foo["Block"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_statement($)
            })
        })
        if (foo["Block"] !== undefined) { foo["Block"].end($) }
    }
    function _CallExpression(
        $: api.TCallExpression<Annotation>,
    ) {
        if (foo["CallExpression"] !== undefined) { foo["CallExpression"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["function"], ($) => {
                X_expression($)
            })
            pr.cc($["typeParameters"], ($) => {
                $.forEach(($) => {
                    X_type($)
                })
            })
            pr.cc($["parameters"], ($) => {
                $.forEach(($) => {
                    X_expression($)
                })
            })
        })
        if (foo["CallExpression"] !== undefined) { foo["CallExpression"].end($) }
    }
    function _CaseBlock(
        $: api.TCaseBlock<Annotation>,
    ) {
        if (foo["CaseBlock"] !== undefined) { foo["CaseBlock"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                switch ($[0]) {
                    case "case": {
                        pr.cc($[1], ($) => {
                            _CaseClause($)
                        })
                        break
                    }
                    case "default": {
                        pr.cc($[1], ($) => {
                            _DefaultClause($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
        })
        if (foo["CaseBlock"] !== undefined) { foo["CaseBlock"].end($) }
    }
    function _CaseClause(
        $: api.TCaseClause<Annotation>,
    ) {
        if (foo["CaseClause"] !== undefined) { foo["CaseClause"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["case"], ($) => {
                X_expression($)
            })
            pr.cc($["statements"], ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
        })
        if (foo["CaseClause"] !== undefined) { foo["CaseClause"].end($) }
    }
    function _CatchClause(
        $: api.TCatchClause<Annotation>,
    ) {
        if (foo["CatchClause"] !== undefined) { foo["CatchClause"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["variable"], ($) => {
                _VariableDeclaration($)
            })
            pr.cc($["block"], ($) => {
                _Block($)
            })
        })
        if (foo["CatchClause"] !== undefined) { foo["CatchClause"].end($) }
    }
    function _ColonToken(
        $: api.TColonToken<Annotation>,
    ) {
        if (foo["ColonToken"] !== undefined) { foo["ColonToken"]($) }
    }
    function _ConditionalExpression(
        $: api.TConditionalExpression<Annotation>,
    ) {
        if (foo["ConditionalExpression"] !== undefined) { foo["ConditionalExpression"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["test"], ($) => {
                X_expression($)
            })
            pr.cc($["questionToken"], ($) => {
                _QuestionToken($)
            })
            pr.cc($["ifExpression"], ($) => {
                X_expression($)
            })
            pr.cc($["colonToken"], ($) => {
                _ColonToken($)
            })
            pr.cc($["elseExpression"], ($) => {
                X_expression($)
            })
        })
        if (foo["ConditionalExpression"] !== undefined) { foo["ConditionalExpression"].end($) }
    }
    function _ConstructSignature(
        $: api.TConstructSignature<Annotation>,
    ) {
        if (foo["ConstructSignature"] !== undefined) { foo["ConstructSignature"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["parameters"], ($) => {
                $.forEach(($) => {
                    _Parameter($)
                })
            })
            pr.cc($["returnType"], ($) => {
                X_type($)
            })
        })
        if (foo["ConstructSignature"] !== undefined) { foo["ConstructSignature"].end($) }
    }
    function _DeclareKeyword(
        $: api.TDeclareKeyword<Annotation>,
    ) {
        if (foo["DeclareKeyword"] !== undefined) { foo["DeclareKeyword"]($) }
    }
    function _DefaultClause(
        $: api.TDefaultClause<Annotation>,
    ) {
        if (foo["DefaultClause"] !== undefined) { foo["DefaultClause"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_statement($)
            })
        })
        if (foo["DefaultClause"] !== undefined) { foo["DefaultClause"].end($) }
    }
    function _ElementAccessExpression(
        $: api.TElementAccessExpression<Annotation>,
    ) {
        if (foo["ElementAccessExpression"] !== undefined) { foo["ElementAccessExpression"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["array"], ($) => {
                X_expression($)
            })
            pr.cc($["element"], ($) => {
                X_expression($)
            })
        })
        if (foo["ElementAccessExpression"] !== undefined) { foo["ElementAccessExpression"].end($) }
    }
    function _EndOfFileToken(
        $: api.TEndOfFileToken<Annotation>,
    ) {
        if (foo["EndOfFileToken"] !== undefined) { foo["EndOfFileToken"]($) }
    }
    function _EqualsGreaterThanToken(
        $: api.TEqualsGreaterThanToken<Annotation>,
    ) {
        if (foo["EqualsGreaterThanToken"] !== undefined) { foo["EqualsGreaterThanToken"]($) }
    }
    function _ExportDeclaration(
        $: api.TExportDeclaration<Annotation>,
    ) {
        if (foo["ExportDeclaration"] !== undefined) { foo["ExportDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            _StringLiteral($)
        })
        if (foo["ExportDeclaration"] !== undefined) { foo["ExportDeclaration"].end($) }
    }
    function _ExportKeyword(
        $: api.TExportKeyword<Annotation>,
    ) {
        if (foo["ExportKeyword"] !== undefined) { foo["ExportKeyword"]($) }
    }
    function _ExpressionStatement(
        $: api.TExpressionStatement<Annotation>,
    ) {
        if (foo["ExpressionStatement"] !== undefined) { foo["ExpressionStatement"].begin($) }
        pr.cc($.content, ($) => {
            X_expression($)
        })
        if (foo["ExpressionStatement"] !== undefined) { foo["ExpressionStatement"].end($) }
    }
    function _FalseKeyword(
        $: api.TFalseKeyword<Annotation>,
    ) {
        if (foo["FalseKeyword"] !== undefined) { foo["FalseKeyword"]($) }
    }
    function _ForStatement(
        $: api.TForStatement<Annotation>,
    ) {
        if (foo["ForStatement"] !== undefined) { foo["ForStatement"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["initializer"], ($) => {
                _VariableDeclarationList($)
            })
            pr.cc($["condition"], ($) => {
                X_expression($)
            })
            pr.cc($["incrementer"], ($) => {
                X_expression($)
            })
            pr.cc($["block"], ($) => {
                _Block($)
            })
        })
        if (foo["ForStatement"] !== undefined) { foo["ForStatement"].end($) }
    }
    function _FunctionDeclaration(
        $: api.TFunctionDeclaration<Annotation>,
    ) {
        if (foo["FunctionDeclaration"] !== undefined) { foo["FunctionDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["modifiers"], ($) => {
                $.forEach(($) => {
                    X_modifier($)
                })
            })
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["definition"], ($) => {
                X_functionDefinition($)
            })
            pr.cc($["block"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    _Block($)
                }
            })
        })
        if (foo["FunctionDeclaration"] !== undefined) { foo["FunctionDeclaration"].end($) }
    }
    function _Identifier(
        $: api.TIdentifier<Annotation>,
    ) {
        if (foo["Identifier"] !== undefined) { foo["Identifier"]($) }
    }
    function _IfStatement(
        $: api.TIfStatement<Annotation>,
    ) {
        if (foo["IfStatement"] !== undefined) { foo["IfStatement"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["expression"], ($) => {
                X_expression($)
            })
            pr.cc($["thenStatement"], ($) => {
                X_statement($)
            })
            pr.cc($["elseStatement"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_statement($)
                }
            })
        })
        if (foo["IfStatement"] !== undefined) { foo["IfStatement"].end($) }
    }
    function _FunctionType(
        $: api.TFunctionType<Annotation>,
    ) {
        if (foo["FunctionType"] !== undefined) { foo["FunctionType"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["parameters"], ($) => {
                $.forEach(($) => {
                    _Parameter($)
                })
            })
            pr.cc($["returnType"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
        })
        if (foo["FunctionType"] !== undefined) { foo["FunctionType"].end($) }
    }
    function _ImportClause(
        $: api.TImportClause<Annotation>,
    ) {
        if (foo["ImportClause"] !== undefined) { foo["ImportClause"].begin($) }
        pr.cc($.content, ($) => {
            switch ($[0]) {
                case "namespace": {
                    pr.cc($[1], ($) => {
                        _NamespaceImport($)
                    })
                    break
                }
                case "named": {
                    pr.cc($[1], ($) => {
                        _NamedImports($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
        if (foo["ImportClause"] !== undefined) { foo["ImportClause"].end($) }
    }
    function _ImportDeclaration(
        $: api.TImportDeclaration<Annotation>,
    ) {
        if (foo["ImportDeclaration"] !== undefined) { foo["ImportDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["clause"], ($) => {
                _ImportClause($)
            })
            pr.cc($["file"], ($) => {
                _StringLiteral($)
            })
        })
        if (foo["ImportDeclaration"] !== undefined) { foo["ImportDeclaration"].end($) }
    }
    function _IndexSignature(
        $: api.TIndexSignature<Annotation>,
    ) {
        if (foo["IndexSignature"] !== undefined) { foo["IndexSignature"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["modifiers"], ($) => {
                $.forEach(($) => {
                    X_modifier($)
                })
            })
            pr.cc($["parameter"], ($) => {
                _Parameter($)
            })
            pr.cc($["type"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
        })
        if (foo["IndexSignature"] !== undefined) { foo["IndexSignature"].end($) }
    }
    function _InterfaceDeclaration(
        $: api.TInterfaceDeclaration<Annotation>,
    ) {
        if (foo["InterfaceDeclaration"] !== undefined) { foo["InterfaceDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["modifiers"], ($) => {
                $.forEach(($) => {
                    X_modifier($)
                })
            })
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["typeParameters"], ($) => {
                $.forEach(($) => {
                    _TypeParameter($)
                })
            })
            pr.cc($["signature"], ($) => {
                $.forEach(($) => {
                    X_typeSignature($)
                })
            })
        })
        if (foo["InterfaceDeclaration"] !== undefined) { foo["InterfaceDeclaration"].end($) }
    }
    function _ImportSpecifier(
        $: api.TImportSpecifier<Annotation>,
    ) {
        if (foo["ImportSpecifier"] !== undefined) { foo["ImportSpecifier"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["as"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    _Identifier($)
                }
            })
        })
        if (foo["ImportSpecifier"] !== undefined) { foo["ImportSpecifier"].end($) }
    }
    function _LabeledStatement(
        $: api.TLabeledStatement<Annotation>,
    ) {
        if (foo["LabeledStatement"] !== undefined) { foo["LabeledStatement"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["label"], ($) => {
                _Identifier($)
            })
            pr.cc($["statement"], ($) => {
                X_statement($)
            })
        })
        if (foo["LabeledStatement"] !== undefined) { foo["LabeledStatement"].end($) }
    }
    function _LiteralType(
        $: api.TLiteralType<Annotation>,
    ) {
        if (foo["LiteralType"] !== undefined) { foo["LiteralType"].begin($) }
        pr.cc($.content, ($) => {
            switch ($[0]) {
                case "null": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "string": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
        if (foo["LiteralType"] !== undefined) { foo["LiteralType"].end($) }
    }
    function _MethodSignature(
        $: api.TMethodSignature<Annotation>,
    ) {
        if (foo["MethodSignature"] !== undefined) { foo["MethodSignature"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["definition"], ($) => {
                X_functionDefinition($)
            })
        })
        if (foo["MethodSignature"] !== undefined) { foo["MethodSignature"].end($) }
    }
    function _NamespaceImport(
        $: api.TNamespaceImport<Annotation>,
    ) {
        if (foo["NamespaceImport"] !== undefined) { foo["NamespaceImport"].begin($) }
        pr.cc($.content, ($) => {
            _Identifier($)
        })
        if (foo["NamespaceImport"] !== undefined) { foo["NamespaceImport"].end($) }
    }
    function _NamedImports(
        $: api.TNamedImports<Annotation>,
    ) {
        if (foo["NamedImports"] !== undefined) { foo["NamedImports"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                _ImportSpecifier($)
            })
        })
        if (foo["NamedImports"] !== undefined) { foo["NamedImports"].end($) }
    }
    function _NeverKeyword(
        $: api.TNeverKeyword<Annotation>,
    ) {
        if (foo["NeverKeyword"] !== undefined) { foo["NeverKeyword"]($) }
    }
    function _NumberKeyword(
        $: api.TNumberKeyword<Annotation>,
    ) {
        if (foo["NumberKeyword"] !== undefined) { foo["NumberKeyword"]($) }
    }
    function _NumericLiteral(
        $: api.TNumericLiteral<Annotation>,
    ) {
        if (foo["NumericLiteral"] !== undefined) { foo["NumericLiteral"]($) }
    }
    function _NewExpression(
        $: api.TNewExpression<Annotation>,
    ) {
        if (foo["NewExpression"] !== undefined) { foo["NewExpression"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["class"], ($) => {
                _Identifier($)
            })
            pr.cc($["parameters"], ($) => {
                $.forEach(($) => {
                    X_expression($)
                })
            })
        })
        if (foo["NewExpression"] !== undefined) { foo["NewExpression"].end($) }
    }
    function _NullKeyword(
        $: api.TNullKeyword<Annotation>,
    ) {
        if (foo["NullKeyword"] !== undefined) { foo["NullKeyword"]($) }
    }
    function _NoSubstitutionTemplateLiteral(
        $: api.TNoSubstitutionTemplateLiteral<Annotation>,
    ) {
        if (foo["NoSubstitutionTemplateLiteral"] !== undefined) { foo["NoSubstitutionTemplateLiteral"]($) }
    }
    function _ObjectLiteralExpression(
        $: api.TObjectLiteralExpression<Annotation>,
    ) {
        if (foo["ObjectLiteralExpression"] !== undefined) { foo["ObjectLiteralExpression"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                _PropertyAssignment($)
            })
        })
        if (foo["ObjectLiteralExpression"] !== undefined) { foo["ObjectLiteralExpression"].end($) }
    }
    function _OptionalType(
        $: api.TOptionalType<Annotation>,
    ) {
        if (foo["OptionalType"] !== undefined) { foo["OptionalType"].begin($) }
        pr.cc($.content, ($) => {
            X_type($)
        })
        if (foo["OptionalType"] !== undefined) { foo["OptionalType"].end($) }
    }
    function _Parameter(
        $: api.TParameter<Annotation>,
    ) {
        if (foo["Parameter"] !== undefined) { foo["Parameter"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["questionToken"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    _QuestionToken($)
                }
            })
            pr.cc($["type"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
        })
        if (foo["Parameter"] !== undefined) { foo["Parameter"].end($) }
    }
    function _ParenthesizedExpression(
        $: api.TParenthesizedExpression<Annotation>,
    ) {
        if (foo["ParenthesizedExpression"] !== undefined) { foo["ParenthesizedExpression"].begin($) }
        pr.cc($.content, ($) => {
            X_expression($)
        })
        if (foo["ParenthesizedExpression"] !== undefined) { foo["ParenthesizedExpression"].end($) }
    }
    function _ParenthesizedType(
        $: api.TParenthesizedType<Annotation>,
    ) {
        if (foo["ParenthesizedType"] !== undefined) { foo["ParenthesizedType"].begin($) }
        pr.cc($.content, ($) => {
            X_type($)
        })
        if (foo["ParenthesizedType"] !== undefined) { foo["ParenthesizedType"].end($) }
    }
    function _PostfixUnaryExpression(
        $: api.TPostfixUnaryExpression<Annotation>,
    ) {
        if (foo["PostfixUnaryExpression"] !== undefined) { foo["PostfixUnaryExpression"].begin($) }
        pr.cc($.content, ($) => {
            X_expression($)
        })
        if (foo["PostfixUnaryExpression"] !== undefined) { foo["PostfixUnaryExpression"].end($) }
    }
    function _PrefixUnaryExpression(
        $: api.TPrefixUnaryExpression<Annotation>,
    ) {
        if (foo["PrefixUnaryExpression"] !== undefined) { foo["PrefixUnaryExpression"].begin($) }
        pr.cc($.content, ($) => {
            X_expression($)
        })
        if (foo["PrefixUnaryExpression"] !== undefined) { foo["PrefixUnaryExpression"].end($) }
    }
    function _PropertyAccessExpression(
        $: api.TPropertyAccessExpression<Annotation>,
    ) {
        if (foo["PropertyAccessExpression"] !== undefined) { foo["PropertyAccessExpression"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["object"], ($) => {
                X_expression($)
            })
            pr.cc($["property"], ($) => {
                X_expression($)
            })
        })
        if (foo["PropertyAccessExpression"] !== undefined) { foo["PropertyAccessExpression"].end($) }
    }
    function _PropertyAssignment(
        $: api.TPropertyAssignment<Annotation>,
    ) {
        if (foo["PropertyAssignment"] !== undefined) { foo["PropertyAssignment"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                switch ($[0]) {
                    case "identifier": {
                        pr.cc($[1], ($) => {
                            _Identifier($)
                        })
                        break
                    }
                    case "numericLiteral": {
                        pr.cc($[1], ($) => {
                            _NumericLiteral($)
                        })
                        break
                    }
                    case "stringLiteral": {
                        pr.cc($[1], ($) => {
                            _StringLiteral($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
            pr.cc($["expression"], ($) => {
                X_expression($)
            })
        })
        if (foo["PropertyAssignment"] !== undefined) { foo["PropertyAssignment"].end($) }
    }
    function _PropertySignature(
        $: api.TPropertySignature<Annotation>,
    ) {
        if (foo["PropertySignature"] !== undefined) { foo["PropertySignature"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["modifiers"], ($) => {
                $.forEach(($) => {
                    X_modifier($)
                })
            })
            pr.cc($["name"], ($) => {
                X_identifierOrStringLiteral($)
            })
            pr.cc($["quesionToken"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    _QuestionToken($)
                }
            })
            pr.cc($["type"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
        })
        if (foo["PropertySignature"] !== undefined) { foo["PropertySignature"].end($) }
    }
    function _QualifiedName(
        $: api.TQualifiedName<Annotation>,
    ) {
        if (foo["QualifiedName"] !== undefined) { foo["QualifiedName"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["context"], ($) => {
                _Identifier($)
            })
            pr.cc($["type"], ($) => {
                _Identifier($)
            })
        })
        if (foo["QualifiedName"] !== undefined) { foo["QualifiedName"].end($) }
    }
    function _QuestionToken(
        $: api.TQuestionToken<Annotation>,
    ) {
        if (foo["QuestionToken"] !== undefined) { foo["QuestionToken"]($) }
    }
    function _ReadonlyKeyword(
        $: api.TReadonlyKeyword<Annotation>,
    ) {
        if (foo["ReadonlyKeyword"] !== undefined) { foo["ReadonlyKeyword"]($) }
    }
    function _ReturnStatement(
        $: api.TReturnStatement<Annotation>,
    ) {
        if (foo["ReturnStatement"] !== undefined) { foo["ReturnStatement"].begin($) }
        pr.cc($.content, ($) => {
            if ($ === null) {
                //FIXME??
            } else {
                X_expression($)
            }
        })
        if (foo["ReturnStatement"] !== undefined) { foo["ReturnStatement"].end($) }
    }
    function _SourceFile(
        $: api.TSourceFile<Annotation>,
    ) {
        if (foo["SourceFile"] !== undefined) { foo["SourceFile"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["statements"], ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            pr.cc($["endOfFile"], ($) => {
                _EndOfFileToken($)
            })
        })
        if (foo["SourceFile"] !== undefined) { foo["SourceFile"].end($) }
    }
    function _StringKeyword(
        $: api.TStringKeyword<Annotation>,
    ) {
        if (foo["StringKeyword"] !== undefined) { foo["StringKeyword"]($) }
    }
    function _StringLiteral(
        $: api.TStringLiteral<Annotation>,
    ) {
        if (foo["StringLiteral"] !== undefined) { foo["StringLiteral"]($) }
    }
    function _SwitchStatement(
        $: api.TSwitchStatement<Annotation>,
    ) {
        if (foo["SwitchStatement"] !== undefined) { foo["SwitchStatement"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["expression"], ($) => {
                X_expression($)
            })
            pr.cc($["caseBlock"], ($) => {
                _CaseBlock($)
            })
        })
        if (foo["SwitchStatement"] !== undefined) { foo["SwitchStatement"].end($) }
    }
    function _TemplateExpression(
        $: api.TTemplateExpression<Annotation>,
    ) {
        if (foo["TemplateExpression"] !== undefined) { foo["TemplateExpression"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["head"], ($) => {
                _TemplateHead($)
            })
            pr.cc($["spans"], ($) => {
                $.forEach(($) => {
                    _TemplateSpan($)
                })
            })
        })
        if (foo["TemplateExpression"] !== undefined) { foo["TemplateExpression"].end($) }
    }
    function _TemplateHead(
        $: api.TTemplateHead<Annotation>,
    ) {
        if (foo["TemplateHead"] !== undefined) { foo["TemplateHead"]($) }
    }
    function _TemplateMiddle(
        $: api.TTemplateMiddle<Annotation>,
    ) {
        if (foo["TemplateMiddle"] !== undefined) { foo["TemplateMiddle"]($) }
    }
    function _TemplateSpan(
        $: api.TTemplateSpan<Annotation>,
    ) {
        if (foo["TemplateSpan"] !== undefined) { foo["TemplateSpan"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["expression"], ($) => {
                X_expression($)
            })
            pr.cc($["x"], ($) => {
                switch ($[0]) {
                    case "middle": {
                        pr.cc($[1], ($) => {
                            _TemplateMiddle($)
                        })
                        break
                    }
                    case "tail": {
                        pr.cc($[1], ($) => {
                            _TemplateTail($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
        })
        if (foo["TemplateSpan"] !== undefined) { foo["TemplateSpan"].end($) }
    }
    function _TemplateTail(
        $: api.TTemplateTail<Annotation>,
    ) {
        if (foo["TemplateTail"] !== undefined) { foo["TemplateTail"]($) }
    }
    function _ThrowStatement(
        $: api.TThrowStatement<Annotation>,
    ) {
        if (foo["ThrowStatement"] !== undefined) { foo["ThrowStatement"].begin($) }
        pr.cc($.content, ($) => {
            X_expression($)
        })
        if (foo["ThrowStatement"] !== undefined) { foo["ThrowStatement"].end($) }
    }
    function _TrueKeyword(
        $: api.TTrueKeyword<Annotation>,
    ) {
        if (foo["TrueKeyword"] !== undefined) { foo["TrueKeyword"]($) }
    }
    function _TryStatement(
        $: api.TTryStatement<Annotation>,
    ) {
        if (foo["TryStatement"] !== undefined) { foo["TryStatement"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["block"], ($) => {
                _Block($)
            })
            pr.cc($["catchClause"], ($) => {
                _CatchClause($)
            })
        })
        if (foo["TryStatement"] !== undefined) { foo["TryStatement"].end($) }
    }
    function _TupleType(
        $: api.TTupleType<Annotation>,
    ) {
        if (foo["TupleType"] !== undefined) { foo["TupleType"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_type($)
            })
        })
        if (foo["TupleType"] !== undefined) { foo["TupleType"].end($) }
    }
    function _TypeAliasDeclaration(
        $: api.TTypeAliasDeclaration<Annotation>,
    ) {
        if (foo["TypeAliasDeclaration"] !== undefined) { foo["TypeAliasDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["modifiers"], ($) => {
                $.forEach(($) => {
                    X_modifier($)
                })
            })
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["typeParameters"], ($) => {
                $.forEach(($) => {
                    _TypeParameter($)
                })
            })
            pr.cc($["type"], ($) => {
                X_type($)
            })
        })
        if (foo["TypeAliasDeclaration"] !== undefined) { foo["TypeAliasDeclaration"].end($) }
    }
    function _TypeLiteral(
        $: api.TTypeLiteral<Annotation>,
    ) {
        if (foo["TypeLiteral"] !== undefined) { foo["TypeLiteral"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_typeSignature($)
            })
        })
        if (foo["TypeLiteral"] !== undefined) { foo["TypeLiteral"].end($) }
    }
    function _TypeParameter(
        $: api.TTypeParameter<Annotation>,
    ) {
        if (foo["TypeParameter"] !== undefined) { foo["TypeParameter"].begin($) }
        pr.cc($.content, ($) => {
            _Identifier($)
        })
        if (foo["TypeParameter"] !== undefined) { foo["TypeParameter"].end($) }
    }
    function _TypeReference(
        $: api.TTypeReference<Annotation>,
    ) {
        if (foo["TypeReference"] !== undefined) { foo["TypeReference"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["x"], ($) => {
                switch ($[0]) {
                    case "identifier": {
                        pr.cc($[1], ($) => {
                            _Identifier($)
                        })
                        break
                    }
                    case "qualifiedName": {
                        pr.cc($[1], ($) => {
                            _QualifiedName($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
            pr.cc($["parameters"], ($) => {
                $.forEach(($) => {
                    X_type($)
                })
            })
        })
        if (foo["TypeReference"] !== undefined) { foo["TypeReference"].end($) }
    }
    function _UndefinedKeyword(
        $: api.TUndefinedKeyword<Annotation>,
    ) {
        if (foo["UndefinedKeyword"] !== undefined) { foo["UndefinedKeyword"]($) }
    }
    function _UnionType(
        $: api.TUnionType<Annotation>,
    ) {
        if (foo["UnionType"] !== undefined) { foo["UnionType"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_type($)
            })
        })
        if (foo["UnionType"] !== undefined) { foo["UnionType"].end($) }
    }
    function _VariableDeclaration(
        $: api.TVariableDeclaration<Annotation>,
    ) {
        if (foo["VariableDeclaration"] !== undefined) { foo["VariableDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["type"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
            pr.cc($["expression"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_expression($)
                }
            })
        })
        if (foo["VariableDeclaration"] !== undefined) { foo["VariableDeclaration"].end($) }
    }
    function _VariableDeclarationList(
        $: api.TVariableDeclarationList<Annotation>,
    ) {
        if (foo["VariableDeclarationList"] !== undefined) { foo["VariableDeclarationList"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                _VariableDeclaration($)
            })
        })
        if (foo["VariableDeclarationList"] !== undefined) { foo["VariableDeclarationList"].end($) }
    }
    function _VariableStatement(
        $: api.TVariableStatement<Annotation>,
    ) {
        if (foo["VariableStatement"] !== undefined) { foo["VariableStatement"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["modifiers"], ($) => {
                $.forEach(($) => {
                    X_modifier($)
                })
            })
            pr.cc($["variableDeclarationList"], ($) => {
                _VariableDeclarationList($)
            })
        })
        if (foo["VariableStatement"] !== undefined) { foo["VariableStatement"].end($) }
    }
    function _VoidKeyword(
        $: api.TVoidKeyword<Annotation>,
    ) {
        if (foo["VoidKeyword"] !== undefined) { foo["VoidKeyword"]($) }
    }
    function _WhileStatement(
        $: api.TWhileStatement<Annotation>,
    ) {
        if (foo["WhileStatement"] !== undefined) { foo["WhileStatement"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["condition"], ($) => {
                X_expression($)
            })
            pr.cc($["block"], ($) => {
                _Block($)
            })
        })
        if (foo["WhileStatement"] !== undefined) { foo["WhileStatement"].end($) }
    }
    return _SourceFile($)
}