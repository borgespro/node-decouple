module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {},
  settings: { 'import/resolver': { node: { extensions: ['.js', '.ts'] } } },
};
