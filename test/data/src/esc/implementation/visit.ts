import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api"
import * as foox from "../../interface/interfaces/visitor"

export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    foo: foox.IVisitor<Annotation>,
): void {
    function X_block(
        $: api.TGblock<Annotation>,
    ) {
        ((
            $: api.TNGblock$<Annotation>,
        ) => {
            if (foo["$block/*Block"] !== undefined) { foo["$block/*Block"].begin($) }
            pr.cc($.content, ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            if (foo["$block/*Block"] !== undefined) { foo["$block/*Block"].end($) }
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
                        if (foo["$expression/?arrayLiteral/*ArrayLiteralExpression"] !== undefined) { foo["$expression/?arrayLiteral/*ArrayLiteralExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_expression($)
                            })
                        })
                        if (foo["$expression/?arrayLiteral/*ArrayLiteralExpression"] !== undefined) { foo["$expression/?arrayLiteral/*ArrayLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "arrowFunction": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrowFunction$<Annotation>,
                    ) => {
                        if (foo["$expression/?arrowFunction/*ArrowFunction"] !== undefined) { foo["$expression/?arrowFunction/*ArrowFunction"].begin($) }
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
                                    if (foo["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"] !== undefined) { foo["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"]($) }
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
                        if (foo["$expression/?arrowFunction/*ArrowFunction"] !== undefined) { foo["$expression/?arrowFunction/*ArrowFunction"].end($) }
                    })($)
                })
                break
            }
            case "binary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_binary$<Annotation>,
                    ) => {
                        if (foo["$expression/?binary/*BinaryExpression"] !== undefined) { foo["$expression/?binary/*BinaryExpression"].begin($) }
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
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "barBar": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_barBar$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equalsEqualsEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "exclamationEqualsEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "greaterThan": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_greaterThan$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "lessThan": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_lessThan$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minus": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minus$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minusEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minusEquals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plus": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plus$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plusEquals": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plusEquals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"]($) }
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
                        if (foo["$expression/?binary/*BinaryExpression"] !== undefined) { foo["$expression/?binary/*BinaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "call": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_call$<Annotation>,
                    ) => {
                        if (foo["$expression/?call/*CallExpression"] !== undefined) { foo["$expression/?call/*CallExpression"].begin($) }
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
                        if (foo["$expression/?call/*CallExpression"] !== undefined) { foo["$expression/?call/*CallExpression"].end($) }
                    })($)
                })
                break
            }
            case "conditional": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_conditional$<Annotation>,
                    ) => {
                        if (foo["$expression/?conditional/*ConditionalExpression"] !== undefined) { foo["$expression/?conditional/*ConditionalExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["test"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_questionToken$<Annotation>,
                                ) => {
                                    if (foo["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"] !== undefined) { foo["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"]($) }
                                })($)
                            })
                            pr.cc($["ifExpression"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["colonToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_colonToken$<Annotation>,
                                ) => {
                                    if (foo["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"] !== undefined) { foo["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"]($) }
                                })($)
                            })
                            pr.cc($["elseExpression"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["$expression/?conditional/*ConditionalExpression"] !== undefined) { foo["$expression/?conditional/*ConditionalExpression"].end($) }
                    })($)
                })
                break
            }
            case "elementAccess": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_elementAccess$<Annotation>,
                    ) => {
                        if (foo["$expression/?elementAccess/*ElementAccessExpression"] !== undefined) { foo["$expression/?elementAccess/*ElementAccessExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["array"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["element"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["$expression/?elementAccess/*ElementAccessExpression"] !== undefined) { foo["$expression/?elementAccess/*ElementAccessExpression"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_false$<Annotation>,
                    ) => {
                        if (foo["$expression/?false/*FalseKeyword"] !== undefined) { foo["$expression/?false/*FalseKeyword"]($) }
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
                        if (foo["$expression/?new/*NewExpression"] !== undefined) { foo["$expression/?new/*NewExpression"].begin($) }
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
                        if (foo["$expression/?new/*NewExpression"] !== undefined) { foo["$expression/?new/*NewExpression"].end($) }
                    })($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>,
                    ) => {
                        if (foo["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"] !== undefined) { foo["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"]($) }
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
                        if (foo["$expression/?nullKeyword/*NullKeyword"] !== undefined) { foo["$expression/?nullKeyword/*NullKeyword"]($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["$expression/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$expression/?objectLiteral/*ObjectLiteralExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGexpression_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].begin($) }
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
                                    if (foo["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].end($) }
                                })($)
                            })
                        })
                        if (foo["$expression/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$expression/?objectLiteral/*ObjectLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "parenthesizedExpression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_parenthesizedExpression$<Annotation>,
                    ) => {
                        if (foo["$expression/?parenthesizedExpression/*ParenthesizedExpression"] !== undefined) { foo["$expression/?parenthesizedExpression/*ParenthesizedExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$expression/?parenthesizedExpression/*ParenthesizedExpression"] !== undefined) { foo["$expression/?parenthesizedExpression/*ParenthesizedExpression"].end($) }
                    })($)
                })
                break
            }
            case "postfixUnary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_postfixUnary$<Annotation>,
                    ) => {
                        if (foo["$expression/?postfixUnary/*PostfixUnaryExpression"] !== undefined) { foo["$expression/?postfixUnary/*PostfixUnaryExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$expression/?postfixUnary/*PostfixUnaryExpression"] !== undefined) { foo["$expression/?postfixUnary/*PostfixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "prefixUnary": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_prefixUnary$<Annotation>,
                    ) => {
                        if (foo["$expression/?prefixUnary/*PrefixUnaryExpression"] !== undefined) { foo["$expression/?prefixUnary/*PrefixUnaryExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$expression/?prefixUnary/*PrefixUnaryExpression"] !== undefined) { foo["$expression/?prefixUnary/*PrefixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "propertyAccess": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_propertyAccess$<Annotation>,
                    ) => {
                        if (foo["$expression/?propertyAccess/*PropertyAccessExpression"] !== undefined) { foo["$expression/?propertyAccess/*PropertyAccessExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["object"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["property"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["$expression/?propertyAccess/*PropertyAccessExpression"] !== undefined) { foo["$expression/?propertyAccess/*PropertyAccessExpression"].end($) }
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
                        if (foo["$expression/?template/*TemplateExpression"] !== undefined) { foo["$expression/?template/*TemplateExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["head"], ($) => {
                                ((
                                    $: api.TNGexpression_template$_head$<Annotation>,
                                ) => {
                                    if (foo["$expression/?template/*TemplateExpression/.head/*TemplateHead"] !== undefined) { foo["$expression/?template/*TemplateExpression/.head/*TemplateHead"]($) }
                                })($)
                            })
                            pr.cc($["spans"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNGexpression_template$_spans$<Annotation>,
                                    ) => {
                                        if (foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"] !== undefined) { foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].begin($) }
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
                                                                if (foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"] !== undefined) { foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "tail": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_tail$<Annotation>,
                                                            ) => {
                                                                if (foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"] !== undefined) { foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pr.au($[0])
                                                }
                                            })
                                        })
                                        if (foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"] !== undefined) { foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].end($) }
                                    })($)
                                })
                            })
                        })
                        if (foo["$expression/?template/*TemplateExpression"] !== undefined) { foo["$expression/?template/*TemplateExpression"].end($) }
                    })($)
                })
                break
            }
            case "true": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_true$<Annotation>,
                    ) => {
                        if (foo["$expression/?true/*TrueKeyword"] !== undefined) { foo["$expression/?true/*TrueKeyword"]($) }
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
            if (foo["$identifier/*Identifier"] !== undefined) { foo["$identifier/*Identifier"]($) }
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
                        if (foo["$modifier/?declare/*DeclareKeyword"] !== undefined) { foo["$modifier/?declare/*DeclareKeyword"]($) }
                    })($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_export$<Annotation>,
                    ) => {
                        if (foo["$modifier/?export/*ExportKeyword"] !== undefined) { foo["$modifier/?export/*ExportKeyword"]($) }
                    })($)
                })
                break
            }
            case "readonly": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_readonly$<Annotation>,
                    ) => {
                        if (foo["$modifier/?readonly/*ReadonlyKeyword"] !== undefined) { foo["$modifier/?readonly/*ReadonlyKeyword"]($) }
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
            if (foo["$numericLiteral/*NumericLiteral"] !== undefined) { foo["$numericLiteral/*NumericLiteral"]($) }
        })($)
    }
    function X_parameter(
        $: api.TGparameter<Annotation>,
    ) {
        ((
            $: api.TNGparameter$<Annotation>,
        ) => {
            if (foo["$parameter/*Parameter"] !== undefined) { foo["$parameter/*Parameter"].begin($) }
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
                            if (foo["$parameter/*Parameter/.questionToken/*QuestionToken"] !== undefined) { foo["$parameter/*Parameter/.questionToken/*QuestionToken"]($) }
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
            if (foo["$parameter/*Parameter"] !== undefined) { foo["$parameter/*Parameter"].end($) }
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
                        if (foo["$statement/?break/*BreakStatement"] !== undefined) { foo["$statement/?break/*BreakStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_identifier($)
                            }
                        })
                        if (foo["$statement/?break/*BreakStatement"] !== undefined) { foo["$statement/?break/*BreakStatement"].end($) }
                    })($)
                })
                break
            }
            case "export": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_export$<Annotation>,
                    ) => {
                        if (foo["$statement/?export/*ExportDeclaration"] !== undefined) { foo["$statement/?export/*ExportDeclaration"].begin($) }
                        pr.cc($.content, ($) => {
                            X_stringLiteral($)
                        })
                        if (foo["$statement/?export/*ExportDeclaration"] !== undefined) { foo["$statement/?export/*ExportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "expression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_expression$<Annotation>,
                    ) => {
                        if (foo["$statement/?expression/*ExpressionStatement"] !== undefined) { foo["$statement/?expression/*ExpressionStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$statement/?expression/*ExpressionStatement"] !== undefined) { foo["$statement/?expression/*ExpressionStatement"].end($) }
                    })($)
                })
                break
            }
            case "for": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_for$<Annotation>,
                    ) => {
                        if (foo["$statement/?for/*ForStatement"] !== undefined) { foo["$statement/?for/*ForStatement"].begin($) }
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
                        if (foo["$statement/?for/*ForStatement"] !== undefined) { foo["$statement/?for/*ForStatement"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_function$<Annotation>,
                    ) => {
                        if (foo["$statement/?function/*FunctionDeclaration"] !== undefined) { foo["$statement/?function/*FunctionDeclaration"].begin($) }
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
                        if (foo["$statement/?function/*FunctionDeclaration"] !== undefined) { foo["$statement/?function/*FunctionDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "if": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_if$<Annotation>,
                    ) => {
                        if (foo["$statement/?if/*IfStatement"] !== undefined) { foo["$statement/?if/*IfStatement"].begin($) }
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
                        if (foo["$statement/?if/*IfStatement"] !== undefined) { foo["$statement/?if/*IfStatement"].end($) }
                    })($)
                })
                break
            }
            case "import": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_import$<Annotation>,
                    ) => {
                        if (foo["$statement/?import/*ImportDeclaration"] !== undefined) { foo["$statement/?import/*ImportDeclaration"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.TNGstatement_import$_clause$<Annotation>,
                                ) => {
                                    if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNGstatement_import$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
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
                                                                    if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pr.au($[0])
                                        }
                                    })
                                    if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pr.cc($["file"], ($) => {
                                X_stringLiteral($)
                            })
                        })
                        if (foo["$statement/?import/*ImportDeclaration"] !== undefined) { foo["$statement/?import/*ImportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "interface": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_interface$<Annotation>,
                    ) => {
                        if (foo["$statement/?interface/*InterfaceDeclaration"] !== undefined) { foo["$statement/?interface/*InterfaceDeclaration"].begin($) }
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
                        if (foo["$statement/?interface/*InterfaceDeclaration"] !== undefined) { foo["$statement/?interface/*InterfaceDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "labeled": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_labeled$<Annotation>,
                    ) => {
                        if (foo["$statement/?labeled/*LabeledStatement"] !== undefined) { foo["$statement/?labeled/*LabeledStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["label"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["statement"], ($) => {
                                X_statement($)
                            })
                        })
                        if (foo["$statement/?labeled/*LabeledStatement"] !== undefined) { foo["$statement/?labeled/*LabeledStatement"].end($) }
                    })($)
                })
                break
            }
            case "return": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_return$<Annotation>,
                    ) => {
                        if (foo["$statement/?return/*ReturnStatement"] !== undefined) { foo["$statement/?return/*ReturnStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_expression($)
                            }
                        })
                        if (foo["$statement/?return/*ReturnStatement"] !== undefined) { foo["$statement/?return/*ReturnStatement"].end($) }
                    })($)
                })
                break
            }
            case "switch": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_switch$<Annotation>,
                    ) => {
                        if (foo["$statement/?switch/*SwitchStatement"] !== undefined) { foo["$statement/?switch/*SwitchStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["caseBlock"], ($) => {
                                ((
                                    $: api.TNGstatement_switch$_caseBlock$<Annotation>,
                                ) => {
                                    if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].begin($) }
                                    pr.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "case": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_case$<Annotation>,
                                                        ) => {
                                                            if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].begin($) }
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
                                                            if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "default": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_default$<Annotation>,
                                                        ) => {
                                                            if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                $.forEach(($) => {
                                                                    X_statement($)
                                                                })
                                                            })
                                                            if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })
                                    })
                                    if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].end($) }
                                })($)
                            })
                        })
                        if (foo["$statement/?switch/*SwitchStatement"] !== undefined) { foo["$statement/?switch/*SwitchStatement"].end($) }
                    })($)
                })
                break
            }
            case "throw": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_throw$<Annotation>,
                    ) => {
                        if (foo["$statement/?throw/*ThrowStatement"] !== undefined) { foo["$statement/?throw/*ThrowStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$statement/?throw/*ThrowStatement"] !== undefined) { foo["$statement/?throw/*ThrowStatement"].end($) }
                    })($)
                })
                break
            }
            case "try": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_try$<Annotation>,
                    ) => {
                        if (foo["$statement/?try/*TryStatement"] !== undefined) { foo["$statement/?try/*TryStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                            pr.cc($["catchClause"], ($) => {
                                ((
                                    $: api.TNGstatement_try$_catchClause$<Annotation>,
                                ) => {
                                    if (foo["$statement/?try/*TryStatement/.catchClause/*CatchClause"] !== undefined) { foo["$statement/?try/*TryStatement/.catchClause/*CatchClause"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["variable"], ($) => {
                                            X_variableDeclaration($)
                                        })
                                        pr.cc($["block"], ($) => {
                                            X_block($)
                                        })
                                    })
                                    if (foo["$statement/?try/*TryStatement/.catchClause/*CatchClause"] !== undefined) { foo["$statement/?try/*TryStatement/.catchClause/*CatchClause"].end($) }
                                })($)
                            })
                        })
                        if (foo["$statement/?try/*TryStatement"] !== undefined) { foo["$statement/?try/*TryStatement"].end($) }
                    })($)
                })
                break
            }
            case "typeAlias": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_typeAlias$<Annotation>,
                    ) => {
                        if (foo["$statement/?typeAlias/*TypeAliasDeclaration"] !== undefined) { foo["$statement/?typeAlias/*TypeAliasDeclaration"].begin($) }
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
                        if (foo["$statement/?typeAlias/*TypeAliasDeclaration"] !== undefined) { foo["$statement/?typeAlias/*TypeAliasDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "variable": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_variable$<Annotation>,
                    ) => {
                        if (foo["$statement/?variable/*VariableStatement"] !== undefined) { foo["$statement/?variable/*VariableStatement"].begin($) }
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
                        if (foo["$statement/?variable/*VariableStatement"] !== undefined) { foo["$statement/?variable/*VariableStatement"].end($) }
                    })($)
                })
                break
            }
            case "while": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_while$<Annotation>,
                    ) => {
                        if (foo["$statement/?while/*WhileStatement"] !== undefined) { foo["$statement/?while/*WhileStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (foo["$statement/?while/*WhileStatement"] !== undefined) { foo["$statement/?while/*WhileStatement"].end($) }
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
            if (foo["$stringLiteral/*StringLiteral"] !== undefined) { foo["$stringLiteral/*StringLiteral"]($) }
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
                        if (foo["$type/?any/*AnyKeyword"] !== undefined) { foo["$type/?any/*AnyKeyword"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
                    ) => {
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["$type/?boolean/*BooleanKeyword"] !== undefined) { foo["$type/?boolean/*BooleanKeyword"]($) }
                    })($)
                })
                break
            }
            case "function": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_function$<Annotation>,
                    ) => {
                        if (foo["$type/?function/*FunctionType"] !== undefined) { foo["$type/?function/*FunctionType"].begin($) }
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
                        if (foo["$type/?function/*FunctionType"] !== undefined) { foo["$type/?function/*FunctionType"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_literal$<Annotation>,
                    ) => {
                        if (foo["$type/?literal/*LiteralType"] !== undefined) { foo["$type/?literal/*LiteralType"].begin($) }
                        pr.cc($.content, ($) => {
                            switch ($[0]) {
                                case "null": {
                                    pr.cc($[1], ($) => {
                                        ((
                                            $: api.TNGtype_literal$_null$<Annotation>,
                                        ) => {
                                            if (foo["$type/?literal/*LiteralType/?null/*NullKeyword"] !== undefined) { foo["$type/?literal/*LiteralType/?null/*NullKeyword"]($) }
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
                        if (foo["$type/?literal/*LiteralType"] !== undefined) { foo["$type/?literal/*LiteralType"].end($) }
                    })($)
                })
                break
            }
            case "parenthesized": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_parenthesized$<Annotation>,
                    ) => {
                        if (foo["$type/?parenthesized/*ParenthesizedType"] !== undefined) { foo["$type/?parenthesized/*ParenthesizedType"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?parenthesized/*ParenthesizedType"] !== undefined) { foo["$type/?parenthesized/*ParenthesizedType"].end($) }
                    })($)
                })
                break
            }
            case "never": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_never$<Annotation>,
                    ) => {
                        if (foo["$type/?never/*NeverKeyword"] !== undefined) { foo["$type/?never/*NeverKeyword"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if (foo["$type/?number/*NumberKeyword"] !== undefined) { foo["$type/?number/*NumberKeyword"]($) }
                    })($)
                })
                break
            }
            case "optional": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_optional$<Annotation>,
                    ) => {
                        if (foo["$type/?optional/*OptionalType"] !== undefined) { foo["$type/?optional/*OptionalType"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?optional/*OptionalType"] !== undefined) { foo["$type/?optional/*OptionalType"].end($) }
                    })($)
                })
                break
            }
            case "tuple": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_tuple$<Annotation>,
                    ) => {
                        if (foo["$type/?tuple/*TupleType"] !== undefined) { foo["$type/?tuple/*TupleType"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (foo["$type/?tuple/*TupleType"] !== undefined) { foo["$type/?tuple/*TupleType"].end($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_typeSignature($)
                            })
                        })
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if (foo["$type/?string/*StringKeyword"] !== undefined) { foo["$type/?string/*StringKeyword"]($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
                    ) => {
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].begin($) }
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
                                                if (foo["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (foo["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].end($) }
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
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].end($) }
                    })($)
                })
                break
            }
            case "undefined": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_undefined$<Annotation>,
                    ) => {
                        if (foo["$type/?undefined/*UndefinedKeyword"] !== undefined) { foo["$type/?undefined/*UndefinedKeyword"]($) }
                    })($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
                    ) => {
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].end($) }
                    })($)
                })
                break
            }
            case "void": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_void$<Annotation>,
                    ) => {
                        if (foo["$type/?void/*VoidKeyword"] !== undefined) { foo["$type/?void/*VoidKeyword"]($) }
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
            if (foo["$typeParameter/*TypeParameter"] !== undefined) { foo["$typeParameter/*TypeParameter"].begin($) }
            pr.cc($.content, ($) => {
                X_identifier($)
            })
            if (foo["$typeParameter/*TypeParameter"] !== undefined) { foo["$typeParameter/*TypeParameter"].end($) }
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
                        if (foo["$typeSignature/?construct/*ConstructSignature"] !== undefined) { foo["$typeSignature/?construct/*ConstructSignature"].begin($) }
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
                        if (foo["$typeSignature/?construct/*ConstructSignature"] !== undefined) { foo["$typeSignature/?construct/*ConstructSignature"].end($) }
                    })($)
                })
                break
            }
            case "index": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_index$<Annotation>,
                    ) => {
                        if (foo["$typeSignature/?index/*IndexSignature"] !== undefined) { foo["$typeSignature/?index/*IndexSignature"].begin($) }
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
                        if (foo["$typeSignature/?index/*IndexSignature"] !== undefined) { foo["$typeSignature/?index/*IndexSignature"].end($) }
                    })($)
                })
                break
            }
            case "method": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_method$<Annotation>,
                    ) => {
                        if (foo["$typeSignature/?method/*MethodSignature"] !== undefined) { foo["$typeSignature/?method/*MethodSignature"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                        })
                        if (foo["$typeSignature/?method/*MethodSignature"] !== undefined) { foo["$typeSignature/?method/*MethodSignature"].end($) }
                    })($)
                })
                break
            }
            case "property": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_property$<Annotation>,
                    ) => {
                        if (foo["$typeSignature/?property/*PropertySignature"] !== undefined) { foo["$typeSignature/?property/*PropertySignature"].begin($) }
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
                                        if (foo["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"] !== undefined) { foo["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"]($) }
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
                        if (foo["$typeSignature/?property/*PropertySignature"] !== undefined) { foo["$typeSignature/?property/*PropertySignature"].end($) }
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
            if (foo["$variableDeclaration/*VariableDeclaration"] !== undefined) { foo["$variableDeclaration/*VariableDeclaration"].begin($) }
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
            if (foo["$variableDeclaration/*VariableDeclaration"] !== undefined) { foo["$variableDeclaration/*VariableDeclaration"].end($) }
        })($)
    }
    function X_variableDeclarationList(
        $: api.TGvariableDeclarationList<Annotation>,
    ) {
        ((
            $: api.TNGvariableDeclarationList$<Annotation>,
        ) => {
            if (foo["$variableDeclarationList/*VariableDeclarationList"] !== undefined) { foo["$variableDeclarationList/*VariableDeclarationList"].begin($) }
            pr.cc($.content, ($) => {
                $.forEach(($) => {
                    X_variableDeclaration($)
                })
            })
            if (foo["$variableDeclarationList/*VariableDeclarationList"] !== undefined) { foo["$variableDeclarationList/*VariableDeclarationList"].end($) }
        })($)
    }
    ((
        $: api.TNroot<Annotation>,
    ) => {
        if (foo[""] !== undefined) { foo[""].begin($) }
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
                    if (foo["/.endOfFile/*EndOfFileToken"] !== undefined) { foo["/.endOfFile/*EndOfFileToken"]($) }
                })($)
            })
        })
        if (foo[""] !== undefined) { foo[""].end($) }
    })($)
}