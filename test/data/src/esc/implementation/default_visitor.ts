import * as pr from "pareto-runtime"
import * as f from "../../interface/interfaces/visitor"

export function createDefaultVisistor(): f.IVisitor<string> {
    return {
        "Gblock$": {
            begin: ($) => { console.log("Gblock$ begin") },
            end: ($) => { console.log("Gblock$ end") },
        },
        "Gexpression_arrayLiteral$": {
            begin: ($) => { console.log("Gexpression_arrayLiteral$ begin") },
            end: ($) => { console.log("Gexpression_arrayLiteral$ end") },
        },
        "Gexpression_arrowFunction$_equalsGreaterThan$": ($) => { console.log("Gexpression_arrowFunction$_equalsGreaterThan$") },
        "Gexpression_arrowFunction$": {
            begin: ($) => { console.log("Gexpression_arrowFunction$ begin") },
            end: ($) => { console.log("Gexpression_arrowFunction$ end") },
        },
        "Gexpression_binary$_operator_ampersandAmpersand$": ($) => { console.log("Gexpression_binary$_operator_ampersandAmpersand$") },
        "Gexpression_binary$_operator_barBar$": ($) => { console.log("Gexpression_binary$_operator_barBar$") },
        "Gexpression_binary$_operator_equals$": ($) => { console.log("Gexpression_binary$_operator_equals$") },
        "Gexpression_binary$_operator_equalsEqualsEquals$": ($) => { console.log("Gexpression_binary$_operator_equalsEqualsEquals$") },
        "Gexpression_binary$_operator_exclamationEqualsEquals$": ($) => { console.log("Gexpression_binary$_operator_exclamationEqualsEquals$") },
        "Gexpression_binary$_operator_greaterThan$": ($) => { console.log("Gexpression_binary$_operator_greaterThan$") },
        "Gexpression_binary$_operator_lessThan$": ($) => { console.log("Gexpression_binary$_operator_lessThan$") },
        "Gexpression_binary$_operator_minus$": ($) => { console.log("Gexpression_binary$_operator_minus$") },
        "Gexpression_binary$_operator_minusEquals$": ($) => { console.log("Gexpression_binary$_operator_minusEquals$") },
        "Gexpression_binary$_operator_plus$": ($) => { console.log("Gexpression_binary$_operator_plus$") },
        "Gexpression_binary$_operator_plusEquals$": ($) => { console.log("Gexpression_binary$_operator_plusEquals$") },
        "Gexpression_binary$": {
            begin: ($) => { console.log("Gexpression_binary$ begin") },
            end: ($) => { console.log("Gexpression_binary$ end") },
        },
        "Gexpression_call$": {
            begin: ($) => { console.log("Gexpression_call$ begin") },
            end: ($) => { console.log("Gexpression_call$ end") },
        },
        "Gexpression_conditional$_questionToken$": ($) => { console.log("Gexpression_conditional$_questionToken$") },
        "Gexpression_conditional$_colonToken$": ($) => { console.log("Gexpression_conditional$_colonToken$") },
        "Gexpression_conditional$": {
            begin: ($) => { console.log("Gexpression_conditional$ begin") },
            end: ($) => { console.log("Gexpression_conditional$ end") },
        },
        "Gexpression_elementAccess$": {
            begin: ($) => { console.log("Gexpression_elementAccess$ begin") },
            end: ($) => { console.log("Gexpression_elementAccess$ end") },
        },
        "Gexpression_false$": ($) => { console.log("Gexpression_false$") },
        "Gexpression_new$": {
            begin: ($) => { console.log("Gexpression_new$ begin") },
            end: ($) => { console.log("Gexpression_new$ end") },
        },
        "Gexpression_noSubstitutionTemplateLiteral$": ($) => { console.log("Gexpression_noSubstitutionTemplateLiteral$") },
        "Gexpression_nullKeyword$": ($) => { console.log("Gexpression_nullKeyword$") },
        "Gexpression_objectLiteral$$": {
            begin: ($) => { console.log("Gexpression_objectLiteral$$ begin") },
            end: ($) => { console.log("Gexpression_objectLiteral$$ end") },
        },
        "Gexpression_objectLiteral$": {
            begin: ($) => { console.log("Gexpression_objectLiteral$ begin") },
            end: ($) => { console.log("Gexpression_objectLiteral$ end") },
        },
        "Gexpression_parenthesizedExpression$": {
            begin: ($) => { console.log("Gexpression_parenthesizedExpression$ begin") },
            end: ($) => { console.log("Gexpression_parenthesizedExpression$ end") },
        },
        "Gexpression_postfixUnary$": {
            begin: ($) => { console.log("Gexpression_postfixUnary$ begin") },
            end: ($) => { console.log("Gexpression_postfixUnary$ end") },
        },
        "Gexpression_prefixUnary$": {
            begin: ($) => { console.log("Gexpression_prefixUnary$ begin") },
            end: ($) => { console.log("Gexpression_prefixUnary$ end") },
        },
        "Gexpression_propertyAccess$": {
            begin: ($) => { console.log("Gexpression_propertyAccess$ begin") },
            end: ($) => { console.log("Gexpression_propertyAccess$ end") },
        },
        "Gexpression_template$_head$": ($) => { console.log("Gexpression_template$_head$") },
        "Gexpression_template$_spans$_x_middle$": ($) => { console.log("Gexpression_template$_spans$_x_middle$") },
        "Gexpression_template$_spans$_x_tail$": ($) => { console.log("Gexpression_template$_spans$_x_tail$") },
        "Gexpression_template$_spans$": {
            begin: ($) => { console.log("Gexpression_template$_spans$ begin") },
            end: ($) => { console.log("Gexpression_template$_spans$ end") },
        },
        "Gexpression_template$": {
            begin: ($) => { console.log("Gexpression_template$ begin") },
            end: ($) => { console.log("Gexpression_template$ end") },
        },
        "Gexpression_true$": ($) => { console.log("Gexpression_true$") },
        "Gidentifier$": ($) => { console.log("Gidentifier$") },
        "Gmodifier_declare$": ($) => { console.log("Gmodifier_declare$") },
        "Gmodifier_export$": ($) => { console.log("Gmodifier_export$") },
        "Gmodifier_readonly$": ($) => { console.log("Gmodifier_readonly$") },
        "GnumericLiteral$": ($) => { console.log("GnumericLiteral$") },
        "Gparameter$_questionToken$": ($) => { console.log("Gparameter$_questionToken$") },
        "Gparameter$": {
            begin: ($) => { console.log("Gparameter$ begin") },
            end: ($) => { console.log("Gparameter$ end") },
        },
        "Gstatement_break$": {
            begin: ($) => { console.log("Gstatement_break$ begin") },
            end: ($) => { console.log("Gstatement_break$ end") },
        },
        "Gstatement_export$": {
            begin: ($) => { console.log("Gstatement_export$ begin") },
            end: ($) => { console.log("Gstatement_export$ end") },
        },
        "Gstatement_expression$": {
            begin: ($) => { console.log("Gstatement_expression$ begin") },
            end: ($) => { console.log("Gstatement_expression$ end") },
        },
        "Gstatement_for$": {
            begin: ($) => { console.log("Gstatement_for$ begin") },
            end: ($) => { console.log("Gstatement_for$ end") },
        },
        "Gstatement_function$": {
            begin: ($) => { console.log("Gstatement_function$ begin") },
            end: ($) => { console.log("Gstatement_function$ end") },
        },
        "Gstatement_if$": {
            begin: ($) => { console.log("Gstatement_if$ begin") },
            end: ($) => { console.log("Gstatement_if$ end") },
        },
        "Gstatement_import$_clause$_namespace$": {
            begin: ($) => { console.log("Gstatement_import$_clause$_namespace$ begin") },
            end: ($) => { console.log("Gstatement_import$_clause$_namespace$ end") },
        },
        "Gstatement_import$_clause$_named$$": {
            begin: ($) => { console.log("Gstatement_import$_clause$_named$$ begin") },
            end: ($) => { console.log("Gstatement_import$_clause$_named$$ end") },
        },
        "Gstatement_import$_clause$_named$": {
            begin: ($) => { console.log("Gstatement_import$_clause$_named$ begin") },
            end: ($) => { console.log("Gstatement_import$_clause$_named$ end") },
        },
        "Gstatement_import$_clause$": {
            begin: ($) => { console.log("Gstatement_import$_clause$ begin") },
            end: ($) => { console.log("Gstatement_import$_clause$ end") },
        },
        "Gstatement_import$": {
            begin: ($) => { console.log("Gstatement_import$ begin") },
            end: ($) => { console.log("Gstatement_import$ end") },
        },
        "Gstatement_interface$": {
            begin: ($) => { console.log("Gstatement_interface$ begin") },
            end: ($) => { console.log("Gstatement_interface$ end") },
        },
        "Gstatement_labeled$": {
            begin: ($) => { console.log("Gstatement_labeled$ begin") },
            end: ($) => { console.log("Gstatement_labeled$ end") },
        },
        "Gstatement_return$": {
            begin: ($) => { console.log("Gstatement_return$ begin") },
            end: ($) => { console.log("Gstatement_return$ end") },
        },
        "Gstatement_switch$_caseBlock$_case$": {
            begin: ($) => { console.log("Gstatement_switch$_caseBlock$_case$ begin") },
            end: ($) => { console.log("Gstatement_switch$_caseBlock$_case$ end") },
        },
        "Gstatement_switch$_caseBlock$_default$": {
            begin: ($) => { console.log("Gstatement_switch$_caseBlock$_default$ begin") },
            end: ($) => { console.log("Gstatement_switch$_caseBlock$_default$ end") },
        },
        "Gstatement_switch$_caseBlock$": {
            begin: ($) => { console.log("Gstatement_switch$_caseBlock$ begin") },
            end: ($) => { console.log("Gstatement_switch$_caseBlock$ end") },
        },
        "Gstatement_switch$": {
            begin: ($) => { console.log("Gstatement_switch$ begin") },
            end: ($) => { console.log("Gstatement_switch$ end") },
        },
        "Gstatement_throw$": {
            begin: ($) => { console.log("Gstatement_throw$ begin") },
            end: ($) => { console.log("Gstatement_throw$ end") },
        },
        "Gstatement_try$_catchClause$": {
            begin: ($) => { console.log("Gstatement_try$_catchClause$ begin") },
            end: ($) => { console.log("Gstatement_try$_catchClause$ end") },
        },
        "Gstatement_try$": {
            begin: ($) => { console.log("Gstatement_try$ begin") },
            end: ($) => { console.log("Gstatement_try$ end") },
        },
        "Gstatement_typeAlias$": {
            begin: ($) => { console.log("Gstatement_typeAlias$ begin") },
            end: ($) => { console.log("Gstatement_typeAlias$ end") },
        },
        "Gstatement_variable$": {
            begin: ($) => { console.log("Gstatement_variable$ begin") },
            end: ($) => { console.log("Gstatement_variable$ end") },
        },
        "Gstatement_while$": {
            begin: ($) => { console.log("Gstatement_while$ begin") },
            end: ($) => { console.log("Gstatement_while$ end") },
        },
        "GstringLiteral$": ($) => { console.log("GstringLiteral$") },
        "Gtype_any$": ($) => { console.log("Gtype_any$") },
        "Gtype_array$": {
            begin: ($) => { console.log("Gtype_array$ begin") },
            end: ($) => { console.log("Gtype_array$ end") },
        },
        "Gtype_boolean$": ($) => { console.log("Gtype_boolean$") },
        "Gtype_function$": {
            begin: ($) => { console.log("Gtype_function$ begin") },
            end: ($) => { console.log("Gtype_function$ end") },
        },
        "Gtype_literal$_null$": ($) => { console.log("Gtype_literal$_null$") },
        "Gtype_literal$": {
            begin: ($) => { console.log("Gtype_literal$ begin") },
            end: ($) => { console.log("Gtype_literal$ end") },
        },
        "Gtype_parenthesized$": {
            begin: ($) => { console.log("Gtype_parenthesized$ begin") },
            end: ($) => { console.log("Gtype_parenthesized$ end") },
        },
        "Gtype_never$": ($) => { console.log("Gtype_never$") },
        "Gtype_number$": ($) => { console.log("Gtype_number$") },
        "Gtype_optional$": {
            begin: ($) => { console.log("Gtype_optional$ begin") },
            end: ($) => { console.log("Gtype_optional$ end") },
        },
        "Gtype_tuple$": {
            begin: ($) => { console.log("Gtype_tuple$ begin") },
            end: ($) => { console.log("Gtype_tuple$ end") },
        },
        "Gtype_typeLiteral$": {
            begin: ($) => { console.log("Gtype_typeLiteral$ begin") },
            end: ($) => { console.log("Gtype_typeLiteral$ end") },
        },
        "Gtype_string$": ($) => { console.log("Gtype_string$") },
        "Gtype_typeReference$_x_qualifiedName$": {
            begin: ($) => { console.log("Gtype_typeReference$_x_qualifiedName$ begin") },
            end: ($) => { console.log("Gtype_typeReference$_x_qualifiedName$ end") },
        },
        "Gtype_typeReference$": {
            begin: ($) => { console.log("Gtype_typeReference$ begin") },
            end: ($) => { console.log("Gtype_typeReference$ end") },
        },
        "Gtype_undefined$": ($) => { console.log("Gtype_undefined$") },
        "Gtype_union$": {
            begin: ($) => { console.log("Gtype_union$ begin") },
            end: ($) => { console.log("Gtype_union$ end") },
        },
        "Gtype_void$": ($) => { console.log("Gtype_void$") },
        "GtypeParameter$": {
            begin: ($) => { console.log("GtypeParameter$ begin") },
            end: ($) => { console.log("GtypeParameter$ end") },
        },
        "GtypeSignature_construct$": {
            begin: ($) => { console.log("GtypeSignature_construct$ begin") },
            end: ($) => { console.log("GtypeSignature_construct$ end") },
        },
        "GtypeSignature_index$": {
            begin: ($) => { console.log("GtypeSignature_index$ begin") },
            end: ($) => { console.log("GtypeSignature_index$ end") },
        },
        "GtypeSignature_method$": {
            begin: ($) => { console.log("GtypeSignature_method$ begin") },
            end: ($) => { console.log("GtypeSignature_method$ end") },
        },
        "GtypeSignature_property$_quesionToken$": ($) => { console.log("GtypeSignature_property$_quesionToken$") },
        "GtypeSignature_property$": {
            begin: ($) => { console.log("GtypeSignature_property$ begin") },
            end: ($) => { console.log("GtypeSignature_property$ end") },
        },
        "GvariableDeclaration$": {
            begin: ($) => { console.log("GvariableDeclaration$ begin") },
            end: ($) => { console.log("GvariableDeclaration$ end") },
        },
        "GvariableDeclarationList$": {
            begin: ($) => { console.log("GvariableDeclarationList$ begin") },
            end: ($) => { console.log("GvariableDeclarationList$ end") },
        },
        "root_endOfFile$": ($) => { console.log("root_endOfFile$") },
        "root": {
            begin: ($) => { console.log("root begin") },
            end: ($) => { console.log("root end") },
        },
    }
}