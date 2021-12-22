import * as pr from "pareto-runtime"
export type XGexpression_arrayLiteral<Annotation> = TArrayLiteralExpression<Annotation>
export type SGexpression_arrayLiteral<Annotation> = XGexpression_arrayLiteral<Annotation>
export type XGexpression_arrowFunction<Annotation> = TArrowFunction<Annotation>
export type SGexpression_arrowFunction<Annotation> = XGexpression_arrowFunction<Annotation>
export type XGexpression_binary<Annotation> = TBinaryExpression<Annotation>
export type SGexpression_binary<Annotation> = XGexpression_binary<Annotation>
export type XGexpression_call<Annotation> = TCallExpression<Annotation>
export type SGexpression_call<Annotation> = XGexpression_call<Annotation>
export type XGexpression_conditional<Annotation> = TConditionalExpression<Annotation>
export type SGexpression_conditional<Annotation> = XGexpression_conditional<Annotation>
export type XGexpression_elementAccess<Annotation> = TElementAccessExpression<Annotation>
export type SGexpression_elementAccess<Annotation> = XGexpression_elementAccess<Annotation>
export type XGexpression_false<Annotation> = TFalseKeyword<Annotation>
export type SGexpression_false<Annotation> = XGexpression_false<Annotation>
export type XGexpression_identifier<Annotation> = TIdentifier<Annotation>
export type SGexpression_identifier<Annotation> = XGexpression_identifier<Annotation>
export type XGexpression_new<Annotation> = TNewExpression<Annotation>
export type SGexpression_new<Annotation> = XGexpression_new<Annotation>
export type XGexpression_noSubstitutionTemplateLiteral<Annotation> = TNoSubstitutionTemplateLiteral<Annotation>
export type SGexpression_noSubstitutionTemplateLiteral<Annotation> = XGexpression_noSubstitutionTemplateLiteral<Annotation>
export type XGexpression_numericLiteral<Annotation> = TNumericLiteral<Annotation>
export type SGexpression_numericLiteral<Annotation> = XGexpression_numericLiteral<Annotation>
export type XGexpression_nullKeyword<Annotation> = TNullKeyword<Annotation>
export type SGexpression_nullKeyword<Annotation> = XGexpression_nullKeyword<Annotation>
export type XGexpression_objectLiteral<Annotation> = TObjectLiteralExpression<Annotation>
export type SGexpression_objectLiteral<Annotation> = XGexpression_objectLiteral<Annotation>
export type XGexpression_parenthesizedExpression<Annotation> = TParenthesizedExpression<Annotation>
export type SGexpression_parenthesizedExpression<Annotation> = XGexpression_parenthesizedExpression<Annotation>
export type XGexpression_postfixUnary<Annotation> = TPostfixUnaryExpression<Annotation>
export type SGexpression_postfixUnary<Annotation> = XGexpression_postfixUnary<Annotation>
export type XGexpression_prefixUnary<Annotation> = TPrefixUnaryExpression<Annotation>
export type SGexpression_prefixUnary<Annotation> = XGexpression_prefixUnary<Annotation>
export type XGexpression_propertyAccess<Annotation> = TPropertyAccessExpression<Annotation>
export type SGexpression_propertyAccess<Annotation> = XGexpression_propertyAccess<Annotation>
export type XGexpression_stringLiteral<Annotation> = TStringLiteral<Annotation>
export type SGexpression_stringLiteral<Annotation> = XGexpression_stringLiteral<Annotation>
export type XGexpression_template<Annotation> = TTemplateExpression<Annotation>
export type SGexpression_template<Annotation> = XGexpression_template<Annotation>
export type XGexpression_true<Annotation> = TTrueKeyword<Annotation>
export type SGexpression_true<Annotation> = XGexpression_true<Annotation>
export type XGexpression<Annotation> =
    | [ "arrayLiteral", SGexpression_arrayLiteral<Annotation>]
    | [ "arrowFunction", SGexpression_arrowFunction<Annotation>]
    | [ "binary", SGexpression_binary<Annotation>]
    | [ "call", SGexpression_call<Annotation>]
    | [ "conditional", SGexpression_conditional<Annotation>]
    | [ "elementAccess", SGexpression_elementAccess<Annotation>]
    | [ "false", SGexpression_false<Annotation>]
    | [ "identifier", SGexpression_identifier<Annotation>]
    | [ "new", SGexpression_new<Annotation>]
    | [ "noSubstitutionTemplateLiteral", SGexpression_noSubstitutionTemplateLiteral<Annotation>]
    | [ "numericLiteral", SGexpression_numericLiteral<Annotation>]
    | [ "nullKeyword", SGexpression_nullKeyword<Annotation>]
    | [ "objectLiteral", SGexpression_objectLiteral<Annotation>]
    | [ "parenthesizedExpression", SGexpression_parenthesizedExpression<Annotation>]
    | [ "postfixUnary", SGexpression_postfixUnary<Annotation>]
    | [ "prefixUnary", SGexpression_prefixUnary<Annotation>]
    | [ "propertyAccess", SGexpression_propertyAccess<Annotation>]
    | [ "stringLiteral", SGexpression_stringLiteral<Annotation>]
    | [ "template", SGexpression_template<Annotation>]
    | [ "true", SGexpression_true<Annotation>]
export type Gexpression<Annotation> =  XGexpression<Annotation>
export type XGfunctionDefinition_typeParameters<Annotation> = TTypeParameter<Annotation>
export type SGfunctionDefinition_typeParameters<Annotation> = XGfunctionDefinition_typeParameters<Annotation>[]
export type XGfunctionDefinition_parameters<Annotation> = TParameter<Annotation>
export type SGfunctionDefinition_parameters<Annotation> = XGfunctionDefinition_parameters<Annotation>[]
export type XGfunctionDefinition_returnType<Annotation> = Gtype<Annotation>
export type SGfunctionDefinition_returnType<Annotation> = null | XGfunctionDefinition_returnType<Annotation>
export type XGfunctionDefinition<Annotation> = {
    readonly typeParameters:  SGfunctionDefinition_typeParameters<Annotation>
    readonly parameters:  SGfunctionDefinition_parameters<Annotation>
    readonly returnType:  SGfunctionDefinition_returnType<Annotation>
}
export type GfunctionDefinition<Annotation> =  XGfunctionDefinition<Annotation>
export type XGidentifierOrStringLiteral_identifier<Annotation> = TIdentifier<Annotation>
export type SGidentifierOrStringLiteral_identifier<Annotation> = XGidentifierOrStringLiteral_identifier<Annotation>
export type XGidentifierOrStringLiteral_stringLiteral<Annotation> = TStringLiteral<Annotation>
export type SGidentifierOrStringLiteral_stringLiteral<Annotation> = XGidentifierOrStringLiteral_stringLiteral<Annotation>
export type XGidentifierOrStringLiteral<Annotation> =
    | [ "identifier", SGidentifierOrStringLiteral_identifier<Annotation>]
    | [ "stringLiteral", SGidentifierOrStringLiteral_stringLiteral<Annotation>]
export type GidentifierOrStringLiteral<Annotation> =  XGidentifierOrStringLiteral<Annotation>
export type XGmodifier_declare<Annotation> = TDeclareKeyword<Annotation>
export type SGmodifier_declare<Annotation> = XGmodifier_declare<Annotation>
export type XGmodifier_export<Annotation> = TExportKeyword<Annotation>
export type SGmodifier_export<Annotation> = XGmodifier_export<Annotation>
export type XGmodifier_readonly<Annotation> = TReadonlyKeyword<Annotation>
export type SGmodifier_readonly<Annotation> = XGmodifier_readonly<Annotation>
export type XGmodifier<Annotation> =
    | [ "declare", SGmodifier_declare<Annotation>]
    | [ "export", SGmodifier_export<Annotation>]
    | [ "readonly", SGmodifier_readonly<Annotation>]
export type Gmodifier<Annotation> =  XGmodifier<Annotation>
export type XGstatement_block<Annotation> = TBlock<Annotation>
export type SGstatement_block<Annotation> = XGstatement_block<Annotation>
export type XGstatement_break<Annotation> = TBreakStatement<Annotation>
export type SGstatement_break<Annotation> = XGstatement_break<Annotation>
export type XGstatement_export<Annotation> = TExportDeclaration<Annotation>
export type SGstatement_export<Annotation> = XGstatement_export<Annotation>
export type XGstatement_expression<Annotation> = TExpressionStatement<Annotation>
export type SGstatement_expression<Annotation> = XGstatement_expression<Annotation>
export type XGstatement_for<Annotation> = TForStatement<Annotation>
export type SGstatement_for<Annotation> = XGstatement_for<Annotation>
export type XGstatement_function<Annotation> = TFunctionDeclaration<Annotation>
export type SGstatement_function<Annotation> = XGstatement_function<Annotation>
export type XGstatement_if<Annotation> = TIfStatement<Annotation>
export type SGstatement_if<Annotation> = XGstatement_if<Annotation>
export type XGstatement_import<Annotation> = TImportDeclaration<Annotation>
export type SGstatement_import<Annotation> = XGstatement_import<Annotation>
export type XGstatement_interface<Annotation> = TInterfaceDeclaration<Annotation>
export type SGstatement_interface<Annotation> = XGstatement_interface<Annotation>
export type XGstatement_labeled<Annotation> = TLabeledStatement<Annotation>
export type SGstatement_labeled<Annotation> = XGstatement_labeled<Annotation>
export type XGstatement_return<Annotation> = TReturnStatement<Annotation>
export type SGstatement_return<Annotation> = XGstatement_return<Annotation>
export type XGstatement_switch<Annotation> = TSwitchStatement<Annotation>
export type SGstatement_switch<Annotation> = XGstatement_switch<Annotation>
export type XGstatement_throw<Annotation> = TThrowStatement<Annotation>
export type SGstatement_throw<Annotation> = XGstatement_throw<Annotation>
export type XGstatement_try<Annotation> = TTryStatement<Annotation>
export type SGstatement_try<Annotation> = XGstatement_try<Annotation>
export type XGstatement_typeAlias<Annotation> = TTypeAliasDeclaration<Annotation>
export type SGstatement_typeAlias<Annotation> = XGstatement_typeAlias<Annotation>
export type XGstatement_variable<Annotation> = TVariableStatement<Annotation>
export type SGstatement_variable<Annotation> = XGstatement_variable<Annotation>
export type XGstatement_while<Annotation> = TWhileStatement<Annotation>
export type SGstatement_while<Annotation> = XGstatement_while<Annotation>
export type XGstatement<Annotation> =
    | [ "block", SGstatement_block<Annotation>]
    | [ "break", SGstatement_break<Annotation>]
    | [ "export", SGstatement_export<Annotation>]
    | [ "expression", SGstatement_expression<Annotation>]
    | [ "for", SGstatement_for<Annotation>]
    | [ "function", SGstatement_function<Annotation>]
    | [ "if", SGstatement_if<Annotation>]
    | [ "import", SGstatement_import<Annotation>]
    | [ "interface", SGstatement_interface<Annotation>]
    | [ "labeled", SGstatement_labeled<Annotation>]
    | [ "return", SGstatement_return<Annotation>]
    | [ "switch", SGstatement_switch<Annotation>]
    | [ "throw", SGstatement_throw<Annotation>]
    | [ "try", SGstatement_try<Annotation>]
    | [ "typeAlias", SGstatement_typeAlias<Annotation>]
    | [ "variable", SGstatement_variable<Annotation>]
    | [ "while", SGstatement_while<Annotation>]
export type Gstatement<Annotation> =  XGstatement<Annotation>
export type XGtype_any<Annotation> = TAnyKeyword<Annotation>
export type SGtype_any<Annotation> = XGtype_any<Annotation>
export type XGtype_array<Annotation> = TArrayType<Annotation>
export type SGtype_array<Annotation> = XGtype_array<Annotation>
export type XGtype_boolean<Annotation> = TBooleanKeyword<Annotation>
export type SGtype_boolean<Annotation> = XGtype_boolean<Annotation>
export type XGtype_function<Annotation> = TFunctionType<Annotation>
export type SGtype_function<Annotation> = XGtype_function<Annotation>
export type XGtype_literal<Annotation> = TLiteralType<Annotation>
export type SGtype_literal<Annotation> = XGtype_literal<Annotation>
export type XGtype_parenthesized<Annotation> = TParenthesizedType<Annotation>
export type SGtype_parenthesized<Annotation> = XGtype_parenthesized<Annotation>
export type XGtype_never<Annotation> = TNeverKeyword<Annotation>
export type SGtype_never<Annotation> = XGtype_never<Annotation>
export type XGtype_number<Annotation> = TNumberKeyword<Annotation>
export type SGtype_number<Annotation> = XGtype_number<Annotation>
export type XGtype_optional<Annotation> = TOptionalType<Annotation>
export type SGtype_optional<Annotation> = XGtype_optional<Annotation>
export type XGtype_tuple<Annotation> = TTupleType<Annotation>
export type SGtype_tuple<Annotation> = XGtype_tuple<Annotation>
export type XGtype_typeLiteral<Annotation> = TTypeLiteral<Annotation>
export type SGtype_typeLiteral<Annotation> = XGtype_typeLiteral<Annotation>
export type XGtype_string<Annotation> = TStringKeyword<Annotation>
export type SGtype_string<Annotation> = XGtype_string<Annotation>
export type XGtype_typeReference<Annotation> = TTypeReference<Annotation>
export type SGtype_typeReference<Annotation> = XGtype_typeReference<Annotation>
export type XGtype_undefined<Annotation> = TUndefinedKeyword<Annotation>
export type SGtype_undefined<Annotation> = XGtype_undefined<Annotation>
export type XGtype_union<Annotation> = TUnionType<Annotation>
export type SGtype_union<Annotation> = XGtype_union<Annotation>
export type XGtype_void<Annotation> = TVoidKeyword<Annotation>
export type SGtype_void<Annotation> = XGtype_void<Annotation>
export type XGtype<Annotation> =
    | [ "any", SGtype_any<Annotation>]
    | [ "array", SGtype_array<Annotation>]
    | [ "boolean", SGtype_boolean<Annotation>]
    | [ "function", SGtype_function<Annotation>]
    | [ "literal", SGtype_literal<Annotation>]
    | [ "parenthesized", SGtype_parenthesized<Annotation>]
    | [ "never", SGtype_never<Annotation>]
    | [ "number", SGtype_number<Annotation>]
    | [ "optional", SGtype_optional<Annotation>]
    | [ "tuple", SGtype_tuple<Annotation>]
    | [ "typeLiteral", SGtype_typeLiteral<Annotation>]
    | [ "string", SGtype_string<Annotation>]
    | [ "typeReference", SGtype_typeReference<Annotation>]
    | [ "undefined", SGtype_undefined<Annotation>]
    | [ "union", SGtype_union<Annotation>]
    | [ "void", SGtype_void<Annotation>]
export type Gtype<Annotation> =  XGtype<Annotation>
export type XGtypeSignature_construct<Annotation> = TConstructSignature<Annotation>
export type SGtypeSignature_construct<Annotation> = XGtypeSignature_construct<Annotation>
export type XGtypeSignature_index<Annotation> = TIndexSignature<Annotation>
export type SGtypeSignature_index<Annotation> = XGtypeSignature_index<Annotation>
export type XGtypeSignature_method<Annotation> = TMethodSignature<Annotation>
export type SGtypeSignature_method<Annotation> = XGtypeSignature_method<Annotation>
export type XGtypeSignature_property<Annotation> = TPropertySignature<Annotation>
export type SGtypeSignature_property<Annotation> = XGtypeSignature_property<Annotation>
export type XGtypeSignature<Annotation> =
    | [ "construct", SGtypeSignature_construct<Annotation>]
    | [ "index", SGtypeSignature_index<Annotation>]
    | [ "method", SGtypeSignature_method<Annotation>]
    | [ "property", SGtypeSignature_property<Annotation>]
export type GtypeSignature<Annotation> =  XGtypeSignature<Annotation>

export type TAnyKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTArrayLiteralExpression<Annotation> = Gexpression<Annotation>
export type STArrayLiteralExpression<Annotation> = XTArrayLiteralExpression<Annotation>[]

export type TArrayLiteralExpression<Annotation> = {
    annotation: Annotation,
    content: STArrayLiteralExpression<Annotation>,
}
export type XTArrayType<Annotation> = Gtype<Annotation>
export type STArrayType<Annotation> = XTArrayType<Annotation>

export type TArrayType<Annotation> = {
    annotation: Annotation,
    content: STArrayType<Annotation>,
}
export type XTArrowFunction_parameters<Annotation> = TParameter<Annotation>
export type STArrowFunction_parameters<Annotation> = XTArrowFunction_parameters<Annotation>[]
export type XTArrowFunction_returnType<Annotation> = Gtype<Annotation>
export type STArrowFunction_returnType<Annotation> = null | XTArrowFunction_returnType<Annotation>
export type XTArrowFunction_equalsGreaterThan<Annotation> = TEqualsGreaterThanToken<Annotation>
export type STArrowFunction_equalsGreaterThan<Annotation> = XTArrowFunction_equalsGreaterThan<Annotation>
export type XTArrowFunction_implementation_block<Annotation> = TBlock<Annotation>
export type STArrowFunction_implementation_block<Annotation> = XTArrowFunction_implementation_block<Annotation>
export type XTArrowFunction_implementation_expression<Annotation> = Gexpression<Annotation>
export type STArrowFunction_implementation_expression<Annotation> = XTArrowFunction_implementation_expression<Annotation>
export type XTArrowFunction_implementation<Annotation> =
    | [ "block", STArrowFunction_implementation_block<Annotation>]
    | [ "expression", STArrowFunction_implementation_expression<Annotation>]
export type STArrowFunction_implementation<Annotation> = XTArrowFunction_implementation<Annotation>
export type XTArrowFunction<Annotation> = {
    readonly parameters:  STArrowFunction_parameters<Annotation>
    readonly returnType:  STArrowFunction_returnType<Annotation>
    readonly equalsGreaterThan:  STArrowFunction_equalsGreaterThan<Annotation>
    readonly implementation:  STArrowFunction_implementation<Annotation>
}
export type STArrowFunction<Annotation> = XTArrowFunction<Annotation>

export type TArrowFunction<Annotation> = {
    annotation: Annotation,
    content: STArrowFunction<Annotation>,
}
export type XTBinaryExpression_leftHandSide<Annotation> = Gexpression<Annotation>
export type STBinaryExpression_leftHandSide<Annotation> = XTBinaryExpression_leftHandSide<Annotation>
export type XTBinaryExpression_operator_ampersandAmpersand<Annotation> = TAmpersandAmpersandToken<Annotation>
export type STBinaryExpression_operator_ampersandAmpersand<Annotation> = XTBinaryExpression_operator_ampersandAmpersand<Annotation>
export type XTBinaryExpression_operator_barBar<Annotation> = TBarBarToken<Annotation>
export type STBinaryExpression_operator_barBar<Annotation> = XTBinaryExpression_operator_barBar<Annotation>
export type XTBinaryExpression_operator_equals<Annotation> = TEqualsToken<Annotation>
export type STBinaryExpression_operator_equals<Annotation> = XTBinaryExpression_operator_equals<Annotation>
export type XTBinaryExpression_operator_equalsEqualsEquals<Annotation> = TEqualsEqualsEqualsToken<Annotation>
export type STBinaryExpression_operator_equalsEqualsEquals<Annotation> = XTBinaryExpression_operator_equalsEqualsEquals<Annotation>
export type XTBinaryExpression_operator_exclamationEqualsEquals<Annotation> = TExclamationEqualsEqualsToken<Annotation>
export type STBinaryExpression_operator_exclamationEqualsEquals<Annotation> = XTBinaryExpression_operator_exclamationEqualsEquals<Annotation>
export type XTBinaryExpression_operator_greaterThan<Annotation> = TGreaterThanToken<Annotation>
export type STBinaryExpression_operator_greaterThan<Annotation> = XTBinaryExpression_operator_greaterThan<Annotation>
export type XTBinaryExpression_operator_lessThan<Annotation> = TLessThanToken<Annotation>
export type STBinaryExpression_operator_lessThan<Annotation> = XTBinaryExpression_operator_lessThan<Annotation>
export type XTBinaryExpression_operator_minus<Annotation> = TMinusToken<Annotation>
export type STBinaryExpression_operator_minus<Annotation> = XTBinaryExpression_operator_minus<Annotation>
export type XTBinaryExpression_operator_minusEquals<Annotation> = TMinusEqualsToken<Annotation>
export type STBinaryExpression_operator_minusEquals<Annotation> = XTBinaryExpression_operator_minusEquals<Annotation>
export type XTBinaryExpression_operator_plus<Annotation> = TPlusToken<Annotation>
export type STBinaryExpression_operator_plus<Annotation> = XTBinaryExpression_operator_plus<Annotation>
export type XTBinaryExpression_operator_plusEquals<Annotation> = TPlusEqualsToken<Annotation>
export type STBinaryExpression_operator_plusEquals<Annotation> = XTBinaryExpression_operator_plusEquals<Annotation>
export type XTBinaryExpression_operator<Annotation> =
    | [ "ampersandAmpersand", STBinaryExpression_operator_ampersandAmpersand<Annotation>]
    | [ "barBar", STBinaryExpression_operator_barBar<Annotation>]
    | [ "equals", STBinaryExpression_operator_equals<Annotation>]
    | [ "equalsEqualsEquals", STBinaryExpression_operator_equalsEqualsEquals<Annotation>]
    | [ "exclamationEqualsEquals", STBinaryExpression_operator_exclamationEqualsEquals<Annotation>]
    | [ "greaterThan", STBinaryExpression_operator_greaterThan<Annotation>]
    | [ "lessThan", STBinaryExpression_operator_lessThan<Annotation>]
    | [ "minus", STBinaryExpression_operator_minus<Annotation>]
    | [ "minusEquals", STBinaryExpression_operator_minusEquals<Annotation>]
    | [ "plus", STBinaryExpression_operator_plus<Annotation>]
    | [ "plusEquals", STBinaryExpression_operator_plusEquals<Annotation>]
export type STBinaryExpression_operator<Annotation> = XTBinaryExpression_operator<Annotation>
export type XTBinaryExpression_rightHandSide<Annotation> = Gexpression<Annotation>
export type STBinaryExpression_rightHandSide<Annotation> = XTBinaryExpression_rightHandSide<Annotation>
export type XTBinaryExpression<Annotation> = {
    readonly leftHandSide:  STBinaryExpression_leftHandSide<Annotation>
    readonly operator:  STBinaryExpression_operator<Annotation>
    readonly rightHandSide:  STBinaryExpression_rightHandSide<Annotation>
}
export type STBinaryExpression<Annotation> = XTBinaryExpression<Annotation>

export type TBinaryExpression<Annotation> = {
    annotation: Annotation,
    content: STBinaryExpression<Annotation>,
}

export type TAmpersandAmpersandToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TBarBarToken<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTBreakStatement<Annotation> = TIdentifier<Annotation>
export type STBreakStatement<Annotation> = null | XTBreakStatement<Annotation>

export type TBreakStatement<Annotation> = {
    annotation: Annotation,
    content: STBreakStatement<Annotation>,
}

export type TEqualsEqualsEqualsToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TEqualsToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TExclamationEqualsEqualsToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TGreaterThanToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TLessThanToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TMinusToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TMinusEqualsToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TPlusToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TPlusEqualsToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TBooleanKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTBlock<Annotation> = Gstatement<Annotation>
export type STBlock<Annotation> = XTBlock<Annotation>[]

export type TBlock<Annotation> = {
    annotation: Annotation,
    content: STBlock<Annotation>,
}
export type XTCallExpression_function<Annotation> = Gexpression<Annotation>
export type STCallExpression_function<Annotation> = XTCallExpression_function<Annotation>
export type XTCallExpression_typeParameters<Annotation> = Gtype<Annotation>
export type STCallExpression_typeParameters<Annotation> = XTCallExpression_typeParameters<Annotation>[]
export type XTCallExpression_parameters<Annotation> = Gexpression<Annotation>
export type STCallExpression_parameters<Annotation> = XTCallExpression_parameters<Annotation>[]
export type XTCallExpression<Annotation> = {
    readonly function:  STCallExpression_function<Annotation>
    readonly typeParameters:  STCallExpression_typeParameters<Annotation>
    readonly parameters:  STCallExpression_parameters<Annotation>
}
export type STCallExpression<Annotation> = XTCallExpression<Annotation>

export type TCallExpression<Annotation> = {
    annotation: Annotation,
    content: STCallExpression<Annotation>,
}
export type XTCaseBlock_case<Annotation> = TCaseClause<Annotation>
export type STCaseBlock_case<Annotation> = XTCaseBlock_case<Annotation>
export type XTCaseBlock_default<Annotation> = TDefaultClause<Annotation>
export type STCaseBlock_default<Annotation> = XTCaseBlock_default<Annotation>
export type XTCaseBlock<Annotation> =
    | [ "case", STCaseBlock_case<Annotation>]
    | [ "default", STCaseBlock_default<Annotation>]
export type STCaseBlock<Annotation> = XTCaseBlock<Annotation>[]

export type TCaseBlock<Annotation> = {
    annotation: Annotation,
    content: STCaseBlock<Annotation>,
}
export type XTCaseClause_case<Annotation> = Gexpression<Annotation>
export type STCaseClause_case<Annotation> = XTCaseClause_case<Annotation>
export type XTCaseClause_statements<Annotation> = Gstatement<Annotation>
export type STCaseClause_statements<Annotation> = XTCaseClause_statements<Annotation>[]
export type XTCaseClause<Annotation> = {
    readonly case:  STCaseClause_case<Annotation>
    readonly statements:  STCaseClause_statements<Annotation>
}
export type STCaseClause<Annotation> = XTCaseClause<Annotation>

export type TCaseClause<Annotation> = {
    annotation: Annotation,
    content: STCaseClause<Annotation>,
}
export type XTCatchClause_variable<Annotation> = TVariableDeclaration<Annotation>
export type STCatchClause_variable<Annotation> = XTCatchClause_variable<Annotation>
export type XTCatchClause_block<Annotation> = TBlock<Annotation>
export type STCatchClause_block<Annotation> = XTCatchClause_block<Annotation>
export type XTCatchClause<Annotation> = {
    readonly variable:  STCatchClause_variable<Annotation>
    readonly block:  STCatchClause_block<Annotation>
}
export type STCatchClause<Annotation> = XTCatchClause<Annotation>

export type TCatchClause<Annotation> = {
    annotation: Annotation,
    content: STCatchClause<Annotation>,
}

export type TColonToken<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTConditionalExpression_test<Annotation> = Gexpression<Annotation>
export type STConditionalExpression_test<Annotation> = XTConditionalExpression_test<Annotation>
export type XTConditionalExpression_questionToken<Annotation> = TQuestionToken<Annotation>
export type STConditionalExpression_questionToken<Annotation> = XTConditionalExpression_questionToken<Annotation>
export type XTConditionalExpression_ifExpression<Annotation> = Gexpression<Annotation>
export type STConditionalExpression_ifExpression<Annotation> = XTConditionalExpression_ifExpression<Annotation>
export type XTConditionalExpression_colonToken<Annotation> = TColonToken<Annotation>
export type STConditionalExpression_colonToken<Annotation> = XTConditionalExpression_colonToken<Annotation>
export type XTConditionalExpression_elseExpression<Annotation> = Gexpression<Annotation>
export type STConditionalExpression_elseExpression<Annotation> = XTConditionalExpression_elseExpression<Annotation>
export type XTConditionalExpression<Annotation> = {
    readonly test:  STConditionalExpression_test<Annotation>
    readonly questionToken:  STConditionalExpression_questionToken<Annotation>
    readonly ifExpression:  STConditionalExpression_ifExpression<Annotation>
    readonly colonToken:  STConditionalExpression_colonToken<Annotation>
    readonly elseExpression:  STConditionalExpression_elseExpression<Annotation>
}
export type STConditionalExpression<Annotation> = XTConditionalExpression<Annotation>

export type TConditionalExpression<Annotation> = {
    annotation: Annotation,
    content: STConditionalExpression<Annotation>,
}
export type XTConstructSignature_parameters<Annotation> = TParameter<Annotation>
export type STConstructSignature_parameters<Annotation> = XTConstructSignature_parameters<Annotation>[]
export type XTConstructSignature_returnType<Annotation> = Gtype<Annotation>
export type STConstructSignature_returnType<Annotation> = XTConstructSignature_returnType<Annotation>
export type XTConstructSignature<Annotation> = {
    readonly parameters:  STConstructSignature_parameters<Annotation>
    readonly returnType:  STConstructSignature_returnType<Annotation>
}
export type STConstructSignature<Annotation> = XTConstructSignature<Annotation>

export type TConstructSignature<Annotation> = {
    annotation: Annotation,
    content: STConstructSignature<Annotation>,
}

export type TDeclareKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTDefaultClause<Annotation> = Gstatement<Annotation>
export type STDefaultClause<Annotation> = XTDefaultClause<Annotation>[]

export type TDefaultClause<Annotation> = {
    annotation: Annotation,
    content: STDefaultClause<Annotation>,
}
export type XTElementAccessExpression_array<Annotation> = Gexpression<Annotation>
export type STElementAccessExpression_array<Annotation> = XTElementAccessExpression_array<Annotation>
export type XTElementAccessExpression_element<Annotation> = Gexpression<Annotation>
export type STElementAccessExpression_element<Annotation> = XTElementAccessExpression_element<Annotation>
export type XTElementAccessExpression<Annotation> = {
    readonly array:  STElementAccessExpression_array<Annotation>
    readonly element:  STElementAccessExpression_element<Annotation>
}
export type STElementAccessExpression<Annotation> = XTElementAccessExpression<Annotation>

export type TElementAccessExpression<Annotation> = {
    annotation: Annotation,
    content: STElementAccessExpression<Annotation>,
}

export type TEndOfFileToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TEqualsGreaterThanToken<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTExportDeclaration<Annotation> = TStringLiteral<Annotation>
export type STExportDeclaration<Annotation> = XTExportDeclaration<Annotation>

export type TExportDeclaration<Annotation> = {
    annotation: Annotation,
    content: STExportDeclaration<Annotation>,
}

export type TExportKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTExpressionStatement<Annotation> = Gexpression<Annotation>
export type STExpressionStatement<Annotation> = XTExpressionStatement<Annotation>

export type TExpressionStatement<Annotation> = {
    annotation: Annotation,
    content: STExpressionStatement<Annotation>,
}

export type TFalseKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTForStatement_initializer<Annotation> = TVariableDeclarationList<Annotation>
export type STForStatement_initializer<Annotation> = XTForStatement_initializer<Annotation>
export type XTForStatement_condition<Annotation> = Gexpression<Annotation>
export type STForStatement_condition<Annotation> = XTForStatement_condition<Annotation>
export type XTForStatement_incrementer<Annotation> = Gexpression<Annotation>
export type STForStatement_incrementer<Annotation> = XTForStatement_incrementer<Annotation>
export type XTForStatement_block<Annotation> = TBlock<Annotation>
export type STForStatement_block<Annotation> = XTForStatement_block<Annotation>
export type XTForStatement<Annotation> = {
    readonly initializer:  STForStatement_initializer<Annotation>
    readonly condition:  STForStatement_condition<Annotation>
    readonly incrementer:  STForStatement_incrementer<Annotation>
    readonly block:  STForStatement_block<Annotation>
}
export type STForStatement<Annotation> = XTForStatement<Annotation>

export type TForStatement<Annotation> = {
    annotation: Annotation,
    content: STForStatement<Annotation>,
}
export type XTFunctionDeclaration_modifiers<Annotation> = Gmodifier<Annotation>
export type STFunctionDeclaration_modifiers<Annotation> = XTFunctionDeclaration_modifiers<Annotation>[]
export type XTFunctionDeclaration_name<Annotation> = TIdentifier<Annotation>
export type STFunctionDeclaration_name<Annotation> = XTFunctionDeclaration_name<Annotation>
export type XTFunctionDeclaration_definition<Annotation> = GfunctionDefinition<Annotation>
export type STFunctionDeclaration_definition<Annotation> = XTFunctionDeclaration_definition<Annotation>
export type XTFunctionDeclaration_block<Annotation> = TBlock<Annotation>
export type STFunctionDeclaration_block<Annotation> = null | XTFunctionDeclaration_block<Annotation>
export type XTFunctionDeclaration<Annotation> = {
    readonly modifiers:  STFunctionDeclaration_modifiers<Annotation>
    readonly name:  STFunctionDeclaration_name<Annotation>
    readonly definition:  STFunctionDeclaration_definition<Annotation>
    readonly block:  STFunctionDeclaration_block<Annotation>
}
export type STFunctionDeclaration<Annotation> = XTFunctionDeclaration<Annotation>

export type TFunctionDeclaration<Annotation> = {
    annotation: Annotation,
    content: STFunctionDeclaration<Annotation>,
}

export type TIdentifier<Annotation> = {
    annotation: Annotation,
    content: string,
}
export type XTIfStatement_expression<Annotation> = Gexpression<Annotation>
export type STIfStatement_expression<Annotation> = XTIfStatement_expression<Annotation>
export type XTIfStatement_thenStatement<Annotation> = Gstatement<Annotation>
export type STIfStatement_thenStatement<Annotation> = XTIfStatement_thenStatement<Annotation>
export type XTIfStatement_elseStatement<Annotation> = Gstatement<Annotation>
export type STIfStatement_elseStatement<Annotation> = null | XTIfStatement_elseStatement<Annotation>
export type XTIfStatement<Annotation> = {
    readonly expression:  STIfStatement_expression<Annotation>
    readonly thenStatement:  STIfStatement_thenStatement<Annotation>
    readonly elseStatement:  STIfStatement_elseStatement<Annotation>
}
export type STIfStatement<Annotation> = XTIfStatement<Annotation>

export type TIfStatement<Annotation> = {
    annotation: Annotation,
    content: STIfStatement<Annotation>,
}
export type XTFunctionType_parameters<Annotation> = TParameter<Annotation>
export type STFunctionType_parameters<Annotation> = XTFunctionType_parameters<Annotation>[]
export type XTFunctionType_returnType<Annotation> = Gtype<Annotation>
export type STFunctionType_returnType<Annotation> = null | XTFunctionType_returnType<Annotation>
export type XTFunctionType<Annotation> = {
    readonly parameters:  STFunctionType_parameters<Annotation>
    readonly returnType:  STFunctionType_returnType<Annotation>
}
export type STFunctionType<Annotation> = XTFunctionType<Annotation>

export type TFunctionType<Annotation> = {
    annotation: Annotation,
    content: STFunctionType<Annotation>,
}
export type XTImportClause_namespace<Annotation> = TNamespaceImport<Annotation>
export type STImportClause_namespace<Annotation> = XTImportClause_namespace<Annotation>
export type XTImportClause_named<Annotation> = TNamedImports<Annotation>
export type STImportClause_named<Annotation> = XTImportClause_named<Annotation>
export type XTImportClause<Annotation> =
    | [ "namespace", STImportClause_namespace<Annotation>]
    | [ "named", STImportClause_named<Annotation>]
export type STImportClause<Annotation> = XTImportClause<Annotation>

export type TImportClause<Annotation> = {
    annotation: Annotation,
    content: STImportClause<Annotation>,
}
export type XTImportDeclaration_clause<Annotation> = TImportClause<Annotation>
export type STImportDeclaration_clause<Annotation> = XTImportDeclaration_clause<Annotation>
export type XTImportDeclaration_file<Annotation> = TStringLiteral<Annotation>
export type STImportDeclaration_file<Annotation> = XTImportDeclaration_file<Annotation>
export type XTImportDeclaration<Annotation> = {
    readonly clause:  STImportDeclaration_clause<Annotation>
    readonly file:  STImportDeclaration_file<Annotation>
}
export type STImportDeclaration<Annotation> = XTImportDeclaration<Annotation>

export type TImportDeclaration<Annotation> = {
    annotation: Annotation,
    content: STImportDeclaration<Annotation>,
}
export type XTIndexSignature_modifiers<Annotation> = Gmodifier<Annotation>
export type STIndexSignature_modifiers<Annotation> = XTIndexSignature_modifiers<Annotation>[]
export type XTIndexSignature_parameter<Annotation> = TParameter<Annotation>
export type STIndexSignature_parameter<Annotation> = XTIndexSignature_parameter<Annotation>
export type XTIndexSignature_type<Annotation> = Gtype<Annotation>
export type STIndexSignature_type<Annotation> = null | XTIndexSignature_type<Annotation>
export type XTIndexSignature<Annotation> = {
    readonly modifiers:  STIndexSignature_modifiers<Annotation>
    readonly parameter:  STIndexSignature_parameter<Annotation>
    readonly type:  STIndexSignature_type<Annotation>
}
export type STIndexSignature<Annotation> = XTIndexSignature<Annotation>

export type TIndexSignature<Annotation> = {
    annotation: Annotation,
    content: STIndexSignature<Annotation>,
}
export type XTInterfaceDeclaration_modifiers<Annotation> = Gmodifier<Annotation>
export type STInterfaceDeclaration_modifiers<Annotation> = XTInterfaceDeclaration_modifiers<Annotation>[]
export type XTInterfaceDeclaration_name<Annotation> = TIdentifier<Annotation>
export type STInterfaceDeclaration_name<Annotation> = XTInterfaceDeclaration_name<Annotation>
export type XTInterfaceDeclaration_typeParameters<Annotation> = TTypeParameter<Annotation>
export type STInterfaceDeclaration_typeParameters<Annotation> = XTInterfaceDeclaration_typeParameters<Annotation>[]
export type XTInterfaceDeclaration_signature<Annotation> = GtypeSignature<Annotation>
export type STInterfaceDeclaration_signature<Annotation> = XTInterfaceDeclaration_signature<Annotation>[]
export type XTInterfaceDeclaration<Annotation> = {
    readonly modifiers:  STInterfaceDeclaration_modifiers<Annotation>
    readonly name:  STInterfaceDeclaration_name<Annotation>
    readonly typeParameters:  STInterfaceDeclaration_typeParameters<Annotation>
    readonly signature:  STInterfaceDeclaration_signature<Annotation>
}
export type STInterfaceDeclaration<Annotation> = XTInterfaceDeclaration<Annotation>

export type TInterfaceDeclaration<Annotation> = {
    annotation: Annotation,
    content: STInterfaceDeclaration<Annotation>,
}
export type XTImportSpecifier_name<Annotation> = TIdentifier<Annotation>
export type STImportSpecifier_name<Annotation> = XTImportSpecifier_name<Annotation>
export type XTImportSpecifier_as<Annotation> = TIdentifier<Annotation>
export type STImportSpecifier_as<Annotation> = null | XTImportSpecifier_as<Annotation>
export type XTImportSpecifier<Annotation> = {
    readonly name:  STImportSpecifier_name<Annotation>
    readonly as:  STImportSpecifier_as<Annotation>
}
export type STImportSpecifier<Annotation> = XTImportSpecifier<Annotation>

export type TImportSpecifier<Annotation> = {
    annotation: Annotation,
    content: STImportSpecifier<Annotation>,
}
export type XTLabeledStatement_label<Annotation> = TIdentifier<Annotation>
export type STLabeledStatement_label<Annotation> = XTLabeledStatement_label<Annotation>
export type XTLabeledStatement_statement<Annotation> = Gstatement<Annotation>
export type STLabeledStatement_statement<Annotation> = XTLabeledStatement_statement<Annotation>
export type XTLabeledStatement<Annotation> = {
    readonly label:  STLabeledStatement_label<Annotation>
    readonly statement:  STLabeledStatement_statement<Annotation>
}
export type STLabeledStatement<Annotation> = XTLabeledStatement<Annotation>

export type TLabeledStatement<Annotation> = {
    annotation: Annotation,
    content: STLabeledStatement<Annotation>,
}
export type XTLiteralType_null<Annotation> = TNullKeyword<Annotation>
export type STLiteralType_null<Annotation> = XTLiteralType_null<Annotation>
export type XTLiteralType_string<Annotation> = TStringLiteral<Annotation>
export type STLiteralType_string<Annotation> = XTLiteralType_string<Annotation>
export type XTLiteralType<Annotation> =
    | [ "null", STLiteralType_null<Annotation>]
    | [ "string", STLiteralType_string<Annotation>]
export type STLiteralType<Annotation> = XTLiteralType<Annotation>

export type TLiteralType<Annotation> = {
    annotation: Annotation,
    content: STLiteralType<Annotation>,
}
export type XTMethodSignature_name<Annotation> = TIdentifier<Annotation>
export type STMethodSignature_name<Annotation> = XTMethodSignature_name<Annotation>
export type XTMethodSignature_definition<Annotation> = GfunctionDefinition<Annotation>
export type STMethodSignature_definition<Annotation> = XTMethodSignature_definition<Annotation>
export type XTMethodSignature<Annotation> = {
    readonly name:  STMethodSignature_name<Annotation>
    readonly definition:  STMethodSignature_definition<Annotation>
}
export type STMethodSignature<Annotation> = XTMethodSignature<Annotation>

export type TMethodSignature<Annotation> = {
    annotation: Annotation,
    content: STMethodSignature<Annotation>,
}
export type XTNamespaceImport<Annotation> = TIdentifier<Annotation>
export type STNamespaceImport<Annotation> = XTNamespaceImport<Annotation>

export type TNamespaceImport<Annotation> = {
    annotation: Annotation,
    content: STNamespaceImport<Annotation>,
}
export type XTNamedImports<Annotation> = TImportSpecifier<Annotation>
export type STNamedImports<Annotation> = XTNamedImports<Annotation>[]

export type TNamedImports<Annotation> = {
    annotation: Annotation,
    content: STNamedImports<Annotation>,
}

export type TNeverKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TNumberKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TNumericLiteral<Annotation> = {
    annotation: Annotation,
    content: string,
}
export type XTNewExpression_class<Annotation> = TIdentifier<Annotation>
export type STNewExpression_class<Annotation> = XTNewExpression_class<Annotation>
export type XTNewExpression_parameters<Annotation> = Gexpression<Annotation>
export type STNewExpression_parameters<Annotation> = XTNewExpression_parameters<Annotation>[]
export type XTNewExpression<Annotation> = {
    readonly class:  STNewExpression_class<Annotation>
    readonly parameters:  STNewExpression_parameters<Annotation>
}
export type STNewExpression<Annotation> = XTNewExpression<Annotation>

export type TNewExpression<Annotation> = {
    annotation: Annotation,
    content: STNewExpression<Annotation>,
}

export type TNullKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TNoSubstitutionTemplateLiteral<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTObjectLiteralExpression<Annotation> = TPropertyAssignment<Annotation>
export type STObjectLiteralExpression<Annotation> = XTObjectLiteralExpression<Annotation>[]

export type TObjectLiteralExpression<Annotation> = {
    annotation: Annotation,
    content: STObjectLiteralExpression<Annotation>,
}
export type XTOptionalType<Annotation> = Gtype<Annotation>
export type STOptionalType<Annotation> = XTOptionalType<Annotation>

export type TOptionalType<Annotation> = {
    annotation: Annotation,
    content: STOptionalType<Annotation>,
}
export type XTParameter_name<Annotation> = TIdentifier<Annotation>
export type STParameter_name<Annotation> = XTParameter_name<Annotation>
export type XTParameter_questionToken<Annotation> = TQuestionToken<Annotation>
export type STParameter_questionToken<Annotation> = null | XTParameter_questionToken<Annotation>
export type XTParameter_type<Annotation> = Gtype<Annotation>
export type STParameter_type<Annotation> = null | XTParameter_type<Annotation>
export type XTParameter<Annotation> = {
    readonly name:  STParameter_name<Annotation>
    readonly questionToken:  STParameter_questionToken<Annotation>
    readonly type:  STParameter_type<Annotation>
}
export type STParameter<Annotation> = XTParameter<Annotation>

export type TParameter<Annotation> = {
    annotation: Annotation,
    content: STParameter<Annotation>,
}
export type XTParenthesizedExpression<Annotation> = Gexpression<Annotation>
export type STParenthesizedExpression<Annotation> = XTParenthesizedExpression<Annotation>

export type TParenthesizedExpression<Annotation> = {
    annotation: Annotation,
    content: STParenthesizedExpression<Annotation>,
}
export type XTParenthesizedType<Annotation> = Gtype<Annotation>
export type STParenthesizedType<Annotation> = XTParenthesizedType<Annotation>

export type TParenthesizedType<Annotation> = {
    annotation: Annotation,
    content: STParenthesizedType<Annotation>,
}
export type XTPostfixUnaryExpression<Annotation> = Gexpression<Annotation>
export type STPostfixUnaryExpression<Annotation> = XTPostfixUnaryExpression<Annotation>

export type TPostfixUnaryExpression<Annotation> = {
    annotation: Annotation,
    content: STPostfixUnaryExpression<Annotation>,
}
export type XTPrefixUnaryExpression<Annotation> = Gexpression<Annotation>
export type STPrefixUnaryExpression<Annotation> = XTPrefixUnaryExpression<Annotation>

export type TPrefixUnaryExpression<Annotation> = {
    annotation: Annotation,
    content: STPrefixUnaryExpression<Annotation>,
}
export type XTPropertyAccessExpression_object<Annotation> = Gexpression<Annotation>
export type STPropertyAccessExpression_object<Annotation> = XTPropertyAccessExpression_object<Annotation>
export type XTPropertyAccessExpression_property<Annotation> = Gexpression<Annotation>
export type STPropertyAccessExpression_property<Annotation> = XTPropertyAccessExpression_property<Annotation>
export type XTPropertyAccessExpression<Annotation> = {
    readonly object:  STPropertyAccessExpression_object<Annotation>
    readonly property:  STPropertyAccessExpression_property<Annotation>
}
export type STPropertyAccessExpression<Annotation> = XTPropertyAccessExpression<Annotation>

export type TPropertyAccessExpression<Annotation> = {
    annotation: Annotation,
    content: STPropertyAccessExpression<Annotation>,
}
export type XTPropertyAssignment_name_identifier<Annotation> = TIdentifier<Annotation>
export type STPropertyAssignment_name_identifier<Annotation> = XTPropertyAssignment_name_identifier<Annotation>
export type XTPropertyAssignment_name_numericLiteral<Annotation> = TNumericLiteral<Annotation>
export type STPropertyAssignment_name_numericLiteral<Annotation> = XTPropertyAssignment_name_numericLiteral<Annotation>
export type XTPropertyAssignment_name_stringLiteral<Annotation> = TStringLiteral<Annotation>
export type STPropertyAssignment_name_stringLiteral<Annotation> = XTPropertyAssignment_name_stringLiteral<Annotation>
export type XTPropertyAssignment_name<Annotation> =
    | [ "identifier", STPropertyAssignment_name_identifier<Annotation>]
    | [ "numericLiteral", STPropertyAssignment_name_numericLiteral<Annotation>]
    | [ "stringLiteral", STPropertyAssignment_name_stringLiteral<Annotation>]
export type STPropertyAssignment_name<Annotation> = XTPropertyAssignment_name<Annotation>
export type XTPropertyAssignment_expression<Annotation> = Gexpression<Annotation>
export type STPropertyAssignment_expression<Annotation> = XTPropertyAssignment_expression<Annotation>
export type XTPropertyAssignment<Annotation> = {
    readonly name:  STPropertyAssignment_name<Annotation>
    readonly expression:  STPropertyAssignment_expression<Annotation>
}
export type STPropertyAssignment<Annotation> = XTPropertyAssignment<Annotation>

export type TPropertyAssignment<Annotation> = {
    annotation: Annotation,
    content: STPropertyAssignment<Annotation>,
}
export type XTPropertySignature_modifiers<Annotation> = Gmodifier<Annotation>
export type STPropertySignature_modifiers<Annotation> = XTPropertySignature_modifiers<Annotation>[]
export type XTPropertySignature_name<Annotation> = GidentifierOrStringLiteral<Annotation>
export type STPropertySignature_name<Annotation> = XTPropertySignature_name<Annotation>
export type XTPropertySignature_quesionToken<Annotation> = TQuestionToken<Annotation>
export type STPropertySignature_quesionToken<Annotation> = null | XTPropertySignature_quesionToken<Annotation>
export type XTPropertySignature_type<Annotation> = Gtype<Annotation>
export type STPropertySignature_type<Annotation> = null | XTPropertySignature_type<Annotation>
export type XTPropertySignature<Annotation> = {
    readonly modifiers:  STPropertySignature_modifiers<Annotation>
    readonly name:  STPropertySignature_name<Annotation>
    readonly quesionToken:  STPropertySignature_quesionToken<Annotation>
    readonly type:  STPropertySignature_type<Annotation>
}
export type STPropertySignature<Annotation> = XTPropertySignature<Annotation>

export type TPropertySignature<Annotation> = {
    annotation: Annotation,
    content: STPropertySignature<Annotation>,
}
export type XTQualifiedName_context<Annotation> = TIdentifier<Annotation>
export type STQualifiedName_context<Annotation> = XTQualifiedName_context<Annotation>
export type XTQualifiedName_type<Annotation> = TIdentifier<Annotation>
export type STQualifiedName_type<Annotation> = XTQualifiedName_type<Annotation>
export type XTQualifiedName<Annotation> = {
    readonly context:  STQualifiedName_context<Annotation>
    readonly type:  STQualifiedName_type<Annotation>
}
export type STQualifiedName<Annotation> = XTQualifiedName<Annotation>

export type TQualifiedName<Annotation> = {
    annotation: Annotation,
    content: STQualifiedName<Annotation>,
}

export type TQuestionToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TReadonlyKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTReturnStatement<Annotation> = Gexpression<Annotation>
export type STReturnStatement<Annotation> = null | XTReturnStatement<Annotation>

export type TReturnStatement<Annotation> = {
    annotation: Annotation,
    content: STReturnStatement<Annotation>,
}
export type XTSourceFile_statements<Annotation> = Gstatement<Annotation>
export type STSourceFile_statements<Annotation> = XTSourceFile_statements<Annotation>[]
export type XTSourceFile_endOfFile<Annotation> = TEndOfFileToken<Annotation>
export type STSourceFile_endOfFile<Annotation> = XTSourceFile_endOfFile<Annotation>
export type XTSourceFile<Annotation> = {
    readonly statements:  STSourceFile_statements<Annotation>
    readonly endOfFile:  STSourceFile_endOfFile<Annotation>
}
export type STSourceFile<Annotation> = XTSourceFile<Annotation>

export type TSourceFile<Annotation> = {
    annotation: Annotation,
    content: STSourceFile<Annotation>,
}

export type TStringKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TStringLiteral<Annotation> = {
    annotation: Annotation,
    content: string,
}
export type XTSwitchStatement_expression<Annotation> = Gexpression<Annotation>
export type STSwitchStatement_expression<Annotation> = XTSwitchStatement_expression<Annotation>
export type XTSwitchStatement_caseBlock<Annotation> = TCaseBlock<Annotation>
export type STSwitchStatement_caseBlock<Annotation> = XTSwitchStatement_caseBlock<Annotation>
export type XTSwitchStatement<Annotation> = {
    readonly expression:  STSwitchStatement_expression<Annotation>
    readonly caseBlock:  STSwitchStatement_caseBlock<Annotation>
}
export type STSwitchStatement<Annotation> = XTSwitchStatement<Annotation>

export type TSwitchStatement<Annotation> = {
    annotation: Annotation,
    content: STSwitchStatement<Annotation>,
}
export type XTTemplateExpression_head<Annotation> = TTemplateHead<Annotation>
export type STTemplateExpression_head<Annotation> = XTTemplateExpression_head<Annotation>
export type XTTemplateExpression_spans<Annotation> = TTemplateSpan<Annotation>
export type STTemplateExpression_spans<Annotation> = XTTemplateExpression_spans<Annotation>[]
export type XTTemplateExpression<Annotation> = {
    readonly head:  STTemplateExpression_head<Annotation>
    readonly spans:  STTemplateExpression_spans<Annotation>
}
export type STTemplateExpression<Annotation> = XTTemplateExpression<Annotation>

export type TTemplateExpression<Annotation> = {
    annotation: Annotation,
    content: STTemplateExpression<Annotation>,
}

export type TTemplateHead<Annotation> = {
    annotation: Annotation,
    content: string,
}

export type TTemplateMiddle<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTTemplateSpan_expression<Annotation> = Gexpression<Annotation>
export type STTemplateSpan_expression<Annotation> = XTTemplateSpan_expression<Annotation>
export type XTTemplateSpan_x_middle<Annotation> = TTemplateMiddle<Annotation>
export type STTemplateSpan_x_middle<Annotation> = XTTemplateSpan_x_middle<Annotation>
export type XTTemplateSpan_x_tail<Annotation> = TTemplateTail<Annotation>
export type STTemplateSpan_x_tail<Annotation> = XTTemplateSpan_x_tail<Annotation>
export type XTTemplateSpan_x<Annotation> =
    | [ "middle", STTemplateSpan_x_middle<Annotation>]
    | [ "tail", STTemplateSpan_x_tail<Annotation>]
export type STTemplateSpan_x<Annotation> = XTTemplateSpan_x<Annotation>
export type XTTemplateSpan<Annotation> = {
    readonly expression:  STTemplateSpan_expression<Annotation>
    readonly x:  STTemplateSpan_x<Annotation>
}
export type STTemplateSpan<Annotation> = XTTemplateSpan<Annotation>

export type TTemplateSpan<Annotation> = {
    annotation: Annotation,
    content: STTemplateSpan<Annotation>,
}

export type TTemplateTail<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTThrowStatement<Annotation> = Gexpression<Annotation>
export type STThrowStatement<Annotation> = XTThrowStatement<Annotation>

export type TThrowStatement<Annotation> = {
    annotation: Annotation,
    content: STThrowStatement<Annotation>,
}

export type TTrueKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTTryStatement_block<Annotation> = TBlock<Annotation>
export type STTryStatement_block<Annotation> = XTTryStatement_block<Annotation>
export type XTTryStatement_catchClause<Annotation> = TCatchClause<Annotation>
export type STTryStatement_catchClause<Annotation> = XTTryStatement_catchClause<Annotation>
export type XTTryStatement<Annotation> = {
    readonly block:  STTryStatement_block<Annotation>
    readonly catchClause:  STTryStatement_catchClause<Annotation>
}
export type STTryStatement<Annotation> = XTTryStatement<Annotation>

export type TTryStatement<Annotation> = {
    annotation: Annotation,
    content: STTryStatement<Annotation>,
}
export type XTTupleType<Annotation> = Gtype<Annotation>
export type STTupleType<Annotation> = XTTupleType<Annotation>[]

export type TTupleType<Annotation> = {
    annotation: Annotation,
    content: STTupleType<Annotation>,
}
export type XTTypeAliasDeclaration_modifiers<Annotation> = Gmodifier<Annotation>
export type STTypeAliasDeclaration_modifiers<Annotation> = XTTypeAliasDeclaration_modifiers<Annotation>[]
export type XTTypeAliasDeclaration_name<Annotation> = TIdentifier<Annotation>
export type STTypeAliasDeclaration_name<Annotation> = XTTypeAliasDeclaration_name<Annotation>
export type XTTypeAliasDeclaration_typeParameters<Annotation> = TTypeParameter<Annotation>
export type STTypeAliasDeclaration_typeParameters<Annotation> = XTTypeAliasDeclaration_typeParameters<Annotation>[]
export type XTTypeAliasDeclaration_type<Annotation> = Gtype<Annotation>
export type STTypeAliasDeclaration_type<Annotation> = XTTypeAliasDeclaration_type<Annotation>
export type XTTypeAliasDeclaration<Annotation> = {
    readonly modifiers:  STTypeAliasDeclaration_modifiers<Annotation>
    readonly name:  STTypeAliasDeclaration_name<Annotation>
    readonly typeParameters:  STTypeAliasDeclaration_typeParameters<Annotation>
    readonly type:  STTypeAliasDeclaration_type<Annotation>
}
export type STTypeAliasDeclaration<Annotation> = XTTypeAliasDeclaration<Annotation>

export type TTypeAliasDeclaration<Annotation> = {
    annotation: Annotation,
    content: STTypeAliasDeclaration<Annotation>,
}
export type XTTypeLiteral<Annotation> = GtypeSignature<Annotation>
export type STTypeLiteral<Annotation> = XTTypeLiteral<Annotation>[]

export type TTypeLiteral<Annotation> = {
    annotation: Annotation,
    content: STTypeLiteral<Annotation>,
}
export type XTTypeParameter<Annotation> = TIdentifier<Annotation>
export type STTypeParameter<Annotation> = XTTypeParameter<Annotation>

export type TTypeParameter<Annotation> = {
    annotation: Annotation,
    content: STTypeParameter<Annotation>,
}
export type XTTypeReference_x_identifier<Annotation> = TIdentifier<Annotation>
export type STTypeReference_x_identifier<Annotation> = XTTypeReference_x_identifier<Annotation>
export type XTTypeReference_x_qualifiedName<Annotation> = TQualifiedName<Annotation>
export type STTypeReference_x_qualifiedName<Annotation> = XTTypeReference_x_qualifiedName<Annotation>
export type XTTypeReference_x<Annotation> =
    | [ "identifier", STTypeReference_x_identifier<Annotation>]
    | [ "qualifiedName", STTypeReference_x_qualifiedName<Annotation>]
export type STTypeReference_x<Annotation> = XTTypeReference_x<Annotation>
export type XTTypeReference_parameters<Annotation> = Gtype<Annotation>
export type STTypeReference_parameters<Annotation> = XTTypeReference_parameters<Annotation>[]
export type XTTypeReference<Annotation> = {
    readonly x:  STTypeReference_x<Annotation>
    readonly parameters:  STTypeReference_parameters<Annotation>
}
export type STTypeReference<Annotation> = XTTypeReference<Annotation>

export type TTypeReference<Annotation> = {
    annotation: Annotation,
    content: STTypeReference<Annotation>,
}

export type TUndefinedKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTUnionType<Annotation> = Gtype<Annotation>
export type STUnionType<Annotation> = XTUnionType<Annotation>[]

export type TUnionType<Annotation> = {
    annotation: Annotation,
    content: STUnionType<Annotation>,
}
export type XTVariableDeclaration_name<Annotation> = TIdentifier<Annotation>
export type STVariableDeclaration_name<Annotation> = XTVariableDeclaration_name<Annotation>
export type XTVariableDeclaration_type<Annotation> = Gtype<Annotation>
export type STVariableDeclaration_type<Annotation> = null | XTVariableDeclaration_type<Annotation>
export type XTVariableDeclaration_expression<Annotation> = Gexpression<Annotation>
export type STVariableDeclaration_expression<Annotation> = null | XTVariableDeclaration_expression<Annotation>
export type XTVariableDeclaration<Annotation> = {
    readonly name:  STVariableDeclaration_name<Annotation>
    readonly type:  STVariableDeclaration_type<Annotation>
    readonly expression:  STVariableDeclaration_expression<Annotation>
}
export type STVariableDeclaration<Annotation> = XTVariableDeclaration<Annotation>

export type TVariableDeclaration<Annotation> = {
    annotation: Annotation,
    content: STVariableDeclaration<Annotation>,
}
export type XTVariableDeclarationList<Annotation> = TVariableDeclaration<Annotation>
export type STVariableDeclarationList<Annotation> = XTVariableDeclarationList<Annotation>[]

export type TVariableDeclarationList<Annotation> = {
    annotation: Annotation,
    content: STVariableDeclarationList<Annotation>,
}
export type XTVariableStatement_modifiers<Annotation> = Gmodifier<Annotation>
export type STVariableStatement_modifiers<Annotation> = XTVariableStatement_modifiers<Annotation>[]
export type XTVariableStatement_variableDeclarationList<Annotation> = TVariableDeclarationList<Annotation>
export type STVariableStatement_variableDeclarationList<Annotation> = XTVariableStatement_variableDeclarationList<Annotation>
export type XTVariableStatement<Annotation> = {
    readonly modifiers:  STVariableStatement_modifiers<Annotation>
    readonly variableDeclarationList:  STVariableStatement_variableDeclarationList<Annotation>
}
export type STVariableStatement<Annotation> = XTVariableStatement<Annotation>

export type TVariableStatement<Annotation> = {
    annotation: Annotation,
    content: STVariableStatement<Annotation>,
}

export type TVoidKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTWhileStatement_condition<Annotation> = Gexpression<Annotation>
export type STWhileStatement_condition<Annotation> = XTWhileStatement_condition<Annotation>
export type XTWhileStatement_block<Annotation> = TBlock<Annotation>
export type STWhileStatement_block<Annotation> = XTWhileStatement_block<Annotation>
export type XTWhileStatement<Annotation> = {
    readonly condition:  STWhileStatement_condition<Annotation>
    readonly block:  STWhileStatement_block<Annotation>
}
export type STWhileStatement<Annotation> = XTWhileStatement<Annotation>

export type TWhileStatement<Annotation> = {
    annotation: Annotation,
    content: STWhileStatement<Annotation>,
}
export type Root<Annotation> = TSourceFile<Annotation>