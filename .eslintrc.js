module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'react/static-property-placement': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'react/no-unused-state': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn', {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
  },
};
