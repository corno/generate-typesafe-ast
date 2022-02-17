import * as pr from "pareto-runtime"
import * as f from "../../interface/interfaces/visitor"

export function createDefaultVisistor(): f.IVisitor<string> {
    return {
        "$block/*Block": {
            begin: ($) => { console.log("$block/*Block begin") },
            end: ($) => { console.log("$block/*Block end") },
        },
        "$expression/?arrayLiteral/*ArrayLiteralExpression": {
            begin: ($) => { console.log("$expression/?arrayLiteral/*ArrayLiteralExpression begin") },
            end: ($) => { console.log("$expression/?arrayLiteral/*ArrayLiteralExpression end") },
        },
        "$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken": ($) => { console.log("$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken") },
        "$expression/?arrowFunction/*ArrowFunction": {
            begin: ($) => { console.log("$expression/?arrowFunction/*ArrowFunction begin") },
            end: ($) => { console.log("$expression/?arrowFunction/*ArrowFunction end") },
        },
        "$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken") },
        "$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken") },
        "$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken") },
        "$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken") },
        "$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken") },
        "$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken") },
        "$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken") },
        "$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken") },
        "$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken") },
        "$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken") },
        "$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken": ($) => { console.log("$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken") },
        "$expression/?binary/*BinaryExpression": {
            begin: ($) => { console.log("$expression/?binary/*BinaryExpression begin") },
            end: ($) => { console.log("$expression/?binary/*BinaryExpression end") },
        },
        "$expression/?call/*CallExpression": {
            begin: ($) => { console.log("$expression/?call/*CallExpression begin") },
            end: ($) => { console.log("$expression/?call/*CallExpression end") },
        },
        "$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken": ($) => { console.log("$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken") },
        "$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken": ($) => { console.log("$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken") },
        "$expression/?conditional/*ConditionalExpression": {
            begin: ($) => { console.log("$expression/?conditional/*ConditionalExpression begin") },
            end: ($) => { console.log("$expression/?conditional/*ConditionalExpression end") },
        },
        "$expression/?elementAccess/*ElementAccessExpression": {
            begin: ($) => { console.log("$expression/?elementAccess/*ElementAccessExpression begin") },
            end: ($) => { console.log("$expression/?elementAccess/*ElementAccessExpression end") },
        },
        "$expression/?false/*FalseKeyword": ($) => { console.log("$expression/?false/*FalseKeyword") },
        "$expression/?new/*NewExpression": {
            begin: ($) => { console.log("$expression/?new/*NewExpression begin") },
            end: ($) => { console.log("$expression/?new/*NewExpression end") },
        },
        "$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral": ($) => { console.log("$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral") },
        "$expression/?nullKeyword/*NullKeyword": ($) => { console.log("$expression/?nullKeyword/*NullKeyword") },
        "$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment": {
            begin: ($) => { console.log("$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment begin") },
            end: ($) => { console.log("$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment end") },
        },
        "$expression/?objectLiteral/*ObjectLiteralExpression": {
            begin: ($) => { console.log("$expression/?objectLiteral/*ObjectLiteralExpression begin") },
            end: ($) => { console.log("$expression/?objectLiteral/*ObjectLiteralExpression end") },
        },
        "$expression/?parenthesizedExpression/*ParenthesizedExpression": {
            begin: ($) => { console.log("$expression/?parenthesizedExpression/*ParenthesizedExpression begin") },
            end: ($) => { console.log("$expression/?parenthesizedExpression/*ParenthesizedExpression end") },
        },
        "$expression/?postfixUnary/*PostfixUnaryExpression": {
            begin: ($) => { console.log("$expression/?postfixUnary/*PostfixUnaryExpression begin") },
            end: ($) => { console.log("$expression/?postfixUnary/*PostfixUnaryExpression end") },
        },
        "$expression/?prefixUnary/*PrefixUnaryExpression": {
            begin: ($) => { console.log("$expression/?prefixUnary/*PrefixUnaryExpression begin") },
            end: ($) => { console.log("$expression/?prefixUnary/*PrefixUnaryExpression end") },
        },
        "$expression/?propertyAccess/*PropertyAccessExpression": {
            begin: ($) => { console.log("$expression/?propertyAccess/*PropertyAccessExpression begin") },
            end: ($) => { console.log("$expression/?propertyAccess/*PropertyAccessExpression end") },
        },
        "$expression/?template/*TemplateExpression/.head/*TemplateHead": ($) => { console.log("$expression/?template/*TemplateExpression/.head/*TemplateHead") },
        "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle": ($) => { console.log("$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle") },
        "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail": ($) => { console.log("$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail") },
        "$expression/?template/*TemplateExpression/.spans/*TemplateSpan": {
            begin: ($) => { console.log("$expression/?template/*TemplateExpression/.spans/*TemplateSpan begin") },
            end: ($) => { console.log("$expression/?template/*TemplateExpression/.spans/*TemplateSpan end") },
        },
        "$expression/?template/*TemplateExpression": {
            begin: ($) => { console.log("$expression/?template/*TemplateExpression begin") },
            end: ($) => { console.log("$expression/?template/*TemplateExpression end") },
        },
        "$expression/?true/*TrueKeyword": ($) => { console.log("$expression/?true/*TrueKeyword") },
        "$identifier/*Identifier": ($) => { console.log("$identifier/*Identifier") },
        "$modifier/?declare/*DeclareKeyword": ($) => { console.log("$modifier/?declare/*DeclareKeyword") },
        "$modifier/?export/*ExportKeyword": ($) => { console.log("$modifier/?export/*ExportKeyword") },
        "$modifier/?readonly/*ReadonlyKeyword": ($) => { console.log("$modifier/?readonly/*ReadonlyKeyword") },
        "$numericLiteral/*NumericLiteral": ($) => { console.log("$numericLiteral/*NumericLiteral") },
        "$parameter/*Parameter/.questionToken/*QuestionToken": ($) => { console.log("$parameter/*Parameter/.questionToken/*QuestionToken") },
        "$parameter/*Parameter": {
            begin: ($) => { console.log("$parameter/*Parameter begin") },
            end: ($) => { console.log("$parameter/*Parameter end") },
        },
        "$statement/?break/*BreakStatement": {
            begin: ($) => { console.log("$statement/?break/*BreakStatement begin") },
            end: ($) => { console.log("$statement/?break/*BreakStatement end") },
        },
        "$statement/?export/*ExportDeclaration": {
            begin: ($) => { console.log("$statement/?export/*ExportDeclaration begin") },
            end: ($) => { console.log("$statement/?export/*ExportDeclaration end") },
        },
        "$statement/?expression/*ExpressionStatement": {
            begin: ($) => { console.log("$statement/?expression/*ExpressionStatement begin") },
            end: ($) => { console.log("$statement/?expression/*ExpressionStatement end") },
        },
        "$statement/?for/*ForStatement": {
            begin: ($) => { console.log("$statement/?for/*ForStatement begin") },
            end: ($) => { console.log("$statement/?for/*ForStatement end") },
        },
        "$statement/?function/*FunctionDeclaration": {
            begin: ($) => { console.log("$statement/?function/*FunctionDeclaration begin") },
            end: ($) => { console.log("$statement/?function/*FunctionDeclaration end") },
        },
        "$statement/?if/*IfStatement": {
            begin: ($) => { console.log("$statement/?if/*IfStatement begin") },
            end: ($) => { console.log("$statement/?if/*IfStatement end") },
        },
        "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport": {
            begin: ($) => { console.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport begin") },
            end: ($) => { console.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport end") },
        },
        "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier": {
            begin: ($) => { console.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier begin") },
            end: ($) => { console.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier end") },
        },
        "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports": {
            begin: ($) => { console.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports begin") },
            end: ($) => { console.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports end") },
        },
        "$statement/?import/*ImportDeclaration/.clause/*ImportClause": {
            begin: ($) => { console.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause begin") },
            end: ($) => { console.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause end") },
        },
        "$statement/?import/*ImportDeclaration": {
            begin: ($) => { console.log("$statement/?import/*ImportDeclaration begin") },
            end: ($) => { console.log("$statement/?import/*ImportDeclaration end") },
        },
        "$statement/?interface/*InterfaceDeclaration": {
            begin: ($) => { console.log("$statement/?interface/*InterfaceDeclaration begin") },
            end: ($) => { console.log("$statement/?interface/*InterfaceDeclaration end") },
        },
        "$statement/?labeled/*LabeledStatement": {
            begin: ($) => { console.log("$statement/?labeled/*LabeledStatement begin") },
            end: ($) => { console.log("$statement/?labeled/*LabeledStatement end") },
        },
        "$statement/?return/*ReturnStatement": {
            begin: ($) => { console.log("$statement/?return/*ReturnStatement begin") },
            end: ($) => { console.log("$statement/?return/*ReturnStatement end") },
        },
        "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause": {
            begin: ($) => { console.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause begin") },
            end: ($) => { console.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause end") },
        },
        "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause": {
            begin: ($) => { console.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause begin") },
            end: ($) => { console.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause end") },
        },
        "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock": {
            begin: ($) => { console.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock begin") },
            end: ($) => { console.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock end") },
        },
        "$statement/?switch/*SwitchStatement": {
            begin: ($) => { console.log("$statement/?switch/*SwitchStatement begin") },
            end: ($) => { console.log("$statement/?switch/*SwitchStatement end") },
        },
        "$statement/?throw/*ThrowStatement": {
            begin: ($) => { console.log("$statement/?throw/*ThrowStatement begin") },
            end: ($) => { console.log("$statement/?throw/*ThrowStatement end") },
        },
        "$statement/?try/*TryStatement/.catchClause/*CatchClause": {
            begin: ($) => { console.log("$statement/?try/*TryStatement/.catchClause/*CatchClause begin") },
            end: ($) => { console.log("$statement/?try/*TryStatement/.catchClause/*CatchClause end") },
        },
        "$statement/?try/*TryStatement": {
            begin: ($) => { console.log("$statement/?try/*TryStatement begin") },
            end: ($) => { console.log("$statement/?try/*TryStatement end") },
        },
        "$statement/?typeAlias/*TypeAliasDeclaration": {
            begin: ($) => { console.log("$statement/?typeAlias/*TypeAliasDeclaration begin") },
            end: ($) => { console.log("$statement/?typeAlias/*TypeAliasDeclaration end") },
        },
        "$statement/?variable/*VariableStatement": {
            begin: ($) => { console.log("$statement/?variable/*VariableStatement begin") },
            end: ($) => { console.log("$statement/?variable/*VariableStatement end") },
        },
        "$statement/?while/*WhileStatement": {
            begin: ($) => { console.log("$statement/?while/*WhileStatement begin") },
            end: ($) => { console.log("$statement/?while/*WhileStatement end") },
        },
        "$stringLiteral/*StringLiteral": ($) => { console.log("$stringLiteral/*StringLiteral") },
        "$type/?any/*AnyKeyword": ($) => { console.log("$type/?any/*AnyKeyword") },
        "$type/?array/*ArrayType": {
            begin: ($) => { console.log("$type/?array/*ArrayType begin") },
            end: ($) => { console.log("$type/?array/*ArrayType end") },
        },
        "$type/?boolean/*BooleanKeyword": ($) => { console.log("$type/?boolean/*BooleanKeyword") },
        "$type/?function/*FunctionType": {
            begin: ($) => { console.log("$type/?function/*FunctionType begin") },
            end: ($) => { console.log("$type/?function/*FunctionType end") },
        },
        "$type/?literal/*LiteralType/?null/*NullKeyword": ($) => { console.log("$type/?literal/*LiteralType/?null/*NullKeyword") },
        "$type/?literal/*LiteralType": {
            begin: ($) => { console.log("$type/?literal/*LiteralType begin") },
            end: ($) => { console.log("$type/?literal/*LiteralType end") },
        },
        "$type/?parenthesized/*ParenthesizedType": {
            begin: ($) => { console.log("$type/?parenthesized/*ParenthesizedType begin") },
            end: ($) => { console.log("$type/?parenthesized/*ParenthesizedType end") },
        },
        "$type/?never/*NeverKeyword": ($) => { console.log("$type/?never/*NeverKeyword") },
        "$type/?number/*NumberKeyword": ($) => { console.log("$type/?number/*NumberKeyword") },
        "$type/?optional/*OptionalType": {
            begin: ($) => { console.log("$type/?optional/*OptionalType begin") },
            end: ($) => { console.log("$type/?optional/*OptionalType end") },
        },
        "$type/?tuple/*TupleType": {
            begin: ($) => { console.log("$type/?tuple/*TupleType begin") },
            end: ($) => { console.log("$type/?tuple/*TupleType end") },
        },
        "$type/?typeLiteral/*TypeLiteral": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral end") },
        },
        "$type/?string/*StringKeyword": ($) => { console.log("$type/?string/*StringKeyword") },
        "$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName": {
            begin: ($) => { console.log("$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName begin") },
            end: ($) => { console.log("$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName end") },
        },
        "$type/?typeReference/*TypeReference": {
            begin: ($) => { console.log("$type/?typeReference/*TypeReference begin") },
            end: ($) => { console.log("$type/?typeReference/*TypeReference end") },
        },
        "$type/?undefined/*UndefinedKeyword": ($) => { console.log("$type/?undefined/*UndefinedKeyword") },
        "$type/?union/*UnionType": {
            begin: ($) => { console.log("$type/?union/*UnionType begin") },
            end: ($) => { console.log("$type/?union/*UnionType end") },
        },
        "$type/?void/*VoidKeyword": ($) => { console.log("$type/?void/*VoidKeyword") },
        "$typeParameter/*TypeParameter": {
            begin: ($) => { console.log("$typeParameter/*TypeParameter begin") },
            end: ($) => { console.log("$typeParameter/*TypeParameter end") },
        },
        "$typeSignature/?construct/*ConstructSignature": {
            begin: ($) => { console.log("$typeSignature/?construct/*ConstructSignature begin") },
            end: ($) => { console.log("$typeSignature/?construct/*ConstructSignature end") },
        },
        "$typeSignature/?index/*IndexSignature": {
            begin: ($) => { console.log("$typeSignature/?index/*IndexSignature begin") },
            end: ($) => { console.log("$typeSignature/?index/*IndexSignature end") },
        },
        "$typeSignature/?method/*MethodSignature": {
            begin: ($) => { console.log("$typeSignature/?method/*MethodSignature begin") },
            end: ($) => { console.log("$typeSignature/?method/*MethodSignature end") },
        },
        "$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken": ($) => { console.log("$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken") },
        "$typeSignature/?property/*PropertySignature": {
            begin: ($) => { console.log("$typeSignature/?property/*PropertySignature begin") },
            end: ($) => { console.log("$typeSignature/?property/*PropertySignature end") },
        },
        "$variableDeclaration/*VariableDeclaration": {
            begin: ($) => { console.log("$variableDeclaration/*VariableDeclaration begin") },
            end: ($) => { console.log("$variableDeclaration/*VariableDeclaration end") },
        },
        "$variableDeclarationList/*VariableDeclarationList": {
            begin: ($) => { console.log("$variableDeclarationList/*VariableDeclarationList begin") },
            end: ($) => { console.log("$variableDeclarationList/*VariableDeclarationList end") },
        },
        "/.endOfFile/*EndOfFileToken": ($) => { console.log("/.endOfFile/*EndOfFileToken") },
        "": {
            begin: ($) => { console.log(" begin") },
            end: ($) => { console.log(" end") },
        },
    }
}