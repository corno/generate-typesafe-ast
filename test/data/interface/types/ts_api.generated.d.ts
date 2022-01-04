import * as pr from "pareto-runtime";
export declare type TVTGblock$<Annotation> = TGstatement<Annotation>;
export declare type TVGblock$<Annotation> = TVTGblock$<Annotation>[];
export declare type TNGblock$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGblock$<Annotation>;
};
export declare type TVTGblock<Annotation> = TNGblock$<Annotation>;
export declare type TGblock<Annotation> = TVTGblock<Annotation>;
export declare type TVTGexpression_arrayLiteral$<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_arrayLiteral$<Annotation> = TVTGexpression_arrayLiteral$<Annotation>[];
export declare type TNGexpression_arrayLiteral$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_arrayLiteral$<Annotation>;
};
export declare type TVTGexpression_arrayLiteral<Annotation> = TNGexpression_arrayLiteral$<Annotation>;
export declare type TVGexpression_arrayLiteral<Annotation> = TVTGexpression_arrayLiteral<Annotation>;
export declare type TVTGexpression_arrowFunction$_parameters<Annotation> = TGparameter<Annotation>;
export declare type TVGexpression_arrowFunction$_parameters<Annotation> = TVTGexpression_arrowFunction$_parameters<Annotation>[];
export declare type TVTGexpression_arrowFunction$_returnType<Annotation> = TGtype<Annotation>;
export declare type TVGexpression_arrowFunction$_returnType<Annotation> = pr.optional<TVTGexpression_arrowFunction$_returnType<Annotation>>;
export declare type TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_arrowFunction$_equalsGreaterThan<Annotation> = TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>;
export declare type TVGexpression_arrowFunction$_equalsGreaterThan<Annotation> = TVTGexpression_arrowFunction$_equalsGreaterThan<Annotation>;
export declare type TVTGexpression_arrowFunction$_implementation_block<Annotation> = TGblock<Annotation>;
export declare type TVGexpression_arrowFunction$_implementation_block<Annotation> = TVTGexpression_arrowFunction$_implementation_block<Annotation>;
export declare type TVTGexpression_arrowFunction$_implementation_expression<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_arrowFunction$_implementation_expression<Annotation> = TVTGexpression_arrowFunction$_implementation_expression<Annotation>;
export declare type TVTGexpression_arrowFunction$_implementation<Annotation> = ["block", TVGexpression_arrowFunction$_implementation_block<Annotation>] | ["expression", TVGexpression_arrowFunction$_implementation_expression<Annotation>];
export declare type TVGexpression_arrowFunction$_implementation<Annotation> = TVTGexpression_arrowFunction$_implementation<Annotation>;
export declare type TVTGexpression_arrowFunction$<Annotation> = {
    readonly "parameters": TVGexpression_arrowFunction$_parameters<Annotation>;
    readonly "returnType": TVGexpression_arrowFunction$_returnType<Annotation>;
    readonly "equalsGreaterThan": TVGexpression_arrowFunction$_equalsGreaterThan<Annotation>;
    readonly "implementation": TVGexpression_arrowFunction$_implementation<Annotation>;
};
export declare type TVGexpression_arrowFunction$<Annotation> = TVTGexpression_arrowFunction$<Annotation>;
export declare type TNGexpression_arrowFunction$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_arrowFunction$<Annotation>;
};
export declare type TVTGexpression_arrowFunction<Annotation> = TNGexpression_arrowFunction$<Annotation>;
export declare type TVGexpression_arrowFunction<Annotation> = TVTGexpression_arrowFunction<Annotation>;
export declare type TVTGexpression_binary$_leftHandSide<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_binary$_leftHandSide<Annotation> = TVTGexpression_binary$_leftHandSide<Annotation>;
export declare type TNGexpression_binary$_operator_ampersandAmpersand$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_ampersandAmpersand<Annotation> = TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>;
export declare type TVGexpression_binary$_operator_ampersandAmpersand<Annotation> = TVTGexpression_binary$_operator_ampersandAmpersand<Annotation>;
export declare type TNGexpression_binary$_operator_barBar$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_barBar<Annotation> = TNGexpression_binary$_operator_barBar$<Annotation>;
export declare type TVGexpression_binary$_operator_barBar<Annotation> = TVTGexpression_binary$_operator_barBar<Annotation>;
export declare type TNGexpression_binary$_operator_equals$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_equals<Annotation> = TNGexpression_binary$_operator_equals$<Annotation>;
export declare type TVGexpression_binary$_operator_equals<Annotation> = TVTGexpression_binary$_operator_equals<Annotation>;
export declare type TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_equalsEqualsEquals<Annotation> = TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>;
export declare type TVGexpression_binary$_operator_equalsEqualsEquals<Annotation> = TVTGexpression_binary$_operator_equalsEqualsEquals<Annotation>;
export declare type TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_exclamationEqualsEquals<Annotation> = TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>;
export declare type TVGexpression_binary$_operator_exclamationEqualsEquals<Annotation> = TVTGexpression_binary$_operator_exclamationEqualsEquals<Annotation>;
export declare type TNGexpression_binary$_operator_greaterThan$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_greaterThan<Annotation> = TNGexpression_binary$_operator_greaterThan$<Annotation>;
export declare type TVGexpression_binary$_operator_greaterThan<Annotation> = TVTGexpression_binary$_operator_greaterThan<Annotation>;
export declare type TNGexpression_binary$_operator_lessThan$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_lessThan<Annotation> = TNGexpression_binary$_operator_lessThan$<Annotation>;
export declare type TVGexpression_binary$_operator_lessThan<Annotation> = TVTGexpression_binary$_operator_lessThan<Annotation>;
export declare type TNGexpression_binary$_operator_minus$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_minus<Annotation> = TNGexpression_binary$_operator_minus$<Annotation>;
export declare type TVGexpression_binary$_operator_minus<Annotation> = TVTGexpression_binary$_operator_minus<Annotation>;
export declare type TNGexpression_binary$_operator_minusEquals$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_minusEquals<Annotation> = TNGexpression_binary$_operator_minusEquals$<Annotation>;
export declare type TVGexpression_binary$_operator_minusEquals<Annotation> = TVTGexpression_binary$_operator_minusEquals<Annotation>;
export declare type TNGexpression_binary$_operator_plus$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_plus<Annotation> = TNGexpression_binary$_operator_plus$<Annotation>;
export declare type TVGexpression_binary$_operator_plus<Annotation> = TVTGexpression_binary$_operator_plus<Annotation>;
export declare type TNGexpression_binary$_operator_plusEquals$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_binary$_operator_plusEquals<Annotation> = TNGexpression_binary$_operator_plusEquals$<Annotation>;
export declare type TVGexpression_binary$_operator_plusEquals<Annotation> = TVTGexpression_binary$_operator_plusEquals<Annotation>;
export declare type TVTGexpression_binary$_operator<Annotation> = ["ampersandAmpersand", TVGexpression_binary$_operator_ampersandAmpersand<Annotation>] | ["barBar", TVGexpression_binary$_operator_barBar<Annotation>] | ["equals", TVGexpression_binary$_operator_equals<Annotation>] | ["equalsEqualsEquals", TVGexpression_binary$_operator_equalsEqualsEquals<Annotation>] | ["exclamationEqualsEquals", TVGexpression_binary$_operator_exclamationEqualsEquals<Annotation>] | ["greaterThan", TVGexpression_binary$_operator_greaterThan<Annotation>] | ["lessThan", TVGexpression_binary$_operator_lessThan<Annotation>] | ["minus", TVGexpression_binary$_operator_minus<Annotation>] | ["minusEquals", TVGexpression_binary$_operator_minusEquals<Annotation>] | ["plus", TVGexpression_binary$_operator_plus<Annotation>] | ["plusEquals", TVGexpression_binary$_operator_plusEquals<Annotation>];
export declare type TVGexpression_binary$_operator<Annotation> = TVTGexpression_binary$_operator<Annotation>;
export declare type TVTGexpression_binary$_rightHandSide<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_binary$_rightHandSide<Annotation> = TVTGexpression_binary$_rightHandSide<Annotation>;
export declare type TVTGexpression_binary$<Annotation> = {
    readonly "leftHandSide": TVGexpression_binary$_leftHandSide<Annotation>;
    readonly "operator": TVGexpression_binary$_operator<Annotation>;
    readonly "rightHandSide": TVGexpression_binary$_rightHandSide<Annotation>;
};
export declare type TVGexpression_binary$<Annotation> = TVTGexpression_binary$<Annotation>;
export declare type TNGexpression_binary$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_binary$<Annotation>;
};
export declare type TVTGexpression_binary<Annotation> = TNGexpression_binary$<Annotation>;
export declare type TVGexpression_binary<Annotation> = TVTGexpression_binary<Annotation>;
export declare type TVTGexpression_call$_function<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_call$_function<Annotation> = TVTGexpression_call$_function<Annotation>;
export declare type TVTGexpression_call$_typeParameters<Annotation> = TGtype<Annotation>;
export declare type TVGexpression_call$_typeParameters<Annotation> = TVTGexpression_call$_typeParameters<Annotation>[];
export declare type TVTGexpression_call$_parameters<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_call$_parameters<Annotation> = TVTGexpression_call$_parameters<Annotation>[];
export declare type TVTGexpression_call$<Annotation> = {
    readonly "function": TVGexpression_call$_function<Annotation>;
    readonly "typeParameters": TVGexpression_call$_typeParameters<Annotation>;
    readonly "parameters": TVGexpression_call$_parameters<Annotation>;
};
export declare type TVGexpression_call$<Annotation> = TVTGexpression_call$<Annotation>;
export declare type TNGexpression_call$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_call$<Annotation>;
};
export declare type TVTGexpression_call<Annotation> = TNGexpression_call$<Annotation>;
export declare type TVGexpression_call<Annotation> = TVTGexpression_call<Annotation>;
export declare type TVTGexpression_conditional$_test<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_conditional$_test<Annotation> = TVTGexpression_conditional$_test<Annotation>;
export declare type TNGexpression_conditional$_questionToken$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_conditional$_questionToken<Annotation> = TNGexpression_conditional$_questionToken$<Annotation>;
export declare type TVGexpression_conditional$_questionToken<Annotation> = TVTGexpression_conditional$_questionToken<Annotation>;
export declare type TVTGexpression_conditional$_ifExpression<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_conditional$_ifExpression<Annotation> = TVTGexpression_conditional$_ifExpression<Annotation>;
export declare type TNGexpression_conditional$_colonToken$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_conditional$_colonToken<Annotation> = TNGexpression_conditional$_colonToken$<Annotation>;
export declare type TVGexpression_conditional$_colonToken<Annotation> = TVTGexpression_conditional$_colonToken<Annotation>;
export declare type TVTGexpression_conditional$_elseExpression<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_conditional$_elseExpression<Annotation> = TVTGexpression_conditional$_elseExpression<Annotation>;
export declare type TVTGexpression_conditional$<Annotation> = {
    readonly "test": TVGexpression_conditional$_test<Annotation>;
    readonly "questionToken": TVGexpression_conditional$_questionToken<Annotation>;
    readonly "ifExpression": TVGexpression_conditional$_ifExpression<Annotation>;
    readonly "colonToken": TVGexpression_conditional$_colonToken<Annotation>;
    readonly "elseExpression": TVGexpression_conditional$_elseExpression<Annotation>;
};
export declare type TVGexpression_conditional$<Annotation> = TVTGexpression_conditional$<Annotation>;
export declare type TNGexpression_conditional$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_conditional$<Annotation>;
};
export declare type TVTGexpression_conditional<Annotation> = TNGexpression_conditional$<Annotation>;
export declare type TVGexpression_conditional<Annotation> = TVTGexpression_conditional<Annotation>;
export declare type TVTGexpression_elementAccess$_array<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_elementAccess$_array<Annotation> = TVTGexpression_elementAccess$_array<Annotation>;
export declare type TVTGexpression_elementAccess$_element<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_elementAccess$_element<Annotation> = TVTGexpression_elementAccess$_element<Annotation>;
export declare type TVTGexpression_elementAccess$<Annotation> = {
    readonly "array": TVGexpression_elementAccess$_array<Annotation>;
    readonly "element": TVGexpression_elementAccess$_element<Annotation>;
};
export declare type TVGexpression_elementAccess$<Annotation> = TVTGexpression_elementAccess$<Annotation>;
export declare type TNGexpression_elementAccess$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_elementAccess$<Annotation>;
};
export declare type TVTGexpression_elementAccess<Annotation> = TNGexpression_elementAccess$<Annotation>;
export declare type TVGexpression_elementAccess<Annotation> = TVTGexpression_elementAccess<Annotation>;
export declare type TNGexpression_false$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_false<Annotation> = TNGexpression_false$<Annotation>;
export declare type TVGexpression_false<Annotation> = TVTGexpression_false<Annotation>;
export declare type TVTGexpression_identifier<Annotation> = TGidentifier<Annotation>;
export declare type TVGexpression_identifier<Annotation> = TVTGexpression_identifier<Annotation>;
export declare type TVTGexpression_new$_class<Annotation> = TGidentifier<Annotation>;
export declare type TVGexpression_new$_class<Annotation> = TVTGexpression_new$_class<Annotation>;
export declare type TVTGexpression_new$_parameters<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_new$_parameters<Annotation> = TVTGexpression_new$_parameters<Annotation>[];
export declare type TVTGexpression_new$<Annotation> = {
    readonly "class": TVGexpression_new$_class<Annotation>;
    readonly "parameters": TVGexpression_new$_parameters<Annotation>;
};
export declare type TVGexpression_new$<Annotation> = TVTGexpression_new$<Annotation>;
export declare type TNGexpression_new$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_new$<Annotation>;
};
export declare type TVTGexpression_new<Annotation> = TNGexpression_new$<Annotation>;
export declare type TVGexpression_new<Annotation> = TVTGexpression_new<Annotation>;
export declare type TNGexpression_noSubstitutionTemplateLiteral$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_noSubstitutionTemplateLiteral<Annotation> = TNGexpression_noSubstitutionTemplateLiteral$<Annotation>;
export declare type TVGexpression_noSubstitutionTemplateLiteral<Annotation> = TVTGexpression_noSubstitutionTemplateLiteral<Annotation>;
export declare type TVTGexpression_numericLiteral<Annotation> = TGnumericLiteral<Annotation>;
export declare type TVGexpression_numericLiteral<Annotation> = TVTGexpression_numericLiteral<Annotation>;
export declare type TNGexpression_nullKeyword$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_nullKeyword<Annotation> = TNGexpression_nullKeyword$<Annotation>;
export declare type TVGexpression_nullKeyword<Annotation> = TVTGexpression_nullKeyword<Annotation>;
export declare type TVTGexpression_objectLiteral$$_name_identifier<Annotation> = TGidentifier<Annotation>;
export declare type TVGexpression_objectLiteral$$_name_identifier<Annotation> = TVTGexpression_objectLiteral$$_name_identifier<Annotation>;
export declare type TVTGexpression_objectLiteral$$_name_numericLiteral<Annotation> = TGnumericLiteral<Annotation>;
export declare type TVGexpression_objectLiteral$$_name_numericLiteral<Annotation> = TVTGexpression_objectLiteral$$_name_numericLiteral<Annotation>;
export declare type TVTGexpression_objectLiteral$$_name_stringLiteral<Annotation> = TGstringLiteral<Annotation>;
export declare type TVGexpression_objectLiteral$$_name_stringLiteral<Annotation> = TVTGexpression_objectLiteral$$_name_stringLiteral<Annotation>;
export declare type TVTGexpression_objectLiteral$$_name<Annotation> = ["identifier", TVGexpression_objectLiteral$$_name_identifier<Annotation>] | ["numericLiteral", TVGexpression_objectLiteral$$_name_numericLiteral<Annotation>] | ["stringLiteral", TVGexpression_objectLiteral$$_name_stringLiteral<Annotation>];
export declare type TVGexpression_objectLiteral$$_name<Annotation> = TVTGexpression_objectLiteral$$_name<Annotation>;
export declare type TVTGexpression_objectLiteral$$_expression<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_objectLiteral$$_expression<Annotation> = TVTGexpression_objectLiteral$$_expression<Annotation>;
export declare type TVTGexpression_objectLiteral$$<Annotation> = {
    readonly "name": TVGexpression_objectLiteral$$_name<Annotation>;
    readonly "expression": TVGexpression_objectLiteral$$_expression<Annotation>;
};
export declare type TVGexpression_objectLiteral$$<Annotation> = TVTGexpression_objectLiteral$$<Annotation>;
export declare type TNGexpression_objectLiteral$$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_objectLiteral$$<Annotation>;
};
export declare type TVTGexpression_objectLiteral$<Annotation> = TNGexpression_objectLiteral$$<Annotation>;
export declare type TVGexpression_objectLiteral$<Annotation> = TVTGexpression_objectLiteral$<Annotation>[];
export declare type TNGexpression_objectLiteral$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_objectLiteral$<Annotation>;
};
export declare type TVTGexpression_objectLiteral<Annotation> = TNGexpression_objectLiteral$<Annotation>;
export declare type TVGexpression_objectLiteral<Annotation> = TVTGexpression_objectLiteral<Annotation>;
export declare type TVTGexpression_parenthesizedExpression$<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_parenthesizedExpression$<Annotation> = TVTGexpression_parenthesizedExpression$<Annotation>;
export declare type TNGexpression_parenthesizedExpression$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_parenthesizedExpression$<Annotation>;
};
export declare type TVTGexpression_parenthesizedExpression<Annotation> = TNGexpression_parenthesizedExpression$<Annotation>;
export declare type TVGexpression_parenthesizedExpression<Annotation> = TVTGexpression_parenthesizedExpression<Annotation>;
export declare type TVTGexpression_postfixUnary$<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_postfixUnary$<Annotation> = TVTGexpression_postfixUnary$<Annotation>;
export declare type TNGexpression_postfixUnary$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_postfixUnary$<Annotation>;
};
export declare type TVTGexpression_postfixUnary<Annotation> = TNGexpression_postfixUnary$<Annotation>;
export declare type TVGexpression_postfixUnary<Annotation> = TVTGexpression_postfixUnary<Annotation>;
export declare type TVTGexpression_prefixUnary$<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_prefixUnary$<Annotation> = TVTGexpression_prefixUnary$<Annotation>;
export declare type TNGexpression_prefixUnary$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_prefixUnary$<Annotation>;
};
export declare type TVTGexpression_prefixUnary<Annotation> = TNGexpression_prefixUnary$<Annotation>;
export declare type TVGexpression_prefixUnary<Annotation> = TVTGexpression_prefixUnary<Annotation>;
export declare type TVTGexpression_propertyAccess$_object<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_propertyAccess$_object<Annotation> = TVTGexpression_propertyAccess$_object<Annotation>;
export declare type TVTGexpression_propertyAccess$_property<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_propertyAccess$_property<Annotation> = TVTGexpression_propertyAccess$_property<Annotation>;
export declare type TVTGexpression_propertyAccess$<Annotation> = {
    readonly "object": TVGexpression_propertyAccess$_object<Annotation>;
    readonly "property": TVGexpression_propertyAccess$_property<Annotation>;
};
export declare type TVGexpression_propertyAccess$<Annotation> = TVTGexpression_propertyAccess$<Annotation>;
export declare type TNGexpression_propertyAccess$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_propertyAccess$<Annotation>;
};
export declare type TVTGexpression_propertyAccess<Annotation> = TNGexpression_propertyAccess$<Annotation>;
export declare type TVGexpression_propertyAccess<Annotation> = TVTGexpression_propertyAccess<Annotation>;
export declare type TVTGexpression_stringLiteral<Annotation> = TGstringLiteral<Annotation>;
export declare type TVGexpression_stringLiteral<Annotation> = TVTGexpression_stringLiteral<Annotation>;
export declare type TNGexpression_template$_head$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": string;
};
export declare type TVTGexpression_template$_head<Annotation> = TNGexpression_template$_head$<Annotation>;
export declare type TVGexpression_template$_head<Annotation> = TVTGexpression_template$_head<Annotation>;
export declare type TVTGexpression_template$_spans$_expression<Annotation> = TGexpression<Annotation>;
export declare type TVGexpression_template$_spans$_expression<Annotation> = TVTGexpression_template$_spans$_expression<Annotation>;
export declare type TNGexpression_template$_spans$_x_middle$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": string;
};
export declare type TVTGexpression_template$_spans$_x_middle<Annotation> = TNGexpression_template$_spans$_x_middle$<Annotation>;
export declare type TVGexpression_template$_spans$_x_middle<Annotation> = TVTGexpression_template$_spans$_x_middle<Annotation>;
export declare type TNGexpression_template$_spans$_x_tail$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": string;
};
export declare type TVTGexpression_template$_spans$_x_tail<Annotation> = TNGexpression_template$_spans$_x_tail$<Annotation>;
export declare type TVGexpression_template$_spans$_x_tail<Annotation> = TVTGexpression_template$_spans$_x_tail<Annotation>;
export declare type TVTGexpression_template$_spans$_x<Annotation> = ["middle", TVGexpression_template$_spans$_x_middle<Annotation>] | ["tail", TVGexpression_template$_spans$_x_tail<Annotation>];
export declare type TVGexpression_template$_spans$_x<Annotation> = TVTGexpression_template$_spans$_x<Annotation>;
export declare type TVTGexpression_template$_spans$<Annotation> = {
    readonly "expression": TVGexpression_template$_spans$_expression<Annotation>;
    readonly "x": TVGexpression_template$_spans$_x<Annotation>;
};
export declare type TVGexpression_template$_spans$<Annotation> = TVTGexpression_template$_spans$<Annotation>;
export declare type TNGexpression_template$_spans$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_template$_spans$<Annotation>;
};
export declare type TVTGexpression_template$_spans<Annotation> = TNGexpression_template$_spans$<Annotation>;
export declare type TVGexpression_template$_spans<Annotation> = TVTGexpression_template$_spans<Annotation>[];
export declare type TVTGexpression_template$<Annotation> = {
    readonly "head": TVGexpression_template$_head<Annotation>;
    readonly "spans": TVGexpression_template$_spans<Annotation>;
};
export declare type TVGexpression_template$<Annotation> = TVTGexpression_template$<Annotation>;
export declare type TNGexpression_template$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGexpression_template$<Annotation>;
};
export declare type TVTGexpression_template<Annotation> = TNGexpression_template$<Annotation>;
export declare type TVGexpression_template<Annotation> = TVTGexpression_template<Annotation>;
export declare type TNGexpression_true$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGexpression_true<Annotation> = TNGexpression_true$<Annotation>;
export declare type TVGexpression_true<Annotation> = TVTGexpression_true<Annotation>;
export declare type TVTGexpression<Annotation> = ["arrayLiteral", TVGexpression_arrayLiteral<Annotation>] | ["arrowFunction", TVGexpression_arrowFunction<Annotation>] | ["binary", TVGexpression_binary<Annotation>] | ["call", TVGexpression_call<Annotation>] | ["conditional", TVGexpression_conditional<Annotation>] | ["elementAccess", TVGexpression_elementAccess<Annotation>] | ["false", TVGexpression_false<Annotation>] | ["identifier", TVGexpression_identifier<Annotation>] | ["new", TVGexpression_new<Annotation>] | ["noSubstitutionTemplateLiteral", TVGexpression_noSubstitutionTemplateLiteral<Annotation>] | ["numericLiteral", TVGexpression_numericLiteral<Annotation>] | ["nullKeyword", TVGexpression_nullKeyword<Annotation>] | ["objectLiteral", TVGexpression_objectLiteral<Annotation>] | ["parenthesizedExpression", TVGexpression_parenthesizedExpression<Annotation>] | ["postfixUnary", TVGexpression_postfixUnary<Annotation>] | ["prefixUnary", TVGexpression_prefixUnary<Annotation>] | ["propertyAccess", TVGexpression_propertyAccess<Annotation>] | ["stringLiteral", TVGexpression_stringLiteral<Annotation>] | ["template", TVGexpression_template<Annotation>] | ["true", TVGexpression_true<Annotation>];
export declare type TGexpression<Annotation> = TVTGexpression<Annotation>;
export declare type TVTGfunctionDefinition_typeParameters<Annotation> = TGtypeParameter<Annotation>;
export declare type TVGfunctionDefinition_typeParameters<Annotation> = TVTGfunctionDefinition_typeParameters<Annotation>[];
export declare type TVTGfunctionDefinition_parameters<Annotation> = TGparameter<Annotation>;
export declare type TVGfunctionDefinition_parameters<Annotation> = TVTGfunctionDefinition_parameters<Annotation>[];
export declare type TVTGfunctionDefinition_returnType<Annotation> = TGtype<Annotation>;
export declare type TVGfunctionDefinition_returnType<Annotation> = pr.optional<TVTGfunctionDefinition_returnType<Annotation>>;
export declare type TVTGfunctionDefinition<Annotation> = {
    readonly "typeParameters": TVGfunctionDefinition_typeParameters<Annotation>;
    readonly "parameters": TVGfunctionDefinition_parameters<Annotation>;
    readonly "returnType": TVGfunctionDefinition_returnType<Annotation>;
};
export declare type TGfunctionDefinition<Annotation> = TVTGfunctionDefinition<Annotation>;
export declare type TNGidentifier$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": string;
};
export declare type TVTGidentifier<Annotation> = TNGidentifier$<Annotation>;
export declare type TGidentifier<Annotation> = TVTGidentifier<Annotation>;
export declare type TVTGidentifierOrStringLiteral_identifier<Annotation> = TGidentifier<Annotation>;
export declare type TVGidentifierOrStringLiteral_identifier<Annotation> = TVTGidentifierOrStringLiteral_identifier<Annotation>;
export declare type TVTGidentifierOrStringLiteral_stringLiteral<Annotation> = TGstringLiteral<Annotation>;
export declare type TVGidentifierOrStringLiteral_stringLiteral<Annotation> = TVTGidentifierOrStringLiteral_stringLiteral<Annotation>;
export declare type TVTGidentifierOrStringLiteral<Annotation> = ["identifier", TVGidentifierOrStringLiteral_identifier<Annotation>] | ["stringLiteral", TVGidentifierOrStringLiteral_stringLiteral<Annotation>];
export declare type TGidentifierOrStringLiteral<Annotation> = TVTGidentifierOrStringLiteral<Annotation>;
export declare type TNGmodifier_declare$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGmodifier_declare<Annotation> = TNGmodifier_declare$<Annotation>;
export declare type TVGmodifier_declare<Annotation> = TVTGmodifier_declare<Annotation>;
export declare type TNGmodifier_export$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGmodifier_export<Annotation> = TNGmodifier_export$<Annotation>;
export declare type TVGmodifier_export<Annotation> = TVTGmodifier_export<Annotation>;
export declare type TNGmodifier_readonly$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGmodifier_readonly<Annotation> = TNGmodifier_readonly$<Annotation>;
export declare type TVGmodifier_readonly<Annotation> = TVTGmodifier_readonly<Annotation>;
export declare type TVTGmodifier<Annotation> = ["declare", TVGmodifier_declare<Annotation>] | ["export", TVGmodifier_export<Annotation>] | ["readonly", TVGmodifier_readonly<Annotation>];
export declare type TGmodifier<Annotation> = TVTGmodifier<Annotation>;
export declare type TNGnumericLiteral$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": string;
};
export declare type TVTGnumericLiteral<Annotation> = TNGnumericLiteral$<Annotation>;
export declare type TGnumericLiteral<Annotation> = TVTGnumericLiteral<Annotation>;
export declare type TVTGparameter$_name<Annotation> = TGidentifier<Annotation>;
export declare type TVGparameter$_name<Annotation> = TVTGparameter$_name<Annotation>;
export declare type TNGparameter$_questionToken$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGparameter$_questionToken<Annotation> = TNGparameter$_questionToken$<Annotation>;
export declare type TVGparameter$_questionToken<Annotation> = pr.optional<TVTGparameter$_questionToken<Annotation>>;
export declare type TVTGparameter$_type<Annotation> = TGtype<Annotation>;
export declare type TVGparameter$_type<Annotation> = pr.optional<TVTGparameter$_type<Annotation>>;
export declare type TVTGparameter$<Annotation> = {
    readonly "name": TVGparameter$_name<Annotation>;
    readonly "questionToken": TVGparameter$_questionToken<Annotation>;
    readonly "type": TVGparameter$_type<Annotation>;
};
export declare type TVGparameter$<Annotation> = TVTGparameter$<Annotation>;
export declare type TNGparameter$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGparameter$<Annotation>;
};
export declare type TVTGparameter<Annotation> = TNGparameter$<Annotation>;
export declare type TGparameter<Annotation> = TVTGparameter<Annotation>;
export declare type TVTGstatement_block<Annotation> = TGblock<Annotation>;
export declare type TVGstatement_block<Annotation> = TVTGstatement_block<Annotation>;
export declare type TVTGstatement_break$<Annotation> = TGidentifier<Annotation>;
export declare type TVGstatement_break$<Annotation> = pr.optional<TVTGstatement_break$<Annotation>>;
export declare type TNGstatement_break$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_break$<Annotation>;
};
export declare type TVTGstatement_break<Annotation> = TNGstatement_break$<Annotation>;
export declare type TVGstatement_break<Annotation> = TVTGstatement_break<Annotation>;
export declare type TVTGstatement_export$<Annotation> = TGstringLiteral<Annotation>;
export declare type TVGstatement_export$<Annotation> = TVTGstatement_export$<Annotation>;
export declare type TNGstatement_export$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_export$<Annotation>;
};
export declare type TVTGstatement_export<Annotation> = TNGstatement_export$<Annotation>;
export declare type TVGstatement_export<Annotation> = TVTGstatement_export<Annotation>;
export declare type TVTGstatement_expression$<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_expression$<Annotation> = TVTGstatement_expression$<Annotation>;
export declare type TNGstatement_expression$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_expression$<Annotation>;
};
export declare type TVTGstatement_expression<Annotation> = TNGstatement_expression$<Annotation>;
export declare type TVGstatement_expression<Annotation> = TVTGstatement_expression<Annotation>;
export declare type TVTGstatement_for$_initializer<Annotation> = TGvariableDeclarationList<Annotation>;
export declare type TVGstatement_for$_initializer<Annotation> = TVTGstatement_for$_initializer<Annotation>;
export declare type TVTGstatement_for$_condition<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_for$_condition<Annotation> = TVTGstatement_for$_condition<Annotation>;
export declare type TVTGstatement_for$_incrementer<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_for$_incrementer<Annotation> = TVTGstatement_for$_incrementer<Annotation>;
export declare type TVTGstatement_for$_block<Annotation> = TGblock<Annotation>;
export declare type TVGstatement_for$_block<Annotation> = TVTGstatement_for$_block<Annotation>;
export declare type TVTGstatement_for$<Annotation> = {
    readonly "initializer": TVGstatement_for$_initializer<Annotation>;
    readonly "condition": TVGstatement_for$_condition<Annotation>;
    readonly "incrementer": TVGstatement_for$_incrementer<Annotation>;
    readonly "block": TVGstatement_for$_block<Annotation>;
};
export declare type TVGstatement_for$<Annotation> = TVTGstatement_for$<Annotation>;
export declare type TNGstatement_for$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_for$<Annotation>;
};
export declare type TVTGstatement_for<Annotation> = TNGstatement_for$<Annotation>;
export declare type TVGstatement_for<Annotation> = TVTGstatement_for<Annotation>;
export declare type TVTGstatement_function$_modifiers<Annotation> = TGmodifier<Annotation>;
export declare type TVGstatement_function$_modifiers<Annotation> = TVTGstatement_function$_modifiers<Annotation>[];
export declare type TVTGstatement_function$_name<Annotation> = TGidentifier<Annotation>;
export declare type TVGstatement_function$_name<Annotation> = TVTGstatement_function$_name<Annotation>;
export declare type TVTGstatement_function$_definition<Annotation> = TGfunctionDefinition<Annotation>;
export declare type TVGstatement_function$_definition<Annotation> = TVTGstatement_function$_definition<Annotation>;
export declare type TVTGstatement_function$_block<Annotation> = TGblock<Annotation>;
export declare type TVGstatement_function$_block<Annotation> = pr.optional<TVTGstatement_function$_block<Annotation>>;
export declare type TVTGstatement_function$<Annotation> = {
    readonly "modifiers": TVGstatement_function$_modifiers<Annotation>;
    readonly "name": TVGstatement_function$_name<Annotation>;
    readonly "definition": TVGstatement_function$_definition<Annotation>;
    readonly "block": TVGstatement_function$_block<Annotation>;
};
export declare type TVGstatement_function$<Annotation> = TVTGstatement_function$<Annotation>;
export declare type TNGstatement_function$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_function$<Annotation>;
};
export declare type TVTGstatement_function<Annotation> = TNGstatement_function$<Annotation>;
export declare type TVGstatement_function<Annotation> = TVTGstatement_function<Annotation>;
export declare type TVTGstatement_if$_expression<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_if$_expression<Annotation> = TVTGstatement_if$_expression<Annotation>;
export declare type TVTGstatement_if$_thenStatement<Annotation> = TGstatement<Annotation>;
export declare type TVGstatement_if$_thenStatement<Annotation> = TVTGstatement_if$_thenStatement<Annotation>;
export declare type TVTGstatement_if$_elseStatement<Annotation> = TGstatement<Annotation>;
export declare type TVGstatement_if$_elseStatement<Annotation> = pr.optional<TVTGstatement_if$_elseStatement<Annotation>>;
export declare type TVTGstatement_if$<Annotation> = {
    readonly "expression": TVGstatement_if$_expression<Annotation>;
    readonly "thenStatement": TVGstatement_if$_thenStatement<Annotation>;
    readonly "elseStatement": TVGstatement_if$_elseStatement<Annotation>;
};
export declare type TVGstatement_if$<Annotation> = TVTGstatement_if$<Annotation>;
export declare type TNGstatement_if$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_if$<Annotation>;
};
export declare type TVTGstatement_if<Annotation> = TNGstatement_if$<Annotation>;
export declare type TVGstatement_if<Annotation> = TVTGstatement_if<Annotation>;
export declare type TVTGstatement_import$_clause$_namespace$<Annotation> = TGidentifier<Annotation>;
export declare type TVGstatement_import$_clause$_namespace$<Annotation> = TVTGstatement_import$_clause$_namespace$<Annotation>;
export declare type TNGstatement_import$_clause$_namespace$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_import$_clause$_namespace$<Annotation>;
};
export declare type TVTGstatement_import$_clause$_namespace<Annotation> = TNGstatement_import$_clause$_namespace$<Annotation>;
export declare type TVGstatement_import$_clause$_namespace<Annotation> = TVTGstatement_import$_clause$_namespace<Annotation>;
export declare type TVTGstatement_import$_clause$_named$$_name<Annotation> = TGidentifier<Annotation>;
export declare type TVGstatement_import$_clause$_named$$_name<Annotation> = TVTGstatement_import$_clause$_named$$_name<Annotation>;
export declare type TVTGstatement_import$_clause$_named$$_as<Annotation> = TGidentifier<Annotation>;
export declare type TVGstatement_import$_clause$_named$$_as<Annotation> = pr.optional<TVTGstatement_import$_clause$_named$$_as<Annotation>>;
export declare type TVTGstatement_import$_clause$_named$$<Annotation> = {
    readonly "name": TVGstatement_import$_clause$_named$$_name<Annotation>;
    readonly "as": TVGstatement_import$_clause$_named$$_as<Annotation>;
};
export declare type TVGstatement_import$_clause$_named$$<Annotation> = TVTGstatement_import$_clause$_named$$<Annotation>;
export declare type TNGstatement_import$_clause$_named$$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_import$_clause$_named$$<Annotation>;
};
export declare type TVTGstatement_import$_clause$_named$<Annotation> = TNGstatement_import$_clause$_named$$<Annotation>;
export declare type TVGstatement_import$_clause$_named$<Annotation> = TVTGstatement_import$_clause$_named$<Annotation>[];
export declare type TNGstatement_import$_clause$_named$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_import$_clause$_named$<Annotation>;
};
export declare type TVTGstatement_import$_clause$_named<Annotation> = TNGstatement_import$_clause$_named$<Annotation>;
export declare type TVGstatement_import$_clause$_named<Annotation> = TVTGstatement_import$_clause$_named<Annotation>;
export declare type TVTGstatement_import$_clause$<Annotation> = ["namespace", TVGstatement_import$_clause$_namespace<Annotation>] | ["named", TVGstatement_import$_clause$_named<Annotation>];
export declare type TVGstatement_import$_clause$<Annotation> = TVTGstatement_import$_clause$<Annotation>;
export declare type TNGstatement_import$_clause$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_import$_clause$<Annotation>;
};
export declare type TVTGstatement_import$_clause<Annotation> = TNGstatement_import$_clause$<Annotation>;
export declare type TVGstatement_import$_clause<Annotation> = TVTGstatement_import$_clause<Annotation>;
export declare type TVTGstatement_import$_file<Annotation> = TGstringLiteral<Annotation>;
export declare type TVGstatement_import$_file<Annotation> = TVTGstatement_import$_file<Annotation>;
export declare type TVTGstatement_import$<Annotation> = {
    readonly "clause": TVGstatement_import$_clause<Annotation>;
    readonly "file": TVGstatement_import$_file<Annotation>;
};
export declare type TVGstatement_import$<Annotation> = TVTGstatement_import$<Annotation>;
export declare type TNGstatement_import$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_import$<Annotation>;
};
export declare type TVTGstatement_import<Annotation> = TNGstatement_import$<Annotation>;
export declare type TVGstatement_import<Annotation> = TVTGstatement_import<Annotation>;
export declare type TVTGstatement_interface$_modifiers<Annotation> = TGmodifier<Annotation>;
export declare type TVGstatement_interface$_modifiers<Annotation> = TVTGstatement_interface$_modifiers<Annotation>[];
export declare type TVTGstatement_interface$_name<Annotation> = TGidentifier<Annotation>;
export declare type TVGstatement_interface$_name<Annotation> = TVTGstatement_interface$_name<Annotation>;
export declare type TVTGstatement_interface$_typeParameters<Annotation> = TGtypeParameter<Annotation>;
export declare type TVGstatement_interface$_typeParameters<Annotation> = TVTGstatement_interface$_typeParameters<Annotation>[];
export declare type TVTGstatement_interface$_signature<Annotation> = TGtypeSignature<Annotation>;
export declare type TVGstatement_interface$_signature<Annotation> = TVTGstatement_interface$_signature<Annotation>[];
export declare type TVTGstatement_interface$<Annotation> = {
    readonly "modifiers": TVGstatement_interface$_modifiers<Annotation>;
    readonly "name": TVGstatement_interface$_name<Annotation>;
    readonly "typeParameters": TVGstatement_interface$_typeParameters<Annotation>;
    readonly "signature": TVGstatement_interface$_signature<Annotation>;
};
export declare type TVGstatement_interface$<Annotation> = TVTGstatement_interface$<Annotation>;
export declare type TNGstatement_interface$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_interface$<Annotation>;
};
export declare type TVTGstatement_interface<Annotation> = TNGstatement_interface$<Annotation>;
export declare type TVGstatement_interface<Annotation> = TVTGstatement_interface<Annotation>;
export declare type TVTGstatement_labeled$_label<Annotation> = TGidentifier<Annotation>;
export declare type TVGstatement_labeled$_label<Annotation> = TVTGstatement_labeled$_label<Annotation>;
export declare type TVTGstatement_labeled$_statement<Annotation> = TGstatement<Annotation>;
export declare type TVGstatement_labeled$_statement<Annotation> = TVTGstatement_labeled$_statement<Annotation>;
export declare type TVTGstatement_labeled$<Annotation> = {
    readonly "label": TVGstatement_labeled$_label<Annotation>;
    readonly "statement": TVGstatement_labeled$_statement<Annotation>;
};
export declare type TVGstatement_labeled$<Annotation> = TVTGstatement_labeled$<Annotation>;
export declare type TNGstatement_labeled$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_labeled$<Annotation>;
};
export declare type TVTGstatement_labeled<Annotation> = TNGstatement_labeled$<Annotation>;
export declare type TVGstatement_labeled<Annotation> = TVTGstatement_labeled<Annotation>;
export declare type TVTGstatement_return$<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_return$<Annotation> = pr.optional<TVTGstatement_return$<Annotation>>;
export declare type TNGstatement_return$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_return$<Annotation>;
};
export declare type TVTGstatement_return<Annotation> = TNGstatement_return$<Annotation>;
export declare type TVGstatement_return<Annotation> = TVTGstatement_return<Annotation>;
export declare type TVTGstatement_switch$_expression<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_switch$_expression<Annotation> = TVTGstatement_switch$_expression<Annotation>;
export declare type TVTGstatement_switch$_caseBlock$_case$_case<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_switch$_caseBlock$_case$_case<Annotation> = TVTGstatement_switch$_caseBlock$_case$_case<Annotation>;
export declare type TVTGstatement_switch$_caseBlock$_case$_statements<Annotation> = TGstatement<Annotation>;
export declare type TVGstatement_switch$_caseBlock$_case$_statements<Annotation> = TVTGstatement_switch$_caseBlock$_case$_statements<Annotation>[];
export declare type TVTGstatement_switch$_caseBlock$_case$<Annotation> = {
    readonly "case": TVGstatement_switch$_caseBlock$_case$_case<Annotation>;
    readonly "statements": TVGstatement_switch$_caseBlock$_case$_statements<Annotation>;
};
export declare type TVGstatement_switch$_caseBlock$_case$<Annotation> = TVTGstatement_switch$_caseBlock$_case$<Annotation>;
export declare type TNGstatement_switch$_caseBlock$_case$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_switch$_caseBlock$_case$<Annotation>;
};
export declare type TVTGstatement_switch$_caseBlock$_case<Annotation> = TNGstatement_switch$_caseBlock$_case$<Annotation>;
export declare type TVGstatement_switch$_caseBlock$_case<Annotation> = TVTGstatement_switch$_caseBlock$_case<Annotation>;
export declare type TVTGstatement_switch$_caseBlock$_default$<Annotation> = TGstatement<Annotation>;
export declare type TVGstatement_switch$_caseBlock$_default$<Annotation> = TVTGstatement_switch$_caseBlock$_default$<Annotation>[];
export declare type TNGstatement_switch$_caseBlock$_default$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_switch$_caseBlock$_default$<Annotation>;
};
export declare type TVTGstatement_switch$_caseBlock$_default<Annotation> = TNGstatement_switch$_caseBlock$_default$<Annotation>;
export declare type TVGstatement_switch$_caseBlock$_default<Annotation> = TVTGstatement_switch$_caseBlock$_default<Annotation>;
export declare type TVTGstatement_switch$_caseBlock$<Annotation> = ["case", TVGstatement_switch$_caseBlock$_case<Annotation>] | ["default", TVGstatement_switch$_caseBlock$_default<Annotation>];
export declare type TVGstatement_switch$_caseBlock$<Annotation> = TVTGstatement_switch$_caseBlock$<Annotation>[];
export declare type TNGstatement_switch$_caseBlock$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_switch$_caseBlock$<Annotation>;
};
export declare type TVTGstatement_switch$_caseBlock<Annotation> = TNGstatement_switch$_caseBlock$<Annotation>;
export declare type TVGstatement_switch$_caseBlock<Annotation> = TVTGstatement_switch$_caseBlock<Annotation>;
export declare type TVTGstatement_switch$<Annotation> = {
    readonly "expression": TVGstatement_switch$_expression<Annotation>;
    readonly "caseBlock": TVGstatement_switch$_caseBlock<Annotation>;
};
export declare type TVGstatement_switch$<Annotation> = TVTGstatement_switch$<Annotation>;
export declare type TNGstatement_switch$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_switch$<Annotation>;
};
export declare type TVTGstatement_switch<Annotation> = TNGstatement_switch$<Annotation>;
export declare type TVGstatement_switch<Annotation> = TVTGstatement_switch<Annotation>;
export declare type TVTGstatement_throw$<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_throw$<Annotation> = TVTGstatement_throw$<Annotation>;
export declare type TNGstatement_throw$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_throw$<Annotation>;
};
export declare type TVTGstatement_throw<Annotation> = TNGstatement_throw$<Annotation>;
export declare type TVGstatement_throw<Annotation> = TVTGstatement_throw<Annotation>;
export declare type TVTGstatement_try$_block<Annotation> = TGblock<Annotation>;
export declare type TVGstatement_try$_block<Annotation> = TVTGstatement_try$_block<Annotation>;
export declare type TVTGstatement_try$_catchClause$_variable<Annotation> = TGvariableDeclaration<Annotation>;
export declare type TVGstatement_try$_catchClause$_variable<Annotation> = TVTGstatement_try$_catchClause$_variable<Annotation>;
export declare type TVTGstatement_try$_catchClause$_block<Annotation> = TGblock<Annotation>;
export declare type TVGstatement_try$_catchClause$_block<Annotation> = TVTGstatement_try$_catchClause$_block<Annotation>;
export declare type TVTGstatement_try$_catchClause$<Annotation> = {
    readonly "variable": TVGstatement_try$_catchClause$_variable<Annotation>;
    readonly "block": TVGstatement_try$_catchClause$_block<Annotation>;
};
export declare type TVGstatement_try$_catchClause$<Annotation> = TVTGstatement_try$_catchClause$<Annotation>;
export declare type TNGstatement_try$_catchClause$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_try$_catchClause$<Annotation>;
};
export declare type TVTGstatement_try$_catchClause<Annotation> = TNGstatement_try$_catchClause$<Annotation>;
export declare type TVGstatement_try$_catchClause<Annotation> = TVTGstatement_try$_catchClause<Annotation>;
export declare type TVTGstatement_try$<Annotation> = {
    readonly "block": TVGstatement_try$_block<Annotation>;
    readonly "catchClause": TVGstatement_try$_catchClause<Annotation>;
};
export declare type TVGstatement_try$<Annotation> = TVTGstatement_try$<Annotation>;
export declare type TNGstatement_try$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_try$<Annotation>;
};
export declare type TVTGstatement_try<Annotation> = TNGstatement_try$<Annotation>;
export declare type TVGstatement_try<Annotation> = TVTGstatement_try<Annotation>;
export declare type TVTGstatement_typeAlias$_modifiers<Annotation> = TGmodifier<Annotation>;
export declare type TVGstatement_typeAlias$_modifiers<Annotation> = TVTGstatement_typeAlias$_modifiers<Annotation>[];
export declare type TVTGstatement_typeAlias$_name<Annotation> = TGidentifier<Annotation>;
export declare type TVGstatement_typeAlias$_name<Annotation> = TVTGstatement_typeAlias$_name<Annotation>;
export declare type TVTGstatement_typeAlias$_typeParameters<Annotation> = TGtypeParameter<Annotation>;
export declare type TVGstatement_typeAlias$_typeParameters<Annotation> = TVTGstatement_typeAlias$_typeParameters<Annotation>[];
export declare type TVTGstatement_typeAlias$_type<Annotation> = TGtype<Annotation>;
export declare type TVGstatement_typeAlias$_type<Annotation> = TVTGstatement_typeAlias$_type<Annotation>;
export declare type TVTGstatement_typeAlias$<Annotation> = {
    readonly "modifiers": TVGstatement_typeAlias$_modifiers<Annotation>;
    readonly "name": TVGstatement_typeAlias$_name<Annotation>;
    readonly "typeParameters": TVGstatement_typeAlias$_typeParameters<Annotation>;
    readonly "type": TVGstatement_typeAlias$_type<Annotation>;
};
export declare type TVGstatement_typeAlias$<Annotation> = TVTGstatement_typeAlias$<Annotation>;
export declare type TNGstatement_typeAlias$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_typeAlias$<Annotation>;
};
export declare type TVTGstatement_typeAlias<Annotation> = TNGstatement_typeAlias$<Annotation>;
export declare type TVGstatement_typeAlias<Annotation> = TVTGstatement_typeAlias<Annotation>;
export declare type TVTGstatement_variable$_modifiers<Annotation> = TGmodifier<Annotation>;
export declare type TVGstatement_variable$_modifiers<Annotation> = TVTGstatement_variable$_modifiers<Annotation>[];
export declare type TVTGstatement_variable$_variableDeclarationList<Annotation> = TGvariableDeclarationList<Annotation>;
export declare type TVGstatement_variable$_variableDeclarationList<Annotation> = TVTGstatement_variable$_variableDeclarationList<Annotation>;
export declare type TVTGstatement_variable$<Annotation> = {
    readonly "modifiers": TVGstatement_variable$_modifiers<Annotation>;
    readonly "variableDeclarationList": TVGstatement_variable$_variableDeclarationList<Annotation>;
};
export declare type TVGstatement_variable$<Annotation> = TVTGstatement_variable$<Annotation>;
export declare type TNGstatement_variable$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_variable$<Annotation>;
};
export declare type TVTGstatement_variable<Annotation> = TNGstatement_variable$<Annotation>;
export declare type TVGstatement_variable<Annotation> = TVTGstatement_variable<Annotation>;
export declare type TVTGstatement_while$_condition<Annotation> = TGexpression<Annotation>;
export declare type TVGstatement_while$_condition<Annotation> = TVTGstatement_while$_condition<Annotation>;
export declare type TVTGstatement_while$_block<Annotation> = TGblock<Annotation>;
export declare type TVGstatement_while$_block<Annotation> = TVTGstatement_while$_block<Annotation>;
export declare type TVTGstatement_while$<Annotation> = {
    readonly "condition": TVGstatement_while$_condition<Annotation>;
    readonly "block": TVGstatement_while$_block<Annotation>;
};
export declare type TVGstatement_while$<Annotation> = TVTGstatement_while$<Annotation>;
export declare type TNGstatement_while$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGstatement_while$<Annotation>;
};
export declare type TVTGstatement_while<Annotation> = TNGstatement_while$<Annotation>;
export declare type TVGstatement_while<Annotation> = TVTGstatement_while<Annotation>;
export declare type TVTGstatement<Annotation> = ["block", TVGstatement_block<Annotation>] | ["break", TVGstatement_break<Annotation>] | ["export", TVGstatement_export<Annotation>] | ["expression", TVGstatement_expression<Annotation>] | ["for", TVGstatement_for<Annotation>] | ["function", TVGstatement_function<Annotation>] | ["if", TVGstatement_if<Annotation>] | ["import", TVGstatement_import<Annotation>] | ["interface", TVGstatement_interface<Annotation>] | ["labeled", TVGstatement_labeled<Annotation>] | ["return", TVGstatement_return<Annotation>] | ["switch", TVGstatement_switch<Annotation>] | ["throw", TVGstatement_throw<Annotation>] | ["try", TVGstatement_try<Annotation>] | ["typeAlias", TVGstatement_typeAlias<Annotation>] | ["variable", TVGstatement_variable<Annotation>] | ["while", TVGstatement_while<Annotation>];
export declare type TGstatement<Annotation> = TVTGstatement<Annotation>;
export declare type TNGstringLiteral$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": string;
};
export declare type TVTGstringLiteral<Annotation> = TNGstringLiteral$<Annotation>;
export declare type TGstringLiteral<Annotation> = TVTGstringLiteral<Annotation>;
export declare type TNGtype_any$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtype_any<Annotation> = TNGtype_any$<Annotation>;
export declare type TVGtype_any<Annotation> = TVTGtype_any<Annotation>;
export declare type TVTGtype_array$<Annotation> = TGtype<Annotation>;
export declare type TVGtype_array$<Annotation> = TVTGtype_array$<Annotation>;
export declare type TNGtype_array$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_array$<Annotation>;
};
export declare type TVTGtype_array<Annotation> = TNGtype_array$<Annotation>;
export declare type TVGtype_array<Annotation> = TVTGtype_array<Annotation>;
export declare type TNGtype_boolean$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtype_boolean<Annotation> = TNGtype_boolean$<Annotation>;
export declare type TVGtype_boolean<Annotation> = TVTGtype_boolean<Annotation>;
export declare type TVTGtype_function$_parameters<Annotation> = TGparameter<Annotation>;
export declare type TVGtype_function$_parameters<Annotation> = TVTGtype_function$_parameters<Annotation>[];
export declare type TVTGtype_function$_returnType<Annotation> = TGtype<Annotation>;
export declare type TVGtype_function$_returnType<Annotation> = pr.optional<TVTGtype_function$_returnType<Annotation>>;
export declare type TVTGtype_function$<Annotation> = {
    readonly "parameters": TVGtype_function$_parameters<Annotation>;
    readonly "returnType": TVGtype_function$_returnType<Annotation>;
};
export declare type TVGtype_function$<Annotation> = TVTGtype_function$<Annotation>;
export declare type TNGtype_function$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_function$<Annotation>;
};
export declare type TVTGtype_function<Annotation> = TNGtype_function$<Annotation>;
export declare type TVGtype_function<Annotation> = TVTGtype_function<Annotation>;
export declare type TNGtype_literal$_null$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtype_literal$_null<Annotation> = TNGtype_literal$_null$<Annotation>;
export declare type TVGtype_literal$_null<Annotation> = TVTGtype_literal$_null<Annotation>;
export declare type TVTGtype_literal$_string<Annotation> = TGstringLiteral<Annotation>;
export declare type TVGtype_literal$_string<Annotation> = TVTGtype_literal$_string<Annotation>;
export declare type TVTGtype_literal$<Annotation> = ["null", TVGtype_literal$_null<Annotation>] | ["string", TVGtype_literal$_string<Annotation>];
export declare type TVGtype_literal$<Annotation> = TVTGtype_literal$<Annotation>;
export declare type TNGtype_literal$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_literal$<Annotation>;
};
export declare type TVTGtype_literal<Annotation> = TNGtype_literal$<Annotation>;
export declare type TVGtype_literal<Annotation> = TVTGtype_literal<Annotation>;
export declare type TVTGtype_parenthesized$<Annotation> = TGtype<Annotation>;
export declare type TVGtype_parenthesized$<Annotation> = TVTGtype_parenthesized$<Annotation>;
export declare type TNGtype_parenthesized$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_parenthesized$<Annotation>;
};
export declare type TVTGtype_parenthesized<Annotation> = TNGtype_parenthesized$<Annotation>;
export declare type TVGtype_parenthesized<Annotation> = TVTGtype_parenthesized<Annotation>;
export declare type TNGtype_never$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtype_never<Annotation> = TNGtype_never$<Annotation>;
export declare type TVGtype_never<Annotation> = TVTGtype_never<Annotation>;
export declare type TNGtype_number$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtype_number<Annotation> = TNGtype_number$<Annotation>;
export declare type TVGtype_number<Annotation> = TVTGtype_number<Annotation>;
export declare type TVTGtype_optional$<Annotation> = TGtype<Annotation>;
export declare type TVGtype_optional$<Annotation> = TVTGtype_optional$<Annotation>;
export declare type TNGtype_optional$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_optional$<Annotation>;
};
export declare type TVTGtype_optional<Annotation> = TNGtype_optional$<Annotation>;
export declare type TVGtype_optional<Annotation> = TVTGtype_optional<Annotation>;
export declare type TVTGtype_tuple$<Annotation> = TGtype<Annotation>;
export declare type TVGtype_tuple$<Annotation> = TVTGtype_tuple$<Annotation>[];
export declare type TNGtype_tuple$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_tuple$<Annotation>;
};
export declare type TVTGtype_tuple<Annotation> = TNGtype_tuple$<Annotation>;
export declare type TVGtype_tuple<Annotation> = TVTGtype_tuple<Annotation>;
export declare type TVTGtype_typeLiteral$<Annotation> = TGtypeSignature<Annotation>;
export declare type TVGtype_typeLiteral$<Annotation> = TVTGtype_typeLiteral$<Annotation>[];
export declare type TNGtype_typeLiteral$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_typeLiteral$<Annotation>;
};
export declare type TVTGtype_typeLiteral<Annotation> = TNGtype_typeLiteral$<Annotation>;
export declare type TVGtype_typeLiteral<Annotation> = TVTGtype_typeLiteral<Annotation>;
export declare type TNGtype_string$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtype_string<Annotation> = TNGtype_string$<Annotation>;
export declare type TVGtype_string<Annotation> = TVTGtype_string<Annotation>;
export declare type TVTGtype_typeReference$_x_identifier<Annotation> = TGidentifier<Annotation>;
export declare type TVGtype_typeReference$_x_identifier<Annotation> = TVTGtype_typeReference$_x_identifier<Annotation>;
export declare type TVTGtype_typeReference$_x_qualifiedName$_context<Annotation> = TGidentifier<Annotation>;
export declare type TVGtype_typeReference$_x_qualifiedName$_context<Annotation> = TVTGtype_typeReference$_x_qualifiedName$_context<Annotation>;
export declare type TVTGtype_typeReference$_x_qualifiedName$_type<Annotation> = TGidentifier<Annotation>;
export declare type TVGtype_typeReference$_x_qualifiedName$_type<Annotation> = TVTGtype_typeReference$_x_qualifiedName$_type<Annotation>;
export declare type TVTGtype_typeReference$_x_qualifiedName$<Annotation> = {
    readonly "context": TVGtype_typeReference$_x_qualifiedName$_context<Annotation>;
    readonly "type": TVGtype_typeReference$_x_qualifiedName$_type<Annotation>;
};
export declare type TVGtype_typeReference$_x_qualifiedName$<Annotation> = TVTGtype_typeReference$_x_qualifiedName$<Annotation>;
export declare type TNGtype_typeReference$_x_qualifiedName$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_typeReference$_x_qualifiedName$<Annotation>;
};
export declare type TVTGtype_typeReference$_x_qualifiedName<Annotation> = TNGtype_typeReference$_x_qualifiedName$<Annotation>;
export declare type TVGtype_typeReference$_x_qualifiedName<Annotation> = TVTGtype_typeReference$_x_qualifiedName<Annotation>;
export declare type TVTGtype_typeReference$_x<Annotation> = ["identifier", TVGtype_typeReference$_x_identifier<Annotation>] | ["qualifiedName", TVGtype_typeReference$_x_qualifiedName<Annotation>];
export declare type TVGtype_typeReference$_x<Annotation> = TVTGtype_typeReference$_x<Annotation>;
export declare type TVTGtype_typeReference$_parameters<Annotation> = TGtype<Annotation>;
export declare type TVGtype_typeReference$_parameters<Annotation> = TVTGtype_typeReference$_parameters<Annotation>[];
export declare type TVTGtype_typeReference$<Annotation> = {
    readonly "x": TVGtype_typeReference$_x<Annotation>;
    readonly "parameters": TVGtype_typeReference$_parameters<Annotation>;
};
export declare type TVGtype_typeReference$<Annotation> = TVTGtype_typeReference$<Annotation>;
export declare type TNGtype_typeReference$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_typeReference$<Annotation>;
};
export declare type TVTGtype_typeReference<Annotation> = TNGtype_typeReference$<Annotation>;
export declare type TVGtype_typeReference<Annotation> = TVTGtype_typeReference<Annotation>;
export declare type TNGtype_undefined$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtype_undefined<Annotation> = TNGtype_undefined$<Annotation>;
export declare type TVGtype_undefined<Annotation> = TVTGtype_undefined<Annotation>;
export declare type TVTGtype_union$<Annotation> = TGtype<Annotation>;
export declare type TVGtype_union$<Annotation> = TVTGtype_union$<Annotation>[];
export declare type TNGtype_union$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtype_union$<Annotation>;
};
export declare type TVTGtype_union<Annotation> = TNGtype_union$<Annotation>;
export declare type TVGtype_union<Annotation> = TVTGtype_union<Annotation>;
export declare type TNGtype_void$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtype_void<Annotation> = TNGtype_void$<Annotation>;
export declare type TVGtype_void<Annotation> = TVTGtype_void<Annotation>;
export declare type TVTGtype<Annotation> = ["any", TVGtype_any<Annotation>] | ["array", TVGtype_array<Annotation>] | ["boolean", TVGtype_boolean<Annotation>] | ["function", TVGtype_function<Annotation>] | ["literal", TVGtype_literal<Annotation>] | ["parenthesized", TVGtype_parenthesized<Annotation>] | ["never", TVGtype_never<Annotation>] | ["number", TVGtype_number<Annotation>] | ["optional", TVGtype_optional<Annotation>] | ["tuple", TVGtype_tuple<Annotation>] | ["typeLiteral", TVGtype_typeLiteral<Annotation>] | ["string", TVGtype_string<Annotation>] | ["typeReference", TVGtype_typeReference<Annotation>] | ["undefined", TVGtype_undefined<Annotation>] | ["union", TVGtype_union<Annotation>] | ["void", TVGtype_void<Annotation>];
export declare type TGtype<Annotation> = TVTGtype<Annotation>;
export declare type TVTGtypeParameter$<Annotation> = TGidentifier<Annotation>;
export declare type TVGtypeParameter$<Annotation> = TVTGtypeParameter$<Annotation>;
export declare type TNGtypeParameter$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtypeParameter$<Annotation>;
};
export declare type TVTGtypeParameter<Annotation> = TNGtypeParameter$<Annotation>;
export declare type TGtypeParameter<Annotation> = TVTGtypeParameter<Annotation>;
export declare type TVTGtypeSignature_construct$_parameters<Annotation> = TGparameter<Annotation>;
export declare type TVGtypeSignature_construct$_parameters<Annotation> = TVTGtypeSignature_construct$_parameters<Annotation>[];
export declare type TVTGtypeSignature_construct$_returnType<Annotation> = TGtype<Annotation>;
export declare type TVGtypeSignature_construct$_returnType<Annotation> = TVTGtypeSignature_construct$_returnType<Annotation>;
export declare type TVTGtypeSignature_construct$<Annotation> = {
    readonly "parameters": TVGtypeSignature_construct$_parameters<Annotation>;
    readonly "returnType": TVGtypeSignature_construct$_returnType<Annotation>;
};
export declare type TVGtypeSignature_construct$<Annotation> = TVTGtypeSignature_construct$<Annotation>;
export declare type TNGtypeSignature_construct$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtypeSignature_construct$<Annotation>;
};
export declare type TVTGtypeSignature_construct<Annotation> = TNGtypeSignature_construct$<Annotation>;
export declare type TVGtypeSignature_construct<Annotation> = TVTGtypeSignature_construct<Annotation>;
export declare type TVTGtypeSignature_index$_modifiers<Annotation> = TGmodifier<Annotation>;
export declare type TVGtypeSignature_index$_modifiers<Annotation> = TVTGtypeSignature_index$_modifiers<Annotation>[];
export declare type TVTGtypeSignature_index$_parameter<Annotation> = TGparameter<Annotation>;
export declare type TVGtypeSignature_index$_parameter<Annotation> = TVTGtypeSignature_index$_parameter<Annotation>;
export declare type TVTGtypeSignature_index$_type<Annotation> = TGtype<Annotation>;
export declare type TVGtypeSignature_index$_type<Annotation> = pr.optional<TVTGtypeSignature_index$_type<Annotation>>;
export declare type TVTGtypeSignature_index$<Annotation> = {
    readonly "modifiers": TVGtypeSignature_index$_modifiers<Annotation>;
    readonly "parameter": TVGtypeSignature_index$_parameter<Annotation>;
    readonly "type": TVGtypeSignature_index$_type<Annotation>;
};
export declare type TVGtypeSignature_index$<Annotation> = TVTGtypeSignature_index$<Annotation>;
export declare type TNGtypeSignature_index$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtypeSignature_index$<Annotation>;
};
export declare type TVTGtypeSignature_index<Annotation> = TNGtypeSignature_index$<Annotation>;
export declare type TVGtypeSignature_index<Annotation> = TVTGtypeSignature_index<Annotation>;
export declare type TVTGtypeSignature_method$_name<Annotation> = TGidentifier<Annotation>;
export declare type TVGtypeSignature_method$_name<Annotation> = TVTGtypeSignature_method$_name<Annotation>;
export declare type TVTGtypeSignature_method$_definition<Annotation> = TGfunctionDefinition<Annotation>;
export declare type TVGtypeSignature_method$_definition<Annotation> = TVTGtypeSignature_method$_definition<Annotation>;
export declare type TVTGtypeSignature_method$<Annotation> = {
    readonly "name": TVGtypeSignature_method$_name<Annotation>;
    readonly "definition": TVGtypeSignature_method$_definition<Annotation>;
};
export declare type TVGtypeSignature_method$<Annotation> = TVTGtypeSignature_method$<Annotation>;
export declare type TNGtypeSignature_method$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtypeSignature_method$<Annotation>;
};
export declare type TVTGtypeSignature_method<Annotation> = TNGtypeSignature_method$<Annotation>;
export declare type TVGtypeSignature_method<Annotation> = TVTGtypeSignature_method<Annotation>;
export declare type TVTGtypeSignature_property$_modifiers<Annotation> = TGmodifier<Annotation>;
export declare type TVGtypeSignature_property$_modifiers<Annotation> = TVTGtypeSignature_property$_modifiers<Annotation>[];
export declare type TVTGtypeSignature_property$_name<Annotation> = TGidentifierOrStringLiteral<Annotation>;
export declare type TVGtypeSignature_property$_name<Annotation> = TVTGtypeSignature_property$_name<Annotation>;
export declare type TNGtypeSignature_property$_quesionToken$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTGtypeSignature_property$_quesionToken<Annotation> = TNGtypeSignature_property$_quesionToken$<Annotation>;
export declare type TVGtypeSignature_property$_quesionToken<Annotation> = pr.optional<TVTGtypeSignature_property$_quesionToken<Annotation>>;
export declare type TVTGtypeSignature_property$_type<Annotation> = TGtype<Annotation>;
export declare type TVGtypeSignature_property$_type<Annotation> = pr.optional<TVTGtypeSignature_property$_type<Annotation>>;
export declare type TVTGtypeSignature_property$<Annotation> = {
    readonly "modifiers": TVGtypeSignature_property$_modifiers<Annotation>;
    readonly "name": TVGtypeSignature_property$_name<Annotation>;
    readonly "quesionToken": TVGtypeSignature_property$_quesionToken<Annotation>;
    readonly "type": TVGtypeSignature_property$_type<Annotation>;
};
export declare type TVGtypeSignature_property$<Annotation> = TVTGtypeSignature_property$<Annotation>;
export declare type TNGtypeSignature_property$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGtypeSignature_property$<Annotation>;
};
export declare type TVTGtypeSignature_property<Annotation> = TNGtypeSignature_property$<Annotation>;
export declare type TVGtypeSignature_property<Annotation> = TVTGtypeSignature_property<Annotation>;
export declare type TVTGtypeSignature<Annotation> = ["construct", TVGtypeSignature_construct<Annotation>] | ["index", TVGtypeSignature_index<Annotation>] | ["method", TVGtypeSignature_method<Annotation>] | ["property", TVGtypeSignature_property<Annotation>];
export declare type TGtypeSignature<Annotation> = TVTGtypeSignature<Annotation>;
export declare type TVTGvariableDeclaration$_name<Annotation> = TGidentifier<Annotation>;
export declare type TVGvariableDeclaration$_name<Annotation> = TVTGvariableDeclaration$_name<Annotation>;
export declare type TVTGvariableDeclaration$_type<Annotation> = TGtype<Annotation>;
export declare type TVGvariableDeclaration$_type<Annotation> = pr.optional<TVTGvariableDeclaration$_type<Annotation>>;
export declare type TVTGvariableDeclaration$_expression<Annotation> = TGexpression<Annotation>;
export declare type TVGvariableDeclaration$_expression<Annotation> = pr.optional<TVTGvariableDeclaration$_expression<Annotation>>;
export declare type TVTGvariableDeclaration$<Annotation> = {
    readonly "name": TVGvariableDeclaration$_name<Annotation>;
    readonly "type": TVGvariableDeclaration$_type<Annotation>;
    readonly "expression": TVGvariableDeclaration$_expression<Annotation>;
};
export declare type TVGvariableDeclaration$<Annotation> = TVTGvariableDeclaration$<Annotation>;
export declare type TNGvariableDeclaration$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGvariableDeclaration$<Annotation>;
};
export declare type TVTGvariableDeclaration<Annotation> = TNGvariableDeclaration$<Annotation>;
export declare type TGvariableDeclaration<Annotation> = TVTGvariableDeclaration<Annotation>;
export declare type TVTGvariableDeclarationList$<Annotation> = TGvariableDeclaration<Annotation>;
export declare type TVGvariableDeclarationList$<Annotation> = TVTGvariableDeclarationList$<Annotation>[];
export declare type TNGvariableDeclarationList$<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVGvariableDeclarationList$<Annotation>;
};
export declare type TVTGvariableDeclarationList<Annotation> = TNGvariableDeclarationList$<Annotation>;
export declare type TGvariableDeclarationList<Annotation> = TVTGvariableDeclarationList<Annotation>;
export declare type TVTroot_statements<Annotation> = TGstatement<Annotation>;
export declare type TVroot_statements<Annotation> = TVTroot_statements<Annotation>[];
export declare type TNroot_endOfFile$<Annotation> = {
    readonly "annotation": Annotation;
};
export declare type TVTroot_endOfFile<Annotation> = TNroot_endOfFile$<Annotation>;
export declare type TVroot_endOfFile<Annotation> = TVTroot_endOfFile<Annotation>;
export declare type TVTroot<Annotation> = {
    readonly "statements": TVroot_statements<Annotation>;
    readonly "endOfFile": TVroot_endOfFile<Annotation>;
};
export declare type TVroot<Annotation> = TVTroot<Annotation>;
export declare type TNroot<Annotation> = {
    readonly "annotation": Annotation;
    readonly "content": TVroot<Annotation>;
};
export declare type TRoot<Annotation> = TNroot<Annotation>;
