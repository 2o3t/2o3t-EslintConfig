'use strict';

module.exports = {
    plugins: [
        '@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',

    settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: [ '.mjs', '.js', '.ts', '.json' ],
            },
        },
        // Append 'ts' extensions to Airbnb 'import/extensions' setting
        'import/extensions': [ '.js', '.ts', '.mjs' ],
    },
    rules: {
        'arrow-parens': [
            'error',
            'as-needed',
            {
                // `requireForBlockBody` should be `true` (as Airbnb sets this to `true`), however it causes problems with HOC syntax in TS
                // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/8
                requireForBlockBody: false,
            },
        ],

        // Replace Airbnb 'camelcase' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
        camelcase: 'off',
        '@typescript-eslint/camelcase': [ 'error', { properties: 'never' }],

        // Replace Airbnb 'indent' rule with '@typescript-indent' version
        indent: 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                ],
                ignoreComments: false,
            },
        ],

        // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
    },
};
