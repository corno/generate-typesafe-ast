import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api"

export type FOO<Annotation> = {
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

export const foo: FOO<string> = {
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