'use strict';

module.exports = {
    extends: [
        './index',
        './lib/rules/browser',
        './lib/rules/import',
    ].map(require.resolve),
    parser: 'vue-eslint-parser',
    rules: {},
    plugins: [
        'vue',
        'html',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
};
