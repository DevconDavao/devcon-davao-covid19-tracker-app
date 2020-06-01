module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['^@', './']],
      },
    },
    react: {
      version: 'detect', // "detect" automatically picks the version you have installed.
    },
  },
};
