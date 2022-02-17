import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api"

export type IVisitor<Annotation> = {
    readonly "$block/*Block"?: {
        readonly "begin": ($: api.TNGblock$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$<Annotation>) => void,
    }
    readonly "$expression/?arrayLiteral/*ArrayLiteralExpression"?: {
        readonly "begin": ($: api.TNGexpression_arrayLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_arrayLiteral$<Annotation>) => void,
    }
    readonly "$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"?: ($: api.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>) => void
    readonly "$expression/?arrowFunction/*ArrowFunction"?: {
        readonly "begin": ($: api.TNGexpression_arrowFunction$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_arrowFunction$<Annotation>) => void,
    }
    readonly "$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"?: ($: api.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"?: ($: api.TNGexpression_binary$_operator_barBar$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"?: ($: api.TNGexpression_binary$_operator_equals$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"?: ($: api.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"?: ($: api.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"?: ($: api.TNGexpression_binary$_operator_greaterThan$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"?: ($: api.TNGexpression_binary$_operator_lessThan$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"?: ($: api.TNGexpression_binary$_operator_minus$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"?: ($: api.TNGexpression_binary$_operator_minusEquals$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"?: ($: api.TNGexpression_binary$_operator_plus$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"?: ($: api.TNGexpression_binary$_operator_plusEquals$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression"?: {
        readonly "begin": ($: api.TNGexpression_binary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_binary$<Annotation>) => void,
    }
    readonly "$expression/?call/*CallExpression"?: {
        readonly "begin": ($: api.TNGexpression_call$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_call$<Annotation>) => void,
    }
    readonly "$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"?: ($: api.TNGexpression_conditional$_questionToken$<Annotation>) => void
    readonly "$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"?: ($: api.TNGexpression_conditional$_colonToken$<Annotation>) => void
    readonly "$expression/?conditional/*ConditionalExpression"?: {
        readonly "begin": ($: api.TNGexpression_conditional$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_conditional$<Annotation>) => void,
    }
    readonly "$expression/?elementAccess/*ElementAccessExpression"?: {
        readonly "begin": ($: api.TNGexpression_elementAccess$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_elementAccess$<Annotation>) => void,
    }
    readonly "$expression/?false/*FalseKeyword"?: ($: api.TNGexpression_false$<Annotation>) => void
    readonly "$expression/?new/*NewExpression"?: {
        readonly "begin": ($: api.TNGexpression_new$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_new$<Annotation>) => void,
    }
    readonly "$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"?: ($: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void
    readonly "$expression/?nullKeyword/*NullKeyword"?: ($: api.TNGexpression_nullKeyword$<Annotation>) => void
    readonly "$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"?: {
        readonly "begin": ($: api.TNGexpression_objectLiteral$$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_objectLiteral$$<Annotation>) => void,
    }
    readonly "$expression/?objectLiteral/*ObjectLiteralExpression"?: {
        readonly "begin": ($: api.TNGexpression_objectLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_objectLiteral$<Annotation>) => void,
    }
    readonly "$expression/?parenthesizedExpression/*ParenthesizedExpression"?: {
        readonly "begin": ($: api.TNGexpression_parenthesizedExpression$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_parenthesizedExpression$<Annotation>) => void,
    }
    readonly "$expression/?postfixUnary/*PostfixUnaryExpression"?: {
        readonly "begin": ($: api.TNGexpression_postfixUnary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_postfixUnary$<Annotation>) => void,
    }
    readonly "$expression/?prefixUnary/*PrefixUnaryExpression"?: {
        readonly "begin": ($: api.TNGexpression_prefixUnary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_prefixUnary$<Annotation>) => void,
    }
    readonly "$expression/?propertyAccess/*PropertyAccessExpression"?: {
        readonly "begin": ($: api.TNGexpression_propertyAccess$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_propertyAccess$<Annotation>) => void,
    }
    readonly "$expression/?template/*TemplateExpression/.head/*TemplateHead"?: ($: api.TNGexpression_template$_head$<Annotation>) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"?: ($: api.TNGexpression_template$_spans$_x_middle$<Annotation>) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"?: ($: api.TNGexpression_template$_spans$_x_tail$<Annotation>) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan"?: {
        readonly "begin": ($: api.TNGexpression_template$_spans$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_template$_spans$<Annotation>) => void,
    }
    readonly "$expression/?template/*TemplateExpression"?: {
        readonly "begin": ($: api.TNGexpression_template$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_template$<Annotation>) => void,
    }
    readonly "$expression/?true/*TrueKeyword"?: ($: api.TNGexpression_true$<Annotation>) => void
    readonly "$identifier/*Identifier"?: ($: api.TNGidentifier$<Annotation>) => void
    readonly "$modifier/?declare/*DeclareKeyword"?: ($: api.TNGmodifier_declare$<Annotation>) => void
    readonly "$modifier/?export/*ExportKeyword"?: ($: api.TNGmodifier_export$<Annotation>) => void
    readonly "$modifier/?readonly/*ReadonlyKeyword"?: ($: api.TNGmodifier_readonly$<Annotation>) => void
    readonly "$numericLiteral/*NumericLiteral"?: ($: api.TNGnumericLiteral$<Annotation>) => void
    readonly "$parameter/*Parameter/.questionToken/*QuestionToken"?: ($: api.TNGparameter$_questionToken$<Annotation>) => void
    readonly "$parameter/*Parameter"?: {
        readonly "begin": ($: api.TNGparameter$<Annotation>) => void,
        readonly "end": ($: api.TNGparameter$<Annotation>) => void,
    }
    readonly "$statement/?break/*BreakStatement"?: {
        readonly "begin": ($: api.TNGstatement_break$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_break$<Annotation>) => void,
    }
    readonly "$statement/?export/*ExportDeclaration"?: {
        readonly "begin": ($: api.TNGstatement_export$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_export$<Annotation>) => void,
    }
    readonly "$statement/?expression/*ExpressionStatement"?: {
        readonly "begin": ($: api.TNGstatement_expression$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_expression$<Annotation>) => void,
    }
    readonly "$statement/?for/*ForStatement"?: {
        readonly "begin": ($: api.TNGstatement_for$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_for$<Annotation>) => void,
    }
    readonly "$statement/?function/*FunctionDeclaration"?: {
        readonly "begin": ($: api.TNGstatement_function$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_function$<Annotation>) => void,
    }
    readonly "$statement/?if/*IfStatement"?: {
        readonly "begin": ($: api.TNGstatement_if$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_if$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_named$$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_named$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_named$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration"?: {
        readonly "begin": ($: api.TNGstatement_import$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$<Annotation>) => void,
    }
    readonly "$statement/?interface/*InterfaceDeclaration"?: {
        readonly "begin": ($: api.TNGstatement_interface$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_interface$<Annotation>) => void,
    }
    readonly "$statement/?labeled/*LabeledStatement"?: {
        readonly "begin": ($: api.TNGstatement_labeled$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_labeled$<Annotation>) => void,
    }
    readonly "$statement/?return/*ReturnStatement"?: {
        readonly "begin": ($: api.TNGstatement_return$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_return$<Annotation>) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$<Annotation>) => void,
    }
    readonly "$statement/?switch/*SwitchStatement"?: {
        readonly "begin": ($: api.TNGstatement_switch$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$<Annotation>) => void,
    }
    readonly "$statement/?throw/*ThrowStatement"?: {
        readonly "begin": ($: api.TNGstatement_throw$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_throw$<Annotation>) => void,
    }
    readonly "$statement/?try/*TryStatement/.catchClause/*CatchClause"?: {
        readonly "begin": ($: api.TNGstatement_try$_catchClause$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_try$_catchClause$<Annotation>) => void,
    }
    readonly "$statement/?try/*TryStatement"?: {
        readonly "begin": ($: api.TNGstatement_try$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_try$<Annotation>) => void,
    }
    readonly "$statement/?typeAlias/*TypeAliasDeclaration"?: {
        readonly "begin": ($: api.TNGstatement_typeAlias$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_typeAlias$<Annotation>) => void,
    }
    readonly "$statement/?variable/*VariableStatement"?: {
        readonly "begin": ($: api.TNGstatement_variable$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_variable$<Annotation>) => void,
    }
    readonly "$statement/?while/*WhileStatement"?: {
        readonly "begin": ($: api.TNGstatement_while$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_while$<Annotation>) => void,
    }
    readonly "$stringLiteral/*StringLiteral"?: ($: api.TNGstringLiteral$<Annotation>) => void
    readonly "$type/?any/*AnyKeyword"?: ($: api.TNGtype_any$<Annotation>) => void
    readonly "$type/?array/*ArrayType"?: {
        readonly "begin": ($: api.TNGtype_array$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_array$<Annotation>) => void,
    }
    readonly "$type/?boolean/*BooleanKeyword"?: ($: api.TNGtype_boolean$<Annotation>) => void
    readonly "$type/?function/*FunctionType"?: {
        readonly "begin": ($: api.TNGtype_function$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_function$<Annotation>) => void,
    }
    readonly "$type/?literal/*LiteralType/?null/*NullKeyword"?: ($: api.TNGtype_literal$_null$<Annotation>) => void
    readonly "$type/?literal/*LiteralType"?: {
        readonly "begin": ($: api.TNGtype_literal$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_literal$<Annotation>) => void,
    }
    readonly "$type/?parenthesized/*ParenthesizedType"?: {
        readonly "begin": ($: api.TNGtype_parenthesized$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_parenthesized$<Annotation>) => void,
    }
    readonly "$type/?never/*NeverKeyword"?: ($: api.TNGtype_never$<Annotation>) => void
    readonly "$type/?number/*NumberKeyword"?: ($: api.TNGtype_number$<Annotation>) => void
    readonly "$type/?optional/*OptionalType"?: {
        readonly "begin": ($: api.TNGtype_optional$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_optional$<Annotation>) => void,
    }
    readonly "$type/?tuple/*TupleType"?: {
        readonly "begin": ($: api.TNGtype_tuple$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_tuple$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
    }
    readonly "$type/?string/*StringKeyword"?: ($: api.TNGtype_string$<Annotation>) => void
    readonly "$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"?: {
        readonly "begin": ($: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
    }
    readonly "$type/?typeReference/*TypeReference"?: {
        readonly "begin": ($: api.TNGtype_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$<Annotation>) => void,
    }
    readonly "$type/?undefined/*UndefinedKeyword"?: ($: api.TNGtype_undefined$<Annotation>) => void
    readonly "$type/?union/*UnionType"?: {
        readonly "begin": ($: api.TNGtype_union$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$<Annotation>) => void,
    }
    readonly "$type/?void/*VoidKeyword"?: ($: api.TNGtype_void$<Annotation>) => void
    readonly "$typeParameter/*TypeParameter"?: {
        readonly "begin": ($: api.TNGtypeParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeParameter$<Annotation>) => void,
    }
    readonly "$typeSignature/?construct/*ConstructSignature"?: {
        readonly "begin": ($: api.TNGtypeSignature_construct$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_construct$<Annotation>) => void,
    }
    readonly "$typeSignature/?index/*IndexSignature"?: {
        readonly "begin": ($: api.TNGtypeSignature_index$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_index$<Annotation>) => void,
    }
    readonly "$typeSignature/?method/*MethodSignature"?: {
        readonly "begin": ($: api.TNGtypeSignature_method$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_method$<Annotation>) => void,
    }
    readonly "$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"?: ($: api.TNGtypeSignature_property$_quesionToken$<Annotation>) => void
    readonly "$typeSignature/?property/*PropertySignature"?: {
        readonly "begin": ($: api.TNGtypeSignature_property$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_property$<Annotation>) => void,
    }
    readonly "$variableDeclaration/*VariableDeclaration"?: {
        readonly "begin": ($: api.TNGvariableDeclaration$<Annotation>) => void,
        readonly "end": ($: api.TNGvariableDeclaration$<Annotation>) => void,
    }
    readonly "$variableDeclarationList/*VariableDeclarationList"?: {
        readonly "begin": ($: api.TNGvariableDeclarationList$<Annotation>) => void,
        readonly "end": ($: api.TNGvariableDeclarationList$<Annotation>) => void,
    }
    readonly "/.endOfFile/*EndOfFileToken"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    readonly ""?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
    }
}