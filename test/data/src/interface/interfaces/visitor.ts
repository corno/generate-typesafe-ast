import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api"

export type IVisitor<Annotation> = {
    "Gblock$"?: {
        readonly "begin": ($: api.TNGblock$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$<Annotation>) => void,
    }
    "Gexpression_arrayLiteral$"?: {
        readonly "begin": ($: api.TNGexpression_arrayLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_arrayLiteral$<Annotation>) => void,
    }
    "Gexpression_arrowFunction$_equalsGreaterThan$"?: ($: api.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>) => void
    "Gexpression_arrowFunction$"?: {
        readonly "begin": ($: api.TNGexpression_arrowFunction$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_arrowFunction$<Annotation>) => void,
    }
    "Gexpression_binary$_operator_ampersandAmpersand$"?: ($: api.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>) => void
    "Gexpression_binary$_operator_barBar$"?: ($: api.TNGexpression_binary$_operator_barBar$<Annotation>) => void
    "Gexpression_binary$_operator_equals$"?: ($: api.TNGexpression_binary$_operator_equals$<Annotation>) => void
    "Gexpression_binary$_operator_equalsEqualsEquals$"?: ($: api.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>) => void
    "Gexpression_binary$_operator_exclamationEqualsEquals$"?: ($: api.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>) => void
    "Gexpression_binary$_operator_greaterThan$"?: ($: api.TNGexpression_binary$_operator_greaterThan$<Annotation>) => void
    "Gexpression_binary$_operator_lessThan$"?: ($: api.TNGexpression_binary$_operator_lessThan$<Annotation>) => void
    "Gexpression_binary$_operator_minus$"?: ($: api.TNGexpression_binary$_operator_minus$<Annotation>) => void
    "Gexpression_binary$_operator_minusEquals$"?: ($: api.TNGexpression_binary$_operator_minusEquals$<Annotation>) => void
    "Gexpression_binary$_operator_plus$"?: ($: api.TNGexpression_binary$_operator_plus$<Annotation>) => void
    "Gexpression_binary$_operator_plusEquals$"?: ($: api.TNGexpression_binary$_operator_plusEquals$<Annotation>) => void
    "Gexpression_binary$"?: {
        readonly "begin": ($: api.TNGexpression_binary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_binary$<Annotation>) => void,
    }
    "Gexpression_call$"?: {
        readonly "begin": ($: api.TNGexpression_call$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_call$<Annotation>) => void,
    }
    "Gexpression_conditional$_questionToken$"?: ($: api.TNGexpression_conditional$_questionToken$<Annotation>) => void
    "Gexpression_conditional$_colonToken$"?: ($: api.TNGexpression_conditional$_colonToken$<Annotation>) => void
    "Gexpression_conditional$"?: {
        readonly "begin": ($: api.TNGexpression_conditional$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_conditional$<Annotation>) => void,
    }
    "Gexpression_elementAccess$"?: {
        readonly "begin": ($: api.TNGexpression_elementAccess$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_elementAccess$<Annotation>) => void,
    }
    "Gexpression_false$"?: ($: api.TNGexpression_false$<Annotation>) => void
    "Gexpression_new$"?: {
        readonly "begin": ($: api.TNGexpression_new$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_new$<Annotation>) => void,
    }
    "Gexpression_noSubstitutionTemplateLiteral$"?: ($: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void
    "Gexpression_nullKeyword$"?: ($: api.TNGexpression_nullKeyword$<Annotation>) => void
    "Gexpression_objectLiteral$$"?: {
        readonly "begin": ($: api.TNGexpression_objectLiteral$$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_objectLiteral$$<Annotation>) => void,
    }
    "Gexpression_objectLiteral$"?: {
        readonly "begin": ($: api.TNGexpression_objectLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_objectLiteral$<Annotation>) => void,
    }
    "Gexpression_parenthesizedExpression$"?: {
        readonly "begin": ($: api.TNGexpression_parenthesizedExpression$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_parenthesizedExpression$<Annotation>) => void,
    }
    "Gexpression_postfixUnary$"?: {
        readonly "begin": ($: api.TNGexpression_postfixUnary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_postfixUnary$<Annotation>) => void,
    }
    "Gexpression_prefixUnary$"?: {
        readonly "begin": ($: api.TNGexpression_prefixUnary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_prefixUnary$<Annotation>) => void,
    }
    "Gexpression_propertyAccess$"?: {
        readonly "begin": ($: api.TNGexpression_propertyAccess$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_propertyAccess$<Annotation>) => void,
    }
    "Gexpression_template$_head$"?: ($: api.TNGexpression_template$_head$<Annotation>) => void
    "Gexpression_template$_spans$_x_middle$"?: ($: api.TNGexpression_template$_spans$_x_middle$<Annotation>) => void
    "Gexpression_template$_spans$_x_tail$"?: ($: api.TNGexpression_template$_spans$_x_tail$<Annotation>) => void
    "Gexpression_template$_spans$"?: {
        readonly "begin": ($: api.TNGexpression_template$_spans$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_template$_spans$<Annotation>) => void,
    }
    "Gexpression_template$"?: {
        readonly "begin": ($: api.TNGexpression_template$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_template$<Annotation>) => void,
    }
    "Gexpression_true$"?: ($: api.TNGexpression_true$<Annotation>) => void
    "Gidentifier$"?: ($: api.TNGidentifier$<Annotation>) => void
    "Gmodifier_declare$"?: ($: api.TNGmodifier_declare$<Annotation>) => void
    "Gmodifier_export$"?: ($: api.TNGmodifier_export$<Annotation>) => void
    "Gmodifier_readonly$"?: ($: api.TNGmodifier_readonly$<Annotation>) => void
    "GnumericLiteral$"?: ($: api.TNGnumericLiteral$<Annotation>) => void
    "Gparameter$_questionToken$"?: ($: api.TNGparameter$_questionToken$<Annotation>) => void
    "Gparameter$"?: {
        readonly "begin": ($: api.TNGparameter$<Annotation>) => void,
        readonly "end": ($: api.TNGparameter$<Annotation>) => void,
    }
    "Gstatement_break$"?: {
        readonly "begin": ($: api.TNGstatement_break$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_break$<Annotation>) => void,
    }
    "Gstatement_export$"?: {
        readonly "begin": ($: api.TNGstatement_export$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_export$<Annotation>) => void,
    }
    "Gstatement_expression$"?: {
        readonly "begin": ($: api.TNGstatement_expression$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_expression$<Annotation>) => void,
    }
    "Gstatement_for$"?: {
        readonly "begin": ($: api.TNGstatement_for$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_for$<Annotation>) => void,
    }
    "Gstatement_function$"?: {
        readonly "begin": ($: api.TNGstatement_function$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_function$<Annotation>) => void,
    }
    "Gstatement_if$"?: {
        readonly "begin": ($: api.TNGstatement_if$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_if$<Annotation>) => void,
    }
    "Gstatement_import$_clause$_namespace$"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
    }
    "Gstatement_import$_clause$_named$$"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_named$$<Annotation>) => void,
    }
    "Gstatement_import$_clause$_named$"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_named$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_named$<Annotation>) => void,
    }
    "Gstatement_import$_clause$"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$<Annotation>) => void,
    }
    "Gstatement_import$"?: {
        readonly "begin": ($: api.TNGstatement_import$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$<Annotation>) => void,
    }
    "Gstatement_interface$"?: {
        readonly "begin": ($: api.TNGstatement_interface$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_interface$<Annotation>) => void,
    }
    "Gstatement_labeled$"?: {
        readonly "begin": ($: api.TNGstatement_labeled$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_labeled$<Annotation>) => void,
    }
    "Gstatement_return$"?: {
        readonly "begin": ($: api.TNGstatement_return$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_return$<Annotation>) => void,
    }
    "Gstatement_switch$_caseBlock$_case$"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
    }
    "Gstatement_switch$_caseBlock$_default$"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
    }
    "Gstatement_switch$_caseBlock$"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$<Annotation>) => void,
    }
    "Gstatement_switch$"?: {
        readonly "begin": ($: api.TNGstatement_switch$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$<Annotation>) => void,
    }
    "Gstatement_throw$"?: {
        readonly "begin": ($: api.TNGstatement_throw$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_throw$<Annotation>) => void,
    }
    "Gstatement_try$_catchClause$"?: {
        readonly "begin": ($: api.TNGstatement_try$_catchClause$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_try$_catchClause$<Annotation>) => void,
    }
    "Gstatement_try$"?: {
        readonly "begin": ($: api.TNGstatement_try$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_try$<Annotation>) => void,
    }
    "Gstatement_typeAlias$"?: {
        readonly "begin": ($: api.TNGstatement_typeAlias$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_typeAlias$<Annotation>) => void,
    }
    "Gstatement_variable$"?: {
        readonly "begin": ($: api.TNGstatement_variable$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_variable$<Annotation>) => void,
    }
    "Gstatement_while$"?: {
        readonly "begin": ($: api.TNGstatement_while$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_while$<Annotation>) => void,
    }
    "GstringLiteral$"?: ($: api.TNGstringLiteral$<Annotation>) => void
    "Gtype_any$"?: ($: api.TNGtype_any$<Annotation>) => void
    "Gtype_array$"?: {
        readonly "begin": ($: api.TNGtype_array$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_array$<Annotation>) => void,
    }
    "Gtype_boolean$"?: ($: api.TNGtype_boolean$<Annotation>) => void
    "Gtype_function$"?: {
        readonly "begin": ($: api.TNGtype_function$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_function$<Annotation>) => void,
    }
    "Gtype_literal$_null$"?: ($: api.TNGtype_literal$_null$<Annotation>) => void
    "Gtype_literal$"?: {
        readonly "begin": ($: api.TNGtype_literal$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_literal$<Annotation>) => void,
    }
    "Gtype_parenthesized$"?: {
        readonly "begin": ($: api.TNGtype_parenthesized$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_parenthesized$<Annotation>) => void,
    }
    "Gtype_never$"?: ($: api.TNGtype_never$<Annotation>) => void
    "Gtype_number$"?: ($: api.TNGtype_number$<Annotation>) => void
    "Gtype_optional$"?: {
        readonly "begin": ($: api.TNGtype_optional$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_optional$<Annotation>) => void,
    }
    "Gtype_tuple$"?: {
        readonly "begin": ($: api.TNGtype_tuple$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_tuple$<Annotation>) => void,
    }
    "Gtype_typeLiteral$"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
    }
    "Gtype_string$"?: ($: api.TNGtype_string$<Annotation>) => void
    "Gtype_typeReference$_x_qualifiedName$"?: {
        readonly "begin": ($: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
    }
    "Gtype_typeReference$"?: {
        readonly "begin": ($: api.TNGtype_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$<Annotation>) => void,
    }
    "Gtype_undefined$"?: ($: api.TNGtype_undefined$<Annotation>) => void
    "Gtype_union$"?: {
        readonly "begin": ($: api.TNGtype_union$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$<Annotation>) => void,
    }
    "Gtype_void$"?: ($: api.TNGtype_void$<Annotation>) => void
    "GtypeParameter$"?: {
        readonly "begin": ($: api.TNGtypeParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeParameter$<Annotation>) => void,
    }
    "GtypeSignature_construct$"?: {
        readonly "begin": ($: api.TNGtypeSignature_construct$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_construct$<Annotation>) => void,
    }
    "GtypeSignature_index$"?: {
        readonly "begin": ($: api.TNGtypeSignature_index$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_index$<Annotation>) => void,
    }
    "GtypeSignature_method$"?: {
        readonly "begin": ($: api.TNGtypeSignature_method$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_method$<Annotation>) => void,
    }
    "GtypeSignature_property$_quesionToken$"?: ($: api.TNGtypeSignature_property$_quesionToken$<Annotation>) => void
    "GtypeSignature_property$"?: {
        readonly "begin": ($: api.TNGtypeSignature_property$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_property$<Annotation>) => void,
    }
    "GvariableDeclaration$"?: {
        readonly "begin": ($: api.TNGvariableDeclaration$<Annotation>) => void,
        readonly "end": ($: api.TNGvariableDeclaration$<Annotation>) => void,
    }
    "GvariableDeclarationList$"?: {
        readonly "begin": ($: api.TNGvariableDeclarationList$<Annotation>) => void,
        readonly "end": ($: api.TNGvariableDeclarationList$<Annotation>) => void,
    }
    "root_endOfFile$"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    "root"?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
    }
}