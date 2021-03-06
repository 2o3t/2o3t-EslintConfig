# eslint-config-2o3t

Node Style Guide for 2o3t.

## Install

```bash
npm i eslint eslint-config-2o3t --save-dev
```

## Usage

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-2o3t": "1",
    "eslint": "4"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-2o3t'
};
```

### Use with Experimental Features

If you want to use eslint-config-2o3t with experimental features such as `async function`, you should use `babel-eslint` parser:

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-2o3t": "1",
    "eslint": "4",
    "babel-eslint": "8"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-2o3t',
  // for experimental features support
  parser: 'babel-eslint',
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  }
};
```

### Use with React in Front-End

If you want to use eslint-config-2o3t with react, jsx and es6 modules:

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-2o3t": "1",
    "eslint": "4",
    "babel-eslint": "8",
    "eslint-plugin-react": "7"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-2o3t',
  // for experimental features support
  parser: 'babel-eslint',
  parserOptions: {
    // for es6 module
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // for variables in jsx
    'react/jsx-uses-vars': 'error',
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  },
};
```
