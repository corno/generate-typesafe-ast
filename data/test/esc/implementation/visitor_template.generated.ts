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
            $: api.TNTGblock$<Annotation>,
        ) => {
            if (foo["TGblock$"] !== undefined) { foo["TGblock$"].begin($) }
            pr.cc($.content, ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            if (foo["TGblock$"] !== undefined) { foo["TGblock$"].end($) }
        })($)
    }
    function X_expression(
        $: api.TGexpression<Annotation>,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_arrayLiteral$<Annotation>,
                    ) => {
                        if (foo["TGexpression_arrayLiteral$"] !== undefined) { foo["TGexpression_arrayLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_expression($)
                            })
                        })
                        if (foo["TGexpression_arrayLiteral$"] !== undefined) { foo["TGexpression_arrayLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "arrowFunction": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_arrowFunction$<Annotation>,
                    ) => {
                        if (foo["TGexpression_arrowFunction$"] !== undefined) { foo["TGexpression_arrowFunction$"].begin($) }
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
                                    $: api.TNTGexpression_arrowFunction$_equalsGreaterThan$<Annotation>,
                                ) => {
                                    if (foo["TGexpression_arrowFunction$_equalsGreaterThan$"] !== undefined) { foo["TGexpression_arrowFunction$_equalsGreaterThan$"]($) }
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
                        if (foo["TGexpression_arrowFunction$"] !== undefined) { foo["TGexpression_arrowFunction$"].end($) }
                    })($)
                })
                break
            }
            case "binary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_binary$<Annotation>,
                    ) => {
                        if (foo["TGexpression_binary$"] !== undefined) { foo["TGexpression_binary$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["leftHandSide"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "ampersandAmpersand": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_ampersandAmpersand$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_ampersandAmpersand$"] !== undefined) { foo["TGexpression_binary$_operator_ampersandAmpersand$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "barBar": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_barBar$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_barBar$"] !== undefined) { foo["TGexpression_binary$_operator_barBar$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_equals$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_equals$"] !== undefined) { foo["TGexpression_binary$_operator_equals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equalsEqualsEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_equalsEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_equalsEqualsEquals$"] !== undefined) { foo["TGexpression_binary$_operator_equalsEqualsEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "exclamationEqualsEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_exclamationEqualsEquals$"] !== undefined) { foo["TGexpression_binary$_operator_exclamationEqualsEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "greaterThan": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_greaterThan$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_greaterThan$"] !== undefined) { foo["TGexpression_binary$_operator_greaterThan$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "lessThan": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_lessThan$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_lessThan$"] !== undefined) { foo["TGexpression_binary$_operator_lessThan$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minus": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_minus$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_minus$"] !== undefined) { foo["TGexpression_binary$_operator_minus$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minusEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_minusEquals$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_minusEquals$"] !== undefined) { foo["TGexpression_binary$_operator_minusEquals$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plus": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_plus$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_plus$"] !== undefined) { foo["TGexpression_binary$_operator_plus$"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plusEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNTGexpression_binary$_operator_plusEquals$<Annotation>,
                                            ) => {
                                                if (foo["TGexpression_binary$_operator_plusEquals$"] !== undefined) { foo["TGexpression_binary$_operator_plusEquals$"]($) }
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
                        if (foo["TGexpression_binary$"] !== undefined) { foo["TGexpression_binary$"].end($) }
                    })($)
                })
                break
            }
            case "call": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_call$<Annotation>,
                    ) => {
                        if (foo["TGexpression_call$"] !== undefined) { foo["TGexpression_call$"].begin($) }
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
                        if (foo["TGexpression_call$"] !== undefined) { foo["TGexpression_call$"].end($) }
                    })($)
                })
                break
            }
            case "conditional": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_conditional$<Annotation>,
                    ) => {
                        if (foo["TGexpression_conditional$"] !== undefined) { foo["TGexpression_conditional$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["test"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNTGexpression_conditional$_questionToken$<Annotation>,
                                ) => {
                                    if (foo["TGexpression_conditional$_questionToken$"] !== undefined) { foo["TGexpression_conditional$_questionToken$"]($) }
                                })($)
                            })
                            pr.cc($["ifExpression"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["colonToken"], ($) => {
                                ((
                                    $: api.TNTGexpression_conditional$_colonToken$<Annotation>,
                                ) => {
                                    if (foo["TGexpression_conditional$_colonToken$"] !== undefined) { foo["TGexpression_conditional$_colonToken$"]($) }
                                })($)
                            })
                            pr.cc($["elseExpression"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["TGexpression_conditional$"] !== undefined) { foo["TGexpression_conditional$"].end($) }
                    })($)
                })
                break
            }
            case "elementAccess": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_elementAccess$<Annotation>,
                    ) => {
                        if (foo["TGexpression_elementAccess$"] !== undefined) { foo["TGexpression_elementAccess$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["array"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["element"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["TGexpression_elementAccess$"] !== undefined) { foo["TGexpression_elementAccess$"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_false$<Annotation>,
                    ) => {
                        if (foo["TGexpression_false$"] !== undefined) { foo["TGexpression_false$"]($) }
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
                        $: api.TNTGexpression_new$<Annotation>,
                    ) => {
                        if (foo["TGexpression_new$"] !== undefined) { foo["TGexpression_new$"].begin($) }
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
                        if (foo["TGexpression_new$"] !== undefined) { foo["TGexpression_new$"].end($) }
                    })($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_noSubstitutionTemplateLiteral$<Annotation>,
                    ) => {
                        if (foo["TGexpression_noSubstitutionTemplateLiteral$"] !== undefined) { foo["TGexpression_noSubstitutionTemplateLiteral$"]($) }
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
                        $: api.TNTGexpression_nullKeyword$<Annotation>,
                    ) => {
                        if (foo["TGexpression_nullKeyword$"] !== undefined) { foo["TGexpression_nullKeyword$"]($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["TGexpression_objectLiteral$"] !== undefined) { foo["TGexpression_objectLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNTGexpression_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["TGexpression_objectLiteral$$"] !== undefined) { foo["TGexpression_objectLiteral$$"].begin($) }
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
                                    if (foo["TGexpression_objectLiteral$$"] !== undefined) { foo["TGexpression_objectLiteral$$"].end($) }
                                })($)
                            })
                        })
                        if (foo["TGexpression_objectLiteral$"] !== undefined) { foo["TGexpression_objectLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "parenthesizedExpression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_parenthesizedExpression$<Annotation>,
                    ) => {
                        if (foo["TGexpression_parenthesizedExpression$"] !== undefined) { foo["TGexpression_parenthesizedExpression$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["TGexpression_parenthesizedExpression$"] !== undefined) { foo["TGexpression_parenthesizedExpression$"].end($) }
                    })($)
                })
                break
            }
            case "postfixUnary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_postfixUnary$<Annotation>,
                    ) => {
                        if (foo["TGexpression_postfixUnary$"] !== undefined) { foo["TGexpression_postfixUnary$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["TGexpression_postfixUnary$"] !== undefined) { foo["TGexpression_postfixUnary$"].end($) }
                    })($)
                })
                break
            }
            case "prefixUnary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_prefixUnary$<Annotation>,
                    ) => {
                        if (foo["TGexpression_prefixUnary$"] !== undefined) { foo["TGexpression_prefixUnary$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["TGexpression_prefixUnary$"] !== undefined) { foo["TGexpression_prefixUnary$"].end($) }
                    })($)
                })
                break
            }
            case "propertyAccess": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_propertyAccess$<Annotation>,
                    ) => {
                        if (foo["TGexpression_propertyAccess$"] !== undefined) { foo["TGexpression_propertyAccess$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["object"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["property"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["TGexpression_propertyAccess$"] !== undefined) { foo["TGexpression_propertyAccess$"].end($) }
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
                        $: api.TNTGexpression_template$<Annotation>,
                    ) => {
                        if (foo["TGexpression_template$"] !== undefined) { foo["TGexpression_template$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["head"], ($) => {
                                ((
                                    $: api.TNTGexpression_template$_head$<Annotation>,
                                ) => {
                                    if (foo["TGexpression_template$_head$"] !== undefined) { foo["TGexpression_template$_head$"]($) }
                                })($)
                            })
                            pr.cc($["spans"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNTGexpression_template$_spans$<Annotation>,
                                    ) => {
                                        if (foo["TGexpression_template$_spans$"] !== undefined) { foo["TGexpression_template$_spans$"].begin($) }
                                        pr.cc($.content, ($) => {
                                            pr.cc($["expression"], ($) => {
                                                X_expression($)
                                            })
                                            pr.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "middle": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNTGexpression_template$_spans$_x_middle$<Annotation>,
                                                            ) => {
                                                                if (foo["TGexpression_template$_spans$_x_middle$"] !== undefined) { foo["TGexpression_template$_spans$_x_middle$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "tail": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNTGexpression_template$_spans$_x_tail$<Annotation>,
                                                            ) => {
                                                                if (foo["TGexpression_template$_spans$_x_tail$"] !== undefined) { foo["TGexpression_template$_spans$_x_tail$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pr.au($[0])
                                                }
                                            })
                                        })
                                        if (foo["TGexpression_template$_spans$"] !== undefined) { foo["TGexpression_template$_spans$"].end($) }
                                    })($)
                                })
                            })
                        })
                        if (foo["TGexpression_template$"] !== undefined) { foo["TGexpression_template$"].end($) }
                    })($)
                })
                break
            }
            case "true": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGexpression_true$<Annotation>,
                    ) => {
                        if (foo["TGexpression_true$"] !== undefined) { foo["TGexpression_true$"]($) }
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
            $: api.TNTGidentifier$<Annotation>,
        ) => {
            if (foo["TGidentifier$"] !== undefined) { foo["TGidentifier$"]($) }
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
                        $: api.TNTGmodifier_declare$<Annotation>,
                    ) => {
                        if (foo["TGmodifier_declare$"] !== undefined) { foo["TGmodifier_declare$"]($) }
                    })($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGmodifier_export$<Annotation>,
                    ) => {
                        if (foo["TGmodifier_export$"] !== undefined) { foo["TGmodifier_export$"]($) }
                    })($)
                })
                break
            }
            case "readonly": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGmodifier_readonly$<Annotation>,
                    ) => {
                        if (foo["TGmodifier_readonly$"] !== undefined) { foo["TGmodifier_readonly$"]($) }
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
            $: api.TNTGnumericLiteral$<Annotation>,
        ) => {
            if (foo["TGnumericLiteral$"] !== undefined) { foo["TGnumericLiteral$"]($) }
        })($)
    }
    function X_parameter(
        $: api.TGparameter<Annotation>,
    ) {
        ((
            $: api.TNTGparameter$<Annotation>,
        ) => {
            if (foo["TGparameter$"] !== undefined) { foo["TGparameter$"].begin($) }
            pr.cc($.content, ($) => {
                pr.cc($["name"], ($) => {
                    X_identifier($)
                })
                pr.cc($["questionToken"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        ((
                            $: api.TNTGparameter$_questionToken$<Annotation>,
                        ) => {
                            if (foo["TGparameter$_questionToken$"] !== undefined) { foo["TGparameter$_questionToken$"]($) }
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
            if (foo["TGparameter$"] !== undefined) { foo["TGparameter$"].end($) }
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
                        $: api.TNTGstatement_break$<Annotation>,
                    ) => {
                        if (foo["TGstatement_break$"] !== undefined) { foo["TGstatement_break$"].begin($) }
                        pr.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_identifier($)
                            }
                        })
                        if (foo["TGstatement_break$"] !== undefined) { foo["TGstatement_break$"].end($) }
                    })($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_export$<Annotation>,
                    ) => {
                        if (foo["TGstatement_export$"] !== undefined) { foo["TGstatement_export$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_stringLiteral($)
                        })
                        if (foo["TGstatement_export$"] !== undefined) { foo["TGstatement_export$"].end($) }
                    })($)
                })
                break
            }
            case "expression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_expression$<Annotation>,
                    ) => {
                        if (foo["TGstatement_expression$"] !== undefined) { foo["TGstatement_expression$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["TGstatement_expression$"] !== undefined) { foo["TGstatement_expression$"].end($) }
                    })($)
                })
                break
            }
            case "for": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_for$<Annotation>,
                    ) => {
                        if (foo["TGstatement_for$"] !== undefined) { foo["TGstatement_for$"].begin($) }
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
                        if (foo["TGstatement_for$"] !== undefined) { foo["TGstatement_for$"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_function$<Annotation>,
                    ) => {
                        if (foo["TGstatement_function$"] !== undefined) { foo["TGstatement_function$"].begin($) }
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
                        if (foo["TGstatement_function$"] !== undefined) { foo["TGstatement_function$"].end($) }
                    })($)
                })
                break
            }
            case "if": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_if$<Annotation>,
                    ) => {
                        if (foo["TGstatement_if$"] !== undefined) { foo["TGstatement_if$"].begin($) }
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
                        if (foo["TGstatement_if$"] !== undefined) { foo["TGstatement_if$"].end($) }
                    })($)
                })
                break
            }
            case "import": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_import$<Annotation>,
                    ) => {
                        if (foo["TGstatement_import$"] !== undefined) { foo["TGstatement_import$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.TNTGstatement_import$_clause$<Annotation>,
                                ) => {
                                    if (foo["TGstatement_import$_clause$"] !== undefined) { foo["TGstatement_import$_clause$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNTGstatement_import$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["TGstatement_import$_clause$_namespace$"] !== undefined) { foo["TGstatement_import$_clause$_namespace$"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["TGstatement_import$_clause$_namespace$"] !== undefined) { foo["TGstatement_import$_clause$_namespace$"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNTGstatement_import$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["TGstatement_import$_clause$_named$"] !== undefined) { foo["TGstatement_import$_clause$_named$"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNTGstatement_import$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["TGstatement_import$_clause$_named$$"] !== undefined) { foo["TGstatement_import$_clause$_named$$"].begin($) }
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
                                                                    if (foo["TGstatement_import$_clause$_named$$"] !== undefined) { foo["TGstatement_import$_clause$_named$$"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (foo["TGstatement_import$_clause$_named$"] !== undefined) { foo["TGstatement_import$_clause$_named$"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pr.au($[0])
                                        }
                                    })
                                    if (foo["TGstatement_import$_clause$"] !== undefined) { foo["TGstatement_import$_clause$"].end($) }
                                })($)
                            })
                            pr.cc($["file"], ($) => {
                                X_stringLiteral($)
                            })
                        })
                        if (foo["TGstatement_import$"] !== undefined) { foo["TGstatement_import$"].end($) }
                    })($)
                })
                break
            }
            case "interface": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_interface$<Annotation>,
                    ) => {
                        if (foo["TGstatement_interface$"] !== undefined) { foo["TGstatement_interface$"].begin($) }
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
                        if (foo["TGstatement_interface$"] !== undefined) { foo["TGstatement_interface$"].end($) }
                    })($)
                })
                break
            }
            case "labeled": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_labeled$<Annotation>,
                    ) => {
                        if (foo["TGstatement_labeled$"] !== undefined) { foo["TGstatement_labeled$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["label"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["statement"], ($) => {
                                X_statement($)
                            })
                        })
                        if (foo["TGstatement_labeled$"] !== undefined) { foo["TGstatement_labeled$"].end($) }
                    })($)
                })
                break
            }
            case "return": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_return$<Annotation>,
                    ) => {
                        if (foo["TGstatement_return$"] !== undefined) { foo["TGstatement_return$"].begin($) }
                        pr.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_expression($)
                            }
                        })
                        if (foo["TGstatement_return$"] !== undefined) { foo["TGstatement_return$"].end($) }
                    })($)
                })
                break
            }
            case "switch": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_switch$<Annotation>,
                    ) => {
                        if (foo["TGstatement_switch$"] !== undefined) { foo["TGstatement_switch$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["caseBlock"], ($) => {
                                ((
                                    $: api.TNTGstatement_switch$_caseBlock$<Annotation>,
                                ) => {
                                    if (foo["TGstatement_switch$_caseBlock$"] !== undefined) { foo["TGstatement_switch$_caseBlock$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "case": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNTGstatement_switch$_caseBlock$_case$<Annotation>,
                                                        ) => {
                                                            if (foo["TGstatement_switch$_caseBlock$_case$"] !== undefined) { foo["TGstatement_switch$_caseBlock$_case$"].begin($) }
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
                                                            if (foo["TGstatement_switch$_caseBlock$_case$"] !== undefined) { foo["TGstatement_switch$_caseBlock$_case$"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "default": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNTGstatement_switch$_caseBlock$_default$<Annotation>,
                                                        ) => {
                                                            if (foo["TGstatement_switch$_caseBlock$_default$"] !== undefined) { foo["TGstatement_switch$_caseBlock$_default$"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                $.forEach(($) => {
                                                                    X_statement($)
                                                                })
                                                            })
                                                            if (foo["TGstatement_switch$_caseBlock$_default$"] !== undefined) { foo["TGstatement_switch$_caseBlock$_default$"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })
                                    })
                                    if (foo["TGstatement_switch$_caseBlock$"] !== undefined) { foo["TGstatement_switch$_caseBlock$"].end($) }
                                })($)
                            })
                        })
                        if (foo["TGstatement_switch$"] !== undefined) { foo["TGstatement_switch$"].end($) }
                    })($)
                })
                break
            }
            case "throw": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_throw$<Annotation>,
                    ) => {
                        if (foo["TGstatement_throw$"] !== undefined) { foo["TGstatement_throw$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["TGstatement_throw$"] !== undefined) { foo["TGstatement_throw$"].end($) }
                    })($)
                })
                break
            }
            case "try": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_try$<Annotation>,
                    ) => {
                        if (foo["TGstatement_try$"] !== undefined) { foo["TGstatement_try$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                            pr.cc($["catchClause"], ($) => {
                                ((
                                    $: api.TNTGstatement_try$_catchClause$<Annotation>,
                                ) => {
                                    if (foo["TGstatement_try$_catchClause$"] !== undefined) { foo["TGstatement_try$_catchClause$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["variable"], ($) => {
                                            X_variableDeclaration($)
                                        })
                                        pr.cc($["block"], ($) => {
                                            X_block($)
                                        })
                                    })
                                    if (foo["TGstatement_try$_catchClause$"] !== undefined) { foo["TGstatement_try$_catchClause$"].end($) }
                                })($)
                            })
                        })
                        if (foo["TGstatement_try$"] !== undefined) { foo["TGstatement_try$"].end($) }
                    })($)
                })
                break
            }
            case "typeAlias": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_typeAlias$<Annotation>,
                    ) => {
                        if (foo["TGstatement_typeAlias$"] !== undefined) { foo["TGstatement_typeAlias$"].begin($) }
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
                        if (foo["TGstatement_typeAlias$"] !== undefined) { foo["TGstatement_typeAlias$"].end($) }
                    })($)
                })
                break
            }
            case "variable": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_variable$<Annotation>,
                    ) => {
                        if (foo["TGstatement_variable$"] !== undefined) { foo["TGstatement_variable$"].begin($) }
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
                        if (foo["TGstatement_variable$"] !== undefined) { foo["TGstatement_variable$"].end($) }
                    })($)
                })
                break
            }
            case "while": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGstatement_while$<Annotation>,
                    ) => {
                        if (foo["TGstatement_while$"] !== undefined) { foo["TGstatement_while$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (foo["TGstatement_while$"] !== undefined) { foo["TGstatement_while$"].end($) }
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
            $: api.TNTGstringLiteral$<Annotation>,
        ) => {
            if (foo["TGstringLiteral$"] !== undefined) { foo["TGstringLiteral$"]($) }
        })($)
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "any": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_any$<Annotation>,
                    ) => {
                        if (foo["TGtype_any$"] !== undefined) { foo["TGtype_any$"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_array$<Annotation>,
                    ) => {
                        if (foo["TGtype_array$"] !== undefined) { foo["TGtype_array$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["TGtype_array$"] !== undefined) { foo["TGtype_array$"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["TGtype_boolean$"] !== undefined) { foo["TGtype_boolean$"]($) }
                    })($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_function$<Annotation>,
                    ) => {
                        if (foo["TGtype_function$"] !== undefined) { foo["TGtype_function$"].begin($) }
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
                        if (foo["TGtype_function$"] !== undefined) { foo["TGtype_function$"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_literal$<Annotation>,
                    ) => {
                        if (foo["TGtype_literal$"] !== undefined) { foo["TGtype_literal$"].begin($) }
                        pr.cc($.content, ($) => {
                            switch ($[0]) {
                                case "null": {
                                    pr.cc($[1], ($) => {
                                        ((
                                            $: api.TNTGtype_literal$_null$<Annotation>,
                                        ) => {
                                            if (foo["TGtype_literal$_null$"] !== undefined) { foo["TGtype_literal$_null$"]($) }
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
                        if (foo["TGtype_literal$"] !== undefined) { foo["TGtype_literal$"].end($) }
                    })($)
                })
                break
            }
            case "parenthesized": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_parenthesized$<Annotation>,
                    ) => {
                        if (foo["TGtype_parenthesized$"] !== undefined) { foo["TGtype_parenthesized$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["TGtype_parenthesized$"] !== undefined) { foo["TGtype_parenthesized$"].end($) }
                    })($)
                })
                break
            }
            case "never": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_never$<Annotation>,
                    ) => {
                        if (foo["TGtype_never$"] !== undefined) { foo["TGtype_never$"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_number$<Annotation>,
                    ) => {
                        if (foo["TGtype_number$"] !== undefined) { foo["TGtype_number$"]($) }
                    })($)
                })
                break
            }
            case "optional": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_optional$<Annotation>,
                    ) => {
                        if (foo["TGtype_optional$"] !== undefined) { foo["TGtype_optional$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["TGtype_optional$"] !== undefined) { foo["TGtype_optional$"].end($) }
                    })($)
                })
                break
            }
            case "tuple": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_tuple$<Annotation>,
                    ) => {
                        if (foo["TGtype_tuple$"] !== undefined) { foo["TGtype_tuple$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (foo["TGtype_tuple$"] !== undefined) { foo["TGtype_tuple$"].end($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["TGtype_typeLiteral$"] !== undefined) { foo["TGtype_typeLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_typeSignature($)
                            })
                        })
                        if (foo["TGtype_typeLiteral$"] !== undefined) { foo["TGtype_typeLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_string$<Annotation>,
                    ) => {
                        if (foo["TGtype_string$"] !== undefined) { foo["TGtype_string$"]($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_typeReference$<Annotation>,
                    ) => {
                        if (foo["TGtype_typeReference$"] !== undefined) { foo["TGtype_typeReference$"].begin($) }
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
                                                $: api.TNTGtype_typeReference$_x_qualifiedName$<Annotation>,
                                            ) => {
                                                if (foo["TGtype_typeReference$_x_qualifiedName$"] !== undefined) { foo["TGtype_typeReference$_x_qualifiedName$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (foo["TGtype_typeReference$_x_qualifiedName$"] !== undefined) { foo["TGtype_typeReference$_x_qualifiedName$"].end($) }
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
                        if (foo["TGtype_typeReference$"] !== undefined) { foo["TGtype_typeReference$"].end($) }
                    })($)
                })
                break
            }
            case "undefined": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_undefined$<Annotation>,
                    ) => {
                        if (foo["TGtype_undefined$"] !== undefined) { foo["TGtype_undefined$"]($) }
                    })($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_union$<Annotation>,
                    ) => {
                        if (foo["TGtype_union$"] !== undefined) { foo["TGtype_union$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (foo["TGtype_union$"] !== undefined) { foo["TGtype_union$"].end($) }
                    })($)
                })
                break
            }
            case "void": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtype_void$<Annotation>,
                    ) => {
                        if (foo["TGtype_void$"] !== undefined) { foo["TGtype_void$"]($) }
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
            $: api.TNTGtypeParameter$<Annotation>,
        ) => {
            if (foo["TGtypeParameter$"] !== undefined) { foo["TGtypeParameter$"].begin($) }
            pr.cc($.content, ($) => {
                X_identifier($)
            })
            if (foo["TGtypeParameter$"] !== undefined) { foo["TGtypeParameter$"].end($) }
        })($)
    }
    function X_typeSignature(
        $: api.TGtypeSignature<Annotation>,
    ) {
        switch ($[0]) {
            case "construct": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtypeSignature_construct$<Annotation>,
                    ) => {
                        if (foo["TGtypeSignature_construct$"] !== undefined) { foo["TGtypeSignature_construct$"].begin($) }
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
                        if (foo["TGtypeSignature_construct$"] !== undefined) { foo["TGtypeSignature_construct$"].end($) }
                    })($)
                })
                break
            }
            case "index": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtypeSignature_index$<Annotation>,
                    ) => {
                        if (foo["TGtypeSignature_index$"] !== undefined) { foo["TGtypeSignature_index$"].begin($) }
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
                        if (foo["TGtypeSignature_index$"] !== undefined) { foo["TGtypeSignature_index$"].end($) }
                    })($)
                })
                break
            }
            case "method": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtypeSignature_method$<Annotation>,
                    ) => {
                        if (foo["TGtypeSignature_method$"] !== undefined) { foo["TGtypeSignature_method$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                        })
                        if (foo["TGtypeSignature_method$"] !== undefined) { foo["TGtypeSignature_method$"].end($) }
                    })($)
                })
                break
            }
            case "property": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNTGtypeSignature_property$<Annotation>,
                    ) => {
                        if (foo["TGtypeSignature_property$"] !== undefined) { foo["TGtypeSignature_property$"].begin($) }
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
                                        $: api.TNTGtypeSignature_property$_quesionToken$<Annotation>,
                                    ) => {
                                        if (foo["TGtypeSignature_property$_quesionToken$"] !== undefined) { foo["TGtypeSignature_property$_quesionToken$"]($) }
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
                        if (foo["TGtypeSignature_property$"] !== undefined) { foo["TGtypeSignature_property$"].end($) }
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
            $: api.TNTGvariableDeclaration$<Annotation>,
        ) => {
            if (foo["TGvariableDeclaration$"] !== undefined) { foo["TGvariableDeclaration$"].begin($) }
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
            if (foo["TGvariableDeclaration$"] !== undefined) { foo["TGvariableDeclaration$"].end($) }
        })($)
    }
    function X_variableDeclarationList(
        $: api.TGvariableDeclarationList<Annotation>,
    ) {
        ((
            $: api.TNTGvariableDeclarationList$<Annotation>,
        ) => {
            if (foo["TGvariableDeclarationList$"] !== undefined) { foo["TGvariableDeclarationList$"].begin($) }
            pr.cc($.content, ($) => {
                $.forEach(($) => {
                    X_variableDeclaration($)
                })
            })
            if (foo["TGvariableDeclarationList$"] !== undefined) { foo["TGvariableDeclarationList$"].end($) }
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