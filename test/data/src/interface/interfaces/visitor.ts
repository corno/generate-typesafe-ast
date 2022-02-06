import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api"

export type IVisitor<Annotation> = {
    readonly "Gblock$"?: {
        readonly "begin": ($: api.TNGblock$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$<Annotation>) => void,
    }
    readonly "Gexpression_arrayLiteral$"?: {
        readonly "begin": ($: api.TNGexpression_arrayLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_arrayLiteral$<Annotation>) => void,
    }
    readonly "Gexpression_arrowFunction$_equalsGreaterThan$"?: ($: api.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>) => void
    readonly "Gexpression_arrowFunction$"?: {
        readonly "begin": ($: api.TNGexpression_arrowFunction$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_arrowFunction$<Annotation>) => void,
    }
    readonly "Gexpression_binary$_operator_ampersandAmpersand$"?: ($: api.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>) => void
    readonly "Gexpression_binary$_operator_barBar$"?: ($: api.TNGexpression_binary$_operator_barBar$<Annotation>) => void
    readonly "Gexpression_binary$_operator_equals$"?: ($: api.TNGexpression_binary$_operator_equals$<Annotation>) => void
    readonly "Gexpression_binary$_operator_equalsEqualsEquals$"?: ($: api.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>) => void
    readonly "Gexpression_binary$_operator_exclamationEqualsEquals$"?: ($: api.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>) => void
    readonly "Gexpression_binary$_operator_greaterThan$"?: ($: api.TNGexpression_binary$_operator_greaterThan$<Annotation>) => void
    readonly "Gexpression_binary$_operator_lessThan$"?: ($: api.TNGexpression_binary$_operator_lessThan$<Annotation>) => void
    readonly "Gexpression_binary$_operator_minus$"?: ($: api.TNGexpression_binary$_operator_minus$<Annotation>) => void
    readonly "Gexpression_binary$_operator_minusEquals$"?: ($: api.TNGexpression_binary$_operator_minusEquals$<Annotation>) => void
    readonly "Gexpression_binary$_operator_plus$"?: ($: api.TNGexpression_binary$_operator_plus$<Annotation>) => void
    readonly "Gexpression_binary$_operator_plusEquals$"?: ($: api.TNGexpression_binary$_operator_plusEquals$<Annotation>) => void
    readonly "Gexpression_binary$"?: {
        readonly "begin": ($: api.TNGexpression_binary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_binary$<Annotation>) => void,
    }
    readonly "Gexpression_call$"?: {
        readonly "begin": ($: api.TNGexpression_call$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_call$<Annotation>) => void,
    }
    readonly "Gexpression_conditional$_questionToken$"?: ($: api.TNGexpression_conditional$_questionToken$<Annotation>) => void
    readonly "Gexpression_conditional$_colonToken$"?: ($: api.TNGexpression_conditional$_colonToken$<Annotation>) => void
    readonly "Gexpression_conditional$"?: {
        readonly "begin": ($: api.TNGexpression_conditional$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_conditional$<Annotation>) => void,
    }
    readonly "Gexpression_elementAccess$"?: {
        readonly "begin": ($: api.TNGexpression_elementAccess$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_elementAccess$<Annotation>) => void,
    }
    readonly "Gexpression_false$"?: ($: api.TNGexpression_false$<Annotation>) => void
    readonly "Gexpression_new$"?: {
        readonly "begin": ($: api.TNGexpression_new$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_new$<Annotation>) => void,
    }
    readonly "Gexpression_noSubstitutionTemplateLiteral$"?: ($: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void
    readonly "Gexpression_nullKeyword$"?: ($: api.TNGexpression_nullKeyword$<Annotation>) => void
    readonly "Gexpression_objectLiteral$$"?: {
        readonly "begin": ($: api.TNGexpression_objectLiteral$$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_objectLiteral$$<Annotation>) => void,
    }
    readonly "Gexpression_objectLiteral$"?: {
        readonly "begin": ($: api.TNGexpression_objectLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_objectLiteral$<Annotation>) => void,
    }
    readonly "Gexpression_parenthesizedExpression$"?: {
        readonly "begin": ($: api.TNGexpression_parenthesizedExpression$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_parenthesizedExpression$<Annotation>) => void,
    }
    readonly "Gexpression_postfixUnary$"?: {
        readonly "begin": ($: api.TNGexpression_postfixUnary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_postfixUnary$<Annotation>) => void,
    }
    readonly "Gexpression_prefixUnary$"?: {
        readonly "begin": ($: api.TNGexpression_prefixUnary$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_prefixUnary$<Annotation>) => void,
    }
    readonly "Gexpression_propertyAccess$"?: {
        readonly "begin": ($: api.TNGexpression_propertyAccess$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_propertyAccess$<Annotation>) => void,
    }
    readonly "Gexpression_template$_head$"?: ($: api.TNGexpression_template$_head$<Annotation>) => void
    readonly "Gexpression_template$_spans$_x_middle$"?: ($: api.TNGexpression_template$_spans$_x_middle$<Annotation>) => void
    readonly "Gexpression_template$_spans$_x_tail$"?: ($: api.TNGexpression_template$_spans$_x_tail$<Annotation>) => void
    readonly "Gexpression_template$_spans$"?: {
        readonly "begin": ($: api.TNGexpression_template$_spans$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_template$_spans$<Annotation>) => void,
    }
    readonly "Gexpression_template$"?: {
        readonly "begin": ($: api.TNGexpression_template$<Annotation>) => void,
        readonly "end": ($: api.TNGexpression_template$<Annotation>) => void,
    }
    readonly "Gexpression_true$"?: ($: api.TNGexpression_true$<Annotation>) => void
    readonly "Gidentifier$"?: ($: api.TNGidentifier$<Annotation>) => void
    readonly "Gmodifier_declare$"?: ($: api.TNGmodifier_declare$<Annotation>) => void
    readonly "Gmodifier_export$"?: ($: api.TNGmodifier_export$<Annotation>) => void
    readonly "Gmodifier_readonly$"?: ($: api.TNGmodifier_readonly$<Annotation>) => void
    readonly "GnumericLiteral$"?: ($: api.TNGnumericLiteral$<Annotation>) => void
    readonly "Gparameter$_questionToken$"?: ($: api.TNGparameter$_questionToken$<Annotation>) => void
    readonly "Gparameter$"?: {
        readonly "begin": ($: api.TNGparameter$<Annotation>) => void,
        readonly "end": ($: api.TNGparameter$<Annotation>) => void,
    }
    readonly "Gstatement_break$"?: {
        readonly "begin": ($: api.TNGstatement_break$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_break$<Annotation>) => void,
    }
    readonly "Gstatement_export$"?: {
        readonly "begin": ($: api.TNGstatement_export$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_export$<Annotation>) => void,
    }
    readonly "Gstatement_expression$"?: {
        readonly "begin": ($: api.TNGstatement_expression$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_expression$<Annotation>) => void,
    }
    readonly "Gstatement_for$"?: {
        readonly "begin": ($: api.TNGstatement_for$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_for$<Annotation>) => void,
    }
    readonly "Gstatement_function$"?: {
        readonly "begin": ($: api.TNGstatement_function$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_function$<Annotation>) => void,
    }
    readonly "Gstatement_if$"?: {
        readonly "begin": ($: api.TNGstatement_if$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_if$<Annotation>) => void,
    }
    readonly "Gstatement_import$_clause$_namespace$"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
    }
    readonly "Gstatement_import$_clause$_named$$"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_named$$<Annotation>) => void,
    }
    readonly "Gstatement_import$_clause$_named$"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$_named$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$_named$<Annotation>) => void,
    }
    readonly "Gstatement_import$_clause$"?: {
        readonly "begin": ($: api.TNGstatement_import$_clause$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$_clause$<Annotation>) => void,
    }
    readonly "Gstatement_import$"?: {
        readonly "begin": ($: api.TNGstatement_import$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_import$<Annotation>) => void,
    }
    readonly "Gstatement_interface$"?: {
        readonly "begin": ($: api.TNGstatement_interface$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_interface$<Annotation>) => void,
    }
    readonly "Gstatement_labeled$"?: {
        readonly "begin": ($: api.TNGstatement_labeled$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_labeled$<Annotation>) => void,
    }
    readonly "Gstatement_return$"?: {
        readonly "begin": ($: api.TNGstatement_return$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_return$<Annotation>) => void,
    }
    readonly "Gstatement_switch$_caseBlock$_case$"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
    }
    readonly "Gstatement_switch$_caseBlock$_default$"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
    }
    readonly "Gstatement_switch$_caseBlock$"?: {
        readonly "begin": ($: api.TNGstatement_switch$_caseBlock$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$_caseBlock$<Annotation>) => void,
    }
    readonly "Gstatement_switch$"?: {
        readonly "begin": ($: api.TNGstatement_switch$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_switch$<Annotation>) => void,
    }
    readonly "Gstatement_throw$"?: {
        readonly "begin": ($: api.TNGstatement_throw$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_throw$<Annotation>) => void,
    }
    readonly "Gstatement_try$_catchClause$"?: {
        readonly "begin": ($: api.TNGstatement_try$_catchClause$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_try$_catchClause$<Annotation>) => void,
    }
    readonly "Gstatement_try$"?: {
        readonly "begin": ($: api.TNGstatement_try$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_try$<Annotation>) => void,
    }
    readonly "Gstatement_typeAlias$"?: {
        readonly "begin": ($: api.TNGstatement_typeAlias$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_typeAlias$<Annotation>) => void,
    }
    readonly "Gstatement_variable$"?: {
        readonly "begin": ($: api.TNGstatement_variable$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_variable$<Annotation>) => void,
    }
    readonly "Gstatement_while$"?: {
        readonly "begin": ($: api.TNGstatement_while$<Annotation>) => void,
        readonly "end": ($: api.TNGstatement_while$<Annotation>) => void,
    }
    readonly "GstringLiteral$"?: ($: api.TNGstringLiteral$<Annotation>) => void
    readonly "Gtype_any$"?: ($: api.TNGtype_any$<Annotation>) => void
    readonly "Gtype_array$"?: {
        readonly "begin": ($: api.TNGtype_array$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_array$<Annotation>) => void,
    }
    readonly "Gtype_boolean$"?: ($: api.TNGtype_boolean$<Annotation>) => void
    readonly "Gtype_function$"?: {
        readonly "begin": ($: api.TNGtype_function$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_function$<Annotation>) => void,
    }
    readonly "Gtype_literal$_null$"?: ($: api.TNGtype_literal$_null$<Annotation>) => void
    readonly "Gtype_literal$"?: {
        readonly "begin": ($: api.TNGtype_literal$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_literal$<Annotation>) => void,
    }
    readonly "Gtype_parenthesized$"?: {
        readonly "begin": ($: api.TNGtype_parenthesized$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_parenthesized$<Annotation>) => void,
    }
    readonly "Gtype_never$"?: ($: api.TNGtype_never$<Annotation>) => void
    readonly "Gtype_number$"?: ($: api.TNGtype_number$<Annotation>) => void
    readonly "Gtype_optional$"?: {
        readonly "begin": ($: api.TNGtype_optional$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_optional$<Annotation>) => void,
    }
    readonly "Gtype_tuple$"?: {
        readonly "begin": ($: api.TNGtype_tuple$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_tuple$<Annotation>) => void,
    }
    readonly "Gtype_typeLiteral$"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
    }
    readonly "Gtype_string$"?: ($: api.TNGtype_string$<Annotation>) => void
    readonly "Gtype_typeReference$_x_qualifiedName$"?: {
        readonly "begin": ($: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
    }
    readonly "Gtype_typeReference$"?: {
        readonly "begin": ($: api.TNGtype_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$<Annotation>) => void,
    }
    readonly "Gtype_undefined$"?: ($: api.TNGtype_undefined$<Annotation>) => void
    readonly "Gtype_union$"?: {
        readonly "begin": ($: api.TNGtype_union$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$<Annotation>) => void,
    }
    readonly "Gtype_void$"?: ($: api.TNGtype_void$<Annotation>) => void
    readonly "GtypeParameter$"?: {
        readonly "begin": ($: api.TNGtypeParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeParameter$<Annotation>) => void,
    }
    readonly "GtypeSignature_construct$"?: {
        readonly "begin": ($: api.TNGtypeSignature_construct$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_construct$<Annotation>) => void,
    }
    readonly "GtypeSignature_index$"?: {
        readonly "begin": ($: api.TNGtypeSignature_index$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_index$<Annotation>) => void,
    }
    readonly "GtypeSignature_method$"?: {
        readonly "begin": ($: api.TNGtypeSignature_method$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_method$<Annotation>) => void,
    }
    readonly "GtypeSignature_property$_quesionToken$"?: ($: api.TNGtypeSignature_property$_quesionToken$<Annotation>) => void
    readonly "GtypeSignature_property$"?: {
        readonly "begin": ($: api.TNGtypeSignature_property$<Annotation>) => void,
        readonly "end": ($: api.TNGtypeSignature_property$<Annotation>) => void,
    }
    readonly "GvariableDeclaration$"?: {
        readonly "begin": ($: api.TNGvariableDeclaration$<Annotation>) => void,
        readonly "end": ($: api.TNGvariableDeclaration$<Annotation>) => void,
    }
    readonly "GvariableDeclarationList$"?: {
        readonly "begin": ($: api.TNGvariableDeclarationList$<Annotation>) => void,
        readonly "end": ($: api.TNGvariableDeclarationList$<Annotation>) => void,
    }
    readonly "root_endOfFile$"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    readonly "root"?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
    }
}