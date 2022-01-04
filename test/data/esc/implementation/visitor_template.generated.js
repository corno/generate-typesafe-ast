"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.visit = void 0;
var pr = __importStar(require("pareto-runtime"));
function visit($, foo) {
    function X_block($) {
        (function ($) {
            if (foo["Gblock$"] !== undefined) {
                foo["Gblock$"].begin($);
            }
            pr.cc($.content, function ($) {
                $.forEach(function ($) {
                    X_statement($);
                });
            });
            if (foo["Gblock$"] !== undefined) {
                foo["Gblock$"].end($);
            }
        })($);
    }
    function X_expression($) {
        switch ($[0]) {
            case "arrayLiteral": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_arrayLiteral$"] !== undefined) {
                            foo["Gexpression_arrayLiteral$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            $.forEach(function ($) {
                                X_expression($);
                            });
                        });
                        if (foo["Gexpression_arrayLiteral$"] !== undefined) {
                            foo["Gexpression_arrayLiteral$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "arrowFunction": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_arrowFunction$"] !== undefined) {
                            foo["Gexpression_arrowFunction$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["parameters"], function ($) {
                                $.forEach(function ($) {
                                    X_parameter($);
                                });
                            });
                            pr.cc($["returnType"], function ($) {
                                if ($ === null) {
                                    //FIXME??
                                }
                                else {
                                    X_type($);
                                }
                            });
                            pr.cc($["equalsGreaterThan"], function ($) {
                                (function ($) {
                                    if (foo["Gexpression_arrowFunction$_equalsGreaterThan$"] !== undefined) {
                                        foo["Gexpression_arrowFunction$_equalsGreaterThan$"]($);
                                    }
                                })($);
                            });
                            pr.cc($["implementation"], function ($) {
                                switch ($[0]) {
                                    case "block": {
                                        pr.cc($[1], function ($) {
                                            X_block($);
                                        });
                                        break;
                                    }
                                    case "expression": {
                                        pr.cc($[1], function ($) {
                                            X_expression($);
                                        });
                                        break;
                                    }
                                    default: pr.au($[0]);
                                }
                            });
                        });
                        if (foo["Gexpression_arrowFunction$"] !== undefined) {
                            foo["Gexpression_arrowFunction$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "binary": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_binary$"] !== undefined) {
                            foo["Gexpression_binary$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["leftHandSide"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["operator"], function ($) {
                                switch ($[0]) {
                                    case "ampersandAmpersand": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_ampersandAmpersand$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_ampersandAmpersand$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "barBar": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_barBar$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_barBar$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "equals": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_equals$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_equals$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "equalsEqualsEquals": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_equalsEqualsEquals$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_equalsEqualsEquals$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "exclamationEqualsEquals": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_exclamationEqualsEquals$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_exclamationEqualsEquals$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "greaterThan": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_greaterThan$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_greaterThan$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "lessThan": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_lessThan$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_lessThan$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "minus": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_minus$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_minus$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "minusEquals": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_minusEquals$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_minusEquals$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "plus": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_plus$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_plus$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    case "plusEquals": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gexpression_binary$_operator_plusEquals$"] !== undefined) {
                                                    foo["Gexpression_binary$_operator_plusEquals$"]($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    default: pr.au($[0]);
                                }
                            });
                            pr.cc($["rightHandSide"], function ($) {
                                X_expression($);
                            });
                        });
                        if (foo["Gexpression_binary$"] !== undefined) {
                            foo["Gexpression_binary$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "call": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_call$"] !== undefined) {
                            foo["Gexpression_call$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["function"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["typeParameters"], function ($) {
                                $.forEach(function ($) {
                                    X_type($);
                                });
                            });
                            pr.cc($["parameters"], function ($) {
                                $.forEach(function ($) {
                                    X_expression($);
                                });
                            });
                        });
                        if (foo["Gexpression_call$"] !== undefined) {
                            foo["Gexpression_call$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "conditional": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_conditional$"] !== undefined) {
                            foo["Gexpression_conditional$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["test"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["questionToken"], function ($) {
                                (function ($) {
                                    if (foo["Gexpression_conditional$_questionToken$"] !== undefined) {
                                        foo["Gexpression_conditional$_questionToken$"]($);
                                    }
                                })($);
                            });
                            pr.cc($["ifExpression"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["colonToken"], function ($) {
                                (function ($) {
                                    if (foo["Gexpression_conditional$_colonToken$"] !== undefined) {
                                        foo["Gexpression_conditional$_colonToken$"]($);
                                    }
                                })($);
                            });
                            pr.cc($["elseExpression"], function ($) {
                                X_expression($);
                            });
                        });
                        if (foo["Gexpression_conditional$"] !== undefined) {
                            foo["Gexpression_conditional$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "elementAccess": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_elementAccess$"] !== undefined) {
                            foo["Gexpression_elementAccess$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["array"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["element"], function ($) {
                                X_expression($);
                            });
                        });
                        if (foo["Gexpression_elementAccess$"] !== undefined) {
                            foo["Gexpression_elementAccess$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "false": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_false$"] !== undefined) {
                            foo["Gexpression_false$"]($);
                        }
                    })($);
                });
                break;
            }
            case "identifier": {
                pr.cc($[1], function ($) {
                    X_identifier($);
                });
                break;
            }
            case "new": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_new$"] !== undefined) {
                            foo["Gexpression_new$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["class"], function ($) {
                                X_identifier($);
                            });
                            pr.cc($["parameters"], function ($) {
                                $.forEach(function ($) {
                                    X_expression($);
                                });
                            });
                        });
                        if (foo["Gexpression_new$"] !== undefined) {
                            foo["Gexpression_new$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "noSubstitutionTemplateLiteral": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_noSubstitutionTemplateLiteral$"] !== undefined) {
                            foo["Gexpression_noSubstitutionTemplateLiteral$"]($);
                        }
                    })($);
                });
                break;
            }
            case "numericLiteral": {
                pr.cc($[1], function ($) {
                    X_numericLiteral($);
                });
                break;
            }
            case "nullKeyword": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_nullKeyword$"] !== undefined) {
                            foo["Gexpression_nullKeyword$"]($);
                        }
                    })($);
                });
                break;
            }
            case "objectLiteral": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_objectLiteral$"] !== undefined) {
                            foo["Gexpression_objectLiteral$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            $.forEach(function ($) {
                                (function ($) {
                                    if (foo["Gexpression_objectLiteral$$"] !== undefined) {
                                        foo["Gexpression_objectLiteral$$"].begin($);
                                    }
                                    pr.cc($.content, function ($) {
                                        pr.cc($["name"], function ($) {
                                            switch ($[0]) {
                                                case "identifier": {
                                                    pr.cc($[1], function ($) {
                                                        X_identifier($);
                                                    });
                                                    break;
                                                }
                                                case "numericLiteral": {
                                                    pr.cc($[1], function ($) {
                                                        X_numericLiteral($);
                                                    });
                                                    break;
                                                }
                                                case "stringLiteral": {
                                                    pr.cc($[1], function ($) {
                                                        X_stringLiteral($);
                                                    });
                                                    break;
                                                }
                                                default: pr.au($[0]);
                                            }
                                        });
                                        pr.cc($["expression"], function ($) {
                                            X_expression($);
                                        });
                                    });
                                    if (foo["Gexpression_objectLiteral$$"] !== undefined) {
                                        foo["Gexpression_objectLiteral$$"].end($);
                                    }
                                })($);
                            });
                        });
                        if (foo["Gexpression_objectLiteral$"] !== undefined) {
                            foo["Gexpression_objectLiteral$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "parenthesizedExpression": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_parenthesizedExpression$"] !== undefined) {
                            foo["Gexpression_parenthesizedExpression$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_expression($);
                        });
                        if (foo["Gexpression_parenthesizedExpression$"] !== undefined) {
                            foo["Gexpression_parenthesizedExpression$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "postfixUnary": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_postfixUnary$"] !== undefined) {
                            foo["Gexpression_postfixUnary$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_expression($);
                        });
                        if (foo["Gexpression_postfixUnary$"] !== undefined) {
                            foo["Gexpression_postfixUnary$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "prefixUnary": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_prefixUnary$"] !== undefined) {
                            foo["Gexpression_prefixUnary$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_expression($);
                        });
                        if (foo["Gexpression_prefixUnary$"] !== undefined) {
                            foo["Gexpression_prefixUnary$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "propertyAccess": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_propertyAccess$"] !== undefined) {
                            foo["Gexpression_propertyAccess$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["object"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["property"], function ($) {
                                X_expression($);
                            });
                        });
                        if (foo["Gexpression_propertyAccess$"] !== undefined) {
                            foo["Gexpression_propertyAccess$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "stringLiteral": {
                pr.cc($[1], function ($) {
                    X_stringLiteral($);
                });
                break;
            }
            case "template": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_template$"] !== undefined) {
                            foo["Gexpression_template$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["head"], function ($) {
                                (function ($) {
                                    if (foo["Gexpression_template$_head$"] !== undefined) {
                                        foo["Gexpression_template$_head$"]($);
                                    }
                                })($);
                            });
                            pr.cc($["spans"], function ($) {
                                $.forEach(function ($) {
                                    (function ($) {
                                        if (foo["Gexpression_template$_spans$"] !== undefined) {
                                            foo["Gexpression_template$_spans$"].begin($);
                                        }
                                        pr.cc($.content, function ($) {
                                            pr.cc($["expression"], function ($) {
                                                X_expression($);
                                            });
                                            pr.cc($["x"], function ($) {
                                                switch ($[0]) {
                                                    case "middle": {
                                                        pr.cc($[1], function ($) {
                                                            (function ($) {
                                                                if (foo["Gexpression_template$_spans$_x_middle$"] !== undefined) {
                                                                    foo["Gexpression_template$_spans$_x_middle$"]($);
                                                                }
                                                            })($);
                                                        });
                                                        break;
                                                    }
                                                    case "tail": {
                                                        pr.cc($[1], function ($) {
                                                            (function ($) {
                                                                if (foo["Gexpression_template$_spans$_x_tail$"] !== undefined) {
                                                                    foo["Gexpression_template$_spans$_x_tail$"]($);
                                                                }
                                                            })($);
                                                        });
                                                        break;
                                                    }
                                                    default: pr.au($[0]);
                                                }
                                            });
                                        });
                                        if (foo["Gexpression_template$_spans$"] !== undefined) {
                                            foo["Gexpression_template$_spans$"].end($);
                                        }
                                    })($);
                                });
                            });
                        });
                        if (foo["Gexpression_template$"] !== undefined) {
                            foo["Gexpression_template$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "true": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gexpression_true$"] !== undefined) {
                            foo["Gexpression_true$"]($);
                        }
                    })($);
                });
                break;
            }
            default: pr.au($[0]);
        }
    }
    function X_functionDefinition($) {
        pr.cc($["typeParameters"], function ($) {
            $.forEach(function ($) {
                X_typeParameter($);
            });
        });
        pr.cc($["parameters"], function ($) {
            $.forEach(function ($) {
                X_parameter($);
            });
        });
        pr.cc($["returnType"], function ($) {
            if ($ === null) {
                //FIXME??
            }
            else {
                X_type($);
            }
        });
    }
    function X_identifier($) {
        (function ($) {
            if (foo["Gidentifier$"] !== undefined) {
                foo["Gidentifier$"]($);
            }
        })($);
    }
    function X_identifierOrStringLiteral($) {
        switch ($[0]) {
            case "identifier": {
                pr.cc($[1], function ($) {
                    X_identifier($);
                });
                break;
            }
            case "stringLiteral": {
                pr.cc($[1], function ($) {
                    X_stringLiteral($);
                });
                break;
            }
            default: pr.au($[0]);
        }
    }
    function X_modifier($) {
        switch ($[0]) {
            case "declare": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gmodifier_declare$"] !== undefined) {
                            foo["Gmodifier_declare$"]($);
                        }
                    })($);
                });
                break;
            }
            case "export": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gmodifier_export$"] !== undefined) {
                            foo["Gmodifier_export$"]($);
                        }
                    })($);
                });
                break;
            }
            case "readonly": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gmodifier_readonly$"] !== undefined) {
                            foo["Gmodifier_readonly$"]($);
                        }
                    })($);
                });
                break;
            }
            default: pr.au($[0]);
        }
    }
    function X_numericLiteral($) {
        (function ($) {
            if (foo["GnumericLiteral$"] !== undefined) {
                foo["GnumericLiteral$"]($);
            }
        })($);
    }
    function X_parameter($) {
        (function ($) {
            if (foo["Gparameter$"] !== undefined) {
                foo["Gparameter$"].begin($);
            }
            pr.cc($.content, function ($) {
                pr.cc($["name"], function ($) {
                    X_identifier($);
                });
                pr.cc($["questionToken"], function ($) {
                    if ($ === null) {
                        //FIXME??
                    }
                    else {
                        (function ($) {
                            if (foo["Gparameter$_questionToken$"] !== undefined) {
                                foo["Gparameter$_questionToken$"]($);
                            }
                        })($);
                    }
                });
                pr.cc($["type"], function ($) {
                    if ($ === null) {
                        //FIXME??
                    }
                    else {
                        X_type($);
                    }
                });
            });
            if (foo["Gparameter$"] !== undefined) {
                foo["Gparameter$"].end($);
            }
        })($);
    }
    function X_statement($) {
        switch ($[0]) {
            case "block": {
                pr.cc($[1], function ($) {
                    X_block($);
                });
                break;
            }
            case "break": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_break$"] !== undefined) {
                            foo["Gstatement_break$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            if ($ === null) {
                                //FIXME??
                            }
                            else {
                                X_identifier($);
                            }
                        });
                        if (foo["Gstatement_break$"] !== undefined) {
                            foo["Gstatement_break$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "export": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_export$"] !== undefined) {
                            foo["Gstatement_export$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_stringLiteral($);
                        });
                        if (foo["Gstatement_export$"] !== undefined) {
                            foo["Gstatement_export$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "expression": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_expression$"] !== undefined) {
                            foo["Gstatement_expression$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_expression($);
                        });
                        if (foo["Gstatement_expression$"] !== undefined) {
                            foo["Gstatement_expression$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "for": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_for$"] !== undefined) {
                            foo["Gstatement_for$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["initializer"], function ($) {
                                X_variableDeclarationList($);
                            });
                            pr.cc($["condition"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["incrementer"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["block"], function ($) {
                                X_block($);
                            });
                        });
                        if (foo["Gstatement_for$"] !== undefined) {
                            foo["Gstatement_for$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "function": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_function$"] !== undefined) {
                            foo["Gstatement_function$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["modifiers"], function ($) {
                                $.forEach(function ($) {
                                    X_modifier($);
                                });
                            });
                            pr.cc($["name"], function ($) {
                                X_identifier($);
                            });
                            pr.cc($["definition"], function ($) {
                                X_functionDefinition($);
                            });
                            pr.cc($["block"], function ($) {
                                if ($ === null) {
                                    //FIXME??
                                }
                                else {
                                    X_block($);
                                }
                            });
                        });
                        if (foo["Gstatement_function$"] !== undefined) {
                            foo["Gstatement_function$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "if": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_if$"] !== undefined) {
                            foo["Gstatement_if$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["expression"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["thenStatement"], function ($) {
                                X_statement($);
                            });
                            pr.cc($["elseStatement"], function ($) {
                                if ($ === null) {
                                    //FIXME??
                                }
                                else {
                                    X_statement($);
                                }
                            });
                        });
                        if (foo["Gstatement_if$"] !== undefined) {
                            foo["Gstatement_if$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "import": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_import$"] !== undefined) {
                            foo["Gstatement_import$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["clause"], function ($) {
                                (function ($) {
                                    if (foo["Gstatement_import$_clause$"] !== undefined) {
                                        foo["Gstatement_import$_clause$"].begin($);
                                    }
                                    pr.cc($.content, function ($) {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], function ($) {
                                                    (function ($) {
                                                        if (foo["Gstatement_import$_clause$_namespace$"] !== undefined) {
                                                            foo["Gstatement_import$_clause$_namespace$"].begin($);
                                                        }
                                                        pr.cc($.content, function ($) {
                                                            X_identifier($);
                                                        });
                                                        if (foo["Gstatement_import$_clause$_namespace$"] !== undefined) {
                                                            foo["Gstatement_import$_clause$_namespace$"].end($);
                                                        }
                                                    })($);
                                                });
                                                break;
                                            }
                                            case "named": {
                                                pr.cc($[1], function ($) {
                                                    (function ($) {
                                                        if (foo["Gstatement_import$_clause$_named$"] !== undefined) {
                                                            foo["Gstatement_import$_clause$_named$"].begin($);
                                                        }
                                                        pr.cc($.content, function ($) {
                                                            $.forEach(function ($) {
                                                                (function ($) {
                                                                    if (foo["Gstatement_import$_clause$_named$$"] !== undefined) {
                                                                        foo["Gstatement_import$_clause$_named$$"].begin($);
                                                                    }
                                                                    pr.cc($.content, function ($) {
                                                                        pr.cc($["name"], function ($) {
                                                                            X_identifier($);
                                                                        });
                                                                        pr.cc($["as"], function ($) {
                                                                            if ($ === null) {
                                                                                //FIXME??
                                                                            }
                                                                            else {
                                                                                X_identifier($);
                                                                            }
                                                                        });
                                                                    });
                                                                    if (foo["Gstatement_import$_clause$_named$$"] !== undefined) {
                                                                        foo["Gstatement_import$_clause$_named$$"].end($);
                                                                    }
                                                                })($);
                                                            });
                                                        });
                                                        if (foo["Gstatement_import$_clause$_named$"] !== undefined) {
                                                            foo["Gstatement_import$_clause$_named$"].end($);
                                                        }
                                                    })($);
                                                });
                                                break;
                                            }
                                            default: pr.au($[0]);
                                        }
                                    });
                                    if (foo["Gstatement_import$_clause$"] !== undefined) {
                                        foo["Gstatement_import$_clause$"].end($);
                                    }
                                })($);
                            });
                            pr.cc($["file"], function ($) {
                                X_stringLiteral($);
                            });
                        });
                        if (foo["Gstatement_import$"] !== undefined) {
                            foo["Gstatement_import$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "interface": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_interface$"] !== undefined) {
                            foo["Gstatement_interface$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["modifiers"], function ($) {
                                $.forEach(function ($) {
                                    X_modifier($);
                                });
                            });
                            pr.cc($["name"], function ($) {
                                X_identifier($);
                            });
                            pr.cc($["typeParameters"], function ($) {
                                $.forEach(function ($) {
                                    X_typeParameter($);
                                });
                            });
                            pr.cc($["signature"], function ($) {
                                $.forEach(function ($) {
                                    X_typeSignature($);
                                });
                            });
                        });
                        if (foo["Gstatement_interface$"] !== undefined) {
                            foo["Gstatement_interface$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "labeled": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_labeled$"] !== undefined) {
                            foo["Gstatement_labeled$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["label"], function ($) {
                                X_identifier($);
                            });
                            pr.cc($["statement"], function ($) {
                                X_statement($);
                            });
                        });
                        if (foo["Gstatement_labeled$"] !== undefined) {
                            foo["Gstatement_labeled$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "return": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_return$"] !== undefined) {
                            foo["Gstatement_return$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            if ($ === null) {
                                //FIXME??
                            }
                            else {
                                X_expression($);
                            }
                        });
                        if (foo["Gstatement_return$"] !== undefined) {
                            foo["Gstatement_return$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "switch": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_switch$"] !== undefined) {
                            foo["Gstatement_switch$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["expression"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["caseBlock"], function ($) {
                                (function ($) {
                                    if (foo["Gstatement_switch$_caseBlock$"] !== undefined) {
                                        foo["Gstatement_switch$_caseBlock$"].begin($);
                                    }
                                    pr.cc($.content, function ($) {
                                        $.forEach(function ($) {
                                            switch ($[0]) {
                                                case "case": {
                                                    pr.cc($[1], function ($) {
                                                        (function ($) {
                                                            if (foo["Gstatement_switch$_caseBlock$_case$"] !== undefined) {
                                                                foo["Gstatement_switch$_caseBlock$_case$"].begin($);
                                                            }
                                                            pr.cc($.content, function ($) {
                                                                pr.cc($["case"], function ($) {
                                                                    X_expression($);
                                                                });
                                                                pr.cc($["statements"], function ($) {
                                                                    $.forEach(function ($) {
                                                                        X_statement($);
                                                                    });
                                                                });
                                                            });
                                                            if (foo["Gstatement_switch$_caseBlock$_case$"] !== undefined) {
                                                                foo["Gstatement_switch$_caseBlock$_case$"].end($);
                                                            }
                                                        })($);
                                                    });
                                                    break;
                                                }
                                                case "default": {
                                                    pr.cc($[1], function ($) {
                                                        (function ($) {
                                                            if (foo["Gstatement_switch$_caseBlock$_default$"] !== undefined) {
                                                                foo["Gstatement_switch$_caseBlock$_default$"].begin($);
                                                            }
                                                            pr.cc($.content, function ($) {
                                                                $.forEach(function ($) {
                                                                    X_statement($);
                                                                });
                                                            });
                                                            if (foo["Gstatement_switch$_caseBlock$_default$"] !== undefined) {
                                                                foo["Gstatement_switch$_caseBlock$_default$"].end($);
                                                            }
                                                        })($);
                                                    });
                                                    break;
                                                }
                                                default: pr.au($[0]);
                                            }
                                        });
                                    });
                                    if (foo["Gstatement_switch$_caseBlock$"] !== undefined) {
                                        foo["Gstatement_switch$_caseBlock$"].end($);
                                    }
                                })($);
                            });
                        });
                        if (foo["Gstatement_switch$"] !== undefined) {
                            foo["Gstatement_switch$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "throw": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_throw$"] !== undefined) {
                            foo["Gstatement_throw$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_expression($);
                        });
                        if (foo["Gstatement_throw$"] !== undefined) {
                            foo["Gstatement_throw$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "try": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_try$"] !== undefined) {
                            foo["Gstatement_try$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["block"], function ($) {
                                X_block($);
                            });
                            pr.cc($["catchClause"], function ($) {
                                (function ($) {
                                    if (foo["Gstatement_try$_catchClause$"] !== undefined) {
                                        foo["Gstatement_try$_catchClause$"].begin($);
                                    }
                                    pr.cc($.content, function ($) {
                                        pr.cc($["variable"], function ($) {
                                            X_variableDeclaration($);
                                        });
                                        pr.cc($["block"], function ($) {
                                            X_block($);
                                        });
                                    });
                                    if (foo["Gstatement_try$_catchClause$"] !== undefined) {
                                        foo["Gstatement_try$_catchClause$"].end($);
                                    }
                                })($);
                            });
                        });
                        if (foo["Gstatement_try$"] !== undefined) {
                            foo["Gstatement_try$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "typeAlias": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_typeAlias$"] !== undefined) {
                            foo["Gstatement_typeAlias$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["modifiers"], function ($) {
                                $.forEach(function ($) {
                                    X_modifier($);
                                });
                            });
                            pr.cc($["name"], function ($) {
                                X_identifier($);
                            });
                            pr.cc($["typeParameters"], function ($) {
                                $.forEach(function ($) {
                                    X_typeParameter($);
                                });
                            });
                            pr.cc($["type"], function ($) {
                                X_type($);
                            });
                        });
                        if (foo["Gstatement_typeAlias$"] !== undefined) {
                            foo["Gstatement_typeAlias$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "variable": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_variable$"] !== undefined) {
                            foo["Gstatement_variable$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["modifiers"], function ($) {
                                $.forEach(function ($) {
                                    X_modifier($);
                                });
                            });
                            pr.cc($["variableDeclarationList"], function ($) {
                                X_variableDeclarationList($);
                            });
                        });
                        if (foo["Gstatement_variable$"] !== undefined) {
                            foo["Gstatement_variable$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "while": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gstatement_while$"] !== undefined) {
                            foo["Gstatement_while$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["condition"], function ($) {
                                X_expression($);
                            });
                            pr.cc($["block"], function ($) {
                                X_block($);
                            });
                        });
                        if (foo["Gstatement_while$"] !== undefined) {
                            foo["Gstatement_while$"].end($);
                        }
                    })($);
                });
                break;
            }
            default: pr.au($[0]);
        }
    }
    function X_stringLiteral($) {
        (function ($) {
            if (foo["GstringLiteral$"] !== undefined) {
                foo["GstringLiteral$"]($);
            }
        })($);
    }
    function X_type($) {
        switch ($[0]) {
            case "any": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_any$"] !== undefined) {
                            foo["Gtype_any$"]($);
                        }
                    })($);
                });
                break;
            }
            case "array": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_array$"] !== undefined) {
                            foo["Gtype_array$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_type($);
                        });
                        if (foo["Gtype_array$"] !== undefined) {
                            foo["Gtype_array$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "boolean": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_boolean$"] !== undefined) {
                            foo["Gtype_boolean$"]($);
                        }
                    })($);
                });
                break;
            }
            case "function": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_function$"] !== undefined) {
                            foo["Gtype_function$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["parameters"], function ($) {
                                $.forEach(function ($) {
                                    X_parameter($);
                                });
                            });
                            pr.cc($["returnType"], function ($) {
                                if ($ === null) {
                                    //FIXME??
                                }
                                else {
                                    X_type($);
                                }
                            });
                        });
                        if (foo["Gtype_function$"] !== undefined) {
                            foo["Gtype_function$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "literal": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_literal$"] !== undefined) {
                            foo["Gtype_literal$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            switch ($[0]) {
                                case "null": {
                                    pr.cc($[1], function ($) {
                                        (function ($) {
                                            if (foo["Gtype_literal$_null$"] !== undefined) {
                                                foo["Gtype_literal$_null$"]($);
                                            }
                                        })($);
                                    });
                                    break;
                                }
                                case "string": {
                                    pr.cc($[1], function ($) {
                                        X_stringLiteral($);
                                    });
                                    break;
                                }
                                default: pr.au($[0]);
                            }
                        });
                        if (foo["Gtype_literal$"] !== undefined) {
                            foo["Gtype_literal$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "parenthesized": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_parenthesized$"] !== undefined) {
                            foo["Gtype_parenthesized$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_type($);
                        });
                        if (foo["Gtype_parenthesized$"] !== undefined) {
                            foo["Gtype_parenthesized$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "never": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_never$"] !== undefined) {
                            foo["Gtype_never$"]($);
                        }
                    })($);
                });
                break;
            }
            case "number": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_number$"] !== undefined) {
                            foo["Gtype_number$"]($);
                        }
                    })($);
                });
                break;
            }
            case "optional": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_optional$"] !== undefined) {
                            foo["Gtype_optional$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            X_type($);
                        });
                        if (foo["Gtype_optional$"] !== undefined) {
                            foo["Gtype_optional$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "tuple": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_tuple$"] !== undefined) {
                            foo["Gtype_tuple$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            $.forEach(function ($) {
                                X_type($);
                            });
                        });
                        if (foo["Gtype_tuple$"] !== undefined) {
                            foo["Gtype_tuple$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "typeLiteral": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_typeLiteral$"] !== undefined) {
                            foo["Gtype_typeLiteral$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            $.forEach(function ($) {
                                X_typeSignature($);
                            });
                        });
                        if (foo["Gtype_typeLiteral$"] !== undefined) {
                            foo["Gtype_typeLiteral$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "string": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_string$"] !== undefined) {
                            foo["Gtype_string$"]($);
                        }
                    })($);
                });
                break;
            }
            case "typeReference": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_typeReference$"] !== undefined) {
                            foo["Gtype_typeReference$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["x"], function ($) {
                                switch ($[0]) {
                                    case "identifier": {
                                        pr.cc($[1], function ($) {
                                            X_identifier($);
                                        });
                                        break;
                                    }
                                    case "qualifiedName": {
                                        pr.cc($[1], function ($) {
                                            (function ($) {
                                                if (foo["Gtype_typeReference$_x_qualifiedName$"] !== undefined) {
                                                    foo["Gtype_typeReference$_x_qualifiedName$"].begin($);
                                                }
                                                pr.cc($.content, function ($) {
                                                    pr.cc($["context"], function ($) {
                                                        X_identifier($);
                                                    });
                                                    pr.cc($["type"], function ($) {
                                                        X_identifier($);
                                                    });
                                                });
                                                if (foo["Gtype_typeReference$_x_qualifiedName$"] !== undefined) {
                                                    foo["Gtype_typeReference$_x_qualifiedName$"].end($);
                                                }
                                            })($);
                                        });
                                        break;
                                    }
                                    default: pr.au($[0]);
                                }
                            });
                            pr.cc($["parameters"], function ($) {
                                $.forEach(function ($) {
                                    X_type($);
                                });
                            });
                        });
                        if (foo["Gtype_typeReference$"] !== undefined) {
                            foo["Gtype_typeReference$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "undefined": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_undefined$"] !== undefined) {
                            foo["Gtype_undefined$"]($);
                        }
                    })($);
                });
                break;
            }
            case "union": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_union$"] !== undefined) {
                            foo["Gtype_union$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            $.forEach(function ($) {
                                X_type($);
                            });
                        });
                        if (foo["Gtype_union$"] !== undefined) {
                            foo["Gtype_union$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "void": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["Gtype_void$"] !== undefined) {
                            foo["Gtype_void$"]($);
                        }
                    })($);
                });
                break;
            }
            default: pr.au($[0]);
        }
    }
    function X_typeParameter($) {
        (function ($) {
            if (foo["GtypeParameter$"] !== undefined) {
                foo["GtypeParameter$"].begin($);
            }
            pr.cc($.content, function ($) {
                X_identifier($);
            });
            if (foo["GtypeParameter$"] !== undefined) {
                foo["GtypeParameter$"].end($);
            }
        })($);
    }
    function X_typeSignature($) {
        switch ($[0]) {
            case "construct": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["GtypeSignature_construct$"] !== undefined) {
                            foo["GtypeSignature_construct$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["parameters"], function ($) {
                                $.forEach(function ($) {
                                    X_parameter($);
                                });
                            });
                            pr.cc($["returnType"], function ($) {
                                X_type($);
                            });
                        });
                        if (foo["GtypeSignature_construct$"] !== undefined) {
                            foo["GtypeSignature_construct$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "index": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["GtypeSignature_index$"] !== undefined) {
                            foo["GtypeSignature_index$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["modifiers"], function ($) {
                                $.forEach(function ($) {
                                    X_modifier($);
                                });
                            });
                            pr.cc($["parameter"], function ($) {
                                X_parameter($);
                            });
                            pr.cc($["type"], function ($) {
                                if ($ === null) {
                                    //FIXME??
                                }
                                else {
                                    X_type($);
                                }
                            });
                        });
                        if (foo["GtypeSignature_index$"] !== undefined) {
                            foo["GtypeSignature_index$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "method": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["GtypeSignature_method$"] !== undefined) {
                            foo["GtypeSignature_method$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["name"], function ($) {
                                X_identifier($);
                            });
                            pr.cc($["definition"], function ($) {
                                X_functionDefinition($);
                            });
                        });
                        if (foo["GtypeSignature_method$"] !== undefined) {
                            foo["GtypeSignature_method$"].end($);
                        }
                    })($);
                });
                break;
            }
            case "property": {
                pr.cc($[1], function ($) {
                    (function ($) {
                        if (foo["GtypeSignature_property$"] !== undefined) {
                            foo["GtypeSignature_property$"].begin($);
                        }
                        pr.cc($.content, function ($) {
                            pr.cc($["modifiers"], function ($) {
                                $.forEach(function ($) {
                                    X_modifier($);
                                });
                            });
                            pr.cc($["name"], function ($) {
                                X_identifierOrStringLiteral($);
                            });
                            pr.cc($["quesionToken"], function ($) {
                                if ($ === null) {
                                    //FIXME??
                                }
                                else {
                                    (function ($) {
                                        if (foo["GtypeSignature_property$_quesionToken$"] !== undefined) {
                                            foo["GtypeSignature_property$_quesionToken$"]($);
                                        }
                                    })($);
                                }
                            });
                            pr.cc($["type"], function ($) {
                                if ($ === null) {
                                    //FIXME??
                                }
                                else {
                                    X_type($);
                                }
                            });
                        });
                        if (foo["GtypeSignature_property$"] !== undefined) {
                            foo["GtypeSignature_property$"].end($);
                        }
                    })($);
                });
                break;
            }
            default: pr.au($[0]);
        }
    }
    function X_variableDeclaration($) {
        (function ($) {
            if (foo["GvariableDeclaration$"] !== undefined) {
                foo["GvariableDeclaration$"].begin($);
            }
            pr.cc($.content, function ($) {
                pr.cc($["name"], function ($) {
                    X_identifier($);
                });
                pr.cc($["type"], function ($) {
                    if ($ === null) {
                        //FIXME??
                    }
                    else {
                        X_type($);
                    }
                });
                pr.cc($["expression"], function ($) {
                    if ($ === null) {
                        //FIXME??
                    }
                    else {
                        X_expression($);
                    }
                });
            });
            if (foo["GvariableDeclaration$"] !== undefined) {
                foo["GvariableDeclaration$"].end($);
            }
        })($);
    }
    function X_variableDeclarationList($) {
        (function ($) {
            if (foo["GvariableDeclarationList$"] !== undefined) {
                foo["GvariableDeclarationList$"].begin($);
            }
            pr.cc($.content, function ($) {
                $.forEach(function ($) {
                    X_variableDeclaration($);
                });
            });
            if (foo["GvariableDeclarationList$"] !== undefined) {
                foo["GvariableDeclarationList$"].end($);
            }
        })($);
    }
    (function ($) {
        if (foo["root"] !== undefined) {
            foo["root"].begin($);
        }
        pr.cc($.content, function ($) {
            pr.cc($["statements"], function ($) {
                $.forEach(function ($) {
                    X_statement($);
                });
            });
            pr.cc($["endOfFile"], function ($) {
                (function ($) {
                    if (foo["root_endOfFile$"] !== undefined) {
                        foo["root_endOfFile$"]($);
                    }
                })($);
            });
        });
        if (foo["root"] !== undefined) {
            foo["root"].end($);
        }
    })($);
}
exports.visit = visit;
