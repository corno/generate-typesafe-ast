import * as pr from "pareto-runtime"
export type VTGblock$<Annotation> = Gstatement<Annotation>
export type VGblock$<Annotation> = VTGblock$<Annotation>[]

export type NGblock$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGblock$<Annotation>,
}
export type VTGblock<Annotation> = NGblock$<Annotation>
export type Gblock<Annotation> =  VTGblock<Annotation>
export type VTGexpression_arrayLiteral$<Annotation> = Gexpression<Annotation>
export type VGexpression_arrayLiteral$<Annotation> = VTGexpression_arrayLiteral$<Annotation>[]

export type NGexpression_arrayLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_arrayLiteral$<Annotation>,
}
export type VTGexpression_arrayLiteral<Annotation> = NGexpression_arrayLiteral$<Annotation>
export type VGexpression_arrayLiteral<Annotation> = VTGexpression_arrayLiteral<Annotation>
export type VTGexpression_arrowFunction$_parameters<Annotation> = Gparameter<Annotation>
export type VGexpression_arrowFunction$_parameters<Annotation> = VTGexpression_arrowFunction$_parameters<Annotation>[]
export type VTGexpression_arrowFunction$_returnType<Annotation> = Gtype<Annotation>
export type VGexpression_arrowFunction$_returnType<Annotation> = null | VTGexpression_arrowFunction$_returnType<Annotation>

export type NGexpression_arrowFunction$_equalsGreaterThan$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_arrowFunction$_equalsGreaterThan<Annotation> = NGexpression_arrowFunction$_equalsGreaterThan$<Annotation>
export type VGexpression_arrowFunction$_equalsGreaterThan<Annotation> = VTGexpression_arrowFunction$_equalsGreaterThan<Annotation>
export type VTGexpression_arrowFunction$_implementation_block<Annotation> = Gblock<Annotation>
export type VGexpression_arrowFunction$_implementation_block<Annotation> = VTGexpression_arrowFunction$_implementation_block<Annotation>
export type VTGexpression_arrowFunction$_implementation_expression<Annotation> = Gexpression<Annotation>
export type VGexpression_arrowFunction$_implementation_expression<Annotation> = VTGexpression_arrowFunction$_implementation_expression<Annotation>
export type VTGexpression_arrowFunction$_implementation<Annotation> =
    | [ "block", VGexpression_arrowFunction$_implementation_block<Annotation>]
    | [ "expression", VGexpression_arrowFunction$_implementation_expression<Annotation>]
export type VGexpression_arrowFunction$_implementation<Annotation> = VTGexpression_arrowFunction$_implementation<Annotation>
export type VTGexpression_arrowFunction$<Annotation> = {
    readonly "parameters":  VGexpression_arrowFunction$_parameters<Annotation>
    readonly "returnType":  VGexpression_arrowFunction$_returnType<Annotation>
    readonly "equalsGreaterThan":  VGexpression_arrowFunction$_equalsGreaterThan<Annotation>
    readonly "implementation":  VGexpression_arrowFunction$_implementation<Annotation>
}
export type VGexpression_arrowFunction$<Annotation> = VTGexpression_arrowFunction$<Annotation>

export type NGexpression_arrowFunction$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_arrowFunction$<Annotation>,
}
export type VTGexpression_arrowFunction<Annotation> = NGexpression_arrowFunction$<Annotation>
export type VGexpression_arrowFunction<Annotation> = VTGexpression_arrowFunction<Annotation>
export type VTGexpression_binary$_leftHandSide<Annotation> = Gexpression<Annotation>
export type VGexpression_binary$_leftHandSide<Annotation> = VTGexpression_binary$_leftHandSide<Annotation>

export type NGexpression_binary$_operator_ampersandAmpersand$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_ampersandAmpersand<Annotation> = NGexpression_binary$_operator_ampersandAmpersand$<Annotation>
export type VGexpression_binary$_operator_ampersandAmpersand<Annotation> = VTGexpression_binary$_operator_ampersandAmpersand<Annotation>

export type NGexpression_binary$_operator_barBar$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_barBar<Annotation> = NGexpression_binary$_operator_barBar$<Annotation>
export type VGexpression_binary$_operator_barBar<Annotation> = VTGexpression_binary$_operator_barBar<Annotation>

export type NGexpression_binary$_operator_equals$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_equals<Annotation> = NGexpression_binary$_operator_equals$<Annotation>
export type VGexpression_binary$_operator_equals<Annotation> = VTGexpression_binary$_operator_equals<Annotation>

export type NGexpression_binary$_operator_equalsEqualsEquals$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_equalsEqualsEquals<Annotation> = NGexpression_binary$_operator_equalsEqualsEquals$<Annotation>
export type VGexpression_binary$_operator_equalsEqualsEquals<Annotation> = VTGexpression_binary$_operator_equalsEqualsEquals<Annotation>

export type NGexpression_binary$_operator_exclamationEqualsEquals$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_exclamationEqualsEquals<Annotation> = NGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>
export type VGexpression_binary$_operator_exclamationEqualsEquals<Annotation> = VTGexpression_binary$_operator_exclamationEqualsEquals<Annotation>

export type NGexpression_binary$_operator_greaterThan$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_greaterThan<Annotation> = NGexpression_binary$_operator_greaterThan$<Annotation>
export type VGexpression_binary$_operator_greaterThan<Annotation> = VTGexpression_binary$_operator_greaterThan<Annotation>

export type NGexpression_binary$_operator_lessThan$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_lessThan<Annotation> = NGexpression_binary$_operator_lessThan$<Annotation>
export type VGexpression_binary$_operator_lessThan<Annotation> = VTGexpression_binary$_operator_lessThan<Annotation>

export type NGexpression_binary$_operator_minus$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_minus<Annotation> = NGexpression_binary$_operator_minus$<Annotation>
export type VGexpression_binary$_operator_minus<Annotation> = VTGexpression_binary$_operator_minus<Annotation>

export type NGexpression_binary$_operator_minusEquals$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_minusEquals<Annotation> = NGexpression_binary$_operator_minusEquals$<Annotation>
export type VGexpression_binary$_operator_minusEquals<Annotation> = VTGexpression_binary$_operator_minusEquals<Annotation>

export type NGexpression_binary$_operator_plus$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_plus<Annotation> = NGexpression_binary$_operator_plus$<Annotation>
export type VGexpression_binary$_operator_plus<Annotation> = VTGexpression_binary$_operator_plus<Annotation>

export type NGexpression_binary$_operator_plusEquals$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_binary$_operator_plusEquals<Annotation> = NGexpression_binary$_operator_plusEquals$<Annotation>
export type VGexpression_binary$_operator_plusEquals<Annotation> = VTGexpression_binary$_operator_plusEquals<Annotation>
export type VTGexpression_binary$_operator<Annotation> =
    | [ "ampersandAmpersand", VGexpression_binary$_operator_ampersandAmpersand<Annotation>]
    | [ "barBar", VGexpression_binary$_operator_barBar<Annotation>]
    | [ "equals", VGexpression_binary$_operator_equals<Annotation>]
    | [ "equalsEqualsEquals", VGexpression_binary$_operator_equalsEqualsEquals<Annotation>]
    | [ "exclamationEqualsEquals", VGexpression_binary$_operator_exclamationEqualsEquals<Annotation>]
    | [ "greaterThan", VGexpression_binary$_operator_greaterThan<Annotation>]
    | [ "lessThan", VGexpression_binary$_operator_lessThan<Annotation>]
    | [ "minus", VGexpression_binary$_operator_minus<Annotation>]
    | [ "minusEquals", VGexpression_binary$_operator_minusEquals<Annotation>]
    | [ "plus", VGexpression_binary$_operator_plus<Annotation>]
    | [ "plusEquals", VGexpression_binary$_operator_plusEquals<Annotation>]
export type VGexpression_binary$_operator<Annotation> = VTGexpression_binary$_operator<Annotation>
export type VTGexpression_binary$_rightHandSide<Annotation> = Gexpression<Annotation>
export type VGexpression_binary$_rightHandSide<Annotation> = VTGexpression_binary$_rightHandSide<Annotation>
export type VTGexpression_binary$<Annotation> = {
    readonly "leftHandSide":  VGexpression_binary$_leftHandSide<Annotation>
    readonly "operator":  VGexpression_binary$_operator<Annotation>
    readonly "rightHandSide":  VGexpression_binary$_rightHandSide<Annotation>
}
export type VGexpression_binary$<Annotation> = VTGexpression_binary$<Annotation>

export type NGexpression_binary$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_binary$<Annotation>,
}
export type VTGexpression_binary<Annotation> = NGexpression_binary$<Annotation>
export type VGexpression_binary<Annotation> = VTGexpression_binary<Annotation>
export type VTGexpression_call$_function<Annotation> = Gexpression<Annotation>
export type VGexpression_call$_function<Annotation> = VTGexpression_call$_function<Annotation>
export type VTGexpression_call$_typeParameters<Annotation> = Gtype<Annotation>
export type VGexpression_call$_typeParameters<Annotation> = VTGexpression_call$_typeParameters<Annotation>[]
export type VTGexpression_call$_parameters<Annotation> = Gexpression<Annotation>
export type VGexpression_call$_parameters<Annotation> = VTGexpression_call$_parameters<Annotation>[]
export type VTGexpression_call$<Annotation> = {
    readonly "function":  VGexpression_call$_function<Annotation>
    readonly "typeParameters":  VGexpression_call$_typeParameters<Annotation>
    readonly "parameters":  VGexpression_call$_parameters<Annotation>
}
export type VGexpression_call$<Annotation> = VTGexpression_call$<Annotation>

export type NGexpression_call$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_call$<Annotation>,
}
export type VTGexpression_call<Annotation> = NGexpression_call$<Annotation>
export type VGexpression_call<Annotation> = VTGexpression_call<Annotation>
export type VTGexpression_conditional$_test<Annotation> = Gexpression<Annotation>
export type VGexpression_conditional$_test<Annotation> = VTGexpression_conditional$_test<Annotation>

export type NGexpression_conditional$_questionToken$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_conditional$_questionToken<Annotation> = NGexpression_conditional$_questionToken$<Annotation>
export type VGexpression_conditional$_questionToken<Annotation> = VTGexpression_conditional$_questionToken<Annotation>
export type VTGexpression_conditional$_ifExpression<Annotation> = Gexpression<Annotation>
export type VGexpression_conditional$_ifExpression<Annotation> = VTGexpression_conditional$_ifExpression<Annotation>

export type NGexpression_conditional$_colonToken$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_conditional$_colonToken<Annotation> = NGexpression_conditional$_colonToken$<Annotation>
export type VGexpression_conditional$_colonToken<Annotation> = VTGexpression_conditional$_colonToken<Annotation>
export type VTGexpression_conditional$_elseExpression<Annotation> = Gexpression<Annotation>
export type VGexpression_conditional$_elseExpression<Annotation> = VTGexpression_conditional$_elseExpression<Annotation>
export type VTGexpression_conditional$<Annotation> = {
    readonly "test":  VGexpression_conditional$_test<Annotation>
    readonly "questionToken":  VGexpression_conditional$_questionToken<Annotation>
    readonly "ifExpression":  VGexpression_conditional$_ifExpression<Annotation>
    readonly "colonToken":  VGexpression_conditional$_colonToken<Annotation>
    readonly "elseExpression":  VGexpression_conditional$_elseExpression<Annotation>
}
export type VGexpression_conditional$<Annotation> = VTGexpression_conditional$<Annotation>

export type NGexpression_conditional$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_conditional$<Annotation>,
}
export type VTGexpression_conditional<Annotation> = NGexpression_conditional$<Annotation>
export type VGexpression_conditional<Annotation> = VTGexpression_conditional<Annotation>
export type VTGexpression_elementAccess$_array<Annotation> = Gexpression<Annotation>
export type VGexpression_elementAccess$_array<Annotation> = VTGexpression_elementAccess$_array<Annotation>
export type VTGexpression_elementAccess$_element<Annotation> = Gexpression<Annotation>
export type VGexpression_elementAccess$_element<Annotation> = VTGexpression_elementAccess$_element<Annotation>
export type VTGexpression_elementAccess$<Annotation> = {
    readonly "array":  VGexpression_elementAccess$_array<Annotation>
    readonly "element":  VGexpression_elementAccess$_element<Annotation>
}
export type VGexpression_elementAccess$<Annotation> = VTGexpression_elementAccess$<Annotation>

export type NGexpression_elementAccess$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_elementAccess$<Annotation>,
}
export type VTGexpression_elementAccess<Annotation> = NGexpression_elementAccess$<Annotation>
export type VGexpression_elementAccess<Annotation> = VTGexpression_elementAccess<Annotation>

export type NGexpression_false$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_false<Annotation> = NGexpression_false$<Annotation>
export type VGexpression_false<Annotation> = VTGexpression_false<Annotation>
export type VTGexpression_identifier<Annotation> = Gidentifier<Annotation>
export type VGexpression_identifier<Annotation> = VTGexpression_identifier<Annotation>
export type VTGexpression_new$_class<Annotation> = Gidentifier<Annotation>
export type VGexpression_new$_class<Annotation> = VTGexpression_new$_class<Annotation>
export type VTGexpression_new$_parameters<Annotation> = Gexpression<Annotation>
export type VGexpression_new$_parameters<Annotation> = VTGexpression_new$_parameters<Annotation>[]
export type VTGexpression_new$<Annotation> = {
    readonly "class":  VGexpression_new$_class<Annotation>
    readonly "parameters":  VGexpression_new$_parameters<Annotation>
}
export type VGexpression_new$<Annotation> = VTGexpression_new$<Annotation>

export type NGexpression_new$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_new$<Annotation>,
}
export type VTGexpression_new<Annotation> = NGexpression_new$<Annotation>
export type VGexpression_new<Annotation> = VTGexpression_new<Annotation>

export type NGexpression_noSubstitutionTemplateLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_noSubstitutionTemplateLiteral<Annotation> = NGexpression_noSubstitutionTemplateLiteral$<Annotation>
export type VGexpression_noSubstitutionTemplateLiteral<Annotation> = VTGexpression_noSubstitutionTemplateLiteral<Annotation>
export type VTGexpression_numericLiteral<Annotation> = GnumericLiteral<Annotation>
export type VGexpression_numericLiteral<Annotation> = VTGexpression_numericLiteral<Annotation>

export type NGexpression_nullKeyword$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_nullKeyword<Annotation> = NGexpression_nullKeyword$<Annotation>
export type VGexpression_nullKeyword<Annotation> = VTGexpression_nullKeyword<Annotation>
export type VTGexpression_objectLiteral$$_name_identifier<Annotation> = Gidentifier<Annotation>
export type VGexpression_objectLiteral$$_name_identifier<Annotation> = VTGexpression_objectLiteral$$_name_identifier<Annotation>
export type VTGexpression_objectLiteral$$_name_numericLiteral<Annotation> = GnumericLiteral<Annotation>
export type VGexpression_objectLiteral$$_name_numericLiteral<Annotation> = VTGexpression_objectLiteral$$_name_numericLiteral<Annotation>
export type VTGexpression_objectLiteral$$_name_stringLiteral<Annotation> = GstringLiteral<Annotation>
export type VGexpression_objectLiteral$$_name_stringLiteral<Annotation> = VTGexpression_objectLiteral$$_name_stringLiteral<Annotation>
export type VTGexpression_objectLiteral$$_name<Annotation> =
    | [ "identifier", VGexpression_objectLiteral$$_name_identifier<Annotation>]
    | [ "numericLiteral", VGexpression_objectLiteral$$_name_numericLiteral<Annotation>]
    | [ "stringLiteral", VGexpression_objectLiteral$$_name_stringLiteral<Annotation>]
export type VGexpression_objectLiteral$$_name<Annotation> = VTGexpression_objectLiteral$$_name<Annotation>
export type VTGexpression_objectLiteral$$_expression<Annotation> = Gexpression<Annotation>
export type VGexpression_objectLiteral$$_expression<Annotation> = VTGexpression_objectLiteral$$_expression<Annotation>
export type VTGexpression_objectLiteral$$<Annotation> = {
    readonly "name":  VGexpression_objectLiteral$$_name<Annotation>
    readonly "expression":  VGexpression_objectLiteral$$_expression<Annotation>
}
export type VGexpression_objectLiteral$$<Annotation> = VTGexpression_objectLiteral$$<Annotation>

export type NGexpression_objectLiteral$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_objectLiteral$$<Annotation>,
}
export type VTGexpression_objectLiteral$<Annotation> = NGexpression_objectLiteral$$<Annotation>
export type VGexpression_objectLiteral$<Annotation> = VTGexpression_objectLiteral$<Annotation>[]

export type NGexpression_objectLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_objectLiteral$<Annotation>,
}
export type VTGexpression_objectLiteral<Annotation> = NGexpression_objectLiteral$<Annotation>
export type VGexpression_objectLiteral<Annotation> = VTGexpression_objectLiteral<Annotation>
export type VTGexpression_parenthesizedExpression$<Annotation> = Gexpression<Annotation>
export type VGexpression_parenthesizedExpression$<Annotation> = VTGexpression_parenthesizedExpression$<Annotation>

export type NGexpression_parenthesizedExpression$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_parenthesizedExpression$<Annotation>,
}
export type VTGexpression_parenthesizedExpression<Annotation> = NGexpression_parenthesizedExpression$<Annotation>
export type VGexpression_parenthesizedExpression<Annotation> = VTGexpression_parenthesizedExpression<Annotation>
export type VTGexpression_postfixUnary$<Annotation> = Gexpression<Annotation>
export type VGexpression_postfixUnary$<Annotation> = VTGexpression_postfixUnary$<Annotation>

export type NGexpression_postfixUnary$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_postfixUnary$<Annotation>,
}
export type VTGexpression_postfixUnary<Annotation> = NGexpression_postfixUnary$<Annotation>
export type VGexpression_postfixUnary<Annotation> = VTGexpression_postfixUnary<Annotation>
export type VTGexpression_prefixUnary$<Annotation> = Gexpression<Annotation>
export type VGexpression_prefixUnary$<Annotation> = VTGexpression_prefixUnary$<Annotation>

export type NGexpression_prefixUnary$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_prefixUnary$<Annotation>,
}
export type VTGexpression_prefixUnary<Annotation> = NGexpression_prefixUnary$<Annotation>
export type VGexpression_prefixUnary<Annotation> = VTGexpression_prefixUnary<Annotation>
export type VTGexpression_propertyAccess$_object<Annotation> = Gexpression<Annotation>
export type VGexpression_propertyAccess$_object<Annotation> = VTGexpression_propertyAccess$_object<Annotation>
export type VTGexpression_propertyAccess$_property<Annotation> = Gexpression<Annotation>
export type VGexpression_propertyAccess$_property<Annotation> = VTGexpression_propertyAccess$_property<Annotation>
export type VTGexpression_propertyAccess$<Annotation> = {
    readonly "object":  VGexpression_propertyAccess$_object<Annotation>
    readonly "property":  VGexpression_propertyAccess$_property<Annotation>
}
export type VGexpression_propertyAccess$<Annotation> = VTGexpression_propertyAccess$<Annotation>

export type NGexpression_propertyAccess$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_propertyAccess$<Annotation>,
}
export type VTGexpression_propertyAccess<Annotation> = NGexpression_propertyAccess$<Annotation>
export type VGexpression_propertyAccess<Annotation> = VTGexpression_propertyAccess<Annotation>
export type VTGexpression_stringLiteral<Annotation> = GstringLiteral<Annotation>
export type VGexpression_stringLiteral<Annotation> = VTGexpression_stringLiteral<Annotation>

export type NGexpression_template$_head$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGexpression_template$_head<Annotation> = NGexpression_template$_head$<Annotation>
export type VGexpression_template$_head<Annotation> = VTGexpression_template$_head<Annotation>
export type VTGexpression_template$_spans$_expression<Annotation> = Gexpression<Annotation>
export type VGexpression_template$_spans$_expression<Annotation> = VTGexpression_template$_spans$_expression<Annotation>

export type NGexpression_template$_spans$_x_middle$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGexpression_template$_spans$_x_middle<Annotation> = NGexpression_template$_spans$_x_middle$<Annotation>
export type VGexpression_template$_spans$_x_middle<Annotation> = VTGexpression_template$_spans$_x_middle<Annotation>

export type NGexpression_template$_spans$_x_tail$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGexpression_template$_spans$_x_tail<Annotation> = NGexpression_template$_spans$_x_tail$<Annotation>
export type VGexpression_template$_spans$_x_tail<Annotation> = VTGexpression_template$_spans$_x_tail<Annotation>
export type VTGexpression_template$_spans$_x<Annotation> =
    | [ "middle", VGexpression_template$_spans$_x_middle<Annotation>]
    | [ "tail", VGexpression_template$_spans$_x_tail<Annotation>]
export type VGexpression_template$_spans$_x<Annotation> = VTGexpression_template$_spans$_x<Annotation>
export type VTGexpression_template$_spans$<Annotation> = {
    readonly "expression":  VGexpression_template$_spans$_expression<Annotation>
    readonly "x":  VGexpression_template$_spans$_x<Annotation>
}
export type VGexpression_template$_spans$<Annotation> = VTGexpression_template$_spans$<Annotation>

export type NGexpression_template$_spans$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_template$_spans$<Annotation>,
}
export type VTGexpression_template$_spans<Annotation> = NGexpression_template$_spans$<Annotation>
export type VGexpression_template$_spans<Annotation> = VTGexpression_template$_spans<Annotation>[]
export type VTGexpression_template$<Annotation> = {
    readonly "head":  VGexpression_template$_head<Annotation>
    readonly "spans":  VGexpression_template$_spans<Annotation>
}
export type VGexpression_template$<Annotation> = VTGexpression_template$<Annotation>

export type NGexpression_template$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGexpression_template$<Annotation>,
}
export type VTGexpression_template<Annotation> = NGexpression_template$<Annotation>
export type VGexpression_template<Annotation> = VTGexpression_template<Annotation>

export type NGexpression_true$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGexpression_true<Annotation> = NGexpression_true$<Annotation>
export type VGexpression_true<Annotation> = VTGexpression_true<Annotation>
export type VTGexpression<Annotation> =
    | [ "arrayLiteral", VGexpression_arrayLiteral<Annotation>]
    | [ "arrowFunction", VGexpression_arrowFunction<Annotation>]
    | [ "binary", VGexpression_binary<Annotation>]
    | [ "call", VGexpression_call<Annotation>]
    | [ "conditional", VGexpression_conditional<Annotation>]
    | [ "elementAccess", VGexpression_elementAccess<Annotation>]
    | [ "false", VGexpression_false<Annotation>]
    | [ "identifier", VGexpression_identifier<Annotation>]
    | [ "new", VGexpression_new<Annotation>]
    | [ "noSubstitutionTemplateLiteral", VGexpression_noSubstitutionTemplateLiteral<Annotation>]
    | [ "numericLiteral", VGexpression_numericLiteral<Annotation>]
    | [ "nullKeyword", VGexpression_nullKeyword<Annotation>]
    | [ "objectLiteral", VGexpression_objectLiteral<Annotation>]
    | [ "parenthesizedExpression", VGexpression_parenthesizedExpression<Annotation>]
    | [ "postfixUnary", VGexpression_postfixUnary<Annotation>]
    | [ "prefixUnary", VGexpression_prefixUnary<Annotation>]
    | [ "propertyAccess", VGexpression_propertyAccess<Annotation>]
    | [ "stringLiteral", VGexpression_stringLiteral<Annotation>]
    | [ "template", VGexpression_template<Annotation>]
    | [ "true", VGexpression_true<Annotation>]
export type Gexpression<Annotation> =  VTGexpression<Annotation>
export type VTGfunctionDefinition_typeParameters<Annotation> = GtypeParameter<Annotation>
export type VGfunctionDefinition_typeParameters<Annotation> = VTGfunctionDefinition_typeParameters<Annotation>[]
export type VTGfunctionDefinition_parameters<Annotation> = Gparameter<Annotation>
export type VGfunctionDefinition_parameters<Annotation> = VTGfunctionDefinition_parameters<Annotation>[]
export type VTGfunctionDefinition_returnType<Annotation> = Gtype<Annotation>
export type VGfunctionDefinition_returnType<Annotation> = null | VTGfunctionDefinition_returnType<Annotation>
export type VTGfunctionDefinition<Annotation> = {
    readonly "typeParameters":  VGfunctionDefinition_typeParameters<Annotation>
    readonly "parameters":  VGfunctionDefinition_parameters<Annotation>
    readonly "returnType":  VGfunctionDefinition_returnType<Annotation>
}
export type GfunctionDefinition<Annotation> =  VTGfunctionDefinition<Annotation>

export type NGidentifier$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGidentifier<Annotation> = NGidentifier$<Annotation>
export type Gidentifier<Annotation> =  VTGidentifier<Annotation>
export type VTGidentifierOrStringLiteral_identifier<Annotation> = Gidentifier<Annotation>
export type VGidentifierOrStringLiteral_identifier<Annotation> = VTGidentifierOrStringLiteral_identifier<Annotation>
export type VTGidentifierOrStringLiteral_stringLiteral<Annotation> = GstringLiteral<Annotation>
export type VGidentifierOrStringLiteral_stringLiteral<Annotation> = VTGidentifierOrStringLiteral_stringLiteral<Annotation>
export type VTGidentifierOrStringLiteral<Annotation> =
    | [ "identifier", VGidentifierOrStringLiteral_identifier<Annotation>]
    | [ "stringLiteral", VGidentifierOrStringLiteral_stringLiteral<Annotation>]
export type GidentifierOrStringLiteral<Annotation> =  VTGidentifierOrStringLiteral<Annotation>

export type NGmodifier_declare$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGmodifier_declare<Annotation> = NGmodifier_declare$<Annotation>
export type VGmodifier_declare<Annotation> = VTGmodifier_declare<Annotation>

export type NGmodifier_export$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGmodifier_export<Annotation> = NGmodifier_export$<Annotation>
export type VGmodifier_export<Annotation> = VTGmodifier_export<Annotation>

export type NGmodifier_readonly$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGmodifier_readonly<Annotation> = NGmodifier_readonly$<Annotation>
export type VGmodifier_readonly<Annotation> = VTGmodifier_readonly<Annotation>
export type VTGmodifier<Annotation> =
    | [ "declare", VGmodifier_declare<Annotation>]
    | [ "export", VGmodifier_export<Annotation>]
    | [ "readonly", VGmodifier_readonly<Annotation>]
export type Gmodifier<Annotation> =  VTGmodifier<Annotation>

export type NGnumericLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGnumericLiteral<Annotation> = NGnumericLiteral$<Annotation>
export type GnumericLiteral<Annotation> =  VTGnumericLiteral<Annotation>
export type VTGparameter$_name<Annotation> = Gidentifier<Annotation>
export type VGparameter$_name<Annotation> = VTGparameter$_name<Annotation>

export type NGparameter$_questionToken$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGparameter$_questionToken<Annotation> = NGparameter$_questionToken$<Annotation>
export type VGparameter$_questionToken<Annotation> = null | VTGparameter$_questionToken<Annotation>
export type VTGparameter$_type<Annotation> = Gtype<Annotation>
export type VGparameter$_type<Annotation> = null | VTGparameter$_type<Annotation>
export type VTGparameter$<Annotation> = {
    readonly "name":  VGparameter$_name<Annotation>
    readonly "questionToken":  VGparameter$_questionToken<Annotation>
    readonly "type":  VGparameter$_type<Annotation>
}
export type VGparameter$<Annotation> = VTGparameter$<Annotation>

export type NGparameter$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGparameter$<Annotation>,
}
export type VTGparameter<Annotation> = NGparameter$<Annotation>
export type Gparameter<Annotation> =  VTGparameter<Annotation>
export type VTGstatement_block<Annotation> = Gblock<Annotation>
export type VGstatement_block<Annotation> = VTGstatement_block<Annotation>
export type VTGstatement_break$<Annotation> = Gidentifier<Annotation>
export type VGstatement_break$<Annotation> = null | VTGstatement_break$<Annotation>

export type NGstatement_break$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_break$<Annotation>,
}
export type VTGstatement_break<Annotation> = NGstatement_break$<Annotation>
export type VGstatement_break<Annotation> = VTGstatement_break<Annotation>
export type VTGstatement_export$<Annotation> = GstringLiteral<Annotation>
export type VGstatement_export$<Annotation> = VTGstatement_export$<Annotation>

export type NGstatement_export$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_export$<Annotation>,
}
export type VTGstatement_export<Annotation> = NGstatement_export$<Annotation>
export type VGstatement_export<Annotation> = VTGstatement_export<Annotation>
export type VTGstatement_expression$<Annotation> = Gexpression<Annotation>
export type VGstatement_expression$<Annotation> = VTGstatement_expression$<Annotation>

export type NGstatement_expression$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_expression$<Annotation>,
}
export type VTGstatement_expression<Annotation> = NGstatement_expression$<Annotation>
export type VGstatement_expression<Annotation> = VTGstatement_expression<Annotation>
export type VTGstatement_for$_initializer<Annotation> = GvariableDeclarationList<Annotation>
export type VGstatement_for$_initializer<Annotation> = VTGstatement_for$_initializer<Annotation>
export type VTGstatement_for$_condition<Annotation> = Gexpression<Annotation>
export type VGstatement_for$_condition<Annotation> = VTGstatement_for$_condition<Annotation>
export type VTGstatement_for$_incrementer<Annotation> = Gexpression<Annotation>
export type VGstatement_for$_incrementer<Annotation> = VTGstatement_for$_incrementer<Annotation>
export type VTGstatement_for$_block<Annotation> = Gblock<Annotation>
export type VGstatement_for$_block<Annotation> = VTGstatement_for$_block<Annotation>
export type VTGstatement_for$<Annotation> = {
    readonly "initializer":  VGstatement_for$_initializer<Annotation>
    readonly "condition":  VGstatement_for$_condition<Annotation>
    readonly "incrementer":  VGstatement_for$_incrementer<Annotation>
    readonly "block":  VGstatement_for$_block<Annotation>
}
export type VGstatement_for$<Annotation> = VTGstatement_for$<Annotation>

export type NGstatement_for$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_for$<Annotation>,
}
export type VTGstatement_for<Annotation> = NGstatement_for$<Annotation>
export type VGstatement_for<Annotation> = VTGstatement_for<Annotation>
export type VTGstatement_function$_modifiers<Annotation> = Gmodifier<Annotation>
export type VGstatement_function$_modifiers<Annotation> = VTGstatement_function$_modifiers<Annotation>[]
export type VTGstatement_function$_name<Annotation> = Gidentifier<Annotation>
export type VGstatement_function$_name<Annotation> = VTGstatement_function$_name<Annotation>
export type VTGstatement_function$_definition<Annotation> = GfunctionDefinition<Annotation>
export type VGstatement_function$_definition<Annotation> = VTGstatement_function$_definition<Annotation>
export type VTGstatement_function$_block<Annotation> = Gblock<Annotation>
export type VGstatement_function$_block<Annotation> = null | VTGstatement_function$_block<Annotation>
export type VTGstatement_function$<Annotation> = {
    readonly "modifiers":  VGstatement_function$_modifiers<Annotation>
    readonly "name":  VGstatement_function$_name<Annotation>
    readonly "definition":  VGstatement_function$_definition<Annotation>
    readonly "block":  VGstatement_function$_block<Annotation>
}
export type VGstatement_function$<Annotation> = VTGstatement_function$<Annotation>

export type NGstatement_function$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_function$<Annotation>,
}
export type VTGstatement_function<Annotation> = NGstatement_function$<Annotation>
export type VGstatement_function<Annotation> = VTGstatement_function<Annotation>
export type VTGstatement_if$_expression<Annotation> = Gexpression<Annotation>
export type VGstatement_if$_expression<Annotation> = VTGstatement_if$_expression<Annotation>
export type VTGstatement_if$_thenStatement<Annotation> = Gstatement<Annotation>
export type VGstatement_if$_thenStatement<Annotation> = VTGstatement_if$_thenStatement<Annotation>
export type VTGstatement_if$_elseStatement<Annotation> = Gstatement<Annotation>
export type VGstatement_if$_elseStatement<Annotation> = null | VTGstatement_if$_elseStatement<Annotation>
export type VTGstatement_if$<Annotation> = {
    readonly "expression":  VGstatement_if$_expression<Annotation>
    readonly "thenStatement":  VGstatement_if$_thenStatement<Annotation>
    readonly "elseStatement":  VGstatement_if$_elseStatement<Annotation>
}
export type VGstatement_if$<Annotation> = VTGstatement_if$<Annotation>

export type NGstatement_if$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_if$<Annotation>,
}
export type VTGstatement_if<Annotation> = NGstatement_if$<Annotation>
export type VGstatement_if<Annotation> = VTGstatement_if<Annotation>
export type VTGstatement_import$_clause$_namespace$<Annotation> = Gidentifier<Annotation>
export type VGstatement_import$_clause$_namespace$<Annotation> = VTGstatement_import$_clause$_namespace$<Annotation>

export type NGstatement_import$_clause$_namespace$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_import$_clause$_namespace$<Annotation>,
}
export type VTGstatement_import$_clause$_namespace<Annotation> = NGstatement_import$_clause$_namespace$<Annotation>
export type VGstatement_import$_clause$_namespace<Annotation> = VTGstatement_import$_clause$_namespace<Annotation>
export type VTGstatement_import$_clause$_named$$_name<Annotation> = Gidentifier<Annotation>
export type VGstatement_import$_clause$_named$$_name<Annotation> = VTGstatement_import$_clause$_named$$_name<Annotation>
export type VTGstatement_import$_clause$_named$$_as<Annotation> = Gidentifier<Annotation>
export type VGstatement_import$_clause$_named$$_as<Annotation> = null | VTGstatement_import$_clause$_named$$_as<Annotation>
export type VTGstatement_import$_clause$_named$$<Annotation> = {
    readonly "name":  VGstatement_import$_clause$_named$$_name<Annotation>
    readonly "as":  VGstatement_import$_clause$_named$$_as<Annotation>
}
export type VGstatement_import$_clause$_named$$<Annotation> = VTGstatement_import$_clause$_named$$<Annotation>

export type NGstatement_import$_clause$_named$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_import$_clause$_named$$<Annotation>,
}
export type VTGstatement_import$_clause$_named$<Annotation> = NGstatement_import$_clause$_named$$<Annotation>
export type VGstatement_import$_clause$_named$<Annotation> = VTGstatement_import$_clause$_named$<Annotation>[]

export type NGstatement_import$_clause$_named$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_import$_clause$_named$<Annotation>,
}
export type VTGstatement_import$_clause$_named<Annotation> = NGstatement_import$_clause$_named$<Annotation>
export type VGstatement_import$_clause$_named<Annotation> = VTGstatement_import$_clause$_named<Annotation>
export type VTGstatement_import$_clause$<Annotation> =
    | [ "namespace", VGstatement_import$_clause$_namespace<Annotation>]
    | [ "named", VGstatement_import$_clause$_named<Annotation>]
export type VGstatement_import$_clause$<Annotation> = VTGstatement_import$_clause$<Annotation>

export type NGstatement_import$_clause$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_import$_clause$<Annotation>,
}
export type VTGstatement_import$_clause<Annotation> = NGstatement_import$_clause$<Annotation>
export type VGstatement_import$_clause<Annotation> = VTGstatement_import$_clause<Annotation>
export type VTGstatement_import$_file<Annotation> = GstringLiteral<Annotation>
export type VGstatement_import$_file<Annotation> = VTGstatement_import$_file<Annotation>
export type VTGstatement_import$<Annotation> = {
    readonly "clause":  VGstatement_import$_clause<Annotation>
    readonly "file":  VGstatement_import$_file<Annotation>
}
export type VGstatement_import$<Annotation> = VTGstatement_import$<Annotation>

export type NGstatement_import$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_import$<Annotation>,
}
export type VTGstatement_import<Annotation> = NGstatement_import$<Annotation>
export type VGstatement_import<Annotation> = VTGstatement_import<Annotation>
export type VTGstatement_interface$_modifiers<Annotation> = Gmodifier<Annotation>
export type VGstatement_interface$_modifiers<Annotation> = VTGstatement_interface$_modifiers<Annotation>[]
export type VTGstatement_interface$_name<Annotation> = Gidentifier<Annotation>
export type VGstatement_interface$_name<Annotation> = VTGstatement_interface$_name<Annotation>
export type VTGstatement_interface$_typeParameters<Annotation> = GtypeParameter<Annotation>
export type VGstatement_interface$_typeParameters<Annotation> = VTGstatement_interface$_typeParameters<Annotation>[]
export type VTGstatement_interface$_signature<Annotation> = GtypeSignature<Annotation>
export type VGstatement_interface$_signature<Annotation> = VTGstatement_interface$_signature<Annotation>[]
export type VTGstatement_interface$<Annotation> = {
    readonly "modifiers":  VGstatement_interface$_modifiers<Annotation>
    readonly "name":  VGstatement_interface$_name<Annotation>
    readonly "typeParameters":  VGstatement_interface$_typeParameters<Annotation>
    readonly "signature":  VGstatement_interface$_signature<Annotation>
}
export type VGstatement_interface$<Annotation> = VTGstatement_interface$<Annotation>

export type NGstatement_interface$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_interface$<Annotation>,
}
export type VTGstatement_interface<Annotation> = NGstatement_interface$<Annotation>
export type VGstatement_interface<Annotation> = VTGstatement_interface<Annotation>
export type VTGstatement_labeled$_label<Annotation> = Gidentifier<Annotation>
export type VGstatement_labeled$_label<Annotation> = VTGstatement_labeled$_label<Annotation>
export type VTGstatement_labeled$_statement<Annotation> = Gstatement<Annotation>
export type VGstatement_labeled$_statement<Annotation> = VTGstatement_labeled$_statement<Annotation>
export type VTGstatement_labeled$<Annotation> = {
    readonly "label":  VGstatement_labeled$_label<Annotation>
    readonly "statement":  VGstatement_labeled$_statement<Annotation>
}
export type VGstatement_labeled$<Annotation> = VTGstatement_labeled$<Annotation>

export type NGstatement_labeled$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_labeled$<Annotation>,
}
export type VTGstatement_labeled<Annotation> = NGstatement_labeled$<Annotation>
export type VGstatement_labeled<Annotation> = VTGstatement_labeled<Annotation>
export type VTGstatement_return$<Annotation> = Gexpression<Annotation>
export type VGstatement_return$<Annotation> = null | VTGstatement_return$<Annotation>

export type NGstatement_return$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_return$<Annotation>,
}
export type VTGstatement_return<Annotation> = NGstatement_return$<Annotation>
export type VGstatement_return<Annotation> = VTGstatement_return<Annotation>
export type VTGstatement_switch$_expression<Annotation> = Gexpression<Annotation>
export type VGstatement_switch$_expression<Annotation> = VTGstatement_switch$_expression<Annotation>
export type VTGstatement_switch$_caseBlock$_case$_case<Annotation> = Gexpression<Annotation>
export type VGstatement_switch$_caseBlock$_case$_case<Annotation> = VTGstatement_switch$_caseBlock$_case$_case<Annotation>
export type VTGstatement_switch$_caseBlock$_case$_statements<Annotation> = Gstatement<Annotation>
export type VGstatement_switch$_caseBlock$_case$_statements<Annotation> = VTGstatement_switch$_caseBlock$_case$_statements<Annotation>[]
export type VTGstatement_switch$_caseBlock$_case$<Annotation> = {
    readonly "case":  VGstatement_switch$_caseBlock$_case$_case<Annotation>
    readonly "statements":  VGstatement_switch$_caseBlock$_case$_statements<Annotation>
}
export type VGstatement_switch$_caseBlock$_case$<Annotation> = VTGstatement_switch$_caseBlock$_case$<Annotation>

export type NGstatement_switch$_caseBlock$_case$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_switch$_caseBlock$_case$<Annotation>,
}
export type VTGstatement_switch$_caseBlock$_case<Annotation> = NGstatement_switch$_caseBlock$_case$<Annotation>
export type VGstatement_switch$_caseBlock$_case<Annotation> = VTGstatement_switch$_caseBlock$_case<Annotation>
export type VTGstatement_switch$_caseBlock$_default$<Annotation> = Gstatement<Annotation>
export type VGstatement_switch$_caseBlock$_default$<Annotation> = VTGstatement_switch$_caseBlock$_default$<Annotation>[]

export type NGstatement_switch$_caseBlock$_default$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_switch$_caseBlock$_default$<Annotation>,
}
export type VTGstatement_switch$_caseBlock$_default<Annotation> = NGstatement_switch$_caseBlock$_default$<Annotation>
export type VGstatement_switch$_caseBlock$_default<Annotation> = VTGstatement_switch$_caseBlock$_default<Annotation>
export type VTGstatement_switch$_caseBlock$<Annotation> =
    | [ "case", VGstatement_switch$_caseBlock$_case<Annotation>]
    | [ "default", VGstatement_switch$_caseBlock$_default<Annotation>]
export type VGstatement_switch$_caseBlock$<Annotation> = VTGstatement_switch$_caseBlock$<Annotation>[]

export type NGstatement_switch$_caseBlock$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_switch$_caseBlock$<Annotation>,
}
export type VTGstatement_switch$_caseBlock<Annotation> = NGstatement_switch$_caseBlock$<Annotation>
export type VGstatement_switch$_caseBlock<Annotation> = VTGstatement_switch$_caseBlock<Annotation>
export type VTGstatement_switch$<Annotation> = {
    readonly "expression":  VGstatement_switch$_expression<Annotation>
    readonly "caseBlock":  VGstatement_switch$_caseBlock<Annotation>
}
export type VGstatement_switch$<Annotation> = VTGstatement_switch$<Annotation>

export type NGstatement_switch$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_switch$<Annotation>,
}
export type VTGstatement_switch<Annotation> = NGstatement_switch$<Annotation>
export type VGstatement_switch<Annotation> = VTGstatement_switch<Annotation>
export type VTGstatement_throw$<Annotation> = Gexpression<Annotation>
export type VGstatement_throw$<Annotation> = VTGstatement_throw$<Annotation>

export type NGstatement_throw$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_throw$<Annotation>,
}
export type VTGstatement_throw<Annotation> = NGstatement_throw$<Annotation>
export type VGstatement_throw<Annotation> = VTGstatement_throw<Annotation>
export type VTGstatement_try$_block<Annotation> = Gblock<Annotation>
export type VGstatement_try$_block<Annotation> = VTGstatement_try$_block<Annotation>
export type VTGstatement_try$_catchClause$_variable<Annotation> = GvariableDeclaration<Annotation>
export type VGstatement_try$_catchClause$_variable<Annotation> = VTGstatement_try$_catchClause$_variable<Annotation>
export type VTGstatement_try$_catchClause$_block<Annotation> = Gblock<Annotation>
export type VGstatement_try$_catchClause$_block<Annotation> = VTGstatement_try$_catchClause$_block<Annotation>
export type VTGstatement_try$_catchClause$<Annotation> = {
    readonly "variable":  VGstatement_try$_catchClause$_variable<Annotation>
    readonly "block":  VGstatement_try$_catchClause$_block<Annotation>
}
export type VGstatement_try$_catchClause$<Annotation> = VTGstatement_try$_catchClause$<Annotation>

export type NGstatement_try$_catchClause$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_try$_catchClause$<Annotation>,
}
export type VTGstatement_try$_catchClause<Annotation> = NGstatement_try$_catchClause$<Annotation>
export type VGstatement_try$_catchClause<Annotation> = VTGstatement_try$_catchClause<Annotation>
export type VTGstatement_try$<Annotation> = {
    readonly "block":  VGstatement_try$_block<Annotation>
    readonly "catchClause":  VGstatement_try$_catchClause<Annotation>
}
export type VGstatement_try$<Annotation> = VTGstatement_try$<Annotation>

export type NGstatement_try$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_try$<Annotation>,
}
export type VTGstatement_try<Annotation> = NGstatement_try$<Annotation>
export type VGstatement_try<Annotation> = VTGstatement_try<Annotation>
export type VTGstatement_typeAlias$_modifiers<Annotation> = Gmodifier<Annotation>
export type VGstatement_typeAlias$_modifiers<Annotation> = VTGstatement_typeAlias$_modifiers<Annotation>[]
export type VTGstatement_typeAlias$_name<Annotation> = Gidentifier<Annotation>
export type VGstatement_typeAlias$_name<Annotation> = VTGstatement_typeAlias$_name<Annotation>
export type VTGstatement_typeAlias$_typeParameters<Annotation> = GtypeParameter<Annotation>
export type VGstatement_typeAlias$_typeParameters<Annotation> = VTGstatement_typeAlias$_typeParameters<Annotation>[]
export type VTGstatement_typeAlias$_type<Annotation> = Gtype<Annotation>
export type VGstatement_typeAlias$_type<Annotation> = VTGstatement_typeAlias$_type<Annotation>
export type VTGstatement_typeAlias$<Annotation> = {
    readonly "modifiers":  VGstatement_typeAlias$_modifiers<Annotation>
    readonly "name":  VGstatement_typeAlias$_name<Annotation>
    readonly "typeParameters":  VGstatement_typeAlias$_typeParameters<Annotation>
    readonly "type":  VGstatement_typeAlias$_type<Annotation>
}
export type VGstatement_typeAlias$<Annotation> = VTGstatement_typeAlias$<Annotation>

export type NGstatement_typeAlias$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_typeAlias$<Annotation>,
}
export type VTGstatement_typeAlias<Annotation> = NGstatement_typeAlias$<Annotation>
export type VGstatement_typeAlias<Annotation> = VTGstatement_typeAlias<Annotation>
export type VTGstatement_variable$_modifiers<Annotation> = Gmodifier<Annotation>
export type VGstatement_variable$_modifiers<Annotation> = VTGstatement_variable$_modifiers<Annotation>[]
export type VTGstatement_variable$_variableDeclarationList<Annotation> = GvariableDeclarationList<Annotation>
export type VGstatement_variable$_variableDeclarationList<Annotation> = VTGstatement_variable$_variableDeclarationList<Annotation>
export type VTGstatement_variable$<Annotation> = {
    readonly "modifiers":  VGstatement_variable$_modifiers<Annotation>
    readonly "variableDeclarationList":  VGstatement_variable$_variableDeclarationList<Annotation>
}
export type VGstatement_variable$<Annotation> = VTGstatement_variable$<Annotation>

export type NGstatement_variable$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_variable$<Annotation>,
}
export type VTGstatement_variable<Annotation> = NGstatement_variable$<Annotation>
export type VGstatement_variable<Annotation> = VTGstatement_variable<Annotation>
export type VTGstatement_while$_condition<Annotation> = Gexpression<Annotation>
export type VGstatement_while$_condition<Annotation> = VTGstatement_while$_condition<Annotation>
export type VTGstatement_while$_block<Annotation> = Gblock<Annotation>
export type VGstatement_while$_block<Annotation> = VTGstatement_while$_block<Annotation>
export type VTGstatement_while$<Annotation> = {
    readonly "condition":  VGstatement_while$_condition<Annotation>
    readonly "block":  VGstatement_while$_block<Annotation>
}
export type VGstatement_while$<Annotation> = VTGstatement_while$<Annotation>

export type NGstatement_while$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGstatement_while$<Annotation>,
}
export type VTGstatement_while<Annotation> = NGstatement_while$<Annotation>
export type VGstatement_while<Annotation> = VTGstatement_while<Annotation>
export type VTGstatement<Annotation> =
    | [ "block", VGstatement_block<Annotation>]
    | [ "break", VGstatement_break<Annotation>]
    | [ "export", VGstatement_export<Annotation>]
    | [ "expression", VGstatement_expression<Annotation>]
    | [ "for", VGstatement_for<Annotation>]
    | [ "function", VGstatement_function<Annotation>]
    | [ "if", VGstatement_if<Annotation>]
    | [ "import", VGstatement_import<Annotation>]
    | [ "interface", VGstatement_interface<Annotation>]
    | [ "labeled", VGstatement_labeled<Annotation>]
    | [ "return", VGstatement_return<Annotation>]
    | [ "switch", VGstatement_switch<Annotation>]
    | [ "throw", VGstatement_throw<Annotation>]
    | [ "try", VGstatement_try<Annotation>]
    | [ "typeAlias", VGstatement_typeAlias<Annotation>]
    | [ "variable", VGstatement_variable<Annotation>]
    | [ "while", VGstatement_while<Annotation>]
export type Gstatement<Annotation> =  VTGstatement<Annotation>

export type NGstringLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGstringLiteral<Annotation> = NGstringLiteral$<Annotation>
export type GstringLiteral<Annotation> =  VTGstringLiteral<Annotation>

export type NGtype_any$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtype_any<Annotation> = NGtype_any$<Annotation>
export type VGtype_any<Annotation> = VTGtype_any<Annotation>
export type VTGtype_array$<Annotation> = Gtype<Annotation>
export type VGtype_array$<Annotation> = VTGtype_array$<Annotation>

export type NGtype_array$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_array$<Annotation>,
}
export type VTGtype_array<Annotation> = NGtype_array$<Annotation>
export type VGtype_array<Annotation> = VTGtype_array<Annotation>

export type NGtype_boolean$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtype_boolean<Annotation> = NGtype_boolean$<Annotation>
export type VGtype_boolean<Annotation> = VTGtype_boolean<Annotation>
export type VTGtype_function$_parameters<Annotation> = Gparameter<Annotation>
export type VGtype_function$_parameters<Annotation> = VTGtype_function$_parameters<Annotation>[]
export type VTGtype_function$_returnType<Annotation> = Gtype<Annotation>
export type VGtype_function$_returnType<Annotation> = null | VTGtype_function$_returnType<Annotation>
export type VTGtype_function$<Annotation> = {
    readonly "parameters":  VGtype_function$_parameters<Annotation>
    readonly "returnType":  VGtype_function$_returnType<Annotation>
}
export type VGtype_function$<Annotation> = VTGtype_function$<Annotation>

export type NGtype_function$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_function$<Annotation>,
}
export type VTGtype_function<Annotation> = NGtype_function$<Annotation>
export type VGtype_function<Annotation> = VTGtype_function<Annotation>

export type NGtype_literal$_null$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtype_literal$_null<Annotation> = NGtype_literal$_null$<Annotation>
export type VGtype_literal$_null<Annotation> = VTGtype_literal$_null<Annotation>
export type VTGtype_literal$_string<Annotation> = GstringLiteral<Annotation>
export type VGtype_literal$_string<Annotation> = VTGtype_literal$_string<Annotation>
export type VTGtype_literal$<Annotation> =
    | [ "null", VGtype_literal$_null<Annotation>]
    | [ "string", VGtype_literal$_string<Annotation>]
export type VGtype_literal$<Annotation> = VTGtype_literal$<Annotation>

export type NGtype_literal$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_literal$<Annotation>,
}
export type VTGtype_literal<Annotation> = NGtype_literal$<Annotation>
export type VGtype_literal<Annotation> = VTGtype_literal<Annotation>
export type VTGtype_parenthesized$<Annotation> = Gtype<Annotation>
export type VGtype_parenthesized$<Annotation> = VTGtype_parenthesized$<Annotation>

export type NGtype_parenthesized$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_parenthesized$<Annotation>,
}
export type VTGtype_parenthesized<Annotation> = NGtype_parenthesized$<Annotation>
export type VGtype_parenthesized<Annotation> = VTGtype_parenthesized<Annotation>

export type NGtype_never$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtype_never<Annotation> = NGtype_never$<Annotation>
export type VGtype_never<Annotation> = VTGtype_never<Annotation>

export type NGtype_number$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtype_number<Annotation> = NGtype_number$<Annotation>
export type VGtype_number<Annotation> = VTGtype_number<Annotation>
export type VTGtype_optional$<Annotation> = Gtype<Annotation>
export type VGtype_optional$<Annotation> = VTGtype_optional$<Annotation>

export type NGtype_optional$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_optional$<Annotation>,
}
export type VTGtype_optional<Annotation> = NGtype_optional$<Annotation>
export type VGtype_optional<Annotation> = VTGtype_optional<Annotation>
export type VTGtype_tuple$<Annotation> = Gtype<Annotation>
export type VGtype_tuple$<Annotation> = VTGtype_tuple$<Annotation>[]

export type NGtype_tuple$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_tuple$<Annotation>,
}
export type VTGtype_tuple<Annotation> = NGtype_tuple$<Annotation>
export type VGtype_tuple<Annotation> = VTGtype_tuple<Annotation>
export type VTGtype_typeLiteral$<Annotation> = GtypeSignature<Annotation>
export type VGtype_typeLiteral$<Annotation> = VTGtype_typeLiteral$<Annotation>[]

export type NGtype_typeLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeLiteral$<Annotation>,
}
export type VTGtype_typeLiteral<Annotation> = NGtype_typeLiteral$<Annotation>
export type VGtype_typeLiteral<Annotation> = VTGtype_typeLiteral<Annotation>

export type NGtype_string$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtype_string<Annotation> = NGtype_string$<Annotation>
export type VGtype_string<Annotation> = VTGtype_string<Annotation>
export type VTGtype_typeReference$_x_identifier<Annotation> = Gidentifier<Annotation>
export type VGtype_typeReference$_x_identifier<Annotation> = VTGtype_typeReference$_x_identifier<Annotation>
export type VTGtype_typeReference$_x_qualifiedName$_context<Annotation> = Gidentifier<Annotation>
export type VGtype_typeReference$_x_qualifiedName$_context<Annotation> = VTGtype_typeReference$_x_qualifiedName$_context<Annotation>
export type VTGtype_typeReference$_x_qualifiedName$_type<Annotation> = Gidentifier<Annotation>
export type VGtype_typeReference$_x_qualifiedName$_type<Annotation> = VTGtype_typeReference$_x_qualifiedName$_type<Annotation>
export type VTGtype_typeReference$_x_qualifiedName$<Annotation> = {
    readonly "context":  VGtype_typeReference$_x_qualifiedName$_context<Annotation>
    readonly "type":  VGtype_typeReference$_x_qualifiedName$_type<Annotation>
}
export type VGtype_typeReference$_x_qualifiedName$<Annotation> = VTGtype_typeReference$_x_qualifiedName$<Annotation>

export type NGtype_typeReference$_x_qualifiedName$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeReference$_x_qualifiedName$<Annotation>,
}
export type VTGtype_typeReference$_x_qualifiedName<Annotation> = NGtype_typeReference$_x_qualifiedName$<Annotation>
export type VGtype_typeReference$_x_qualifiedName<Annotation> = VTGtype_typeReference$_x_qualifiedName<Annotation>
export type VTGtype_typeReference$_x<Annotation> =
    | [ "identifier", VGtype_typeReference$_x_identifier<Annotation>]
    | [ "qualifiedName", VGtype_typeReference$_x_qualifiedName<Annotation>]
export type VGtype_typeReference$_x<Annotation> = VTGtype_typeReference$_x<Annotation>
export type VTGtype_typeReference$_parameters<Annotation> = Gtype<Annotation>
export type VGtype_typeReference$_parameters<Annotation> = VTGtype_typeReference$_parameters<Annotation>[]
export type VTGtype_typeReference$<Annotation> = {
    readonly "x":  VGtype_typeReference$_x<Annotation>
    readonly "parameters":  VGtype_typeReference$_parameters<Annotation>
}
export type VGtype_typeReference$<Annotation> = VTGtype_typeReference$<Annotation>

export type NGtype_typeReference$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeReference$<Annotation>,
}
export type VTGtype_typeReference<Annotation> = NGtype_typeReference$<Annotation>
export type VGtype_typeReference<Annotation> = VTGtype_typeReference<Annotation>

export type NGtype_undefined$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtype_undefined<Annotation> = NGtype_undefined$<Annotation>
export type VGtype_undefined<Annotation> = VTGtype_undefined<Annotation>
export type VTGtype_union$<Annotation> = Gtype<Annotation>
export type VGtype_union$<Annotation> = VTGtype_union$<Annotation>[]

export type NGtype_union$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_union$<Annotation>,
}
export type VTGtype_union<Annotation> = NGtype_union$<Annotation>
export type VGtype_union<Annotation> = VTGtype_union<Annotation>

export type NGtype_void$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtype_void<Annotation> = NGtype_void$<Annotation>
export type VGtype_void<Annotation> = VTGtype_void<Annotation>
export type VTGtype<Annotation> =
    | [ "any", VGtype_any<Annotation>]
    | [ "array", VGtype_array<Annotation>]
    | [ "boolean", VGtype_boolean<Annotation>]
    | [ "function", VGtype_function<Annotation>]
    | [ "literal", VGtype_literal<Annotation>]
    | [ "parenthesized", VGtype_parenthesized<Annotation>]
    | [ "never", VGtype_never<Annotation>]
    | [ "number", VGtype_number<Annotation>]
    | [ "optional", VGtype_optional<Annotation>]
    | [ "tuple", VGtype_tuple<Annotation>]
    | [ "typeLiteral", VGtype_typeLiteral<Annotation>]
    | [ "string", VGtype_string<Annotation>]
    | [ "typeReference", VGtype_typeReference<Annotation>]
    | [ "undefined", VGtype_undefined<Annotation>]
    | [ "union", VGtype_union<Annotation>]
    | [ "void", VGtype_void<Annotation>]
export type Gtype<Annotation> =  VTGtype<Annotation>
export type VTGtypeParameter$<Annotation> = Gidentifier<Annotation>
export type VGtypeParameter$<Annotation> = VTGtypeParameter$<Annotation>

export type NGtypeParameter$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtypeParameter$<Annotation>,
}
export type VTGtypeParameter<Annotation> = NGtypeParameter$<Annotation>
export type GtypeParameter<Annotation> =  VTGtypeParameter<Annotation>
export type VTGtypeSignature_construct$_parameters<Annotation> = Gparameter<Annotation>
export type VGtypeSignature_construct$_parameters<Annotation> = VTGtypeSignature_construct$_parameters<Annotation>[]
export type VTGtypeSignature_construct$_returnType<Annotation> = Gtype<Annotation>
export type VGtypeSignature_construct$_returnType<Annotation> = VTGtypeSignature_construct$_returnType<Annotation>
export type VTGtypeSignature_construct$<Annotation> = {
    readonly "parameters":  VGtypeSignature_construct$_parameters<Annotation>
    readonly "returnType":  VGtypeSignature_construct$_returnType<Annotation>
}
export type VGtypeSignature_construct$<Annotation> = VTGtypeSignature_construct$<Annotation>

export type NGtypeSignature_construct$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtypeSignature_construct$<Annotation>,
}
export type VTGtypeSignature_construct<Annotation> = NGtypeSignature_construct$<Annotation>
export type VGtypeSignature_construct<Annotation> = VTGtypeSignature_construct<Annotation>
export type VTGtypeSignature_index$_modifiers<Annotation> = Gmodifier<Annotation>
export type VGtypeSignature_index$_modifiers<Annotation> = VTGtypeSignature_index$_modifiers<Annotation>[]
export type VTGtypeSignature_index$_parameter<Annotation> = Gparameter<Annotation>
export type VGtypeSignature_index$_parameter<Annotation> = VTGtypeSignature_index$_parameter<Annotation>
export type VTGtypeSignature_index$_type<Annotation> = Gtype<Annotation>
export type VGtypeSignature_index$_type<Annotation> = null | VTGtypeSignature_index$_type<Annotation>
export type VTGtypeSignature_index$<Annotation> = {
    readonly "modifiers":  VGtypeSignature_index$_modifiers<Annotation>
    readonly "parameter":  VGtypeSignature_index$_parameter<Annotation>
    readonly "type":  VGtypeSignature_index$_type<Annotation>
}
export type VGtypeSignature_index$<Annotation> = VTGtypeSignature_index$<Annotation>

export type NGtypeSignature_index$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtypeSignature_index$<Annotation>,
}
export type VTGtypeSignature_index<Annotation> = NGtypeSignature_index$<Annotation>
export type VGtypeSignature_index<Annotation> = VTGtypeSignature_index<Annotation>
export type VTGtypeSignature_method$_name<Annotation> = Gidentifier<Annotation>
export type VGtypeSignature_method$_name<Annotation> = VTGtypeSignature_method$_name<Annotation>
export type VTGtypeSignature_method$_definition<Annotation> = GfunctionDefinition<Annotation>
export type VGtypeSignature_method$_definition<Annotation> = VTGtypeSignature_method$_definition<Annotation>
export type VTGtypeSignature_method$<Annotation> = {
    readonly "name":  VGtypeSignature_method$_name<Annotation>
    readonly "definition":  VGtypeSignature_method$_definition<Annotation>
}
export type VGtypeSignature_method$<Annotation> = VTGtypeSignature_method$<Annotation>

export type NGtypeSignature_method$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtypeSignature_method$<Annotation>,
}
export type VTGtypeSignature_method<Annotation> = NGtypeSignature_method$<Annotation>
export type VGtypeSignature_method<Annotation> = VTGtypeSignature_method<Annotation>
export type VTGtypeSignature_property$_modifiers<Annotation> = Gmodifier<Annotation>
export type VGtypeSignature_property$_modifiers<Annotation> = VTGtypeSignature_property$_modifiers<Annotation>[]
export type VTGtypeSignature_property$_name<Annotation> = GidentifierOrStringLiteral<Annotation>
export type VGtypeSignature_property$_name<Annotation> = VTGtypeSignature_property$_name<Annotation>

export type NGtypeSignature_property$_quesionToken$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTGtypeSignature_property$_quesionToken<Annotation> = NGtypeSignature_property$_quesionToken$<Annotation>
export type VGtypeSignature_property$_quesionToken<Annotation> = null | VTGtypeSignature_property$_quesionToken<Annotation>
export type VTGtypeSignature_property$_type<Annotation> = Gtype<Annotation>
export type VGtypeSignature_property$_type<Annotation> = null | VTGtypeSignature_property$_type<Annotation>
export type VTGtypeSignature_property$<Annotation> = {
    readonly "modifiers":  VGtypeSignature_property$_modifiers<Annotation>
    readonly "name":  VGtypeSignature_property$_name<Annotation>
    readonly "quesionToken":  VGtypeSignature_property$_quesionToken<Annotation>
    readonly "type":  VGtypeSignature_property$_type<Annotation>
}
export type VGtypeSignature_property$<Annotation> = VTGtypeSignature_property$<Annotation>

export type NGtypeSignature_property$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtypeSignature_property$<Annotation>,
}
export type VTGtypeSignature_property<Annotation> = NGtypeSignature_property$<Annotation>
export type VGtypeSignature_property<Annotation> = VTGtypeSignature_property<Annotation>
export type VTGtypeSignature<Annotation> =
    | [ "construct", VGtypeSignature_construct<Annotation>]
    | [ "index", VGtypeSignature_index<Annotation>]
    | [ "method", VGtypeSignature_method<Annotation>]
    | [ "property", VGtypeSignature_property<Annotation>]
export type GtypeSignature<Annotation> =  VTGtypeSignature<Annotation>
export type VTGvariableDeclaration$_name<Annotation> = Gidentifier<Annotation>
export type VGvariableDeclaration$_name<Annotation> = VTGvariableDeclaration$_name<Annotation>
export type VTGvariableDeclaration$_type<Annotation> = Gtype<Annotation>
export type VGvariableDeclaration$_type<Annotation> = null | VTGvariableDeclaration$_type<Annotation>
export type VTGvariableDeclaration$_expression<Annotation> = Gexpression<Annotation>
export type VGvariableDeclaration$_expression<Annotation> = null | VTGvariableDeclaration$_expression<Annotation>
export type VTGvariableDeclaration$<Annotation> = {
    readonly "name":  VGvariableDeclaration$_name<Annotation>
    readonly "type":  VGvariableDeclaration$_type<Annotation>
    readonly "expression":  VGvariableDeclaration$_expression<Annotation>
}
export type VGvariableDeclaration$<Annotation> = VTGvariableDeclaration$<Annotation>

export type NGvariableDeclaration$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGvariableDeclaration$<Annotation>,
}
export type VTGvariableDeclaration<Annotation> = NGvariableDeclaration$<Annotation>
export type GvariableDeclaration<Annotation> =  VTGvariableDeclaration<Annotation>
export type VTGvariableDeclarationList$<Annotation> = GvariableDeclaration<Annotation>
export type VGvariableDeclarationList$<Annotation> = VTGvariableDeclarationList$<Annotation>[]

export type NGvariableDeclarationList$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGvariableDeclarationList$<Annotation>,
}
export type VTGvariableDeclarationList<Annotation> = NGvariableDeclarationList$<Annotation>
export type GvariableDeclarationList<Annotation> =  VTGvariableDeclarationList<Annotation>
export type VTroot_statements<Annotation> = Gstatement<Annotation>
export type Vroot_statements<Annotation> = VTroot_statements<Annotation>[]

export type Nroot_endOfFile$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": null,
}
export type VTroot_endOfFile<Annotation> = Nroot_endOfFile$<Annotation>
export type Vroot_endOfFile<Annotation> = VTroot_endOfFile<Annotation>
export type VTroot<Annotation> = {
    readonly "statements":  Vroot_statements<Annotation>
    readonly "endOfFile":  Vroot_endOfFile<Annotation>
}
export type Vroot<Annotation> = VTroot<Annotation>

export type Nroot<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot<Annotation>,
}
export type Root<Annotation> = Nroot<Annotation>