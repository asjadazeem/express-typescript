module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    camelcase: 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    curly: ['error', 'all'],
    'default-case': 0,
    'func-names': 0,
    'global-require': 0,
    'import/extensions': 0,
    'import/named': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 2,
    'import/no-unresolved': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'lines-between-class-members': 0,
    'max-classes-per-file': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-loop-func': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-return-assign': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'prefer-template': 1,
    'vars-on-top': 0,

    // To be enabled and fixed
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 0,
    eqeqeq: 0,
    'import/no-dynamic-require': 0,
    'no-async-promise-executor': 0,
    'no-bitwise': 0,
    'no-case-declarations': 0,
    'no-continue': 0,
    'no-else-return': 0,
    'no-return-await': 0,
    radix: 0,
    'spaced-comment': 0,
  },
}
