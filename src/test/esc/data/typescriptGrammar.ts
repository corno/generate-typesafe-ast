import { Grammar } from "../../../pub/esc/interfaces"

export const typescriptGrammar: Grammar = {
    valueTypes: {
        expression: ["choice", {
            options: {
                arrayLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ArrayLiteralExpression"
                    }]
                },
                arrowFunction: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ArrowFunction"
                    }]
                },
                binary: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "BinaryExpression"
                    }]
                },
                call: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "CallExpression"
                    }]
                },
                conditional: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ConditionalExpression"
                    }]
                },
                elementAccess: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ElementAccessExpression"
                    }]
                },
                false: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "FalseKeyword"
                    }]
                },
                identifier: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "Identifier"
                    }]
                },
                new: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NewExpression"
                    }]
                },
                noSubstitutionTemplateLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NoSubstitutionTemplateLiteral"
                    }]
                },
                numericLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NumericLiteral"
                    }]
                },
                nullKeyword: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NullKeyword"
                    }]
                },
                objectLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ObjectLiteralExpression"
                    }]
                },
                parenthesizedExpression: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ParenthesizedExpression"
                    }]
                },
                postfixUnary: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "PostfixUnaryExpression"
                    }]
                },
                prefixUnary: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "PrefixUnaryExpression"
                    }]
                },
                propertyAccess: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "PropertyAccessExpression"
                    }]
                },
                stringLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "StringLiteral"
                    }]
                },
                template: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TemplateExpression"
                    }]
                },
                true: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TrueKeyword"
                    }]
                },
            }
        }],
        functionDefinition: ["sequence", {
            elements: [
                {
                    name: "typeParameters",
                    value: {
                        cardinality: ["array", {}],
                        type: ["node", {
                            name: "TypeParameter"
                        }]
                    },
                },
                {
                    name: "parameters",
                    value: {
                        cardinality: ["array", {}],
                        type: ["node", {
                            name: "Parameter"
                        }]
                    },
                },
                {
                    name: "returnType",
                    value: {
                        cardinality: ["optional", {}],
                        type: ["reference", { name: "type" }],
                    },
                },
            ]
        }],
        identifierOrStringLiteral: ["choice", {
            options: {

                identifier: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "Identifier"
                    }]
                },
                stringLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "StringLiteral"
                    }]
                },
            }
        }],
        modifier: ["choice", {
            //AbstractKeyword | AsyncKeyword | ConstKeyword | DeclareKeyword | DefaultKeyword | ExportKeyword | PrivateKeyword | ProtectedKeyword | PublicKeyword | OverrideKeyword | ReadonlyKeyword | StaticKeyword;
            options: {
                declare: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "DeclareKeyword"
                    }]
                },
                export: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ExportKeyword"
                    }]
                },
                readonly: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ReadonlyKeyword"
                    }]
                },
            }
        }],
        statement: ["choice", {
            options: {
                block: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "Block"
                    }]
                },
                break: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "BreakStatement"
                    }]
                },
                export: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ExportDeclaration"
                    }]
                },
                expression: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ExpressionStatement"
                    }]
                },
                for: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ForStatement"
                    }]
                },
                function: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "FunctionDeclaration"
                    }]
                },
                if: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "IfStatement"
                    }]
                },
                import: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ImportDeclaration"
                    }]
                },
                interface: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "InterfaceDeclaration"
                    }]
                },
                labeled: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "LabeledStatement"
                    }]
                },
                return: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ReturnStatement"
                    }]
                },
                switch: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "SwitchStatement"
                    }]
                },
                throw: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ThrowStatement"
                    }]
                },
                try: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TryStatement"
                    }]
                },
                typeAlias: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TypeAliasDeclaration"
                    }]
                },
                variable: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "VariableStatement"
                    }]
                },
                while: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "WhileStatement"
                    }]
                },
            }
        }],
        type: ["choice", {
            options: {
                any: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "AnyKeyword"
                    }]
                },
                array: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ArrayType"
                    }]
                },
                boolean: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "BooleanKeyword"
                    }]
                },
                function: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "FunctionType"
                    }]
                },
                literal: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "LiteralType"
                    }]
                },
                parenthesized: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ParenthesizedType"
                    }]
                },
                never: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NeverKeyword"
                    }]
                },
                number: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NumberKeyword"
                    }]
                },
                optional: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "OptionalType"
                    }]
                },
                tuple: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TupleType"
                    }]
                },
                typeLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TypeLiteral"
                    }]
                },
                string: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "StringKeyword"
                    }]
                },
                typeReference: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TypeReference"
                    }]
                },
                undefined: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "UndefinedKeyword"
                    }]
                },
                union: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "UnionType"
                    }]
                },
                void: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "VoidKeyword"
                    }]
                },
            }
        }],
        typeSignature: ["choice", {
            options: {
                construct: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ConstructSignature"
                    }]
                },
                index: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "IndexSignature"
                    }]
                },
                method: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "MethodSignature"
                    }]
                },
                property: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "PropertySignature"
                    }]
                },
            }
        }],
    },
    nodes: {
        AnyKeyword: { type: ["leaf", { hasTextContent: false }] },
        ArrayLiteralExpression: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "expression" }],
            }]
        },
        ArrayType: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "type" }],
            }]
        },
        ArrowFunction: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "parameters",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "Parameter"
                                }]
                            }
                        },
                        {
                            name: "returnType",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            }
                        },
                        {
                            name: "equalsGreaterThan",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "EqualsGreaterThanToken"
                                }]
                            }
                        },
                        {
                            name: "implementation",
                            value: {
                                cardinality: ["one", {}],
                                type: ["choice", {
                                    options: {
                                        "block": {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "Block",
                                            }]
                                        },
                                        "expression": {
                                            cardinality: ["one", {}],
                                            type: ["reference", { name: "expression" }],
                                        },
                                    }
                                }]
                            }
                        },
                    ],
                }],
            }]
        },
        BinaryExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "leftHandSide",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                        {
                            name: "operator",
                            value: {
                                cardinality: ["one", {}],
                                type: ["choice", {
                                    options: {
                                        ampersandAmpersand: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "AmpersandAmpersandToken"
                                                }
                                            ]
                                        },
                                        barBar: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "BarBarToken"
                                                }
                                            ]
                                        },
                                        equals: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "EqualsToken"
                                                }
                                            ]
                                        },
                                        equalsEqualsEquals: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "EqualsEqualsEqualsToken"
                                                }
                                            ]
                                        },
                                        exclamationEqualsEquals: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "ExclamationEqualsEqualsToken"
                                                }
                                            ]
                                        },
                                        greaterThan: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "GreaterThanToken"
                                                }
                                            ]
                                        },
                                        lessThan: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "LessThanToken"
                                                }
                                            ]
                                        },
                                        minus: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "MinusToken"
                                                }
                                            ]
                                        },
                                        minusEquals: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "MinusEqualsToken"
                                                }
                                            ]
                                        },
                                        plus: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "PlusToken"
                                                }
                                            ]
                                        },
                                        plusEquals: {
                                            cardinality: [
                                                "one",
                                                {}
                                            ],
                                            type: [
                                                "node",
                                                {
                                                    name: "PlusEqualsToken"
                                                }
                                            ]
                                        }
                                    }
                                }],
                            }
                        },
                        {
                            name: "rightHandSide",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        }
                    ]
                }]
            }]
        },
        AmpersandAmpersandToken: { type: ["leaf", { hasTextContent: false }] },
        BarBarToken: { type: ["leaf", { hasTextContent: false }] },
        BreakStatement: {
            type: ["composite", {
                cardinality: ["optional", {}],
                type: ["node", {
                    name: "Identifier",
                }]
            }]
        },
        EqualsEqualsEqualsToken: { type: ["leaf", { hasTextContent: false }] },
        EqualsToken: { type: ["leaf", { hasTextContent: false }] },
        ExclamationEqualsEqualsToken: { type: ["leaf", { hasTextContent: false }] },
        GreaterThanToken: { type: ["leaf", { hasTextContent: false }] },
        LessThanToken: { type: ["leaf", { hasTextContent: false }] },
        MinusToken: { type: ["leaf", { hasTextContent: false }] },
        MinusEqualsToken: { type: ["leaf", { hasTextContent: false }] },
        PlusToken: { type: ["leaf", { hasTextContent: false }] },
        PlusEqualsToken: { type: ["leaf", { hasTextContent: false }] },
        BooleanKeyword: { type: ["leaf", { hasTextContent: false }] },
        Block: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "statement" }]
            }]
        },
        CallExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "function",
                            value: {
                                "cardinality": ["one", {}],
                                type: ["reference", { name: "expression" }]
                            }
                        },
                        {
                            name: "typeParameters",
                            value: {
                                "cardinality": ["array", {}],
                                type: ["reference", { name: "type" }],
                            }
                        },
                        {
                            name: "parameters",
                            value: {
                                "cardinality": ["array", {}],
                                type: ["reference", { name: "expression" }]
                            }
                        },
                    ]
                }]
            }]
        },
        CaseBlock: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["choice", {
                    options: {
                        "case": {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "CaseClause"
                            }]
                        },
                        "default": {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "DefaultClause"
                            }]
                        },
                    }
                }]
            }]
        },
        CaseClause: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "case",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }]
                            }
                        },
                        {
                            name: "statements",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "statement" }]
                            },
                        }
                    ]
                }]
            }]
        },
        CatchClause: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "variable",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "VariableDeclaration"
                                }]
                            }
                        },
                        {
                            name: "block",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Block"
                                }]
                            }
                        },
                    ]
                }]
            }]
        },
        ColonToken: { type: ["leaf", { hasTextContent: false }] },
        ConditionalExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "test",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                        {
                            name: "questionToken",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "QuestionToken"
                                }],
                            }
                        },
                        {
                            name: "ifExpression",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                        {
                            name: "colonToken",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "ColonToken"
                                }],
                            }
                        },
                        {
                            name: "elseExpression",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                    ]
                }]
            }]
        },
        ConstructSignature: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "parameters",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "Parameter"
                                }]
                            }
                        },
                        {
                            name: "returnType",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", {
                                    name: "type"
                                }]
                            }
                        },
                    ]
                }]
            }]
        },
        DeclareKeyword: { type: ["leaf", { hasTextContent: false }] },
        DefaultClause: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "statement" }]
            }]
        },
        ElementAccessExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "array",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                        {
                            name: "element",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        }
                    ]
                }],
            }]
        },
        EndOfFileToken: { type: ["leaf", { hasTextContent: false }] },
        EqualsGreaterThanToken: { type: ["leaf", { hasTextContent: false }] },
        ExportDeclaration: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["node", {
                    name: "StringLiteral"
                }]
            }]
        },
        ExportKeyword: { type: ["leaf", { hasTextContent: false }] },
        ExpressionStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "expression" }]
            }]
        },
        FalseKeyword: { type: ["leaf", { hasTextContent: false }] },
        ForStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "initializer",
                            value: {
                                "cardinality": ["one", {}],
                                type: ["node", {
                                    name: "VariableDeclarationList"
                                }]
                            }
                        },
                        {
                            name: "condition",
                            value: {
                                "cardinality": ["one", {}],
                                type: ["reference", { name: "expression" }]
                            }
                        },
                        {
                            name: "incrementer",
                            value: {
                                "cardinality": ["one", {}],
                                type: ["reference", { name: "expression" }]
                            }
                        },
                        {
                            name: "block",
                            value: {
                                "cardinality": ["one", {}],
                                type: ["node", {
                                    name: "Block",
                                }]
                            }
                        },
                    ]
                }]
            }]
        },
        FunctionDeclaration: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "modifiers",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "modifier" }]
                            }
                            ,
                        },
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            },
                        },
                        {
                            name: "definition",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", {
                                    name: "functionDefinition"
                                }]
                            },
                        },
                        {
                            name: "block",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["node", {
                                    name: "Block"
                                }]
                            },
                        },
                    ]
                }]
            }]
        },
        Identifier: { type: ["leaf", { hasTextContent: true }] },
        IfStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "expression",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            },
                        },
                        {
                            name: "thenStatement",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "statement" }],
                            },
                        },
                        {
                            name: "elseStatement",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "statement" }],
                            },
                        },
                    ]
                }]
            }]
        },
        FunctionType: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "parameters",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "Parameter"
                                }]
                            },
                        },
                        {
                            name: "returnType",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            },
                        }
                    ]
                }]
            }]
        },
        ImportClause: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["choice", {
                    options: {
                        namespace: {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "NamespaceImport"
                            }]
                        },
                        named: {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "NamedImports"
                            }]
                        }
                    }
                }]
            }]
        },
        ImportDeclaration: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "clause",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "ImportClause"
                                }]
                            }
                        },
                        {
                            name: "file",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "StringLiteral"
                                }]
                            }
                        }
                    ]
                }]
            }]
        },
        IndexSignature: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "modifiers",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "modifier" }]
                            }
                            ,
                        },
                        {
                            name: "parameter",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Parameter"
                                }],
                            }
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            },
                        },

                    ]
                }]
            }]
        },
        InterfaceDeclaration: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "modifiers",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "modifier" }]
                            }
                            ,
                        },
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            }
                        },
                        {
                            name: "typeParameters",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "TypeParameter"
                                }]
                            },
                        },
                        {
                            name: "signature",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "typeSignature" }]
                            },
                        },
                    ]
                }]
            }]
        },
        ImportSpecifier: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            }
                        },
                        {
                            name: "as",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            }
                        },
                    ]
                }]
            }]
        },
        LabeledStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "label",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            }
                        },
                        {
                            name: "statement",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "statement" }],
                            }
                        },
                    ]
                }]
            }]
        },
        LiteralType: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["choice", {
                    options: {
                        null: {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "NullKeyword",
                            }]
                        },
                        string: {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "StringLiteral",
                            }]
                        },
                    }
                }]
            }]
        },
        MethodSignature: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier",
                                }]
                            }
                        },
                        {
                            name: "definition",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", {
                                    name: "functionDefinition"
                                }]
                            }
                        },
                    ]
                }]
            }]
        },
        NamespaceImport: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["node", {
                    name: "Identifier"
                }]
            }]
        },
        NamedImports: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["node", {
                    name: "ImportSpecifier"
                }]
            }]
        },
        NeverKeyword: { type: ["leaf", { hasTextContent: false }] },
        NumberKeyword: { type: ["leaf", { hasTextContent: false }] },
        NumericLiteral: { type: ["leaf", { hasTextContent: true }] },
        NewExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "class",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier",
                                }]
                            }
                        },
                        {
                            name: "parameters",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                    ]
                }]
            }]
        },
        NullKeyword: { type: ["leaf", { hasTextContent: false }] },
        NoSubstitutionTemplateLiteral: { type: ["leaf", { hasTextContent: false }] },
        ObjectLiteralExpression: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["node", {
                    name: "PropertyAssignment"
                }]
            }]
        },
        OptionalType: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "type" }],
            }]
        },
        Parameter: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier",
                                }]
                            }
                        },
                        {
                            name: "questionToken",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["node", {
                                    name: "QuestionToken",
                                }]
                            }
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            }
                        }
                    ]
                }]
            }]
        },
        ParenthesizedExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "expression" }],
            }]
        },
        ParenthesizedType: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "type" }],
            }]
        },
        PostfixUnaryExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "expression" }],
            }]
        },
        PrefixUnaryExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "expression" }],
            }]
        },
        PropertyAccessExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "object",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                        {
                            name: "property",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                    ]
                }]
            }]
        },
        PropertyAssignment: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["choice", {
                                    options: {
                                        identifier: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "Identifier"
                                            }]
                                        },
                                        numericLiteral: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "NumericLiteral"
                                            }]
                                        },
                                        stringLiteral: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "StringLiteral"
                                            }]
                                        },
                                    }
                                }]
                            }
                        },
                        {
                            name: "expression",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                    ]
                }]
            }]
        },
        PropertySignature: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "modifiers",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "modifier" }]
                            }
                            ,
                        },
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "identifierOrStringLiteral" }],
                            }
                        },
                        {
                            name: "quesionToken",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["node", {
                                    name: "QuestionToken",
                                }],
                            }
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            },
                        }

                    ]
                }]
            }]
        },
        QualifiedName: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "context",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier",
                                }]
                            }
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier",
                                }]
                            }
                        },
                    ]
                }],
            }]
        },
        QuestionToken: { type: ["leaf", { hasTextContent: false }] },
        ReadonlyKeyword: { type: ["leaf", { hasTextContent: false }] },
        ReturnStatement: {
            type: ["composite", {
                cardinality: ["optional", {}],
                type: ["reference", { name: "expression" }],
            }]
        },
        SourceFile: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "statements",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "statement" }]
                            },
                        },
                        {
                            name: "endOfFile",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "EndOfFileToken"
                                }]
                            }
                        }
                    ]

                }]
            }]
        },
        StringKeyword: { type: ["leaf", { hasTextContent: false }] },
        StringLiteral: { type: ["leaf", { hasTextContent: true }] },
        SwitchStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "expression",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }]
                            }
                        },
                        {
                            name: "caseBlock",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "CaseBlock"
                                }]
                            }
                        },
                    ]
                }],
            }]
        },
        TemplateExpression: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "head",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "TemplateHead",
                                }]
                            }
                        },
                        {
                            name: "spans",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "TemplateSpan",
                                }]
                            }
                        }
                    ]
                }]
            }]
        },
        TemplateHead: { type: ["leaf", { hasTextContent: true }] },
        TemplateMiddle: { type: ["leaf", { hasTextContent: false }] },
        TemplateSpan: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "expression",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                        {
                            name: "x",
                            value: {
                                cardinality: ["one", {}],
                                type: ["choice", {
                                    options: {
                                        middle: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "TemplateMiddle"
                                            }],
                                        },
                                        tail: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "TemplateTail"
                                            }],

                                        }
                                    }
                                }],
                            }
                        },
                    ]
                }]
            }]
        },
        TemplateTail: { type: ["leaf", { hasTextContent: false }] },

        ThrowStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "expression" }],
            }]
        },
        TrueKeyword: { type: ["leaf", { hasTextContent: false }] },
        TryStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "block",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Block"
                                }]
                            },
                        },
                        {
                            name: "catchClause",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "CatchClause"
                                }]
                            },
                        },
                    ]
                }]
            }]
        },
        TupleType: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "type" }],
            }]
        },
        TypeAliasDeclaration: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "modifiers",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "modifier" }]
                            }
                            ,
                        },
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            }
                        },
                        {
                            name: "typeParameters",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "TypeParameter"
                                }]
                            },
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "type" }],
                            },
                        }

                    ]
                }]
            }]
        },
        TypeLiteral: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "typeSignature" }],
            }]
        },
        TypeParameter: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["node", {
                    name: "Identifier"
                }],
            }]
        },
        TypeReference: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "x",
                            value: {
                                "cardinality": ["one", {}],
                                type: ["choice", {
                                    options: {
                                        "identifier": {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "Identifier",
                                            }]
                                        },
                                        "qualifiedName": {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "QualifiedName",
                                            }]
                                        }
                                    }
                                }]
                            }
                        },
                        {
                            name: "parameters",
                            value: {
                                "cardinality": ["array", {}],
                                type: ["reference", { name: "type" }],
                            }
                        },
                    ]
                }]
            }]
        },
        UndefinedKeyword: { type: ["leaf", { hasTextContent: false }] },
        UnionType: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "type" }],
            }]
        },
        VariableDeclaration: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            },
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            },
                        },
                        {
                            name: "expression",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "expression" }],
                            },
                        },
                    ]
                }]
            }]
        },
        VariableDeclarationList: {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["node", {
                    name: "VariableDeclaration"
                }]
            }]
        },
        VariableStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "modifiers",
                            value: {
                                cardinality: ["array", {}],
                                type: ["reference", { name: "modifier" }]
                            }
                            ,
                        },
                        {
                            name: "variableDeclarationList",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "VariableDeclarationList"
                                }]
                            },
                        },
                    ]
                }]
            }]
        },
        VoidKeyword: { type: ["leaf", { hasTextContent: false }] },
        WhileStatement: {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "condition",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            },
                        },
                        {
                            name: "block",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Block"
                                }],
                            },
                        },
                    ]
                }]
            }]
        },
    },
    rootNode: "SourceFile"
}