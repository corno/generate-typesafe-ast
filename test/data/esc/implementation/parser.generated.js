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
exports.parse = void 0;
var pr = __importStar(require("pareto-runtime"));
function parse($, callback, reportUnexpectedRoot, reportUnexpectedChild, reportMissingToken) {
    function Gblock(node, children, callback) {
        var currentChild;
        var nextChild;
        currentChild = children.pop();
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gblock",
                kindNameOptions: ["Block"],
            });
            return;
        }
        if (currentChild.kindName !== "Block") {
            reportUnexpectedChild({
                path: "Gblock",
                child: currentChild,
                expected: ["Block"],
            });
            return;
        }
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            var currentChild;
            var nextChild;
            var elements = [];
            var processElement = function () {
                Gstatement(node, children, function ($) {
                    elements.push($);
                });
            };
            arrayLoop: while (true) {
                if (children.length === 0) {
                    break arrayLoop;
                }
                else {
                    nextChild = children[children.length - 1];
                    switch (nextChild.kindName) {
                        case "Block":
                            processElement();
                            break;
                        case "BreakStatement":
                            processElement();
                            break;
                        case "ExportDeclaration":
                            processElement();
                            break;
                        case "ExpressionStatement":
                            processElement();
                            break;
                        case "ForStatement":
                            processElement();
                            break;
                        case "FunctionDeclaration":
                            processElement();
                            break;
                        case "IfStatement":
                            processElement();
                            break;
                        case "ImportDeclaration":
                            processElement();
                            break;
                        case "InterfaceDeclaration":
                            processElement();
                            break;
                        case "LabeledStatement":
                            processElement();
                            break;
                        case "ReturnStatement":
                            processElement();
                            break;
                        case "SwitchStatement":
                            processElement();
                            break;
                        case "ThrowStatement":
                            processElement();
                            break;
                        case "TryStatement":
                            processElement();
                            break;
                        case "TypeAliasDeclaration":
                            processElement();
                            break;
                        case "VariableStatement":
                            processElement();
                            break;
                        case "WhileStatement":
                            processElement();
                            break;
                        default: break arrayLoop;
                    }
                }
            }
            pr.cc(elements, function ($) {
                callback({
                    annotation: node.annotation,
                    content: $,
                });
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "Gblock$",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })(currentChild, function ($) {
            callback($);
        });
    }
    function Gexpression(node, children, callback) {
        var currentChild;
        var nextChild;
        var choiceEnd_Gexpression = function ($) {
            callback($);
        };
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gexpression",
                kindNameOptions: ["ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
            });
            return;
        }
        else {
            nextChild = children[children.length - 1];
            var choose_arrayLiteral = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_arrayLiteral",
                        kindNameOptions: ["ArrayLiteralExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ArrayLiteralExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_arrayLiteral",
                        child: currentChild,
                        expected: ["ArrayLiteralExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var elements = [];
                    var processElement = function () {
                        Gexpression(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "ArrayLiteralExpression":
                                    processElement();
                                    break;
                                case "ArrowFunction":
                                    processElement();
                                    break;
                                case "BinaryExpression":
                                    processElement();
                                    break;
                                case "CallExpression":
                                    processElement();
                                    break;
                                case "ConditionalExpression":
                                    processElement();
                                    break;
                                case "ElementAccessExpression":
                                    processElement();
                                    break;
                                case "FalseKeyword":
                                    processElement();
                                    break;
                                case "Identifier":
                                    processElement();
                                    break;
                                case "NewExpression":
                                    processElement();
                                    break;
                                case "NoSubstitutionTemplateLiteral":
                                    processElement();
                                    break;
                                case "NumericLiteral":
                                    processElement();
                                    break;
                                case "NullKeyword":
                                    processElement();
                                    break;
                                case "ObjectLiteralExpression":
                                    processElement();
                                    break;
                                case "ParenthesizedExpression":
                                    processElement();
                                    break;
                                case "PostfixUnaryExpression":
                                    processElement();
                                    break;
                                case "PrefixUnaryExpression":
                                    processElement();
                                    break;
                                case "PropertyAccessExpression":
                                    processElement();
                                    break;
                                case "StringLiteral":
                                    processElement();
                                    break;
                                case "TemplateExpression":
                                    processElement();
                                    break;
                                case "TrueKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_arrayLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["arrayLiteral", $]);
                });
            };
            var choose_arrowFunction = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_arrowFunction",
                        kindNameOptions: ["ArrowFunction"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ArrowFunction") {
                    reportUnexpectedChild({
                        path: "Gexpression_arrowFunction",
                        child: currentChild,
                        expected: ["ArrowFunction"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gparameter(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "Parameter":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _parameters = $;
                        var optional = null;
                        var setOptional = function () {
                            Gtype(node, children, function ($) {
                                optional = $;
                            });
                        };
                        if (children.length === 0) { }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "AnyKeyword":
                                    setOptional();
                                    break;
                                case "ArrayType":
                                    setOptional();
                                    break;
                                case "BooleanKeyword":
                                    setOptional();
                                    break;
                                case "FunctionType":
                                    setOptional();
                                    break;
                                case "LiteralType":
                                    setOptional();
                                    break;
                                case "ParenthesizedType":
                                    setOptional();
                                    break;
                                case "NeverKeyword":
                                    setOptional();
                                    break;
                                case "NumberKeyword":
                                    setOptional();
                                    break;
                                case "OptionalType":
                                    setOptional();
                                    break;
                                case "TupleType":
                                    setOptional();
                                    break;
                                case "TypeLiteral":
                                    setOptional();
                                    break;
                                case "StringKeyword":
                                    setOptional();
                                    break;
                                case "TypeReference":
                                    setOptional();
                                    break;
                                case "UndefinedKeyword":
                                    setOptional();
                                    break;
                                case "UnionType":
                                    setOptional();
                                    break;
                                case "VoidKeyword":
                                    setOptional();
                                    break;
                            }
                        }
                        pr.cc(optional, function ($) {
                            var _returnType = $;
                            currentChild = children.pop();
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                    kindNameOptions: ["EqualsGreaterThanToken"],
                                });
                                return;
                            }
                            if (currentChild.kindName !== "EqualsGreaterThanToken") {
                                reportUnexpectedChild({
                                    path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                    child: currentChild,
                                    expected: ["EqualsGreaterThanToken"],
                                });
                                return;
                            }
                            (function ($, callback) {
                                var node = $;
                                var children = [];
                                $.children.forEach(function ($) { children.push($); });
                                children.reverse();
                                callback({
                                    annotation: $.annotation,
                                });
                                if (children.length > 0) {
                                    reportUnexpectedChild({
                                        path: "Gexpression_arrowFunction$_equalsGreaterThan$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    });
                                    return;
                                }
                            })(currentChild, function ($) {
                                var _equalsGreaterThan = $;
                                var choiceEnd_Gexpression_arrowFunction$_implementation = function ($) {
                                    var _implementation = $;
                                    sequenceEnd({
                                        "parameters": _parameters,
                                        "returnType": _returnType,
                                        "equalsGreaterThan": _equalsGreaterThan,
                                        "implementation": _implementation,
                                    });
                                };
                                if (children.length === 0) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_arrowFunction$_implementation",
                                        kindNameOptions: ["Block", "ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
                                    });
                                    return;
                                }
                                else {
                                    nextChild = children[children.length - 1];
                                    var choose_block = function () {
                                        Gblock(node, children, function ($) {
                                            choiceEnd_Gexpression_arrowFunction$_implementation(["block", $]);
                                        });
                                    };
                                    var choose_expression = function () {
                                        Gexpression(node, children, function ($) {
                                            choiceEnd_Gexpression_arrowFunction$_implementation(["expression", $]);
                                        });
                                    };
                                    switch (nextChild.kindName) {
                                        case "Block": {
                                            choose_block();
                                            break;
                                        }
                                        case "ArrayLiteralExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "ArrowFunction": {
                                            choose_expression();
                                            break;
                                        }
                                        case "BinaryExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "CallExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "ConditionalExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "ElementAccessExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "FalseKeyword": {
                                            choose_expression();
                                            break;
                                        }
                                        case "Identifier": {
                                            choose_expression();
                                            break;
                                        }
                                        case "NewExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "NoSubstitutionTemplateLiteral": {
                                            choose_expression();
                                            break;
                                        }
                                        case "NumericLiteral": {
                                            choose_expression();
                                            break;
                                        }
                                        case "NullKeyword": {
                                            choose_expression();
                                            break;
                                        }
                                        case "ObjectLiteralExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "ParenthesizedExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "PostfixUnaryExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "PrefixUnaryExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "PropertyAccessExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "StringLiteral": {
                                            choose_expression();
                                            break;
                                        }
                                        case "TemplateExpression": {
                                            choose_expression();
                                            break;
                                        }
                                        case "TrueKeyword": {
                                            choose_expression();
                                            break;
                                        }
                                        default: {
                                            reportUnexpectedChild({
                                                path: "Gexpression_arrowFunction$_implementation",
                                                child: nextChild,
                                                expected: ["Block", "ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
                                            });
                                        }
                                    }
                                }
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_arrowFunction$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["arrowFunction", $]);
                });
            };
            var choose_binary = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_binary",
                        kindNameOptions: ["BinaryExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "BinaryExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_binary",
                        child: currentChild,
                        expected: ["BinaryExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gexpression(node, children, function ($) {
                        var _leftHandSide = $;
                        var choiceEnd_Gexpression_binary$_operator = function ($) {
                            var _operator = $;
                            Gexpression(node, children, function ($) {
                                var _rightHandSide = $;
                                sequenceEnd({
                                    "leftHandSide": _leftHandSide,
                                    "operator": _operator,
                                    "rightHandSide": _rightHandSide,
                                });
                            });
                        };
                        if (children.length === 0) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gexpression_binary$_operator",
                                kindNameOptions: ["AmpersandAmpersandToken", "BarBarToken", "EqualsToken", "EqualsEqualsEqualsToken", "ExclamationEqualsEqualsToken", "GreaterThanToken", "LessThanToken", "MinusToken", "MinusEqualsToken", "PlusToken", "PlusEqualsToken"],
                            });
                            return;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            var choose_ampersandAmpersand = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_ampersandAmpersand",
                                        kindNameOptions: ["AmpersandAmpersandToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "AmpersandAmpersandToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_ampersandAmpersand",
                                        child: currentChild,
                                        expected: ["AmpersandAmpersandToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_ampersandAmpersand$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["ampersandAmpersand", $]);
                                });
                            };
                            var choose_barBar = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_barBar",
                                        kindNameOptions: ["BarBarToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "BarBarToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_barBar",
                                        child: currentChild,
                                        expected: ["BarBarToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_barBar$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["barBar", $]);
                                });
                            };
                            var choose_equals = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_equals",
                                        kindNameOptions: ["EqualsToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "EqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_equals",
                                        child: currentChild,
                                        expected: ["EqualsToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_equals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["equals", $]);
                                });
                            };
                            var choose_equalsEqualsEquals = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                        kindNameOptions: ["EqualsEqualsEqualsToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "EqualsEqualsEqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                        child: currentChild,
                                        expected: ["EqualsEqualsEqualsToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_equalsEqualsEquals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["equalsEqualsEquals", $]);
                                });
                            };
                            var choose_exclamationEqualsEquals = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                        kindNameOptions: ["ExclamationEqualsEqualsToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "ExclamationEqualsEqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                        child: currentChild,
                                        expected: ["ExclamationEqualsEqualsToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_exclamationEqualsEquals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["exclamationEqualsEquals", $]);
                                });
                            };
                            var choose_greaterThan = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_greaterThan",
                                        kindNameOptions: ["GreaterThanToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "GreaterThanToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_greaterThan",
                                        child: currentChild,
                                        expected: ["GreaterThanToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_greaterThan$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["greaterThan", $]);
                                });
                            };
                            var choose_lessThan = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_lessThan",
                                        kindNameOptions: ["LessThanToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "LessThanToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_lessThan",
                                        child: currentChild,
                                        expected: ["LessThanToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_lessThan$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["lessThan", $]);
                                });
                            };
                            var choose_minus = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_minus",
                                        kindNameOptions: ["MinusToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "MinusToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_minus",
                                        child: currentChild,
                                        expected: ["MinusToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_minus$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["minus", $]);
                                });
                            };
                            var choose_minusEquals = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_minusEquals",
                                        kindNameOptions: ["MinusEqualsToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "MinusEqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_minusEquals",
                                        child: currentChild,
                                        expected: ["MinusEqualsToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_minusEquals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["minusEquals", $]);
                                });
                            };
                            var choose_plus = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_plus",
                                        kindNameOptions: ["PlusToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "PlusToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_plus",
                                        child: currentChild,
                                        expected: ["PlusToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_plus$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["plus", $]);
                                });
                            };
                            var choose_plusEquals = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_binary$_operator_plusEquals",
                                        kindNameOptions: ["PlusEqualsToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "PlusEqualsToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator_plusEquals",
                                        child: currentChild,
                                        expected: ["PlusEqualsToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_binary$_operator_plusEquals$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gexpression_binary$_operator(["plusEquals", $]);
                                });
                            };
                            switch (nextChild.kindName) {
                                case "AmpersandAmpersandToken": {
                                    choose_ampersandAmpersand();
                                    break;
                                }
                                case "BarBarToken": {
                                    choose_barBar();
                                    break;
                                }
                                case "EqualsToken": {
                                    choose_equals();
                                    break;
                                }
                                case "EqualsEqualsEqualsToken": {
                                    choose_equalsEqualsEquals();
                                    break;
                                }
                                case "ExclamationEqualsEqualsToken": {
                                    choose_exclamationEqualsEquals();
                                    break;
                                }
                                case "GreaterThanToken": {
                                    choose_greaterThan();
                                    break;
                                }
                                case "LessThanToken": {
                                    choose_lessThan();
                                    break;
                                }
                                case "MinusToken": {
                                    choose_minus();
                                    break;
                                }
                                case "MinusEqualsToken": {
                                    choose_minusEquals();
                                    break;
                                }
                                case "PlusToken": {
                                    choose_plus();
                                    break;
                                }
                                case "PlusEqualsToken": {
                                    choose_plusEquals();
                                    break;
                                }
                                default: {
                                    reportUnexpectedChild({
                                        path: "Gexpression_binary$_operator",
                                        child: nextChild,
                                        expected: ["AmpersandAmpersandToken", "BarBarToken", "EqualsToken", "EqualsEqualsEqualsToken", "ExclamationEqualsEqualsToken", "GreaterThanToken", "LessThanToken", "MinusToken", "MinusEqualsToken", "PlusToken", "PlusEqualsToken"],
                                    });
                                }
                            }
                        }
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_binary$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["binary", $]);
                });
            };
            var choose_call = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_call",
                        kindNameOptions: ["CallExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "CallExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_call",
                        child: currentChild,
                        expected: ["CallExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gexpression(node, children, function ($) {
                        var _function = $;
                        var elements = [];
                        var processElement = function () {
                            Gtype(node, children, function ($) {
                                elements.push($);
                            });
                        };
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop;
                            }
                            else {
                                nextChild = children[children.length - 1];
                                switch (nextChild.kindName) {
                                    case "AnyKeyword":
                                        processElement();
                                        break;
                                    case "ArrayType":
                                        processElement();
                                        break;
                                    case "BooleanKeyword":
                                        processElement();
                                        break;
                                    case "FunctionType":
                                        processElement();
                                        break;
                                    case "LiteralType":
                                        processElement();
                                        break;
                                    case "ParenthesizedType":
                                        processElement();
                                        break;
                                    case "NeverKeyword":
                                        processElement();
                                        break;
                                    case "NumberKeyword":
                                        processElement();
                                        break;
                                    case "OptionalType":
                                        processElement();
                                        break;
                                    case "TupleType":
                                        processElement();
                                        break;
                                    case "TypeLiteral":
                                        processElement();
                                        break;
                                    case "StringKeyword":
                                        processElement();
                                        break;
                                    case "TypeReference":
                                        processElement();
                                        break;
                                    case "UndefinedKeyword":
                                        processElement();
                                        break;
                                    case "UnionType":
                                        processElement();
                                        break;
                                    case "VoidKeyword":
                                        processElement();
                                        break;
                                    default: break arrayLoop;
                                }
                            }
                        }
                        pr.cc(elements, function ($) {
                            var _typeParameters = $;
                            var elements = [];
                            var processElement = function () {
                                Gexpression(node, children, function ($) {
                                    elements.push($);
                                });
                            };
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop;
                                }
                                else {
                                    nextChild = children[children.length - 1];
                                    switch (nextChild.kindName) {
                                        case "ArrayLiteralExpression":
                                            processElement();
                                            break;
                                        case "ArrowFunction":
                                            processElement();
                                            break;
                                        case "BinaryExpression":
                                            processElement();
                                            break;
                                        case "CallExpression":
                                            processElement();
                                            break;
                                        case "ConditionalExpression":
                                            processElement();
                                            break;
                                        case "ElementAccessExpression":
                                            processElement();
                                            break;
                                        case "FalseKeyword":
                                            processElement();
                                            break;
                                        case "Identifier":
                                            processElement();
                                            break;
                                        case "NewExpression":
                                            processElement();
                                            break;
                                        case "NoSubstitutionTemplateLiteral":
                                            processElement();
                                            break;
                                        case "NumericLiteral":
                                            processElement();
                                            break;
                                        case "NullKeyword":
                                            processElement();
                                            break;
                                        case "ObjectLiteralExpression":
                                            processElement();
                                            break;
                                        case "ParenthesizedExpression":
                                            processElement();
                                            break;
                                        case "PostfixUnaryExpression":
                                            processElement();
                                            break;
                                        case "PrefixUnaryExpression":
                                            processElement();
                                            break;
                                        case "PropertyAccessExpression":
                                            processElement();
                                            break;
                                        case "StringLiteral":
                                            processElement();
                                            break;
                                        case "TemplateExpression":
                                            processElement();
                                            break;
                                        case "TrueKeyword":
                                            processElement();
                                            break;
                                        default: break arrayLoop;
                                    }
                                }
                            }
                            pr.cc(elements, function ($) {
                                var _parameters = $;
                                sequenceEnd({
                                    "function": _function,
                                    "typeParameters": _typeParameters,
                                    "parameters": _parameters,
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_call$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["call", $]);
                });
            };
            var choose_conditional = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_conditional",
                        kindNameOptions: ["ConditionalExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ConditionalExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_conditional",
                        child: currentChild,
                        expected: ["ConditionalExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gexpression(node, children, function ($) {
                        var _test = $;
                        currentChild = children.pop();
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gexpression_conditional$_questionToken",
                                kindNameOptions: ["QuestionToken"],
                            });
                            return;
                        }
                        if (currentChild.kindName !== "QuestionToken") {
                            reportUnexpectedChild({
                                path: "Gexpression_conditional$_questionToken",
                                child: currentChild,
                                expected: ["QuestionToken"],
                            });
                            return;
                        }
                        (function ($, callback) {
                            var node = $;
                            var children = [];
                            $.children.forEach(function ($) { children.push($); });
                            children.reverse();
                            callback({
                                annotation: $.annotation,
                            });
                            if (children.length > 0) {
                                reportUnexpectedChild({
                                    path: "Gexpression_conditional$_questionToken$",
                                    child: children[children.length - 1],
                                    expected: null,
                                });
                                return;
                            }
                        })(currentChild, function ($) {
                            var _questionToken = $;
                            Gexpression(node, children, function ($) {
                                var _ifExpression = $;
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gexpression_conditional$_colonToken",
                                        kindNameOptions: ["ColonToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "ColonToken") {
                                    reportUnexpectedChild({
                                        path: "Gexpression_conditional$_colonToken",
                                        child: currentChild,
                                        expected: ["ColonToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gexpression_conditional$_colonToken$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    var _colonToken = $;
                                    Gexpression(node, children, function ($) {
                                        var _elseExpression = $;
                                        sequenceEnd({
                                            "test": _test,
                                            "questionToken": _questionToken,
                                            "ifExpression": _ifExpression,
                                            "colonToken": _colonToken,
                                            "elseExpression": _elseExpression,
                                        });
                                    });
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_conditional$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["conditional", $]);
                });
            };
            var choose_elementAccess = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_elementAccess",
                        kindNameOptions: ["ElementAccessExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ElementAccessExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_elementAccess",
                        child: currentChild,
                        expected: ["ElementAccessExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gexpression(node, children, function ($) {
                        var _array = $;
                        Gexpression(node, children, function ($) {
                            var _element = $;
                            sequenceEnd({
                                "array": _array,
                                "element": _element,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_elementAccess$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["elementAccess", $]);
                });
            };
            var choose_false = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_false",
                        kindNameOptions: ["FalseKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "FalseKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_false",
                        child: currentChild,
                        expected: ["FalseKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_false$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["false", $]);
                });
            };
            var choose_identifier = function () {
                Gidentifier(node, children, function ($) {
                    choiceEnd_Gexpression(["identifier", $]);
                });
            };
            var choose_new = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_new",
                        kindNameOptions: ["NewExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "NewExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_new",
                        child: currentChild,
                        expected: ["NewExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gidentifier(node, children, function ($) {
                        var _class = $;
                        var elements = [];
                        var processElement = function () {
                            Gexpression(node, children, function ($) {
                                elements.push($);
                            });
                        };
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop;
                            }
                            else {
                                nextChild = children[children.length - 1];
                                switch (nextChild.kindName) {
                                    case "ArrayLiteralExpression":
                                        processElement();
                                        break;
                                    case "ArrowFunction":
                                        processElement();
                                        break;
                                    case "BinaryExpression":
                                        processElement();
                                        break;
                                    case "CallExpression":
                                        processElement();
                                        break;
                                    case "ConditionalExpression":
                                        processElement();
                                        break;
                                    case "ElementAccessExpression":
                                        processElement();
                                        break;
                                    case "FalseKeyword":
                                        processElement();
                                        break;
                                    case "Identifier":
                                        processElement();
                                        break;
                                    case "NewExpression":
                                        processElement();
                                        break;
                                    case "NoSubstitutionTemplateLiteral":
                                        processElement();
                                        break;
                                    case "NumericLiteral":
                                        processElement();
                                        break;
                                    case "NullKeyword":
                                        processElement();
                                        break;
                                    case "ObjectLiteralExpression":
                                        processElement();
                                        break;
                                    case "ParenthesizedExpression":
                                        processElement();
                                        break;
                                    case "PostfixUnaryExpression":
                                        processElement();
                                        break;
                                    case "PrefixUnaryExpression":
                                        processElement();
                                        break;
                                    case "PropertyAccessExpression":
                                        processElement();
                                        break;
                                    case "StringLiteral":
                                        processElement();
                                        break;
                                    case "TemplateExpression":
                                        processElement();
                                        break;
                                    case "TrueKeyword":
                                        processElement();
                                        break;
                                    default: break arrayLoop;
                                }
                            }
                        }
                        pr.cc(elements, function ($) {
                            var _parameters = $;
                            sequenceEnd({
                                "class": _class,
                                "parameters": _parameters,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_new$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["new", $]);
                });
            };
            var choose_noSubstitutionTemplateLiteral = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_noSubstitutionTemplateLiteral",
                        kindNameOptions: ["NoSubstitutionTemplateLiteral"],
                    });
                    return;
                }
                if (currentChild.kindName !== "NoSubstitutionTemplateLiteral") {
                    reportUnexpectedChild({
                        path: "Gexpression_noSubstitutionTemplateLiteral",
                        child: currentChild,
                        expected: ["NoSubstitutionTemplateLiteral"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_noSubstitutionTemplateLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["noSubstitutionTemplateLiteral", $]);
                });
            };
            var choose_numericLiteral = function () {
                GnumericLiteral(node, children, function ($) {
                    choiceEnd_Gexpression(["numericLiteral", $]);
                });
            };
            var choose_nullKeyword = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_nullKeyword",
                        kindNameOptions: ["NullKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "NullKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_nullKeyword",
                        child: currentChild,
                        expected: ["NullKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_nullKeyword$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["nullKeyword", $]);
                });
            };
            var choose_objectLiteral = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_objectLiteral",
                        kindNameOptions: ["ObjectLiteralExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ObjectLiteralExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_objectLiteral",
                        child: currentChild,
                        expected: ["ObjectLiteralExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var elements = [];
                    var processElement = function () {
                        currentChild = children.pop();
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gexpression_objectLiteral$",
                                kindNameOptions: ["PropertyAssignment"],
                            });
                            return;
                        }
                        if (currentChild.kindName !== "PropertyAssignment") {
                            reportUnexpectedChild({
                                path: "Gexpression_objectLiteral$",
                                child: currentChild,
                                expected: ["PropertyAssignment"],
                            });
                            return;
                        }
                        (function ($, callback) {
                            var node = $;
                            var children = [];
                            $.children.forEach(function ($) { children.push($); });
                            children.reverse();
                            var currentChild;
                            var nextChild;
                            var sequenceEnd = function ($) {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                });
                            };
                            var choiceEnd_Gexpression_objectLiteral$$_name = function ($) {
                                var _name = $;
                                Gexpression(node, children, function ($) {
                                    var _expression = $;
                                    sequenceEnd({
                                        "name": _name,
                                        "expression": _expression,
                                    });
                                });
                            };
                            if (children.length === 0) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gexpression_objectLiteral$$_name",
                                    kindNameOptions: ["Identifier", "NumericLiteral", "StringLiteral"],
                                });
                                return;
                            }
                            else {
                                nextChild = children[children.length - 1];
                                var choose_identifier_1 = function () {
                                    Gidentifier(node, children, function ($) {
                                        choiceEnd_Gexpression_objectLiteral$$_name(["identifier", $]);
                                    });
                                };
                                var choose_numericLiteral_1 = function () {
                                    GnumericLiteral(node, children, function ($) {
                                        choiceEnd_Gexpression_objectLiteral$$_name(["numericLiteral", $]);
                                    });
                                };
                                var choose_stringLiteral_1 = function () {
                                    GstringLiteral(node, children, function ($) {
                                        choiceEnd_Gexpression_objectLiteral$$_name(["stringLiteral", $]);
                                    });
                                };
                                switch (nextChild.kindName) {
                                    case "Identifier": {
                                        choose_identifier_1();
                                        break;
                                    }
                                    case "NumericLiteral": {
                                        choose_numericLiteral_1();
                                        break;
                                    }
                                    case "StringLiteral": {
                                        choose_stringLiteral_1();
                                        break;
                                    }
                                    default: {
                                        reportUnexpectedChild({
                                            path: "Gexpression_objectLiteral$$_name",
                                            child: nextChild,
                                            expected: ["Identifier", "NumericLiteral", "StringLiteral"],
                                        });
                                    }
                                }
                            }
                            if (children.length > 0) {
                                reportUnexpectedChild({
                                    path: "Gexpression_objectLiteral$$",
                                    child: children[children.length - 1],
                                    expected: null,
                                });
                                return;
                            }
                        })(currentChild, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "PropertyAssignment":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_objectLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["objectLiteral", $]);
                });
            };
            var choose_parenthesizedExpression = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_parenthesizedExpression",
                        kindNameOptions: ["ParenthesizedExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ParenthesizedExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_parenthesizedExpression",
                        child: currentChild,
                        expected: ["ParenthesizedExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    Gexpression(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_parenthesizedExpression$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["parenthesizedExpression", $]);
                });
            };
            var choose_postfixUnary = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_postfixUnary",
                        kindNameOptions: ["PostfixUnaryExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "PostfixUnaryExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_postfixUnary",
                        child: currentChild,
                        expected: ["PostfixUnaryExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    Gexpression(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_postfixUnary$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["postfixUnary", $]);
                });
            };
            var choose_prefixUnary = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_prefixUnary",
                        kindNameOptions: ["PrefixUnaryExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "PrefixUnaryExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_prefixUnary",
                        child: currentChild,
                        expected: ["PrefixUnaryExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    Gexpression(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_prefixUnary$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["prefixUnary", $]);
                });
            };
            var choose_propertyAccess = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_propertyAccess",
                        kindNameOptions: ["PropertyAccessExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "PropertyAccessExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_propertyAccess",
                        child: currentChild,
                        expected: ["PropertyAccessExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gexpression(node, children, function ($) {
                        var _object = $;
                        Gexpression(node, children, function ($) {
                            var _property = $;
                            sequenceEnd({
                                "object": _object,
                                "property": _property,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_propertyAccess$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["propertyAccess", $]);
                });
            };
            var choose_stringLiteral = function () {
                GstringLiteral(node, children, function ($) {
                    choiceEnd_Gexpression(["stringLiteral", $]);
                });
            };
            var choose_template = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_template",
                        kindNameOptions: ["TemplateExpression"],
                    });
                    return;
                }
                if (currentChild.kindName !== "TemplateExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_template",
                        child: currentChild,
                        expected: ["TemplateExpression"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    currentChild = children.pop();
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gexpression_template$_head",
                            kindNameOptions: ["TemplateHead"],
                        });
                        return;
                    }
                    if (currentChild.kindName !== "TemplateHead") {
                        reportUnexpectedChild({
                            path: "Gexpression_template$_head",
                            child: currentChild,
                            expected: ["TemplateHead"],
                        });
                        return;
                    }
                    (function ($, callback) {
                        var node = $;
                        var children = [];
                        $.children.forEach(function ($) { children.push($); });
                        children.reverse();
                        callback({
                            annotation: $.annotation,
                            content: $.value
                        });
                        if (children.length > 0) {
                            reportUnexpectedChild({
                                path: "Gexpression_template$_head$",
                                child: children[children.length - 1],
                                expected: null,
                            });
                            return;
                        }
                    })(currentChild, function ($) {
                        var _head = $;
                        var elements = [];
                        var processElement = function () {
                            currentChild = children.pop();
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gexpression_template$_spans",
                                    kindNameOptions: ["TemplateSpan"],
                                });
                                return;
                            }
                            if (currentChild.kindName !== "TemplateSpan") {
                                reportUnexpectedChild({
                                    path: "Gexpression_template$_spans",
                                    child: currentChild,
                                    expected: ["TemplateSpan"],
                                });
                                return;
                            }
                            (function ($, callback) {
                                var node = $;
                                var children = [];
                                $.children.forEach(function ($) { children.push($); });
                                children.reverse();
                                var currentChild;
                                var nextChild;
                                var sequenceEnd = function ($) {
                                    callback({
                                        annotation: node.annotation,
                                        content: $,
                                    });
                                };
                                Gexpression(node, children, function ($) {
                                    var _expression = $;
                                    var choiceEnd_Gexpression_template$_spans$_x = function ($) {
                                        var _x = $;
                                        sequenceEnd({
                                            "expression": _expression,
                                            "x": _x,
                                        });
                                    };
                                    if (children.length === 0) {
                                        reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Gexpression_template$_spans$_x",
                                            kindNameOptions: ["TemplateMiddle", "TemplateTail"],
                                        });
                                        return;
                                    }
                                    else {
                                        nextChild = children[children.length - 1];
                                        var choose_middle = function () {
                                            currentChild = children.pop();
                                            if (currentChild === undefined) {
                                                reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "Gexpression_template$_spans$_x_middle",
                                                    kindNameOptions: ["TemplateMiddle"],
                                                });
                                                return;
                                            }
                                            if (currentChild.kindName !== "TemplateMiddle") {
                                                reportUnexpectedChild({
                                                    path: "Gexpression_template$_spans$_x_middle",
                                                    child: currentChild,
                                                    expected: ["TemplateMiddle"],
                                                });
                                                return;
                                            }
                                            (function ($, callback) {
                                                var node = $;
                                                var children = [];
                                                $.children.forEach(function ($) { children.push($); });
                                                children.reverse();
                                                callback({
                                                    annotation: $.annotation,
                                                    content: $.value
                                                });
                                                if (children.length > 0) {
                                                    reportUnexpectedChild({
                                                        path: "Gexpression_template$_spans$_x_middle$",
                                                        child: children[children.length - 1],
                                                        expected: null,
                                                    });
                                                    return;
                                                }
                                            })(currentChild, function ($) {
                                                choiceEnd_Gexpression_template$_spans$_x(["middle", $]);
                                            });
                                        };
                                        var choose_tail = function () {
                                            currentChild = children.pop();
                                            if (currentChild === undefined) {
                                                reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "Gexpression_template$_spans$_x_tail",
                                                    kindNameOptions: ["TemplateTail"],
                                                });
                                                return;
                                            }
                                            if (currentChild.kindName !== "TemplateTail") {
                                                reportUnexpectedChild({
                                                    path: "Gexpression_template$_spans$_x_tail",
                                                    child: currentChild,
                                                    expected: ["TemplateTail"],
                                                });
                                                return;
                                            }
                                            (function ($, callback) {
                                                var node = $;
                                                var children = [];
                                                $.children.forEach(function ($) { children.push($); });
                                                children.reverse();
                                                callback({
                                                    annotation: $.annotation,
                                                    content: $.value
                                                });
                                                if (children.length > 0) {
                                                    reportUnexpectedChild({
                                                        path: "Gexpression_template$_spans$_x_tail$",
                                                        child: children[children.length - 1],
                                                        expected: null,
                                                    });
                                                    return;
                                                }
                                            })(currentChild, function ($) {
                                                choiceEnd_Gexpression_template$_spans$_x(["tail", $]);
                                            });
                                        };
                                        switch (nextChild.kindName) {
                                            case "TemplateMiddle": {
                                                choose_middle();
                                                break;
                                            }
                                            case "TemplateTail": {
                                                choose_tail();
                                                break;
                                            }
                                            default: {
                                                reportUnexpectedChild({
                                                    path: "Gexpression_template$_spans$_x",
                                                    child: nextChild,
                                                    expected: ["TemplateMiddle", "TemplateTail"],
                                                });
                                            }
                                        }
                                    }
                                });
                                if (children.length > 0) {
                                    reportUnexpectedChild({
                                        path: "Gexpression_template$_spans$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    });
                                    return;
                                }
                            })(currentChild, function ($) {
                                elements.push($);
                            });
                        };
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop;
                            }
                            else {
                                nextChild = children[children.length - 1];
                                switch (nextChild.kindName) {
                                    case "TemplateSpan":
                                        processElement();
                                        break;
                                    default: break arrayLoop;
                                }
                            }
                        }
                        pr.cc(elements, function ($) {
                            var _spans = $;
                            sequenceEnd({
                                "head": _head,
                                "spans": _spans,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_template$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["template", $]);
                });
            };
            var choose_true = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_true",
                        kindNameOptions: ["TrueKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "TrueKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_true",
                        child: currentChild,
                        expected: ["TrueKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gexpression_true$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gexpression(["true", $]);
                });
            };
            switch (nextChild.kindName) {
                case "ArrayLiteralExpression": {
                    choose_arrayLiteral();
                    break;
                }
                case "ArrowFunction": {
                    choose_arrowFunction();
                    break;
                }
                case "BinaryExpression": {
                    choose_binary();
                    break;
                }
                case "CallExpression": {
                    choose_call();
                    break;
                }
                case "ConditionalExpression": {
                    choose_conditional();
                    break;
                }
                case "ElementAccessExpression": {
                    choose_elementAccess();
                    break;
                }
                case "FalseKeyword": {
                    choose_false();
                    break;
                }
                case "Identifier": {
                    choose_identifier();
                    break;
                }
                case "NewExpression": {
                    choose_new();
                    break;
                }
                case "NoSubstitutionTemplateLiteral": {
                    choose_noSubstitutionTemplateLiteral();
                    break;
                }
                case "NumericLiteral": {
                    choose_numericLiteral();
                    break;
                }
                case "NullKeyword": {
                    choose_nullKeyword();
                    break;
                }
                case "ObjectLiteralExpression": {
                    choose_objectLiteral();
                    break;
                }
                case "ParenthesizedExpression": {
                    choose_parenthesizedExpression();
                    break;
                }
                case "PostfixUnaryExpression": {
                    choose_postfixUnary();
                    break;
                }
                case "PrefixUnaryExpression": {
                    choose_prefixUnary();
                    break;
                }
                case "PropertyAccessExpression": {
                    choose_propertyAccess();
                    break;
                }
                case "StringLiteral": {
                    choose_stringLiteral();
                    break;
                }
                case "TemplateExpression": {
                    choose_template();
                    break;
                }
                case "TrueKeyword": {
                    choose_true();
                    break;
                }
                default: {
                    reportUnexpectedChild({
                        path: "Gexpression",
                        child: nextChild,
                        expected: ["ArrayLiteralExpression", "ArrowFunction", "BinaryExpression", "CallExpression", "ConditionalExpression", "ElementAccessExpression", "FalseKeyword", "Identifier", "NewExpression", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "ParenthesizedExpression", "PostfixUnaryExpression", "PrefixUnaryExpression", "PropertyAccessExpression", "StringLiteral", "TemplateExpression", "TrueKeyword"],
                    });
                }
            }
        }
    }
    function GfunctionDefinition(node, children, callback) {
        var currentChild;
        var nextChild;
        var sequenceEnd = function ($) {
            callback($);
        };
        var elements = [];
        var processElement = function () {
            GtypeParameter(node, children, function ($) {
                elements.push($);
            });
        };
        arrayLoop: while (true) {
            if (children.length === 0) {
                break arrayLoop;
            }
            else {
                nextChild = children[children.length - 1];
                switch (nextChild.kindName) {
                    case "TypeParameter":
                        processElement();
                        break;
                    default: break arrayLoop;
                }
            }
        }
        pr.cc(elements, function ($) {
            var _typeParameters = $;
            var elements = [];
            var processElement = function () {
                Gparameter(node, children, function ($) {
                    elements.push($);
                });
            };
            arrayLoop: while (true) {
                if (children.length === 0) {
                    break arrayLoop;
                }
                else {
                    nextChild = children[children.length - 1];
                    switch (nextChild.kindName) {
                        case "Parameter":
                            processElement();
                            break;
                        default: break arrayLoop;
                    }
                }
            }
            pr.cc(elements, function ($) {
                var _parameters = $;
                var optional = null;
                var setOptional = function () {
                    Gtype(node, children, function ($) {
                        optional = $;
                    });
                };
                if (children.length === 0) { }
                else {
                    nextChild = children[children.length - 1];
                    switch (nextChild.kindName) {
                        case "AnyKeyword":
                            setOptional();
                            break;
                        case "ArrayType":
                            setOptional();
                            break;
                        case "BooleanKeyword":
                            setOptional();
                            break;
                        case "FunctionType":
                            setOptional();
                            break;
                        case "LiteralType":
                            setOptional();
                            break;
                        case "ParenthesizedType":
                            setOptional();
                            break;
                        case "NeverKeyword":
                            setOptional();
                            break;
                        case "NumberKeyword":
                            setOptional();
                            break;
                        case "OptionalType":
                            setOptional();
                            break;
                        case "TupleType":
                            setOptional();
                            break;
                        case "TypeLiteral":
                            setOptional();
                            break;
                        case "StringKeyword":
                            setOptional();
                            break;
                        case "TypeReference":
                            setOptional();
                            break;
                        case "UndefinedKeyword":
                            setOptional();
                            break;
                        case "UnionType":
                            setOptional();
                            break;
                        case "VoidKeyword":
                            setOptional();
                            break;
                    }
                }
                pr.cc(optional, function ($) {
                    var _returnType = $;
                    sequenceEnd({
                        "typeParameters": _typeParameters,
                        "parameters": _parameters,
                        "returnType": _returnType,
                    });
                });
            });
        });
    }
    function Gidentifier(node, children, callback) {
        var currentChild;
        var nextChild;
        currentChild = children.pop();
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gidentifier",
                kindNameOptions: ["Identifier"],
            });
            return;
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "Gidentifier",
                child: currentChild,
                expected: ["Identifier"],
            });
            return;
        }
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            callback({
                annotation: $.annotation,
                content: $.value
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "Gidentifier$",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })(currentChild, function ($) {
            callback($);
        });
    }
    function GidentifierOrStringLiteral(node, children, callback) {
        var currentChild;
        var nextChild;
        var choiceEnd_GidentifierOrStringLiteral = function ($) {
            callback($);
        };
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GidentifierOrStringLiteral",
                kindNameOptions: ["Identifier", "StringLiteral"],
            });
            return;
        }
        else {
            nextChild = children[children.length - 1];
            var choose_identifier = function () {
                Gidentifier(node, children, function ($) {
                    choiceEnd_GidentifierOrStringLiteral(["identifier", $]);
                });
            };
            var choose_stringLiteral = function () {
                GstringLiteral(node, children, function ($) {
                    choiceEnd_GidentifierOrStringLiteral(["stringLiteral", $]);
                });
            };
            switch (nextChild.kindName) {
                case "Identifier": {
                    choose_identifier();
                    break;
                }
                case "StringLiteral": {
                    choose_stringLiteral();
                    break;
                }
                default: {
                    reportUnexpectedChild({
                        path: "GidentifierOrStringLiteral",
                        child: nextChild,
                        expected: ["Identifier", "StringLiteral"],
                    });
                }
            }
        }
    }
    function Gmodifier(node, children, callback) {
        var currentChild;
        var nextChild;
        var choiceEnd_Gmodifier = function ($) {
            callback($);
        };
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gmodifier",
                kindNameOptions: ["DeclareKeyword", "ExportKeyword", "ReadonlyKeyword"],
            });
            return;
        }
        else {
            nextChild = children[children.length - 1];
            var choose_declare = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_declare",
                        kindNameOptions: ["DeclareKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "DeclareKeyword") {
                    reportUnexpectedChild({
                        path: "Gmodifier_declare",
                        child: currentChild,
                        expected: ["DeclareKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gmodifier_declare$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gmodifier(["declare", $]);
                });
            };
            var choose_export = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_export",
                        kindNameOptions: ["ExportKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ExportKeyword") {
                    reportUnexpectedChild({
                        path: "Gmodifier_export",
                        child: currentChild,
                        expected: ["ExportKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gmodifier_export$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gmodifier(["export", $]);
                });
            };
            var choose_readonly = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gmodifier_readonly",
                        kindNameOptions: ["ReadonlyKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ReadonlyKeyword") {
                    reportUnexpectedChild({
                        path: "Gmodifier_readonly",
                        child: currentChild,
                        expected: ["ReadonlyKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gmodifier_readonly$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gmodifier(["readonly", $]);
                });
            };
            switch (nextChild.kindName) {
                case "DeclareKeyword": {
                    choose_declare();
                    break;
                }
                case "ExportKeyword": {
                    choose_export();
                    break;
                }
                case "ReadonlyKeyword": {
                    choose_readonly();
                    break;
                }
                default: {
                    reportUnexpectedChild({
                        path: "Gmodifier",
                        child: nextChild,
                        expected: ["DeclareKeyword", "ExportKeyword", "ReadonlyKeyword"],
                    });
                }
            }
        }
    }
    function GnumericLiteral(node, children, callback) {
        var currentChild;
        var nextChild;
        currentChild = children.pop();
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GnumericLiteral",
                kindNameOptions: ["NumericLiteral"],
            });
            return;
        }
        if (currentChild.kindName !== "NumericLiteral") {
            reportUnexpectedChild({
                path: "GnumericLiteral",
                child: currentChild,
                expected: ["NumericLiteral"],
            });
            return;
        }
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            callback({
                annotation: $.annotation,
                content: $.value
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "GnumericLiteral$",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })(currentChild, function ($) {
            callback($);
        });
    }
    function Gparameter(node, children, callback) {
        var currentChild;
        var nextChild;
        currentChild = children.pop();
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gparameter",
                kindNameOptions: ["Parameter"],
            });
            return;
        }
        if (currentChild.kindName !== "Parameter") {
            reportUnexpectedChild({
                path: "Gparameter",
                child: currentChild,
                expected: ["Parameter"],
            });
            return;
        }
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            var currentChild;
            var nextChild;
            var sequenceEnd = function ($) {
                callback({
                    annotation: node.annotation,
                    content: $,
                });
            };
            Gidentifier(node, children, function ($) {
                var _name = $;
                var optional = null;
                var setOptional = function () {
                    currentChild = children.pop();
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gparameter$_questionToken",
                            kindNameOptions: ["QuestionToken"],
                        });
                        return;
                    }
                    if (currentChild.kindName !== "QuestionToken") {
                        reportUnexpectedChild({
                            path: "Gparameter$_questionToken",
                            child: currentChild,
                            expected: ["QuestionToken"],
                        });
                        return;
                    }
                    (function ($, callback) {
                        var node = $;
                        var children = [];
                        $.children.forEach(function ($) { children.push($); });
                        children.reverse();
                        callback({
                            annotation: $.annotation,
                        });
                        if (children.length > 0) {
                            reportUnexpectedChild({
                                path: "Gparameter$_questionToken$",
                                child: children[children.length - 1],
                                expected: null,
                            });
                            return;
                        }
                    })(currentChild, function ($) {
                        optional = $;
                    });
                };
                if (children.length === 0) { }
                else {
                    nextChild = children[children.length - 1];
                    switch (nextChild.kindName) {
                        case "QuestionToken":
                            setOptional();
                            break;
                    }
                }
                pr.cc(optional, function ($) {
                    var _questionToken = $;
                    var optional = null;
                    var setOptional = function () {
                        Gtype(node, children, function ($) {
                            optional = $;
                        });
                    };
                    if (children.length === 0) { }
                    else {
                        nextChild = children[children.length - 1];
                        switch (nextChild.kindName) {
                            case "AnyKeyword":
                                setOptional();
                                break;
                            case "ArrayType":
                                setOptional();
                                break;
                            case "BooleanKeyword":
                                setOptional();
                                break;
                            case "FunctionType":
                                setOptional();
                                break;
                            case "LiteralType":
                                setOptional();
                                break;
                            case "ParenthesizedType":
                                setOptional();
                                break;
                            case "NeverKeyword":
                                setOptional();
                                break;
                            case "NumberKeyword":
                                setOptional();
                                break;
                            case "OptionalType":
                                setOptional();
                                break;
                            case "TupleType":
                                setOptional();
                                break;
                            case "TypeLiteral":
                                setOptional();
                                break;
                            case "StringKeyword":
                                setOptional();
                                break;
                            case "TypeReference":
                                setOptional();
                                break;
                            case "UndefinedKeyword":
                                setOptional();
                                break;
                            case "UnionType":
                                setOptional();
                                break;
                            case "VoidKeyword":
                                setOptional();
                                break;
                        }
                    }
                    pr.cc(optional, function ($) {
                        var _type = $;
                        sequenceEnd({
                            "name": _name,
                            "questionToken": _questionToken,
                            "type": _type,
                        });
                    });
                });
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "Gparameter$",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })(currentChild, function ($) {
            callback($);
        });
    }
    function Gstatement(node, children, callback) {
        var currentChild;
        var nextChild;
        var choiceEnd_Gstatement = function ($) {
            callback($);
        };
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gstatement",
                kindNameOptions: ["Block", "BreakStatement", "ExportDeclaration", "ExpressionStatement", "ForStatement", "FunctionDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TypeAliasDeclaration", "VariableStatement", "WhileStatement"],
            });
            return;
        }
        else {
            nextChild = children[children.length - 1];
            var choose_block = function () {
                Gblock(node, children, function ($) {
                    choiceEnd_Gstatement(["block", $]);
                });
            };
            var choose_break = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_break",
                        kindNameOptions: ["BreakStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "BreakStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_break",
                        child: currentChild,
                        expected: ["BreakStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var optional = null;
                    var setOptional = function () {
                        Gidentifier(node, children, function ($) {
                            optional = $;
                        });
                    };
                    if (children.length === 0) { }
                    else {
                        nextChild = children[children.length - 1];
                        switch (nextChild.kindName) {
                            case "Identifier":
                                setOptional();
                                break;
                        }
                    }
                    pr.cc(optional, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_break$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["break", $]);
                });
            };
            var choose_export = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_export",
                        kindNameOptions: ["ExportDeclaration"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ExportDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_export",
                        child: currentChild,
                        expected: ["ExportDeclaration"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    GstringLiteral(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_export$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["export", $]);
                });
            };
            var choose_expression = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_expression",
                        kindNameOptions: ["ExpressionStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ExpressionStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_expression",
                        child: currentChild,
                        expected: ["ExpressionStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    Gexpression(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_expression$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["expression", $]);
                });
            };
            var choose_for = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_for",
                        kindNameOptions: ["ForStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ForStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_for",
                        child: currentChild,
                        expected: ["ForStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    GvariableDeclarationList(node, children, function ($) {
                        var _initializer = $;
                        Gexpression(node, children, function ($) {
                            var _condition = $;
                            Gexpression(node, children, function ($) {
                                var _incrementer = $;
                                Gblock(node, children, function ($) {
                                    var _block = $;
                                    sequenceEnd({
                                        "initializer": _initializer,
                                        "condition": _condition,
                                        "incrementer": _incrementer,
                                        "block": _block,
                                    });
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_for$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["for", $]);
                });
            };
            var choose_function = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_function",
                        kindNameOptions: ["FunctionDeclaration"],
                    });
                    return;
                }
                if (currentChild.kindName !== "FunctionDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_function",
                        child: currentChild,
                        expected: ["FunctionDeclaration"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gmodifier(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement();
                                    break;
                                case "ExportKeyword":
                                    processElement();
                                    break;
                                case "ReadonlyKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _modifiers = $;
                        Gidentifier(node, children, function ($) {
                            var _name = $;
                            GfunctionDefinition(node, children, function ($) {
                                var _definition = $;
                                var optional = null;
                                var setOptional = function () {
                                    Gblock(node, children, function ($) {
                                        optional = $;
                                    });
                                };
                                if (children.length === 0) { }
                                else {
                                    nextChild = children[children.length - 1];
                                    switch (nextChild.kindName) {
                                        case "Block":
                                            setOptional();
                                            break;
                                    }
                                }
                                pr.cc(optional, function ($) {
                                    var _block = $;
                                    sequenceEnd({
                                        "modifiers": _modifiers,
                                        "name": _name,
                                        "definition": _definition,
                                        "block": _block,
                                    });
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_function$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["function", $]);
                });
            };
            var choose_if = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_if",
                        kindNameOptions: ["IfStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "IfStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_if",
                        child: currentChild,
                        expected: ["IfStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gexpression(node, children, function ($) {
                        var _expression = $;
                        Gstatement(node, children, function ($) {
                            var _thenStatement = $;
                            var optional = null;
                            var setOptional = function () {
                                Gstatement(node, children, function ($) {
                                    optional = $;
                                });
                            };
                            if (children.length === 0) { }
                            else {
                                nextChild = children[children.length - 1];
                                switch (nextChild.kindName) {
                                    case "Block":
                                        setOptional();
                                        break;
                                    case "BreakStatement":
                                        setOptional();
                                        break;
                                    case "ExportDeclaration":
                                        setOptional();
                                        break;
                                    case "ExpressionStatement":
                                        setOptional();
                                        break;
                                    case "ForStatement":
                                        setOptional();
                                        break;
                                    case "FunctionDeclaration":
                                        setOptional();
                                        break;
                                    case "IfStatement":
                                        setOptional();
                                        break;
                                    case "ImportDeclaration":
                                        setOptional();
                                        break;
                                    case "InterfaceDeclaration":
                                        setOptional();
                                        break;
                                    case "LabeledStatement":
                                        setOptional();
                                        break;
                                    case "ReturnStatement":
                                        setOptional();
                                        break;
                                    case "SwitchStatement":
                                        setOptional();
                                        break;
                                    case "ThrowStatement":
                                        setOptional();
                                        break;
                                    case "TryStatement":
                                        setOptional();
                                        break;
                                    case "TypeAliasDeclaration":
                                        setOptional();
                                        break;
                                    case "VariableStatement":
                                        setOptional();
                                        break;
                                    case "WhileStatement":
                                        setOptional();
                                        break;
                                }
                            }
                            pr.cc(optional, function ($) {
                                var _elseStatement = $;
                                sequenceEnd({
                                    "expression": _expression,
                                    "thenStatement": _thenStatement,
                                    "elseStatement": _elseStatement,
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_if$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["if", $]);
                });
            };
            var choose_import = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_import",
                        kindNameOptions: ["ImportDeclaration"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ImportDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_import",
                        child: currentChild,
                        expected: ["ImportDeclaration"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    currentChild = children.pop();
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gstatement_import$_clause",
                            kindNameOptions: ["ImportClause"],
                        });
                        return;
                    }
                    if (currentChild.kindName !== "ImportClause") {
                        reportUnexpectedChild({
                            path: "Gstatement_import$_clause",
                            child: currentChild,
                            expected: ["ImportClause"],
                        });
                        return;
                    }
                    (function ($, callback) {
                        var node = $;
                        var children = [];
                        $.children.forEach(function ($) { children.push($); });
                        children.reverse();
                        var currentChild;
                        var nextChild;
                        var choiceEnd_Gstatement_import$_clause$ = function ($) {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            });
                        };
                        if (children.length === 0) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gstatement_import$_clause$",
                                kindNameOptions: ["NamespaceImport", "NamedImports"],
                            });
                            return;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            var choose_namespace = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gstatement_import$_clause$_namespace",
                                        kindNameOptions: ["NamespaceImport"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "NamespaceImport") {
                                    reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$_namespace",
                                        child: currentChild,
                                        expected: ["NamespaceImport"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    var currentChild;
                                    var nextChild;
                                    Gidentifier(node, children, function ($) {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        });
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gstatement_import$_clause$_namespace$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gstatement_import$_clause$(["namespace", $]);
                                });
                            };
                            var choose_named = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gstatement_import$_clause$_named",
                                        kindNameOptions: ["NamedImports"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "NamedImports") {
                                    reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$_named",
                                        child: currentChild,
                                        expected: ["NamedImports"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    var currentChild;
                                    var nextChild;
                                    var elements = [];
                                    var processElement = function () {
                                        currentChild = children.pop();
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_import$_clause$_named$",
                                                kindNameOptions: ["ImportSpecifier"],
                                            });
                                            return;
                                        }
                                        if (currentChild.kindName !== "ImportSpecifier") {
                                            reportUnexpectedChild({
                                                path: "Gstatement_import$_clause$_named$",
                                                child: currentChild,
                                                expected: ["ImportSpecifier"],
                                            });
                                            return;
                                        }
                                        (function ($, callback) {
                                            var node = $;
                                            var children = [];
                                            $.children.forEach(function ($) { children.push($); });
                                            children.reverse();
                                            var currentChild;
                                            var nextChild;
                                            var sequenceEnd = function ($) {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                });
                                            };
                                            Gidentifier(node, children, function ($) {
                                                var _name = $;
                                                var optional = null;
                                                var setOptional = function () {
                                                    Gidentifier(node, children, function ($) {
                                                        optional = $;
                                                    });
                                                };
                                                if (children.length === 0) { }
                                                else {
                                                    nextChild = children[children.length - 1];
                                                    switch (nextChild.kindName) {
                                                        case "Identifier":
                                                            setOptional();
                                                            break;
                                                    }
                                                }
                                                pr.cc(optional, function ($) {
                                                    var _as = $;
                                                    sequenceEnd({
                                                        "name": _name,
                                                        "as": _as,
                                                    });
                                                });
                                            });
                                            if (children.length > 0) {
                                                reportUnexpectedChild({
                                                    path: "Gstatement_import$_clause$_named$$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                });
                                                return;
                                            }
                                        })(currentChild, function ($) {
                                            elements.push($);
                                        });
                                    };
                                    arrayLoop: while (true) {
                                        if (children.length === 0) {
                                            break arrayLoop;
                                        }
                                        else {
                                            nextChild = children[children.length - 1];
                                            switch (nextChild.kindName) {
                                                case "ImportSpecifier":
                                                    processElement();
                                                    break;
                                                default: break arrayLoop;
                                            }
                                        }
                                    }
                                    pr.cc(elements, function ($) {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        });
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "Gstatement_import$_clause$_named$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    choiceEnd_Gstatement_import$_clause$(["named", $]);
                                });
                            };
                            switch (nextChild.kindName) {
                                case "NamespaceImport": {
                                    choose_namespace();
                                    break;
                                }
                                case "NamedImports": {
                                    choose_named();
                                    break;
                                }
                                default: {
                                    reportUnexpectedChild({
                                        path: "Gstatement_import$_clause$",
                                        child: nextChild,
                                        expected: ["NamespaceImport", "NamedImports"],
                                    });
                                }
                            }
                        }
                        if (children.length > 0) {
                            reportUnexpectedChild({
                                path: "Gstatement_import$_clause$",
                                child: children[children.length - 1],
                                expected: null,
                            });
                            return;
                        }
                    })(currentChild, function ($) {
                        var _clause = $;
                        GstringLiteral(node, children, function ($) {
                            var _file = $;
                            sequenceEnd({
                                "clause": _clause,
                                "file": _file,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_import$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["import", $]);
                });
            };
            var choose_interface = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_interface",
                        kindNameOptions: ["InterfaceDeclaration"],
                    });
                    return;
                }
                if (currentChild.kindName !== "InterfaceDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_interface",
                        child: currentChild,
                        expected: ["InterfaceDeclaration"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gmodifier(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement();
                                    break;
                                case "ExportKeyword":
                                    processElement();
                                    break;
                                case "ReadonlyKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _modifiers = $;
                        Gidentifier(node, children, function ($) {
                            var _name = $;
                            var elements = [];
                            var processElement = function () {
                                GtypeParameter(node, children, function ($) {
                                    elements.push($);
                                });
                            };
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop;
                                }
                                else {
                                    nextChild = children[children.length - 1];
                                    switch (nextChild.kindName) {
                                        case "TypeParameter":
                                            processElement();
                                            break;
                                        default: break arrayLoop;
                                    }
                                }
                            }
                            pr.cc(elements, function ($) {
                                var _typeParameters = $;
                                var elements = [];
                                var processElement = function () {
                                    GtypeSignature(node, children, function ($) {
                                        elements.push($);
                                    });
                                };
                                arrayLoop: while (true) {
                                    if (children.length === 0) {
                                        break arrayLoop;
                                    }
                                    else {
                                        nextChild = children[children.length - 1];
                                        switch (nextChild.kindName) {
                                            case "ConstructSignature":
                                                processElement();
                                                break;
                                            case "IndexSignature":
                                                processElement();
                                                break;
                                            case "MethodSignature":
                                                processElement();
                                                break;
                                            case "PropertySignature":
                                                processElement();
                                                break;
                                            default: break arrayLoop;
                                        }
                                    }
                                }
                                pr.cc(elements, function ($) {
                                    var _signature = $;
                                    sequenceEnd({
                                        "modifiers": _modifiers,
                                        "name": _name,
                                        "typeParameters": _typeParameters,
                                        "signature": _signature,
                                    });
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_interface$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["interface", $]);
                });
            };
            var choose_labeled = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_labeled",
                        kindNameOptions: ["LabeledStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "LabeledStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_labeled",
                        child: currentChild,
                        expected: ["LabeledStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gidentifier(node, children, function ($) {
                        var _label = $;
                        Gstatement(node, children, function ($) {
                            var _statement = $;
                            sequenceEnd({
                                "label": _label,
                                "statement": _statement,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_labeled$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["labeled", $]);
                });
            };
            var choose_return = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_return",
                        kindNameOptions: ["ReturnStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ReturnStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_return",
                        child: currentChild,
                        expected: ["ReturnStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var optional = null;
                    var setOptional = function () {
                        Gexpression(node, children, function ($) {
                            optional = $;
                        });
                    };
                    if (children.length === 0) { }
                    else {
                        nextChild = children[children.length - 1];
                        switch (nextChild.kindName) {
                            case "ArrayLiteralExpression":
                                setOptional();
                                break;
                            case "ArrowFunction":
                                setOptional();
                                break;
                            case "BinaryExpression":
                                setOptional();
                                break;
                            case "CallExpression":
                                setOptional();
                                break;
                            case "ConditionalExpression":
                                setOptional();
                                break;
                            case "ElementAccessExpression":
                                setOptional();
                                break;
                            case "FalseKeyword":
                                setOptional();
                                break;
                            case "Identifier":
                                setOptional();
                                break;
                            case "NewExpression":
                                setOptional();
                                break;
                            case "NoSubstitutionTemplateLiteral":
                                setOptional();
                                break;
                            case "NumericLiteral":
                                setOptional();
                                break;
                            case "NullKeyword":
                                setOptional();
                                break;
                            case "ObjectLiteralExpression":
                                setOptional();
                                break;
                            case "ParenthesizedExpression":
                                setOptional();
                                break;
                            case "PostfixUnaryExpression":
                                setOptional();
                                break;
                            case "PrefixUnaryExpression":
                                setOptional();
                                break;
                            case "PropertyAccessExpression":
                                setOptional();
                                break;
                            case "StringLiteral":
                                setOptional();
                                break;
                            case "TemplateExpression":
                                setOptional();
                                break;
                            case "TrueKeyword":
                                setOptional();
                                break;
                        }
                    }
                    pr.cc(optional, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_return$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["return", $]);
                });
            };
            var choose_switch = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_switch",
                        kindNameOptions: ["SwitchStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "SwitchStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_switch",
                        child: currentChild,
                        expected: ["SwitchStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gexpression(node, children, function ($) {
                        var _expression = $;
                        currentChild = children.pop();
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gstatement_switch$_caseBlock",
                                kindNameOptions: ["CaseBlock"],
                            });
                            return;
                        }
                        if (currentChild.kindName !== "CaseBlock") {
                            reportUnexpectedChild({
                                path: "Gstatement_switch$_caseBlock",
                                child: currentChild,
                                expected: ["CaseBlock"],
                            });
                            return;
                        }
                        (function ($, callback) {
                            var node = $;
                            var children = [];
                            $.children.forEach(function ($) { children.push($); });
                            children.reverse();
                            var currentChild;
                            var nextChild;
                            var elements = [];
                            var processElement = function () {
                                var choiceEnd_Gstatement_switch$_caseBlock$ = function ($) {
                                    elements.push($);
                                };
                                if (children.length === 0) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gstatement_switch$_caseBlock$",
                                        kindNameOptions: ["CaseClause", "DefaultClause"],
                                    });
                                    return;
                                }
                                else {
                                    nextChild = children[children.length - 1];
                                    var choose_case = function () {
                                        currentChild = children.pop();
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_switch$_caseBlock$_case",
                                                kindNameOptions: ["CaseClause"],
                                            });
                                            return;
                                        }
                                        if (currentChild.kindName !== "CaseClause") {
                                            reportUnexpectedChild({
                                                path: "Gstatement_switch$_caseBlock$_case",
                                                child: currentChild,
                                                expected: ["CaseClause"],
                                            });
                                            return;
                                        }
                                        (function ($, callback) {
                                            var node = $;
                                            var children = [];
                                            $.children.forEach(function ($) { children.push($); });
                                            children.reverse();
                                            var currentChild;
                                            var nextChild;
                                            var sequenceEnd = function ($) {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                });
                                            };
                                            Gexpression(node, children, function ($) {
                                                var _case = $;
                                                var elements = [];
                                                var processElement = function () {
                                                    Gstatement(node, children, function ($) {
                                                        elements.push($);
                                                    });
                                                };
                                                arrayLoop: while (true) {
                                                    if (children.length === 0) {
                                                        break arrayLoop;
                                                    }
                                                    else {
                                                        nextChild = children[children.length - 1];
                                                        switch (nextChild.kindName) {
                                                            case "Block":
                                                                processElement();
                                                                break;
                                                            case "BreakStatement":
                                                                processElement();
                                                                break;
                                                            case "ExportDeclaration":
                                                                processElement();
                                                                break;
                                                            case "ExpressionStatement":
                                                                processElement();
                                                                break;
                                                            case "ForStatement":
                                                                processElement();
                                                                break;
                                                            case "FunctionDeclaration":
                                                                processElement();
                                                                break;
                                                            case "IfStatement":
                                                                processElement();
                                                                break;
                                                            case "ImportDeclaration":
                                                                processElement();
                                                                break;
                                                            case "InterfaceDeclaration":
                                                                processElement();
                                                                break;
                                                            case "LabeledStatement":
                                                                processElement();
                                                                break;
                                                            case "ReturnStatement":
                                                                processElement();
                                                                break;
                                                            case "SwitchStatement":
                                                                processElement();
                                                                break;
                                                            case "ThrowStatement":
                                                                processElement();
                                                                break;
                                                            case "TryStatement":
                                                                processElement();
                                                                break;
                                                            case "TypeAliasDeclaration":
                                                                processElement();
                                                                break;
                                                            case "VariableStatement":
                                                                processElement();
                                                                break;
                                                            case "WhileStatement":
                                                                processElement();
                                                                break;
                                                            default: break arrayLoop;
                                                        }
                                                    }
                                                }
                                                pr.cc(elements, function ($) {
                                                    var _statements = $;
                                                    sequenceEnd({
                                                        "case": _case,
                                                        "statements": _statements,
                                                    });
                                                });
                                            });
                                            if (children.length > 0) {
                                                reportUnexpectedChild({
                                                    path: "Gstatement_switch$_caseBlock$_case$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                });
                                                return;
                                            }
                                        })(currentChild, function ($) {
                                            choiceEnd_Gstatement_switch$_caseBlock$(["case", $]);
                                        });
                                    };
                                    var choose_default = function () {
                                        currentChild = children.pop();
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gstatement_switch$_caseBlock$_default",
                                                kindNameOptions: ["DefaultClause"],
                                            });
                                            return;
                                        }
                                        if (currentChild.kindName !== "DefaultClause") {
                                            reportUnexpectedChild({
                                                path: "Gstatement_switch$_caseBlock$_default",
                                                child: currentChild,
                                                expected: ["DefaultClause"],
                                            });
                                            return;
                                        }
                                        (function ($, callback) {
                                            var node = $;
                                            var children = [];
                                            $.children.forEach(function ($) { children.push($); });
                                            children.reverse();
                                            var currentChild;
                                            var nextChild;
                                            var elements = [];
                                            var processElement = function () {
                                                Gstatement(node, children, function ($) {
                                                    elements.push($);
                                                });
                                            };
                                            arrayLoop: while (true) {
                                                if (children.length === 0) {
                                                    break arrayLoop;
                                                }
                                                else {
                                                    nextChild = children[children.length - 1];
                                                    switch (nextChild.kindName) {
                                                        case "Block":
                                                            processElement();
                                                            break;
                                                        case "BreakStatement":
                                                            processElement();
                                                            break;
                                                        case "ExportDeclaration":
                                                            processElement();
                                                            break;
                                                        case "ExpressionStatement":
                                                            processElement();
                                                            break;
                                                        case "ForStatement":
                                                            processElement();
                                                            break;
                                                        case "FunctionDeclaration":
                                                            processElement();
                                                            break;
                                                        case "IfStatement":
                                                            processElement();
                                                            break;
                                                        case "ImportDeclaration":
                                                            processElement();
                                                            break;
                                                        case "InterfaceDeclaration":
                                                            processElement();
                                                            break;
                                                        case "LabeledStatement":
                                                            processElement();
                                                            break;
                                                        case "ReturnStatement":
                                                            processElement();
                                                            break;
                                                        case "SwitchStatement":
                                                            processElement();
                                                            break;
                                                        case "ThrowStatement":
                                                            processElement();
                                                            break;
                                                        case "TryStatement":
                                                            processElement();
                                                            break;
                                                        case "TypeAliasDeclaration":
                                                            processElement();
                                                            break;
                                                        case "VariableStatement":
                                                            processElement();
                                                            break;
                                                        case "WhileStatement":
                                                            processElement();
                                                            break;
                                                        default: break arrayLoop;
                                                    }
                                                }
                                            }
                                            pr.cc(elements, function ($) {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                });
                                            });
                                            if (children.length > 0) {
                                                reportUnexpectedChild({
                                                    path: "Gstatement_switch$_caseBlock$_default$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                });
                                                return;
                                            }
                                        })(currentChild, function ($) {
                                            choiceEnd_Gstatement_switch$_caseBlock$(["default", $]);
                                        });
                                    };
                                    switch (nextChild.kindName) {
                                        case "CaseClause": {
                                            choose_case();
                                            break;
                                        }
                                        case "DefaultClause": {
                                            choose_default();
                                            break;
                                        }
                                        default: {
                                            reportUnexpectedChild({
                                                path: "Gstatement_switch$_caseBlock$",
                                                child: nextChild,
                                                expected: ["CaseClause", "DefaultClause"],
                                            });
                                        }
                                    }
                                }
                            };
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop;
                                }
                                else {
                                    nextChild = children[children.length - 1];
                                    switch (nextChild.kindName) {
                                        case "CaseClause":
                                            processElement();
                                            break;
                                        case "DefaultClause":
                                            processElement();
                                            break;
                                        default: break arrayLoop;
                                    }
                                }
                            }
                            pr.cc(elements, function ($) {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                });
                            });
                            if (children.length > 0) {
                                reportUnexpectedChild({
                                    path: "Gstatement_switch$_caseBlock$",
                                    child: children[children.length - 1],
                                    expected: null,
                                });
                                return;
                            }
                        })(currentChild, function ($) {
                            var _caseBlock = $;
                            sequenceEnd({
                                "expression": _expression,
                                "caseBlock": _caseBlock,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_switch$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["switch", $]);
                });
            };
            var choose_throw = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_throw",
                        kindNameOptions: ["ThrowStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ThrowStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_throw",
                        child: currentChild,
                        expected: ["ThrowStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    Gexpression(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_throw$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["throw", $]);
                });
            };
            var choose_try = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_try",
                        kindNameOptions: ["TryStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "TryStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_try",
                        child: currentChild,
                        expected: ["TryStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gblock(node, children, function ($) {
                        var _block = $;
                        currentChild = children.pop();
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gstatement_try$_catchClause",
                                kindNameOptions: ["CatchClause"],
                            });
                            return;
                        }
                        if (currentChild.kindName !== "CatchClause") {
                            reportUnexpectedChild({
                                path: "Gstatement_try$_catchClause",
                                child: currentChild,
                                expected: ["CatchClause"],
                            });
                            return;
                        }
                        (function ($, callback) {
                            var node = $;
                            var children = [];
                            $.children.forEach(function ($) { children.push($); });
                            children.reverse();
                            var currentChild;
                            var nextChild;
                            var sequenceEnd = function ($) {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                });
                            };
                            GvariableDeclaration(node, children, function ($) {
                                var _variable = $;
                                Gblock(node, children, function ($) {
                                    var _block = $;
                                    sequenceEnd({
                                        "variable": _variable,
                                        "block": _block,
                                    });
                                });
                            });
                            if (children.length > 0) {
                                reportUnexpectedChild({
                                    path: "Gstatement_try$_catchClause$",
                                    child: children[children.length - 1],
                                    expected: null,
                                });
                                return;
                            }
                        })(currentChild, function ($) {
                            var _catchClause = $;
                            sequenceEnd({
                                "block": _block,
                                "catchClause": _catchClause,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_try$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["try", $]);
                });
            };
            var choose_typeAlias = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_typeAlias",
                        kindNameOptions: ["TypeAliasDeclaration"],
                    });
                    return;
                }
                if (currentChild.kindName !== "TypeAliasDeclaration") {
                    reportUnexpectedChild({
                        path: "Gstatement_typeAlias",
                        child: currentChild,
                        expected: ["TypeAliasDeclaration"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gmodifier(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement();
                                    break;
                                case "ExportKeyword":
                                    processElement();
                                    break;
                                case "ReadonlyKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _modifiers = $;
                        Gidentifier(node, children, function ($) {
                            var _name = $;
                            var elements = [];
                            var processElement = function () {
                                GtypeParameter(node, children, function ($) {
                                    elements.push($);
                                });
                            };
                            arrayLoop: while (true) {
                                if (children.length === 0) {
                                    break arrayLoop;
                                }
                                else {
                                    nextChild = children[children.length - 1];
                                    switch (nextChild.kindName) {
                                        case "TypeParameter":
                                            processElement();
                                            break;
                                        default: break arrayLoop;
                                    }
                                }
                            }
                            pr.cc(elements, function ($) {
                                var _typeParameters = $;
                                Gtype(node, children, function ($) {
                                    var _type = $;
                                    sequenceEnd({
                                        "modifiers": _modifiers,
                                        "name": _name,
                                        "typeParameters": _typeParameters,
                                        "type": _type,
                                    });
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_typeAlias$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["typeAlias", $]);
                });
            };
            var choose_variable = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_variable",
                        kindNameOptions: ["VariableStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "VariableStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_variable",
                        child: currentChild,
                        expected: ["VariableStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gmodifier(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement();
                                    break;
                                case "ExportKeyword":
                                    processElement();
                                    break;
                                case "ReadonlyKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _modifiers = $;
                        GvariableDeclarationList(node, children, function ($) {
                            var _variableDeclarationList = $;
                            sequenceEnd({
                                "modifiers": _modifiers,
                                "variableDeclarationList": _variableDeclarationList,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_variable$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["variable", $]);
                });
            };
            var choose_while = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gstatement_while",
                        kindNameOptions: ["WhileStatement"],
                    });
                    return;
                }
                if (currentChild.kindName !== "WhileStatement") {
                    reportUnexpectedChild({
                        path: "Gstatement_while",
                        child: currentChild,
                        expected: ["WhileStatement"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gexpression(node, children, function ($) {
                        var _condition = $;
                        Gblock(node, children, function ($) {
                            var _block = $;
                            sequenceEnd({
                                "condition": _condition,
                                "block": _block,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gstatement_while$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gstatement(["while", $]);
                });
            };
            switch (nextChild.kindName) {
                case "Block": {
                    choose_block();
                    break;
                }
                case "BreakStatement": {
                    choose_break();
                    break;
                }
                case "ExportDeclaration": {
                    choose_export();
                    break;
                }
                case "ExpressionStatement": {
                    choose_expression();
                    break;
                }
                case "ForStatement": {
                    choose_for();
                    break;
                }
                case "FunctionDeclaration": {
                    choose_function();
                    break;
                }
                case "IfStatement": {
                    choose_if();
                    break;
                }
                case "ImportDeclaration": {
                    choose_import();
                    break;
                }
                case "InterfaceDeclaration": {
                    choose_interface();
                    break;
                }
                case "LabeledStatement": {
                    choose_labeled();
                    break;
                }
                case "ReturnStatement": {
                    choose_return();
                    break;
                }
                case "SwitchStatement": {
                    choose_switch();
                    break;
                }
                case "ThrowStatement": {
                    choose_throw();
                    break;
                }
                case "TryStatement": {
                    choose_try();
                    break;
                }
                case "TypeAliasDeclaration": {
                    choose_typeAlias();
                    break;
                }
                case "VariableStatement": {
                    choose_variable();
                    break;
                }
                case "WhileStatement": {
                    choose_while();
                    break;
                }
                default: {
                    reportUnexpectedChild({
                        path: "Gstatement",
                        child: nextChild,
                        expected: ["Block", "BreakStatement", "ExportDeclaration", "ExpressionStatement", "ForStatement", "FunctionDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TypeAliasDeclaration", "VariableStatement", "WhileStatement"],
                    });
                }
            }
        }
    }
    function GstringLiteral(node, children, callback) {
        var currentChild;
        var nextChild;
        currentChild = children.pop();
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GstringLiteral",
                kindNameOptions: ["StringLiteral"],
            });
            return;
        }
        if (currentChild.kindName !== "StringLiteral") {
            reportUnexpectedChild({
                path: "GstringLiteral",
                child: currentChild,
                expected: ["StringLiteral"],
            });
            return;
        }
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            callback({
                annotation: $.annotation,
                content: $.value
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "GstringLiteral$",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })(currentChild, function ($) {
            callback($);
        });
    }
    function Gtype(node, children, callback) {
        var currentChild;
        var nextChild;
        var choiceEnd_Gtype = function ($) {
            callback($);
        };
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gtype",
                kindNameOptions: ["AnyKeyword", "ArrayType", "BooleanKeyword", "FunctionType", "LiteralType", "ParenthesizedType", "NeverKeyword", "NumberKeyword", "OptionalType", "TupleType", "TypeLiteral", "StringKeyword", "TypeReference", "UndefinedKeyword", "UnionType", "VoidKeyword"],
            });
            return;
        }
        else {
            nextChild = children[children.length - 1];
            var choose_any = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_any",
                        kindNameOptions: ["AnyKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "AnyKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_any",
                        child: currentChild,
                        expected: ["AnyKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_any$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["any", $]);
                });
            };
            var choose_array = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_array",
                        kindNameOptions: ["ArrayType"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ArrayType") {
                    reportUnexpectedChild({
                        path: "Gtype_array",
                        child: currentChild,
                        expected: ["ArrayType"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    Gtype(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_array$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["array", $]);
                });
            };
            var choose_boolean = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_boolean",
                        kindNameOptions: ["BooleanKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "BooleanKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_boolean",
                        child: currentChild,
                        expected: ["BooleanKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_boolean$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["boolean", $]);
                });
            };
            var choose_function = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_function",
                        kindNameOptions: ["FunctionType"],
                    });
                    return;
                }
                if (currentChild.kindName !== "FunctionType") {
                    reportUnexpectedChild({
                        path: "Gtype_function",
                        child: currentChild,
                        expected: ["FunctionType"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gparameter(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "Parameter":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _parameters = $;
                        var optional = null;
                        var setOptional = function () {
                            Gtype(node, children, function ($) {
                                optional = $;
                            });
                        };
                        if (children.length === 0) { }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "AnyKeyword":
                                    setOptional();
                                    break;
                                case "ArrayType":
                                    setOptional();
                                    break;
                                case "BooleanKeyword":
                                    setOptional();
                                    break;
                                case "FunctionType":
                                    setOptional();
                                    break;
                                case "LiteralType":
                                    setOptional();
                                    break;
                                case "ParenthesizedType":
                                    setOptional();
                                    break;
                                case "NeverKeyword":
                                    setOptional();
                                    break;
                                case "NumberKeyword":
                                    setOptional();
                                    break;
                                case "OptionalType":
                                    setOptional();
                                    break;
                                case "TupleType":
                                    setOptional();
                                    break;
                                case "TypeLiteral":
                                    setOptional();
                                    break;
                                case "StringKeyword":
                                    setOptional();
                                    break;
                                case "TypeReference":
                                    setOptional();
                                    break;
                                case "UndefinedKeyword":
                                    setOptional();
                                    break;
                                case "UnionType":
                                    setOptional();
                                    break;
                                case "VoidKeyword":
                                    setOptional();
                                    break;
                            }
                        }
                        pr.cc(optional, function ($) {
                            var _returnType = $;
                            sequenceEnd({
                                "parameters": _parameters,
                                "returnType": _returnType,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_function$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["function", $]);
                });
            };
            var choose_literal = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_literal",
                        kindNameOptions: ["LiteralType"],
                    });
                    return;
                }
                if (currentChild.kindName !== "LiteralType") {
                    reportUnexpectedChild({
                        path: "Gtype_literal",
                        child: currentChild,
                        expected: ["LiteralType"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var choiceEnd_Gtype_literal$ = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    if (children.length === 0) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gtype_literal$",
                            kindNameOptions: ["NullKeyword", "StringLiteral"],
                        });
                        return;
                    }
                    else {
                        nextChild = children[children.length - 1];
                        var choose_null = function () {
                            currentChild = children.pop();
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gtype_literal$_null",
                                    kindNameOptions: ["NullKeyword"],
                                });
                                return;
                            }
                            if (currentChild.kindName !== "NullKeyword") {
                                reportUnexpectedChild({
                                    path: "Gtype_literal$_null",
                                    child: currentChild,
                                    expected: ["NullKeyword"],
                                });
                                return;
                            }
                            (function ($, callback) {
                                var node = $;
                                var children = [];
                                $.children.forEach(function ($) { children.push($); });
                                children.reverse();
                                callback({
                                    annotation: $.annotation,
                                });
                                if (children.length > 0) {
                                    reportUnexpectedChild({
                                        path: "Gtype_literal$_null$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    });
                                    return;
                                }
                            })(currentChild, function ($) {
                                choiceEnd_Gtype_literal$(["null", $]);
                            });
                        };
                        var choose_string_1 = function () {
                            GstringLiteral(node, children, function ($) {
                                choiceEnd_Gtype_literal$(["string", $]);
                            });
                        };
                        switch (nextChild.kindName) {
                            case "NullKeyword": {
                                choose_null();
                                break;
                            }
                            case "StringLiteral": {
                                choose_string_1();
                                break;
                            }
                            default: {
                                reportUnexpectedChild({
                                    path: "Gtype_literal$",
                                    child: nextChild,
                                    expected: ["NullKeyword", "StringLiteral"],
                                });
                            }
                        }
                    }
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_literal$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["literal", $]);
                });
            };
            var choose_parenthesized = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_parenthesized",
                        kindNameOptions: ["ParenthesizedType"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ParenthesizedType") {
                    reportUnexpectedChild({
                        path: "Gtype_parenthesized",
                        child: currentChild,
                        expected: ["ParenthesizedType"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    Gtype(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_parenthesized$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["parenthesized", $]);
                });
            };
            var choose_never = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_never",
                        kindNameOptions: ["NeverKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "NeverKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_never",
                        child: currentChild,
                        expected: ["NeverKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_never$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["never", $]);
                });
            };
            var choose_number = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_number",
                        kindNameOptions: ["NumberKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "NumberKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_number",
                        child: currentChild,
                        expected: ["NumberKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_number$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["number", $]);
                });
            };
            var choose_optional = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_optional",
                        kindNameOptions: ["OptionalType"],
                    });
                    return;
                }
                if (currentChild.kindName !== "OptionalType") {
                    reportUnexpectedChild({
                        path: "Gtype_optional",
                        child: currentChild,
                        expected: ["OptionalType"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    Gtype(node, children, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_optional$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["optional", $]);
                });
            };
            var choose_tuple = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_tuple",
                        kindNameOptions: ["TupleType"],
                    });
                    return;
                }
                if (currentChild.kindName !== "TupleType") {
                    reportUnexpectedChild({
                        path: "Gtype_tuple",
                        child: currentChild,
                        expected: ["TupleType"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var elements = [];
                    var processElement = function () {
                        Gtype(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "AnyKeyword":
                                    processElement();
                                    break;
                                case "ArrayType":
                                    processElement();
                                    break;
                                case "BooleanKeyword":
                                    processElement();
                                    break;
                                case "FunctionType":
                                    processElement();
                                    break;
                                case "LiteralType":
                                    processElement();
                                    break;
                                case "ParenthesizedType":
                                    processElement();
                                    break;
                                case "NeverKeyword":
                                    processElement();
                                    break;
                                case "NumberKeyword":
                                    processElement();
                                    break;
                                case "OptionalType":
                                    processElement();
                                    break;
                                case "TupleType":
                                    processElement();
                                    break;
                                case "TypeLiteral":
                                    processElement();
                                    break;
                                case "StringKeyword":
                                    processElement();
                                    break;
                                case "TypeReference":
                                    processElement();
                                    break;
                                case "UndefinedKeyword":
                                    processElement();
                                    break;
                                case "UnionType":
                                    processElement();
                                    break;
                                case "VoidKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_tuple$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["tuple", $]);
                });
            };
            var choose_typeLiteral = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeLiteral",
                        kindNameOptions: ["TypeLiteral"],
                    });
                    return;
                }
                if (currentChild.kindName !== "TypeLiteral") {
                    reportUnexpectedChild({
                        path: "Gtype_typeLiteral",
                        child: currentChild,
                        expected: ["TypeLiteral"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var elements = [];
                    var processElement = function () {
                        GtypeSignature(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "ConstructSignature":
                                    processElement();
                                    break;
                                case "IndexSignature":
                                    processElement();
                                    break;
                                case "MethodSignature":
                                    processElement();
                                    break;
                                case "PropertySignature":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_typeLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["typeLiteral", $]);
                });
            };
            var choose_string = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_string",
                        kindNameOptions: ["StringKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "StringKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_string",
                        child: currentChild,
                        expected: ["StringKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_string$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["string", $]);
                });
            };
            var choose_typeReference = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeReference",
                        kindNameOptions: ["TypeReference"],
                    });
                    return;
                }
                if (currentChild.kindName !== "TypeReference") {
                    reportUnexpectedChild({
                        path: "Gtype_typeReference",
                        child: currentChild,
                        expected: ["TypeReference"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var choiceEnd_Gtype_typeReference$_x = function ($) {
                        var _x = $;
                        var elements = [];
                        var processElement = function () {
                            Gtype(node, children, function ($) {
                                elements.push($);
                            });
                        };
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop;
                            }
                            else {
                                nextChild = children[children.length - 1];
                                switch (nextChild.kindName) {
                                    case "AnyKeyword":
                                        processElement();
                                        break;
                                    case "ArrayType":
                                        processElement();
                                        break;
                                    case "BooleanKeyword":
                                        processElement();
                                        break;
                                    case "FunctionType":
                                        processElement();
                                        break;
                                    case "LiteralType":
                                        processElement();
                                        break;
                                    case "ParenthesizedType":
                                        processElement();
                                        break;
                                    case "NeverKeyword":
                                        processElement();
                                        break;
                                    case "NumberKeyword":
                                        processElement();
                                        break;
                                    case "OptionalType":
                                        processElement();
                                        break;
                                    case "TupleType":
                                        processElement();
                                        break;
                                    case "TypeLiteral":
                                        processElement();
                                        break;
                                    case "StringKeyword":
                                        processElement();
                                        break;
                                    case "TypeReference":
                                        processElement();
                                        break;
                                    case "UndefinedKeyword":
                                        processElement();
                                        break;
                                    case "UnionType":
                                        processElement();
                                        break;
                                    case "VoidKeyword":
                                        processElement();
                                        break;
                                    default: break arrayLoop;
                                }
                            }
                        }
                        pr.cc(elements, function ($) {
                            var _parameters = $;
                            sequenceEnd({
                                "x": _x,
                                "parameters": _parameters,
                            });
                        });
                    };
                    if (children.length === 0) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gtype_typeReference$_x",
                            kindNameOptions: ["Identifier", "QualifiedName"],
                        });
                        return;
                    }
                    else {
                        nextChild = children[children.length - 1];
                        var choose_identifier = function () {
                            Gidentifier(node, children, function ($) {
                                choiceEnd_Gtype_typeReference$_x(["identifier", $]);
                            });
                        };
                        var choose_qualifiedName = function () {
                            currentChild = children.pop();
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gtype_typeReference$_x_qualifiedName",
                                    kindNameOptions: ["QualifiedName"],
                                });
                                return;
                            }
                            if (currentChild.kindName !== "QualifiedName") {
                                reportUnexpectedChild({
                                    path: "Gtype_typeReference$_x_qualifiedName",
                                    child: currentChild,
                                    expected: ["QualifiedName"],
                                });
                                return;
                            }
                            (function ($, callback) {
                                var node = $;
                                var children = [];
                                $.children.forEach(function ($) { children.push($); });
                                children.reverse();
                                var currentChild;
                                var nextChild;
                                var sequenceEnd = function ($) {
                                    callback({
                                        annotation: node.annotation,
                                        content: $,
                                    });
                                };
                                Gidentifier(node, children, function ($) {
                                    var _context = $;
                                    Gidentifier(node, children, function ($) {
                                        var _type = $;
                                        sequenceEnd({
                                            "context": _context,
                                            "type": _type,
                                        });
                                    });
                                });
                                if (children.length > 0) {
                                    reportUnexpectedChild({
                                        path: "Gtype_typeReference$_x_qualifiedName$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    });
                                    return;
                                }
                            })(currentChild, function ($) {
                                choiceEnd_Gtype_typeReference$_x(["qualifiedName", $]);
                            });
                        };
                        switch (nextChild.kindName) {
                            case "Identifier": {
                                choose_identifier();
                                break;
                            }
                            case "QualifiedName": {
                                choose_qualifiedName();
                                break;
                            }
                            default: {
                                reportUnexpectedChild({
                                    path: "Gtype_typeReference$_x",
                                    child: nextChild,
                                    expected: ["Identifier", "QualifiedName"],
                                });
                            }
                        }
                    }
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_typeReference$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["typeReference", $]);
                });
            };
            var choose_undefined = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_undefined",
                        kindNameOptions: ["UndefinedKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "UndefinedKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_undefined",
                        child: currentChild,
                        expected: ["UndefinedKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_undefined$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["undefined", $]);
                });
            };
            var choose_union = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_union",
                        kindNameOptions: ["UnionType"],
                    });
                    return;
                }
                if (currentChild.kindName !== "UnionType") {
                    reportUnexpectedChild({
                        path: "Gtype_union",
                        child: currentChild,
                        expected: ["UnionType"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var elements = [];
                    var processElement = function () {
                        Gtype(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "AnyKeyword":
                                    processElement();
                                    break;
                                case "ArrayType":
                                    processElement();
                                    break;
                                case "BooleanKeyword":
                                    processElement();
                                    break;
                                case "FunctionType":
                                    processElement();
                                    break;
                                case "LiteralType":
                                    processElement();
                                    break;
                                case "ParenthesizedType":
                                    processElement();
                                    break;
                                case "NeverKeyword":
                                    processElement();
                                    break;
                                case "NumberKeyword":
                                    processElement();
                                    break;
                                case "OptionalType":
                                    processElement();
                                    break;
                                case "TupleType":
                                    processElement();
                                    break;
                                case "TypeLiteral":
                                    processElement();
                                    break;
                                case "StringKeyword":
                                    processElement();
                                    break;
                                case "TypeReference":
                                    processElement();
                                    break;
                                case "UndefinedKeyword":
                                    processElement();
                                    break;
                                case "UnionType":
                                    processElement();
                                    break;
                                case "VoidKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_union$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["union", $]);
                });
            };
            var choose_void = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_void",
                        kindNameOptions: ["VoidKeyword"],
                    });
                    return;
                }
                if (currentChild.kindName !== "VoidKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_void",
                        child: currentChild,
                        expected: ["VoidKeyword"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Gtype_void$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_Gtype(["void", $]);
                });
            };
            switch (nextChild.kindName) {
                case "AnyKeyword": {
                    choose_any();
                    break;
                }
                case "ArrayType": {
                    choose_array();
                    break;
                }
                case "BooleanKeyword": {
                    choose_boolean();
                    break;
                }
                case "FunctionType": {
                    choose_function();
                    break;
                }
                case "LiteralType": {
                    choose_literal();
                    break;
                }
                case "ParenthesizedType": {
                    choose_parenthesized();
                    break;
                }
                case "NeverKeyword": {
                    choose_never();
                    break;
                }
                case "NumberKeyword": {
                    choose_number();
                    break;
                }
                case "OptionalType": {
                    choose_optional();
                    break;
                }
                case "TupleType": {
                    choose_tuple();
                    break;
                }
                case "TypeLiteral": {
                    choose_typeLiteral();
                    break;
                }
                case "StringKeyword": {
                    choose_string();
                    break;
                }
                case "TypeReference": {
                    choose_typeReference();
                    break;
                }
                case "UndefinedKeyword": {
                    choose_undefined();
                    break;
                }
                case "UnionType": {
                    choose_union();
                    break;
                }
                case "VoidKeyword": {
                    choose_void();
                    break;
                }
                default: {
                    reportUnexpectedChild({
                        path: "Gtype",
                        child: nextChild,
                        expected: ["AnyKeyword", "ArrayType", "BooleanKeyword", "FunctionType", "LiteralType", "ParenthesizedType", "NeverKeyword", "NumberKeyword", "OptionalType", "TupleType", "TypeLiteral", "StringKeyword", "TypeReference", "UndefinedKeyword", "UnionType", "VoidKeyword"],
                    });
                }
            }
        }
    }
    function GtypeParameter(node, children, callback) {
        var currentChild;
        var nextChild;
        currentChild = children.pop();
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GtypeParameter",
                kindNameOptions: ["TypeParameter"],
            });
            return;
        }
        if (currentChild.kindName !== "TypeParameter") {
            reportUnexpectedChild({
                path: "GtypeParameter",
                child: currentChild,
                expected: ["TypeParameter"],
            });
            return;
        }
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            var currentChild;
            var nextChild;
            Gidentifier(node, children, function ($) {
                callback({
                    annotation: node.annotation,
                    content: $,
                });
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "GtypeParameter$",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })(currentChild, function ($) {
            callback($);
        });
    }
    function GtypeSignature(node, children, callback) {
        var currentChild;
        var nextChild;
        var choiceEnd_GtypeSignature = function ($) {
            callback($);
        };
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GtypeSignature",
                kindNameOptions: ["ConstructSignature", "IndexSignature", "MethodSignature", "PropertySignature"],
            });
            return;
        }
        else {
            nextChild = children[children.length - 1];
            var choose_construct = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_construct",
                        kindNameOptions: ["ConstructSignature"],
                    });
                    return;
                }
                if (currentChild.kindName !== "ConstructSignature") {
                    reportUnexpectedChild({
                        path: "GtypeSignature_construct",
                        child: currentChild,
                        expected: ["ConstructSignature"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gparameter(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "Parameter":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _parameters = $;
                        Gtype(node, children, function ($) {
                            var _returnType = $;
                            sequenceEnd({
                                "parameters": _parameters,
                                "returnType": _returnType,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "GtypeSignature_construct$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_GtypeSignature(["construct", $]);
                });
            };
            var choose_index = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_index",
                        kindNameOptions: ["IndexSignature"],
                    });
                    return;
                }
                if (currentChild.kindName !== "IndexSignature") {
                    reportUnexpectedChild({
                        path: "GtypeSignature_index",
                        child: currentChild,
                        expected: ["IndexSignature"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gmodifier(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement();
                                    break;
                                case "ExportKeyword":
                                    processElement();
                                    break;
                                case "ReadonlyKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _modifiers = $;
                        Gparameter(node, children, function ($) {
                            var _parameter = $;
                            var optional = null;
                            var setOptional = function () {
                                Gtype(node, children, function ($) {
                                    optional = $;
                                });
                            };
                            if (children.length === 0) { }
                            else {
                                nextChild = children[children.length - 1];
                                switch (nextChild.kindName) {
                                    case "AnyKeyword":
                                        setOptional();
                                        break;
                                    case "ArrayType":
                                        setOptional();
                                        break;
                                    case "BooleanKeyword":
                                        setOptional();
                                        break;
                                    case "FunctionType":
                                        setOptional();
                                        break;
                                    case "LiteralType":
                                        setOptional();
                                        break;
                                    case "ParenthesizedType":
                                        setOptional();
                                        break;
                                    case "NeverKeyword":
                                        setOptional();
                                        break;
                                    case "NumberKeyword":
                                        setOptional();
                                        break;
                                    case "OptionalType":
                                        setOptional();
                                        break;
                                    case "TupleType":
                                        setOptional();
                                        break;
                                    case "TypeLiteral":
                                        setOptional();
                                        break;
                                    case "StringKeyword":
                                        setOptional();
                                        break;
                                    case "TypeReference":
                                        setOptional();
                                        break;
                                    case "UndefinedKeyword":
                                        setOptional();
                                        break;
                                    case "UnionType":
                                        setOptional();
                                        break;
                                    case "VoidKeyword":
                                        setOptional();
                                        break;
                                }
                            }
                            pr.cc(optional, function ($) {
                                var _type = $;
                                sequenceEnd({
                                    "modifiers": _modifiers,
                                    "parameter": _parameter,
                                    "type": _type,
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "GtypeSignature_index$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_GtypeSignature(["index", $]);
                });
            };
            var choose_method = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_method",
                        kindNameOptions: ["MethodSignature"],
                    });
                    return;
                }
                if (currentChild.kindName !== "MethodSignature") {
                    reportUnexpectedChild({
                        path: "GtypeSignature_method",
                        child: currentChild,
                        expected: ["MethodSignature"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    Gidentifier(node, children, function ($) {
                        var _name = $;
                        GfunctionDefinition(node, children, function ($) {
                            var _definition = $;
                            sequenceEnd({
                                "name": _name,
                                "definition": _definition,
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "GtypeSignature_method$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_GtypeSignature(["method", $]);
                });
            };
            var choose_property = function () {
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GtypeSignature_property",
                        kindNameOptions: ["PropertySignature"],
                    });
                    return;
                }
                if (currentChild.kindName !== "PropertySignature") {
                    reportUnexpectedChild({
                        path: "GtypeSignature_property",
                        child: currentChild,
                        expected: ["PropertySignature"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    var currentChild;
                    var nextChild;
                    var sequenceEnd = function ($) {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        });
                    };
                    var elements = [];
                    var processElement = function () {
                        Gmodifier(node, children, function ($) {
                            elements.push($);
                        });
                    };
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop;
                        }
                        else {
                            nextChild = children[children.length - 1];
                            switch (nextChild.kindName) {
                                case "DeclareKeyword":
                                    processElement();
                                    break;
                                case "ExportKeyword":
                                    processElement();
                                    break;
                                case "ReadonlyKeyword":
                                    processElement();
                                    break;
                                default: break arrayLoop;
                            }
                        }
                    }
                    pr.cc(elements, function ($) {
                        var _modifiers = $;
                        GidentifierOrStringLiteral(node, children, function ($) {
                            var _name = $;
                            var optional = null;
                            var setOptional = function () {
                                currentChild = children.pop();
                                if (currentChild === undefined) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "GtypeSignature_property$_quesionToken",
                                        kindNameOptions: ["QuestionToken"],
                                    });
                                    return;
                                }
                                if (currentChild.kindName !== "QuestionToken") {
                                    reportUnexpectedChild({
                                        path: "GtypeSignature_property$_quesionToken",
                                        child: currentChild,
                                        expected: ["QuestionToken"],
                                    });
                                    return;
                                }
                                (function ($, callback) {
                                    var node = $;
                                    var children = [];
                                    $.children.forEach(function ($) { children.push($); });
                                    children.reverse();
                                    callback({
                                        annotation: $.annotation,
                                    });
                                    if (children.length > 0) {
                                        reportUnexpectedChild({
                                            path: "GtypeSignature_property$_quesionToken$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        });
                                        return;
                                    }
                                })(currentChild, function ($) {
                                    optional = $;
                                });
                            };
                            if (children.length === 0) { }
                            else {
                                nextChild = children[children.length - 1];
                                switch (nextChild.kindName) {
                                    case "QuestionToken":
                                        setOptional();
                                        break;
                                }
                            }
                            pr.cc(optional, function ($) {
                                var _quesionToken = $;
                                var optional = null;
                                var setOptional = function () {
                                    Gtype(node, children, function ($) {
                                        optional = $;
                                    });
                                };
                                if (children.length === 0) { }
                                else {
                                    nextChild = children[children.length - 1];
                                    switch (nextChild.kindName) {
                                        case "AnyKeyword":
                                            setOptional();
                                            break;
                                        case "ArrayType":
                                            setOptional();
                                            break;
                                        case "BooleanKeyword":
                                            setOptional();
                                            break;
                                        case "FunctionType":
                                            setOptional();
                                            break;
                                        case "LiteralType":
                                            setOptional();
                                            break;
                                        case "ParenthesizedType":
                                            setOptional();
                                            break;
                                        case "NeverKeyword":
                                            setOptional();
                                            break;
                                        case "NumberKeyword":
                                            setOptional();
                                            break;
                                        case "OptionalType":
                                            setOptional();
                                            break;
                                        case "TupleType":
                                            setOptional();
                                            break;
                                        case "TypeLiteral":
                                            setOptional();
                                            break;
                                        case "StringKeyword":
                                            setOptional();
                                            break;
                                        case "TypeReference":
                                            setOptional();
                                            break;
                                        case "UndefinedKeyword":
                                            setOptional();
                                            break;
                                        case "UnionType":
                                            setOptional();
                                            break;
                                        case "VoidKeyword":
                                            setOptional();
                                            break;
                                    }
                                }
                                pr.cc(optional, function ($) {
                                    var _type = $;
                                    sequenceEnd({
                                        "modifiers": _modifiers,
                                        "name": _name,
                                        "quesionToken": _quesionToken,
                                        "type": _type,
                                    });
                                });
                            });
                        });
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "GtypeSignature_property$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    choiceEnd_GtypeSignature(["property", $]);
                });
            };
            switch (nextChild.kindName) {
                case "ConstructSignature": {
                    choose_construct();
                    break;
                }
                case "IndexSignature": {
                    choose_index();
                    break;
                }
                case "MethodSignature": {
                    choose_method();
                    break;
                }
                case "PropertySignature": {
                    choose_property();
                    break;
                }
                default: {
                    reportUnexpectedChild({
                        path: "GtypeSignature",
                        child: nextChild,
                        expected: ["ConstructSignature", "IndexSignature", "MethodSignature", "PropertySignature"],
                    });
                }
            }
        }
    }
    function GvariableDeclaration(node, children, callback) {
        var currentChild;
        var nextChild;
        currentChild = children.pop();
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GvariableDeclaration",
                kindNameOptions: ["VariableDeclaration"],
            });
            return;
        }
        if (currentChild.kindName !== "VariableDeclaration") {
            reportUnexpectedChild({
                path: "GvariableDeclaration",
                child: currentChild,
                expected: ["VariableDeclaration"],
            });
            return;
        }
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            var currentChild;
            var nextChild;
            var sequenceEnd = function ($) {
                callback({
                    annotation: node.annotation,
                    content: $,
                });
            };
            Gidentifier(node, children, function ($) {
                var _name = $;
                var optional = null;
                var setOptional = function () {
                    Gtype(node, children, function ($) {
                        optional = $;
                    });
                };
                if (children.length === 0) { }
                else {
                    nextChild = children[children.length - 1];
                    switch (nextChild.kindName) {
                        case "AnyKeyword":
                            setOptional();
                            break;
                        case "ArrayType":
                            setOptional();
                            break;
                        case "BooleanKeyword":
                            setOptional();
                            break;
                        case "FunctionType":
                            setOptional();
                            break;
                        case "LiteralType":
                            setOptional();
                            break;
                        case "ParenthesizedType":
                            setOptional();
                            break;
                        case "NeverKeyword":
                            setOptional();
                            break;
                        case "NumberKeyword":
                            setOptional();
                            break;
                        case "OptionalType":
                            setOptional();
                            break;
                        case "TupleType":
                            setOptional();
                            break;
                        case "TypeLiteral":
                            setOptional();
                            break;
                        case "StringKeyword":
                            setOptional();
                            break;
                        case "TypeReference":
                            setOptional();
                            break;
                        case "UndefinedKeyword":
                            setOptional();
                            break;
                        case "UnionType":
                            setOptional();
                            break;
                        case "VoidKeyword":
                            setOptional();
                            break;
                    }
                }
                pr.cc(optional, function ($) {
                    var _type = $;
                    var optional = null;
                    var setOptional = function () {
                        Gexpression(node, children, function ($) {
                            optional = $;
                        });
                    };
                    if (children.length === 0) { }
                    else {
                        nextChild = children[children.length - 1];
                        switch (nextChild.kindName) {
                            case "ArrayLiteralExpression":
                                setOptional();
                                break;
                            case "ArrowFunction":
                                setOptional();
                                break;
                            case "BinaryExpression":
                                setOptional();
                                break;
                            case "CallExpression":
                                setOptional();
                                break;
                            case "ConditionalExpression":
                                setOptional();
                                break;
                            case "ElementAccessExpression":
                                setOptional();
                                break;
                            case "FalseKeyword":
                                setOptional();
                                break;
                            case "Identifier":
                                setOptional();
                                break;
                            case "NewExpression":
                                setOptional();
                                break;
                            case "NoSubstitutionTemplateLiteral":
                                setOptional();
                                break;
                            case "NumericLiteral":
                                setOptional();
                                break;
                            case "NullKeyword":
                                setOptional();
                                break;
                            case "ObjectLiteralExpression":
                                setOptional();
                                break;
                            case "ParenthesizedExpression":
                                setOptional();
                                break;
                            case "PostfixUnaryExpression":
                                setOptional();
                                break;
                            case "PrefixUnaryExpression":
                                setOptional();
                                break;
                            case "PropertyAccessExpression":
                                setOptional();
                                break;
                            case "StringLiteral":
                                setOptional();
                                break;
                            case "TemplateExpression":
                                setOptional();
                                break;
                            case "TrueKeyword":
                                setOptional();
                                break;
                        }
                    }
                    pr.cc(optional, function ($) {
                        var _expression = $;
                        sequenceEnd({
                            "name": _name,
                            "type": _type,
                            "expression": _expression,
                        });
                    });
                });
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "GvariableDeclaration$",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })(currentChild, function ($) {
            callback($);
        });
    }
    function GvariableDeclarationList(node, children, callback) {
        var currentChild;
        var nextChild;
        currentChild = children.pop();
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GvariableDeclarationList",
                kindNameOptions: ["VariableDeclarationList"],
            });
            return;
        }
        if (currentChild.kindName !== "VariableDeclarationList") {
            reportUnexpectedChild({
                path: "GvariableDeclarationList",
                child: currentChild,
                expected: ["VariableDeclarationList"],
            });
            return;
        }
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            var currentChild;
            var nextChild;
            var elements = [];
            var processElement = function () {
                GvariableDeclaration(node, children, function ($) {
                    elements.push($);
                });
            };
            arrayLoop: while (true) {
                if (children.length === 0) {
                    break arrayLoop;
                }
                else {
                    nextChild = children[children.length - 1];
                    switch (nextChild.kindName) {
                        case "VariableDeclaration":
                            processElement();
                            break;
                        default: break arrayLoop;
                    }
                }
            }
            pr.cc(elements, function ($) {
                callback({
                    annotation: node.annotation,
                    content: $,
                });
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "GvariableDeclarationList$",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })(currentChild, function ($) {
            callback($);
        });
    }
    if ($.kindName !== "SourceFile") {
        reportUnexpectedRoot({
            root: $,
        });
        return;
    }
    else {
        (function ($, callback) {
            var node = $;
            var children = [];
            $.children.forEach(function ($) { children.push($); });
            children.reverse();
            var currentChild;
            var nextChild;
            var sequenceEnd = function ($) {
                callback({
                    annotation: node.annotation,
                    content: $,
                });
            };
            var elements = [];
            var processElement = function () {
                Gstatement(node, children, function ($) {
                    elements.push($);
                });
            };
            arrayLoop: while (true) {
                if (children.length === 0) {
                    break arrayLoop;
                }
                else {
                    nextChild = children[children.length - 1];
                    switch (nextChild.kindName) {
                        case "Block":
                            processElement();
                            break;
                        case "BreakStatement":
                            processElement();
                            break;
                        case "ExportDeclaration":
                            processElement();
                            break;
                        case "ExpressionStatement":
                            processElement();
                            break;
                        case "ForStatement":
                            processElement();
                            break;
                        case "FunctionDeclaration":
                            processElement();
                            break;
                        case "IfStatement":
                            processElement();
                            break;
                        case "ImportDeclaration":
                            processElement();
                            break;
                        case "InterfaceDeclaration":
                            processElement();
                            break;
                        case "LabeledStatement":
                            processElement();
                            break;
                        case "ReturnStatement":
                            processElement();
                            break;
                        case "SwitchStatement":
                            processElement();
                            break;
                        case "ThrowStatement":
                            processElement();
                            break;
                        case "TryStatement":
                            processElement();
                            break;
                        case "TypeAliasDeclaration":
                            processElement();
                            break;
                        case "VariableStatement":
                            processElement();
                            break;
                        case "WhileStatement":
                            processElement();
                            break;
                        default: break arrayLoop;
                    }
                }
            }
            pr.cc(elements, function ($) {
                var _statements = $;
                currentChild = children.pop();
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "root_endOfFile",
                        kindNameOptions: ["EndOfFileToken"],
                    });
                    return;
                }
                if (currentChild.kindName !== "EndOfFileToken") {
                    reportUnexpectedChild({
                        path: "root_endOfFile",
                        child: currentChild,
                        expected: ["EndOfFileToken"],
                    });
                    return;
                }
                (function ($, callback) {
                    var node = $;
                    var children = [];
                    $.children.forEach(function ($) { children.push($); });
                    children.reverse();
                    callback({
                        annotation: $.annotation,
                    });
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "root_endOfFile$",
                            child: children[children.length - 1],
                            expected: null,
                        });
                        return;
                    }
                })(currentChild, function ($) {
                    var _endOfFile = $;
                    sequenceEnd({
                        "statements": _statements,
                        "endOfFile": _endOfFile,
                    });
                });
            });
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "root",
                    child: children[children.length - 1],
                    expected: null,
                });
                return;
            }
        })($, function ($) {
            callback($);
        });
    }
}
exports.parse = parse;
