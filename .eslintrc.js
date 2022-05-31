module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    'func-names': 0,
    'no-console': 0,
    'no-unused-vars': 1,
    'no-process-exit': 0,
    'object-shorthand': 0,
    'class-methods-use-this': 0,
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'node/no-unpublished-import': 'error'
  },
  ignorePatterns: ['**/*.html']
};
