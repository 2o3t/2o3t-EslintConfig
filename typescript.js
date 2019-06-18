'use strict';

module.exports = {
    extends: [
        './index',
        './lib/rules/browser',
        './lib/rules/import',
        './lib/rules/react',
        './lib/rules/react-a11y',
        './lib/rules/typescript',
    ].map(require.resolve),
    settings: {
        // Append 'ts' and 'tsx' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: [ '.js', '.ts', '.jsx', '.tsx', '.json' ],
            },
        },
        // Append 'ts' and 'tsx' extensions to Airbnb 'import/extensions' setting
        'import/extensions': [ '.js', '.ts', '.mjs', '.jsx', '.tsx' ],
    },
    rules: {
        // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': [ 'error', { extensions: [ '.jsx', '.tsx' ] }],
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            parser: 'babel-eslint',
            jsx: true,
        },
    },
};
