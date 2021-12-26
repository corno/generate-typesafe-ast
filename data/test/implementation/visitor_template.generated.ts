import * as pr from "pareto-runtime"
import * as api from "../interface/ts_api.generated"

export type FOO<Annotation> = {
    "Gblock$"?: {
        begin: ($: api.NGblock$<Annotation>) => void,
        end: ($: api.NGblock$<Annotation>) => void,
    }
    "Gexpression_arrayLiteral$"?: {
        begin: ($: api.NGexpression_arrayLiteral$<Annotation>) => void,
        end: ($: api.NGexpression_arrayLiteral$<Annotation>) => void,
    }
    "Gexpression_arrowFunction$"?: {
        begin: ($: api.NGexpression_arrowFunction$<Annotation>) => void,
        end: ($: api.NGexpression_arrowFunction$<Annotation>) => void,
    }
    "Gexpression_binary$"?: {
        begin: ($: api.NGexpression_binary$<Annotation>) => void,
        end: ($: api.NGexpression_binary$<Annotation>) => void,
    }
    "Gexpression_call$"?: {
        begin: ($: api.NGexpression_call$<Annotation>) => void,
        end: ($: api.NGexpression_call$<Annotation>) => void,
    }
    "Gexpression_conditional$"?: {
        begin: ($: api.NGexpression_conditional$<Annotation>) => void,
        end: ($: api.NGexpression_conditional$<Annotation>) => void,
    }
    "Gexpression_elementAccess$"?: {
        begin: ($: api.NGexpression_elementAccess$<Annotation>) => void,
        end: ($: api.NGexpression_elementAccess$<Annotation>) => void,
    }
    "Gexpression_false$"?: ($: api.NGexpression_false$<Annotation>) => void
    "Gexpression_new$"?: {
        begin: ($: api.NGexpression_new$<Annotation>) => void,
        end: ($: api.NGexpression_new$<Annotation>) => void,
    }
    "Gexpression_noSubstitutionTemplateLiteral$"?: ($: api.NGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void
    "Gexpression_nullKeyword$"?: ($: api.NGexpression_nullKeyword$<Annotation>) => void
    "Gexpression_objectLiteral$"?: {
        begin: ($: api.NGexpression_objectLiteral$<Annotation>) => void,
        end: ($: api.NGexpression_objectLiteral$<Annotation>) => void,
    }
    "Gexpression_parenthesizedExpression$"?: {
        begin: ($: api.NGexpression_parenthesizedExpression$<Annotation>) => void,
        end: ($: api.NGexpression_parenthesizedExpression$<Annotation>) => void,
    }
    "Gexpression_postfixUnary$"?: {
        begin: ($: api.NGexpression_postfixUnary$<Annotation>) => void,
        end: ($: api.NGexpression_postfixUnary$<Annotation>) => void,
    }
    "Gexpression_prefixUnary$"?: {
        begin: ($: api.NGexpression_prefixUnary$<Annotation>) => void,
        end: ($: api.NGexpression_prefixUnary$<Annotation>) => void,
    }
    "Gexpression_propertyAccess$"?: {
        begin: ($: api.NGexpression_propertyAccess$<Annotation>) => void,
        end: ($: api.NGexpression_propertyAccess$<Annotation>) => void,
    }
    "Gexpression_template$"?: {
        begin: ($: api.NGexpression_template$<Annotation>) => void,
        end: ($: api.NGexpression_template$<Annotation>) => void,
    }
    "Gexpression_true$"?: ($: api.NGexpression_true$<Annotation>) => void
    "Gidentifier$"?: ($: api.NGidentifier$<Annotation>) => void
    "Gmodifier_declare$"?: ($: api.NGmodifier_declare$<Annotation>) => void
    "Gmodifier_export$"?: ($: api.NGmodifier_export$<Annotation>) => void
    "Gmodifier_readonly$"?: ($: api.NGmodifier_readonly$<Annotation>) => void
    "GnumericLiteral$"?: ($: api.NGnumericLiteral$<Annotation>) => void
    "Gparameter$"?: {
        begin: ($: api.NGparameter$<Annotation>) => void,
        end: ($: api.NGparameter$<Annotation>) => void,
    }
    "Gstatement_break$"?: {
        begin: ($: api.NGstatement_break$<Annotation>) => void,
        end: ($: api.NGstatement_break$<Annotation>) => void,
    }
    "Gstatement_export$"?: {
        begin: ($: api.NGstatement_export$<Annotation>) => void,
        end: ($: api.NGstatement_export$<Annotation>) => void,
    }
    "Gstatement_expression$"?: {
        begin: ($: api.NGstatement_expression$<Annotation>) => void,
        end: ($: api.NGstatement_expression$<Annotation>) => void,
    }
    "Gstatement_for$"?: {
        begin: ($: api.NGstatement_for$<Annotation>) => void,
        end: ($: api.NGstatement_for$<Annotation>) => void,
    }
    "Gstatement_function$"?: {
        begin: ($: api.NGstatement_function$<Annotation>) => void,
        end: ($: api.NGstatement_function$<Annotation>) => void,
    }
    "Gstatement_if$"?: {
        begin: ($: api.NGstatement_if$<Annotation>) => void,
        end: ($: api.NGstatement_if$<Annotation>) => void,
    }
    "Gstatement_import$"?: {
        begin: ($: api.NGstatement_import$<Annotation>) => void,
        end: ($: api.NGstatement_import$<Annotation>) => void,
    }
    "Gstatement_interface$"?: {
        begin: ($: api.NGstatement_interface$<Annotation>) => void,
        end: ($: api.NGstatement_interface$<Annotation>) => void,
    }
    "Gstatement_labeled$"?: {
        begin: ($: api.NGstatement_labeled$<Annotation>) => void,
        end: ($: api.NGstatement_labeled$<Annotation>) => void,
    }
    "Gstatement_return$"?: {
        begin: ($: api.NGstatement_return$<Annotation>) => void,
        end: ($: api.NGstatement_return$<Annotation>) => void,
    }
    "Gstatement_switch$"?: {
        begin: ($: api.NGstatement_switch$<Annotation>) => void,
        end: ($: api.NGstatement_switch$<Annotation>) => void,
    }
    "Gstatement_throw$"?: {
        begin: ($: api.NGstatement_throw$<Annotation>) => void,
        end: ($: api.NGstatement_throw$<Annotation>) => void,
    }
    "Gstatement_try$"?: {
        begin: ($: api.NGstatement_try$<Annotation>) => void,
        end: ($: api.NGstatement_try$<Annotation>) => void,
    }
    "Gstatement_typeAlias$"?: {
        begin: ($: api.NGstatement_typeAlias$<Annotation>) => void,
        end: ($: api.NGstatement_typeAlias$<Annotation>) => void,
    }
    "Gstatement_variable$"?: {
        begin: ($: api.NGstatement_variable$<Annotation>) => void,
        end: ($: api.NGstatement_variable$<Annotation>) => void,
    }
    "Gstatement_while$"?: {
        begin: ($: api.NGstatement_while$<Annotation>) => void,
        end: ($: api.NGstatement_while$<Annotation>) => void,
    }
    "GstringLiteral$"?: ($: api.NGstringLiteral$<Annotation>) => void
    "Gtype_any$"?: ($: api.NGtype_any$<Annotation>) => void
    "Gtype_array$"?: {
        begin: ($: api.NGtype_array$<Annotation>) => void,
        end: ($: api.NGtype_array$<Annotation>) => void,
    }
    "Gtype_boolean$"?: ($: api.NGtype_boolean$<Annotation>) => void
    "Gtype_function$"?: {
        begin: ($: api.NGtype_function$<Annotation>) => void,
        end: ($: api.NGtype_function$<Annotation>) => void,
    }
    "Gtype_literal$"?: {
        begin: ($: api.NGtype_literal$<Annotation>) => void,
        end: ($: api.NGtype_literal$<Annotation>) => void,
    }
    "Gtype_parenthesized$"?: {
        begin: ($: api.NGtype_parenthesized$<Annotation>) => void,
        end: ($: api.NGtype_parenthesized$<Annotation>) => void,
    }
    "Gtype_never$"?: ($: api.NGtype_never$<Annotation>) => void
    "Gtype_number$"?: ($: api.NGtype_number$<Annotation>) => void
    "Gtype_optional$"?: {
        begin: ($: api.NGtype_optional$<Annotation>) => void,
        end: ($: api.NGtype_optional$<Annotation>) => void,
    }
    "Gtype_tuple$"?: {
        begin: ($: api.NGtype_tuple$<Annotation>) => void,
        end: ($: api.NGtype_tuple$<Annotation>) => void,
    }
    "Gtype_typeLiteral$"?: {
        begin: ($: api.NGtype_typeLiteral$<Annotation>) => void,
        end: ($: api.NGtype_typeLiteral$<Annotation>) => void,
    }
    "Gtype_string$"?: ($: api.NGtype_string$<Annotation>) => void
    "Gtype_typeReference$"?: {
        begin: ($: api.NGtype_typeReference$<Annotation>) => void,
        end: ($: api.NGtype_typeReference$<Annotation>) => void,
    }
    "Gtype_undefined$"?: ($: api.NGtype_undefined$<Annotation>) => void
    "Gtype_union$"?: {
        begin: ($: api.NGtype_union$<Annotation>) => void,
        end: ($: api.NGtype_union$<Annotation>) => void,
    }
    "Gtype_void$"?: ($: api.NGtype_void$<Annotation>) => void
    "GtypeParameter$"?: {
        begin: ($: api.NGtypeParameter$<Annotation>) => void,
        end: ($: api.NGtypeParameter$<Annotation>) => void,
    }
    "GtypeSignature_construct$"?: {
        begin: ($: api.NGtypeSignature_construct$<Annotation>) => void,
        end: ($: api.NGtypeSignature_construct$<Annotation>) => void,
    }
    "GtypeSignature_index$"?: {
        begin: ($: api.NGtypeSignature_index$<Annotation>) => void,
        end: ($: api.NGtypeSignature_index$<Annotation>) => void,
    }
    "GtypeSignature_method$"?: {
        begin: ($: api.NGtypeSignature_method$<Annotation>) => void,
        end: ($: api.NGtypeSignature_method$<Annotation>) => void,
    }
    "GtypeSignature_property$"?: {
        begin: ($: api.NGtypeSignature_property$<Annotation>) => void,
        end: ($: api.NGtypeSignature_property$<Annotation>) => void,
    }
    "GvariableDeclaration$"?: {
        begin: ($: api.NGvariableDeclaration$<Annotation>) => void,
        end: ($: api.NGvariableDeclaration$<Annotation>) => void,
    }
    "GvariableDeclarationList$"?: {
        begin: ($: api.NGvariableDeclarationList$<Annotation>) => void,
        end: ($: api.NGvariableDeclarationList$<Annotation>) => void,
    }
    "root"?: {
        begin: ($: api.Nroot<Annotation>) => void,
        end: ($: api.Nroot<Annotation>) => void,
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
    "Gexpression_arrowFunction$": {
        begin: ($) => { console.log("Gexpression_arrowFunction$ begin") },
        end: ($) => { console.log("Gexpression_arrowFunction$ end") },
    },
    "Gexpression_binary$": {
        begin: ($) => { console.log("Gexpression_binary$ begin") },
        end: ($) => { console.log("Gexpression_binary$ end") },
    },
    "Gexpression_call$": {
        begin: ($) => { console.log("Gexpression_call$ begin") },
        end: ($) => { console.log("Gexpression_call$ end") },
    },
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
    "Gstatement_switch$": {
        begin: ($) => { console.log("Gstatement_switch$ begin") },
        end: ($) => { console.log("Gstatement_switch$ end") },
    },
    "Gstatement_throw$": {
        begin: ($) => { console.log("Gstatement_throw$ begin") },
        end: ($) => { console.log("Gstatement_throw$ end") },
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
    "root": {
        begin: ($) => { console.log("root begin") },
        end: ($) => { console.log("root end") },
    },
}

export function visit<Annotation>(
    $: api.Nroot<Annotation>,
    foo: FOO<Annotation>,
): void {
    function X_block(
        $: api.Gblock<Annotation>,
    ) {
        ((
            $: api.NGblock$<Annotation>,
        ) => {
            if (foo["Gblock$"] !== undefined) { foo["Gblock$"].begin($) }
            pr.cc($.content, ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            if (foo["Gblock$"] !== undefined) { foo["Gblock$"].end($) }
        })($)
    }
    function X_expression(
        $: api.Gexpression<Annotation>,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_arrayLiteral$<Annotation>,
                    ) => {
                        if (foo["Gexpression_arrayLiteral$"] !== undefined) { foo["Gexpression_arrayLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_expression($)
                            })
                        })
                        if (foo["Gexpression_arrayLiteral$"] !== undefined) { foo["Gexpression_arrayLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "arrowFunction": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_arrowFunction$<Annotation>,
                    ) => {
                        if (foo["Gexpression_arrowFunction$"] !== undefined) { foo["Gexpression_arrowFunction$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
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
                                ((
                                    $: api.NGexpression_arrowFunction$_equalsGreaterThan$<Annotation>,
                                ) => {
                                    if (foo["Gexpression_arrowFunction$_equalsGreaterThan$"] !== undefined) { foo["Gexpression_arrowFunction$_equalsGreaterThan$"]($) }
                                })($)
                            })
                            pr.cc($["implementation"], ($) => {
                                switch ($[0]) {
                                    case "block": {
                                        pr.cc($[1], ($) => {
                                            X_block($)
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
                        if (foo["Gexpression_arrowFunction$"] !== undefined) { foo["Gexpression_arrowFunction$"].end($) }
                    })($)
                })
                break
            }
            case "binary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_binary$<Annotation>,
                    ) => {
                        if (foo["Gexpression_binary$"] !== undefined) { foo["Gexpression_binary$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["leftHandSide"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "ampersandAmpersand": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_ampersandAmpersand$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_ampersandAmpersand$"] !== undefined) { foo["Gexpression_binary$_operator_ampersandAmpersand$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "barBar": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_barBar$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_barBar$"] !== undefined) { foo["Gexpression_binary$_operator_barBar$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_equals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_equals$"] !== undefined) { foo["Gexpression_binary$_operator_equals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equalsEqualsEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_equalsEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_equalsEqualsEquals$"] !== undefined) { foo["Gexpression_binary$_operator_equalsEqualsEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "exclamationEqualsEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_exclamationEqualsEquals$"] !== undefined) { foo["Gexpression_binary$_operator_exclamationEqualsEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "greaterThan": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_greaterThan$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_greaterThan$"] !== undefined) { foo["Gexpression_binary$_operator_greaterThan$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "lessThan": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_lessThan$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_lessThan$"] !== undefined) { foo["Gexpression_binary$_operator_lessThan$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minus": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_minus$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_minus$"] !== undefined) { foo["Gexpression_binary$_operator_minus$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minusEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_minusEquals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_minusEquals$"] !== undefined) { foo["Gexpression_binary$_operator_minusEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plus": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_plus$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_plus$"] !== undefined) { foo["Gexpression_binary$_operator_plus$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plusEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGexpression_binary$_operator_plusEquals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_plusEquals$"] !== undefined) { foo["Gexpression_binary$_operator_plusEquals$"]($) }
                                            })($)
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
                        if (foo["Gexpression_binary$"] !== undefined) { foo["Gexpression_binary$"].end($) }
                    })($)
                })
                break
            }
            case "call": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_call$<Annotation>,
                    ) => {
                        if (foo["Gexpression_call$"] !== undefined) { foo["Gexpression_call$"].begin($) }
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
                        if (foo["Gexpression_call$"] !== undefined) { foo["Gexpression_call$"].end($) }
                    })($)
                })
                break
            }
            case "conditional": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_conditional$<Annotation>,
                    ) => {
                        if (foo["Gexpression_conditional$"] !== undefined) { foo["Gexpression_conditional$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["test"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["questionToken"], ($) => {
                                ((
                                    $: api.NGexpression_conditional$_questionToken$<Annotation>,
                                ) => {
                                    if (foo["Gexpression_conditional$_questionToken$"] !== undefined) { foo["Gexpression_conditional$_questionToken$"]($) }
                                })($)
                            })
                            pr.cc($["ifExpression"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["colonToken"], ($) => {
                                ((
                                    $: api.NGexpression_conditional$_colonToken$<Annotation>,
                                ) => {
                                    if (foo["Gexpression_conditional$_colonToken$"] !== undefined) { foo["Gexpression_conditional$_colonToken$"]($) }
                                })($)
                            })
                            pr.cc($["elseExpression"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["Gexpression_conditional$"] !== undefined) { foo["Gexpression_conditional$"].end($) }
                    })($)
                })
                break
            }
            case "elementAccess": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_elementAccess$<Annotation>,
                    ) => {
                        if (foo["Gexpression_elementAccess$"] !== undefined) { foo["Gexpression_elementAccess$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["array"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["element"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["Gexpression_elementAccess$"] !== undefined) { foo["Gexpression_elementAccess$"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_false$<Annotation>,
                    ) => {
                        if (foo["Gexpression_false$"] !== undefined) { foo["Gexpression_false$"]($) }
                    })($)
                })
                break
            }
            case "identifier": {
                pr.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "new": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_new$<Annotation>,
                    ) => {
                        if (foo["Gexpression_new$"] !== undefined) { foo["Gexpression_new$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["class"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_expression($)
                                })
                            })
                        })
                        if (foo["Gexpression_new$"] !== undefined) { foo["Gexpression_new$"].end($) }
                    })($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_noSubstitutionTemplateLiteral$<Annotation>,
                    ) => {
                        if (foo["Gexpression_noSubstitutionTemplateLiteral$"] !== undefined) { foo["Gexpression_noSubstitutionTemplateLiteral$"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pr.cc($[1], ($) => {
                    X_numericLiteral($)
                })
                break
            }
            case "nullKeyword": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_nullKeyword$<Annotation>,
                    ) => {
                        if (foo["Gexpression_nullKeyword$"] !== undefined) { foo["Gexpression_nullKeyword$"]($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["Gexpression_objectLiteral$"] !== undefined) { foo["Gexpression_objectLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.NGexpression_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["Gexpression_objectLiteral$$"] !== undefined) { foo["Gexpression_objectLiteral$$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["name"], ($) => {
                                            switch ($[0]) {
                                                case "identifier": {
                                                    pr.cc($[1], ($) => {
                                                        X_identifier($)
                                                    })
                                                    break
                                                }
                                                case "numericLiteral": {
                                                    pr.cc($[1], ($) => {
                                                        X_numericLiteral($)
                                                    })
                                                    break
                                                }
                                                case "stringLiteral": {
                                                    pr.cc($[1], ($) => {
                                                        X_stringLiteral($)
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
                                    if (foo["Gexpression_objectLiteral$$"] !== undefined) { foo["Gexpression_objectLiteral$$"].end($) }
                                })($)
                            })
                        })
                        if (foo["Gexpression_objectLiteral$"] !== undefined) { foo["Gexpression_objectLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "parenthesizedExpression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_parenthesizedExpression$<Annotation>,
                    ) => {
                        if (foo["Gexpression_parenthesizedExpression$"] !== undefined) { foo["Gexpression_parenthesizedExpression$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["Gexpression_parenthesizedExpression$"] !== undefined) { foo["Gexpression_parenthesizedExpression$"].end($) }
                    })($)
                })
                break
            }
            case "postfixUnary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_postfixUnary$<Annotation>,
                    ) => {
                        if (foo["Gexpression_postfixUnary$"] !== undefined) { foo["Gexpression_postfixUnary$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["Gexpression_postfixUnary$"] !== undefined) { foo["Gexpression_postfixUnary$"].end($) }
                    })($)
                })
                break
            }
            case "prefixUnary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_prefixUnary$<Annotation>,
                    ) => {
                        if (foo["Gexpression_prefixUnary$"] !== undefined) { foo["Gexpression_prefixUnary$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["Gexpression_prefixUnary$"] !== undefined) { foo["Gexpression_prefixUnary$"].end($) }
                    })($)
                })
                break
            }
            case "propertyAccess": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_propertyAccess$<Annotation>,
                    ) => {
                        if (foo["Gexpression_propertyAccess$"] !== undefined) { foo["Gexpression_propertyAccess$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["object"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["property"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["Gexpression_propertyAccess$"] !== undefined) { foo["Gexpression_propertyAccess$"].end($) }
                    })($)
                })
                break
            }
            case "stringLiteral": {
                pr.cc($[1], ($) => {
                    X_stringLiteral($)
                })
                break
            }
            case "template": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_template$<Annotation>,
                    ) => {
                        if (foo["Gexpression_template$"] !== undefined) { foo["Gexpression_template$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["head"], ($) => {
                                ((
                                    $: api.NGexpression_template$_head$<Annotation>,
                                ) => {
                                    if (foo["Gexpression_template$_head$"] !== undefined) { foo["Gexpression_template$_head$"]($) }
                                })($)
                            })
                            pr.cc($["spans"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.NGexpression_template$_spans$<Annotation>,
                                    ) => {
                                        if (foo["Gexpression_template$_spans$"] !== undefined) { foo["Gexpression_template$_spans$"].begin($) }
                                        pr.cc($.content, ($) => {
                                            pr.cc($["expression"], ($) => {
                                                X_expression($)
                                            })
                                            pr.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "middle": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.NGexpression_template$_spans$_x_middle$<Annotation>,
                                                            ) => {
                                                                if (foo["Gexpression_template$_spans$_x_middle$"] !== undefined) { foo["Gexpression_template$_spans$_x_middle$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "tail": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.NGexpression_template$_spans$_x_tail$<Annotation>,
                                                            ) => {
                                                                if (foo["Gexpression_template$_spans$_x_tail$"] !== undefined) { foo["Gexpression_template$_spans$_x_tail$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pr.au($[0])
                                                }
                                            })
                                        })
                                        if (foo["Gexpression_template$_spans$"] !== undefined) { foo["Gexpression_template$_spans$"].end($) }
                                    })($)
                                })
                            })
                        })
                        if (foo["Gexpression_template$"] !== undefined) { foo["Gexpression_template$"].end($) }
                    })($)
                })
                break
            }
            case "true": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGexpression_true$<Annotation>,
                    ) => {
                        if (foo["Gexpression_true$"] !== undefined) { foo["Gexpression_true$"]($) }
                    })($)
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
                X_typeParameter($)
            })
        })
        pr.cc($["parameters"], ($) => {
            $.forEach(($) => {
                X_parameter($)
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
    function X_identifier(
        $: api.Gidentifier<Annotation>,
    ) {
        ((
            $: api.NGidentifier$<Annotation>,
        ) => {
            if (foo["Gidentifier$"] !== undefined) { foo["Gidentifier$"]($) }
        })($)
    }
    function X_identifierOrStringLiteral(
        $: api.GidentifierOrStringLiteral<Annotation>,
    ) {
        switch ($[0]) {
            case "identifier": {
                pr.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "stringLiteral": {
                pr.cc($[1], ($) => {
                    X_stringLiteral($)
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
                    ((
                        $: api.NGmodifier_declare$<Annotation>,
                    ) => {
                        if (foo["Gmodifier_declare$"] !== undefined) { foo["Gmodifier_declare$"]($) }
                    })($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGmodifier_export$<Annotation>,
                    ) => {
                        if (foo["Gmodifier_export$"] !== undefined) { foo["Gmodifier_export$"]($) }
                    })($)
                })
                break
            }
            case "readonly": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGmodifier_readonly$<Annotation>,
                    ) => {
                        if (foo["Gmodifier_readonly$"] !== undefined) { foo["Gmodifier_readonly$"]($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_numericLiteral(
        $: api.GnumericLiteral<Annotation>,
    ) {
        ((
            $: api.NGnumericLiteral$<Annotation>,
        ) => {
            if (foo["GnumericLiteral$"] !== undefined) { foo["GnumericLiteral$"]($) }
        })($)
    }
    function X_parameter(
        $: api.Gparameter<Annotation>,
    ) {
        ((
            $: api.NGparameter$<Annotation>,
        ) => {
            if (foo["Gparameter$"] !== undefined) { foo["Gparameter$"].begin($) }
            pr.cc($.content, ($) => {
                pr.cc($["name"], ($) => {
                    X_identifier($)
                })
                pr.cc($["questionToken"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        ((
                            $: api.NGparameter$_questionToken$<Annotation>,
                        ) => {
                            if (foo["Gparameter$_questionToken$"] !== undefined) { foo["Gparameter$_questionToken$"]($) }
                        })($)
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
            if (foo["Gparameter$"] !== undefined) { foo["Gparameter$"].end($) }
        })($)
    }
    function X_statement(
        $: api.Gstatement<Annotation>,
    ) {
        switch ($[0]) {
            case "block": {
                pr.cc($[1], ($) => {
                    X_block($)
                })
                break
            }
            case "break": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_break$<Annotation>,
                    ) => {
                        if (foo["Gstatement_break$"] !== undefined) { foo["Gstatement_break$"].begin($) }
                        pr.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_identifier($)
                            }
                        })
                        if (foo["Gstatement_break$"] !== undefined) { foo["Gstatement_break$"].end($) }
                    })($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_export$<Annotation>,
                    ) => {
                        if (foo["Gstatement_export$"] !== undefined) { foo["Gstatement_export$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_stringLiteral($)
                        })
                        if (foo["Gstatement_export$"] !== undefined) { foo["Gstatement_export$"].end($) }
                    })($)
                })
                break
            }
            case "expression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_expression$<Annotation>,
                    ) => {
                        if (foo["Gstatement_expression$"] !== undefined) { foo["Gstatement_expression$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["Gstatement_expression$"] !== undefined) { foo["Gstatement_expression$"].end($) }
                    })($)
                })
                break
            }
            case "for": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_for$<Annotation>,
                    ) => {
                        if (foo["Gstatement_for$"] !== undefined) { foo["Gstatement_for$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["initializer"], ($) => {
                                X_variableDeclarationList($)
                            })
                            pr.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["incrementer"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (foo["Gstatement_for$"] !== undefined) { foo["Gstatement_for$"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_function$<Annotation>,
                    ) => {
                        if (foo["Gstatement_function$"] !== undefined) { foo["Gstatement_function$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                            pr.cc($["block"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_block($)
                                }
                            })
                        })
                        if (foo["Gstatement_function$"] !== undefined) { foo["Gstatement_function$"].end($) }
                    })($)
                })
                break
            }
            case "if": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_if$<Annotation>,
                    ) => {
                        if (foo["Gstatement_if$"] !== undefined) { foo["Gstatement_if$"].begin($) }
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
                        if (foo["Gstatement_if$"] !== undefined) { foo["Gstatement_if$"].end($) }
                    })($)
                })
                break
            }
            case "import": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_import$<Annotation>,
                    ) => {
                        if (foo["Gstatement_import$"] !== undefined) { foo["Gstatement_import$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.NGstatement_import$_clause$<Annotation>,
                                ) => {
                                    if (foo["Gstatement_import$_clause$"] !== undefined) { foo["Gstatement_import$_clause$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.NGstatement_import$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["Gstatement_import$_clause$_namespace$"] !== undefined) { foo["Gstatement_import$_clause$_namespace$"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["Gstatement_import$_clause$_namespace$"] !== undefined) { foo["Gstatement_import$_clause$_namespace$"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.NGstatement_import$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["Gstatement_import$_clause$_named$"] !== undefined) { foo["Gstatement_import$_clause$_named$"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.NGstatement_import$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["Gstatement_import$_clause$_named$$"] !== undefined) { foo["Gstatement_import$_clause$_named$$"].begin($) }
                                                                    pr.cc($.content, ($) => {
                                                                        pr.cc($["name"], ($) => {
                                                                            X_identifier($)
                                                                        })
                                                                        pr.cc($["as"], ($) => {
                                                                            if ($ === null) {
                                                                                //FIXME??
                                                                            } else {
                                                                                X_identifier($)
                                                                            }
                                                                        })
                                                                    })
                                                                    if (foo["Gstatement_import$_clause$_named$$"] !== undefined) { foo["Gstatement_import$_clause$_named$$"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (foo["Gstatement_import$_clause$_named$"] !== undefined) { foo["Gstatement_import$_clause$_named$"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pr.au($[0])
                                        }
                                    })
                                    if (foo["Gstatement_import$_clause$"] !== undefined) { foo["Gstatement_import$_clause$"].end($) }
                                })($)
                            })
                            pr.cc($["file"], ($) => {
                                X_stringLiteral($)
                            })
                        })
                        if (foo["Gstatement_import$"] !== undefined) { foo["Gstatement_import$"].end($) }
                    })($)
                })
                break
            }
            case "interface": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_interface$<Annotation>,
                    ) => {
                        if (foo["Gstatement_interface$"] !== undefined) { foo["Gstatement_interface$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_typeParameter($)
                                })
                            })
                            pr.cc($["signature"], ($) => {
                                $.forEach(($) => {
                                    X_typeSignature($)
                                })
                            })
                        })
                        if (foo["Gstatement_interface$"] !== undefined) { foo["Gstatement_interface$"].end($) }
                    })($)
                })
                break
            }
            case "labeled": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_labeled$<Annotation>,
                    ) => {
                        if (foo["Gstatement_labeled$"] !== undefined) { foo["Gstatement_labeled$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["label"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["statement"], ($) => {
                                X_statement($)
                            })
                        })
                        if (foo["Gstatement_labeled$"] !== undefined) { foo["Gstatement_labeled$"].end($) }
                    })($)
                })
                break
            }
            case "return": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_return$<Annotation>,
                    ) => {
                        if (foo["Gstatement_return$"] !== undefined) { foo["Gstatement_return$"].begin($) }
                        pr.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_expression($)
                            }
                        })
                        if (foo["Gstatement_return$"] !== undefined) { foo["Gstatement_return$"].end($) }
                    })($)
                })
                break
            }
            case "switch": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_switch$<Annotation>,
                    ) => {
                        if (foo["Gstatement_switch$"] !== undefined) { foo["Gstatement_switch$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["caseBlock"], ($) => {
                                ((
                                    $: api.NGstatement_switch$_caseBlock$<Annotation>,
                                ) => {
                                    if (foo["Gstatement_switch$_caseBlock$"] !== undefined) { foo["Gstatement_switch$_caseBlock$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "case": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.NGstatement_switch$_caseBlock$_case$<Annotation>,
                                                        ) => {
                                                            if (foo["Gstatement_switch$_caseBlock$_case$"] !== undefined) { foo["Gstatement_switch$_caseBlock$_case$"].begin($) }
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
                                                            if (foo["Gstatement_switch$_caseBlock$_case$"] !== undefined) { foo["Gstatement_switch$_caseBlock$_case$"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "default": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.NGstatement_switch$_caseBlock$_default$<Annotation>,
                                                        ) => {
                                                            if (foo["Gstatement_switch$_caseBlock$_default$"] !== undefined) { foo["Gstatement_switch$_caseBlock$_default$"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                $.forEach(($) => {
                                                                    X_statement($)
                                                                })
                                                            })
                                                            if (foo["Gstatement_switch$_caseBlock$_default$"] !== undefined) { foo["Gstatement_switch$_caseBlock$_default$"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })
                                    })
                                    if (foo["Gstatement_switch$_caseBlock$"] !== undefined) { foo["Gstatement_switch$_caseBlock$"].end($) }
                                })($)
                            })
                        })
                        if (foo["Gstatement_switch$"] !== undefined) { foo["Gstatement_switch$"].end($) }
                    })($)
                })
                break
            }
            case "throw": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_throw$<Annotation>,
                    ) => {
                        if (foo["Gstatement_throw$"] !== undefined) { foo["Gstatement_throw$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["Gstatement_throw$"] !== undefined) { foo["Gstatement_throw$"].end($) }
                    })($)
                })
                break
            }
            case "try": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_try$<Annotation>,
                    ) => {
                        if (foo["Gstatement_try$"] !== undefined) { foo["Gstatement_try$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                            pr.cc($["catchClause"], ($) => {
                                ((
                                    $: api.NGstatement_try$_catchClause$<Annotation>,
                                ) => {
                                    if (foo["Gstatement_try$_catchClause$"] !== undefined) { foo["Gstatement_try$_catchClause$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["variable"], ($) => {
                                            X_variableDeclaration($)
                                        })
                                        pr.cc($["block"], ($) => {
                                            X_block($)
                                        })
                                    })
                                    if (foo["Gstatement_try$_catchClause$"] !== undefined) { foo["Gstatement_try$_catchClause$"].end($) }
                                })($)
                            })
                        })
                        if (foo["Gstatement_try$"] !== undefined) { foo["Gstatement_try$"].end($) }
                    })($)
                })
                break
            }
            case "typeAlias": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_typeAlias$<Annotation>,
                    ) => {
                        if (foo["Gstatement_typeAlias$"] !== undefined) { foo["Gstatement_typeAlias$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_typeParameter($)
                                })
                            })
                            pr.cc($["type"], ($) => {
                                X_type($)
                            })
                        })
                        if (foo["Gstatement_typeAlias$"] !== undefined) { foo["Gstatement_typeAlias$"].end($) }
                    })($)
                })
                break
            }
            case "variable": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_variable$<Annotation>,
                    ) => {
                        if (foo["Gstatement_variable$"] !== undefined) { foo["Gstatement_variable$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pr.cc($["variableDeclarationList"], ($) => {
                                X_variableDeclarationList($)
                            })
                        })
                        if (foo["Gstatement_variable$"] !== undefined) { foo["Gstatement_variable$"].end($) }
                    })($)
                })
                break
            }
            case "while": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGstatement_while$<Annotation>,
                    ) => {
                        if (foo["Gstatement_while$"] !== undefined) { foo["Gstatement_while$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (foo["Gstatement_while$"] !== undefined) { foo["Gstatement_while$"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_stringLiteral(
        $: api.GstringLiteral<Annotation>,
    ) {
        ((
            $: api.NGstringLiteral$<Annotation>,
        ) => {
            if (foo["GstringLiteral$"] !== undefined) { foo["GstringLiteral$"]($) }
        })($)
    }
    function X_type(
        $: api.Gtype<Annotation>,
    ) {
        switch ($[0]) {
            case "any": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_any$<Annotation>,
                    ) => {
                        if (foo["Gtype_any$"] !== undefined) { foo["Gtype_any$"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_array$<Annotation>,
                    ) => {
                        if (foo["Gtype_array$"] !== undefined) { foo["Gtype_array$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["Gtype_array$"] !== undefined) { foo["Gtype_array$"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["Gtype_boolean$"] !== undefined) { foo["Gtype_boolean$"]($) }
                    })($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_function$<Annotation>,
                    ) => {
                        if (foo["Gtype_function$"] !== undefined) { foo["Gtype_function$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
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
                        if (foo["Gtype_function$"] !== undefined) { foo["Gtype_function$"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_literal$<Annotation>,
                    ) => {
                        if (foo["Gtype_literal$"] !== undefined) { foo["Gtype_literal$"].begin($) }
                        pr.cc($.content, ($) => {
                            switch ($[0]) {
                                case "null": {
                                    pr.cc($[1], ($) => {
                                        ((
                                            $: api.NGtype_literal$_null$<Annotation>,
                                        ) => {
                                            if (foo["Gtype_literal$_null$"] !== undefined) { foo["Gtype_literal$_null$"]($) }
                                        })($)
                                    })
                                    break
                                }
                                case "string": {
                                    pr.cc($[1], ($) => {
                                        X_stringLiteral($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })
                        if (foo["Gtype_literal$"] !== undefined) { foo["Gtype_literal$"].end($) }
                    })($)
                })
                break
            }
            case "parenthesized": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_parenthesized$<Annotation>,
                    ) => {
                        if (foo["Gtype_parenthesized$"] !== undefined) { foo["Gtype_parenthesized$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["Gtype_parenthesized$"] !== undefined) { foo["Gtype_parenthesized$"].end($) }
                    })($)
                })
                break
            }
            case "never": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_never$<Annotation>,
                    ) => {
                        if (foo["Gtype_never$"] !== undefined) { foo["Gtype_never$"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_number$<Annotation>,
                    ) => {
                        if (foo["Gtype_number$"] !== undefined) { foo["Gtype_number$"]($) }
                    })($)
                })
                break
            }
            case "optional": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_optional$<Annotation>,
                    ) => {
                        if (foo["Gtype_optional$"] !== undefined) { foo["Gtype_optional$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["Gtype_optional$"] !== undefined) { foo["Gtype_optional$"].end($) }
                    })($)
                })
                break
            }
            case "tuple": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_tuple$<Annotation>,
                    ) => {
                        if (foo["Gtype_tuple$"] !== undefined) { foo["Gtype_tuple$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (foo["Gtype_tuple$"] !== undefined) { foo["Gtype_tuple$"].end($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["Gtype_typeLiteral$"] !== undefined) { foo["Gtype_typeLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_typeSignature($)
                            })
                        })
                        if (foo["Gtype_typeLiteral$"] !== undefined) { foo["Gtype_typeLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_string$<Annotation>,
                    ) => {
                        if (foo["Gtype_string$"] !== undefined) { foo["Gtype_string$"]($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_typeReference$<Annotation>,
                    ) => {
                        if (foo["Gtype_typeReference$"] !== undefined) { foo["Gtype_typeReference$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["x"], ($) => {
                                switch ($[0]) {
                                    case "identifier": {
                                        pr.cc($[1], ($) => {
                                            X_identifier($)
                                        })
                                        break
                                    }
                                    case "qualifiedName": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGtype_typeReference$_x_qualifiedName$<Annotation>,
                                            ) => {
                                                if (foo["Gtype_typeReference$_x_qualifiedName$"] !== undefined) { foo["Gtype_typeReference$_x_qualifiedName$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (foo["Gtype_typeReference$_x_qualifiedName$"] !== undefined) { foo["Gtype_typeReference$_x_qualifiedName$"].end($) }
                                            })($)
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
                        if (foo["Gtype_typeReference$"] !== undefined) { foo["Gtype_typeReference$"].end($) }
                    })($)
                })
                break
            }
            case "undefined": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_undefined$<Annotation>,
                    ) => {
                        if (foo["Gtype_undefined$"] !== undefined) { foo["Gtype_undefined$"]($) }
                    })($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_union$<Annotation>,
                    ) => {
                        if (foo["Gtype_union$"] !== undefined) { foo["Gtype_union$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (foo["Gtype_union$"] !== undefined) { foo["Gtype_union$"].end($) }
                    })($)
                })
                break
            }
            case "void": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_void$<Annotation>,
                    ) => {
                        if (foo["Gtype_void$"] !== undefined) { foo["Gtype_void$"]($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_typeParameter(
        $: api.GtypeParameter<Annotation>,
    ) {
        ((
            $: api.NGtypeParameter$<Annotation>,
        ) => {
            if (foo["GtypeParameter$"] !== undefined) { foo["GtypeParameter$"].begin($) }
            pr.cc($.content, ($) => {
                X_identifier($)
            })
            if (foo["GtypeParameter$"] !== undefined) { foo["GtypeParameter$"].end($) }
        })($)
    }
    function X_typeSignature(
        $: api.GtypeSignature<Annotation>,
    ) {
        switch ($[0]) {
            case "construct": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtypeSignature_construct$<Annotation>,
                    ) => {
                        if (foo["GtypeSignature_construct$"] !== undefined) { foo["GtypeSignature_construct$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pr.cc($["returnType"], ($) => {
                                X_type($)
                            })
                        })
                        if (foo["GtypeSignature_construct$"] !== undefined) { foo["GtypeSignature_construct$"].end($) }
                    })($)
                })
                break
            }
            case "index": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtypeSignature_index$<Annotation>,
                    ) => {
                        if (foo["GtypeSignature_index$"] !== undefined) { foo["GtypeSignature_index$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pr.cc($["parameter"], ($) => {
                                X_parameter($)
                            })
                            pr.cc($["type"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                        })
                        if (foo["GtypeSignature_index$"] !== undefined) { foo["GtypeSignature_index$"].end($) }
                    })($)
                })
                break
            }
            case "method": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtypeSignature_method$<Annotation>,
                    ) => {
                        if (foo["GtypeSignature_method$"] !== undefined) { foo["GtypeSignature_method$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                        })
                        if (foo["GtypeSignature_method$"] !== undefined) { foo["GtypeSignature_method$"].end($) }
                    })($)
                })
                break
            }
            case "property": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtypeSignature_property$<Annotation>,
                    ) => {
                        if (foo["GtypeSignature_property$"] !== undefined) { foo["GtypeSignature_property$"].begin($) }
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
                                    ((
                                        $: api.NGtypeSignature_property$_quesionToken$<Annotation>,
                                    ) => {
                                        if (foo["GtypeSignature_property$_quesionToken$"] !== undefined) { foo["GtypeSignature_property$_quesionToken$"]($) }
                                    })($)
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
                        if (foo["GtypeSignature_property$"] !== undefined) { foo["GtypeSignature_property$"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_variableDeclaration(
        $: api.GvariableDeclaration<Annotation>,
    ) {
        ((
            $: api.NGvariableDeclaration$<Annotation>,
        ) => {
            if (foo["GvariableDeclaration$"] !== undefined) { foo["GvariableDeclaration$"].begin($) }
            pr.cc($.content, ($) => {
                pr.cc($["name"], ($) => {
                    X_identifier($)
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
            if (foo["GvariableDeclaration$"] !== undefined) { foo["GvariableDeclaration$"].end($) }
        })($)
    }
    function X_variableDeclarationList(
        $: api.GvariableDeclarationList<Annotation>,
    ) {
        ((
            $: api.NGvariableDeclarationList$<Annotation>,
        ) => {
            if (foo["GvariableDeclarationList$"] !== undefined) { foo["GvariableDeclarationList$"].begin($) }
            pr.cc($.content, ($) => {
                $.forEach(($) => {
                    X_variableDeclaration($)
                })
            })
            if (foo["GvariableDeclarationList$"] !== undefined) { foo["GvariableDeclarationList$"].end($) }
        })($)
    }
    ((
        $: api.Nroot<Annotation>,
    ) => {
        if (foo["root"] !== undefined) { foo["root"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["statements"], ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            pr.cc($["endOfFile"], ($) => {
                ((
                    $: api.Nroot_endOfFile$<Annotation>,
                ) => {
                    if (foo["root_endOfFile$"] !== undefined) { foo["root_endOfFile$"]($) }
                })($)
            })
        })
        if (foo["root"] !== undefined) { foo["root"].end($) }
    })($)
}