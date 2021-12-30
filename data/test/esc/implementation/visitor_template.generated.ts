import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api.generated"
import * as foox from "./visitor_template2.generated"

export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    foo: foox.FOO<Annotation>,
): void {
    function X_block(
        $: api.TGblock<Annotation>,
    ) {
        ((
            $: api.TNGblock$<Annotation>,
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
        $: api.TGexpression<Annotation>,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrayLiteral$<Annotation>,
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
                        $: api.TNGexpression_arrowFunction$<Annotation>,
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
                                    $: api.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>,
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
                        $: api.TNGexpression_binary$<Annotation>,
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
                                                $: api.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_ampersandAmpersand$"] !== undefined) { foo["Gexpression_binary$_operator_ampersandAmpersand$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "barBar": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_barBar$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_barBar$"] !== undefined) { foo["Gexpression_binary$_operator_barBar$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_equals$"] !== undefined) { foo["Gexpression_binary$_operator_equals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equalsEqualsEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_equalsEqualsEquals$"] !== undefined) { foo["Gexpression_binary$_operator_equalsEqualsEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "exclamationEqualsEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_exclamationEqualsEquals$"] !== undefined) { foo["Gexpression_binary$_operator_exclamationEqualsEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "greaterThan": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_greaterThan$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_greaterThan$"] !== undefined) { foo["Gexpression_binary$_operator_greaterThan$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "lessThan": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_lessThan$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_lessThan$"] !== undefined) { foo["Gexpression_binary$_operator_lessThan$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minus": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minus$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_minus$"] !== undefined) { foo["Gexpression_binary$_operator_minus$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minusEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minusEquals$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_minusEquals$"] !== undefined) { foo["Gexpression_binary$_operator_minusEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plus": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plus$<Annotation>,
                                            ) => {
                                                if (foo["Gexpression_binary$_operator_plus$"] !== undefined) { foo["Gexpression_binary$_operator_plus$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plusEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plusEquals$<Annotation>,
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
                        $: api.TNGexpression_call$<Annotation>,
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
                        $: api.TNGexpression_conditional$<Annotation>,
                    ) => {
                        if (foo["Gexpression_conditional$"] !== undefined) { foo["Gexpression_conditional$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["test"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_questionToken$<Annotation>,
                                ) => {
                                    if (foo["Gexpression_conditional$_questionToken$"] !== undefined) { foo["Gexpression_conditional$_questionToken$"]($) }
                                })($)
                            })
                            pr.cc($["ifExpression"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["colonToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_colonToken$<Annotation>,
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
                        $: api.TNGexpression_elementAccess$<Annotation>,
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
                        $: api.TNGexpression_false$<Annotation>,
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
                        $: api.TNGexpression_new$<Annotation>,
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
                        $: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>,
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
                        $: api.TNGexpression_nullKeyword$<Annotation>,
                    ) => {
                        if (foo["Gexpression_nullKeyword$"] !== undefined) { foo["Gexpression_nullKeyword$"]($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["Gexpression_objectLiteral$"] !== undefined) { foo["Gexpression_objectLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGexpression_objectLiteral$$<Annotation>,
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
                        $: api.TNGexpression_parenthesizedExpression$<Annotation>,
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
                        $: api.TNGexpression_postfixUnary$<Annotation>,
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
                        $: api.TNGexpression_prefixUnary$<Annotation>,
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
                        $: api.TNGexpression_propertyAccess$<Annotation>,
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
                        $: api.TNGexpression_template$<Annotation>,
                    ) => {
                        if (foo["Gexpression_template$"] !== undefined) { foo["Gexpression_template$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["head"], ($) => {
                                ((
                                    $: api.TNGexpression_template$_head$<Annotation>,
                                ) => {
                                    if (foo["Gexpression_template$_head$"] !== undefined) { foo["Gexpression_template$_head$"]($) }
                                })($)
                            })
                            pr.cc($["spans"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNGexpression_template$_spans$<Annotation>,
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
                                                                $: api.TNGexpression_template$_spans$_x_middle$<Annotation>,
                                                            ) => {
                                                                if (foo["Gexpression_template$_spans$_x_middle$"] !== undefined) { foo["Gexpression_template$_spans$_x_middle$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "tail": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_tail$<Annotation>,
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
                        $: api.TNGexpression_true$<Annotation>,
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
        $: api.TGfunctionDefinition<Annotation>,
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
        $: api.TGidentifier<Annotation>,
    ) {
        ((
            $: api.TNGidentifier$<Annotation>,
        ) => {
            if (foo["Gidentifier$"] !== undefined) { foo["Gidentifier$"]($) }
        })($)
    }
    function X_identifierOrStringLiteral(
        $: api.TGidentifierOrStringLiteral<Annotation>,
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
        $: api.TGmodifier<Annotation>,
    ) {
        switch ($[0]) {
            case "declare": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_declare$<Annotation>,
                    ) => {
                        if (foo["Gmodifier_declare$"] !== undefined) { foo["Gmodifier_declare$"]($) }
                    })($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_export$<Annotation>,
                    ) => {
                        if (foo["Gmodifier_export$"] !== undefined) { foo["Gmodifier_export$"]($) }
                    })($)
                })
                break
            }
            case "readonly": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_readonly$<Annotation>,
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
        $: api.TGnumericLiteral<Annotation>,
    ) {
        ((
            $: api.TNGnumericLiteral$<Annotation>,
        ) => {
            if (foo["GnumericLiteral$"] !== undefined) { foo["GnumericLiteral$"]($) }
        })($)
    }
    function X_parameter(
        $: api.TGparameter<Annotation>,
    ) {
        ((
            $: api.TNGparameter$<Annotation>,
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
                            $: api.TNGparameter$_questionToken$<Annotation>,
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
        $: api.TGstatement<Annotation>,
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
                        $: api.TNGstatement_break$<Annotation>,
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
                        $: api.TNGstatement_export$<Annotation>,
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
                        $: api.TNGstatement_expression$<Annotation>,
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
                        $: api.TNGstatement_for$<Annotation>,
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
                        $: api.TNGstatement_function$<Annotation>,
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
                        $: api.TNGstatement_if$<Annotation>,
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
                        $: api.TNGstatement_import$<Annotation>,
                    ) => {
                        if (foo["Gstatement_import$"] !== undefined) { foo["Gstatement_import$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.TNGstatement_import$_clause$<Annotation>,
                                ) => {
                                    if (foo["Gstatement_import$_clause$"] !== undefined) { foo["Gstatement_import$_clause$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_namespace$<Annotation>,
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
                                                        $: api.TNGstatement_import$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["Gstatement_import$_clause$_named$"] !== undefined) { foo["Gstatement_import$_clause$_named$"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNGstatement_import$_clause$_named$$<Annotation>,
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
                        $: api.TNGstatement_interface$<Annotation>,
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
                        $: api.TNGstatement_labeled$<Annotation>,
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
                        $: api.TNGstatement_return$<Annotation>,
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
                        $: api.TNGstatement_switch$<Annotation>,
                    ) => {
                        if (foo["Gstatement_switch$"] !== undefined) { foo["Gstatement_switch$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["caseBlock"], ($) => {
                                ((
                                    $: api.TNGstatement_switch$_caseBlock$<Annotation>,
                                ) => {
                                    if (foo["Gstatement_switch$_caseBlock$"] !== undefined) { foo["Gstatement_switch$_caseBlock$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "case": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_case$<Annotation>,
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
                                                            $: api.TNGstatement_switch$_caseBlock$_default$<Annotation>,
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
                        $: api.TNGstatement_throw$<Annotation>,
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
                        $: api.TNGstatement_try$<Annotation>,
                    ) => {
                        if (foo["Gstatement_try$"] !== undefined) { foo["Gstatement_try$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                            pr.cc($["catchClause"], ($) => {
                                ((
                                    $: api.TNGstatement_try$_catchClause$<Annotation>,
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
                        $: api.TNGstatement_typeAlias$<Annotation>,
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
                        $: api.TNGstatement_variable$<Annotation>,
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
                        $: api.TNGstatement_while$<Annotation>,
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
        $: api.TGstringLiteral<Annotation>,
    ) {
        ((
            $: api.TNGstringLiteral$<Annotation>,
        ) => {
            if (foo["GstringLiteral$"] !== undefined) { foo["GstringLiteral$"]($) }
        })($)
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "any": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_any$<Annotation>,
                    ) => {
                        if (foo["Gtype_any$"] !== undefined) { foo["Gtype_any$"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
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
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["Gtype_boolean$"] !== undefined) { foo["Gtype_boolean$"]($) }
                    })($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_function$<Annotation>,
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
                        $: api.TNGtype_literal$<Annotation>,
                    ) => {
                        if (foo["Gtype_literal$"] !== undefined) { foo["Gtype_literal$"].begin($) }
                        pr.cc($.content, ($) => {
                            switch ($[0]) {
                                case "null": {
                                    pr.cc($[1], ($) => {
                                        ((
                                            $: api.TNGtype_literal$_null$<Annotation>,
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
                        $: api.TNGtype_parenthesized$<Annotation>,
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
                        $: api.TNGtype_never$<Annotation>,
                    ) => {
                        if (foo["Gtype_never$"] !== undefined) { foo["Gtype_never$"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if (foo["Gtype_number$"] !== undefined) { foo["Gtype_number$"]($) }
                    })($)
                })
                break
            }
            case "optional": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_optional$<Annotation>,
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
                        $: api.TNGtype_tuple$<Annotation>,
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
                        $: api.TNGtype_typeLiteral$<Annotation>,
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
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if (foo["Gtype_string$"] !== undefined) { foo["Gtype_string$"]($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
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
                                                $: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>,
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
                        $: api.TNGtype_undefined$<Annotation>,
                    ) => {
                        if (foo["Gtype_undefined$"] !== undefined) { foo["Gtype_undefined$"]($) }
                    })($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
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
                        $: api.TNGtype_void$<Annotation>,
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
        $: api.TGtypeParameter<Annotation>,
    ) {
        ((
            $: api.TNGtypeParameter$<Annotation>,
        ) => {
            if (foo["GtypeParameter$"] !== undefined) { foo["GtypeParameter$"].begin($) }
            pr.cc($.content, ($) => {
                X_identifier($)
            })
            if (foo["GtypeParameter$"] !== undefined) { foo["GtypeParameter$"].end($) }
        })($)
    }
    function X_typeSignature(
        $: api.TGtypeSignature<Annotation>,
    ) {
        switch ($[0]) {
            case "construct": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_construct$<Annotation>,
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
                        $: api.TNGtypeSignature_index$<Annotation>,
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
                        $: api.TNGtypeSignature_method$<Annotation>,
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
                        $: api.TNGtypeSignature_property$<Annotation>,
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
                                        $: api.TNGtypeSignature_property$_quesionToken$<Annotation>,
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
        $: api.TGvariableDeclaration<Annotation>,
    ) {
        ((
            $: api.TNGvariableDeclaration$<Annotation>,
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
        $: api.TGvariableDeclarationList<Annotation>,
    ) {
        ((
            $: api.TNGvariableDeclarationList$<Annotation>,
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
        $: api.TNroot<Annotation>,
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
                    $: api.TNroot_endOfFile$<Annotation>,
                ) => {
                    if (foo["root_endOfFile$"] !== undefined) { foo["root_endOfFile$"]($) }
                })($)
            })
        })
        if (foo["root"] !== undefined) { foo["root"].end($) }
    })($)
}