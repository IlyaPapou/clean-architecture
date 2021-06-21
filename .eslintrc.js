module.exports = {
  "parser": '@typescript-eslint/parser',
  "parserOptions": {
    "project": 'tsconfig.json',
    "sourceType": 'module',
  },
  "plugins": ['@typescript-eslint/eslint-plugin'],
  "extends": [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  "root": true,
  "env": {
    "node": true,
    "jest": true,
  },
  "ignorePatterns": ['.eslintrc.js'],
  "rules": {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        'minimumDescriptionLength': 5,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-empty-function': [
      'error',
      { 'allow': ['arrowFunctions'] },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { 'varsIgnorePattern': '^_', 'argsIgnorePattern': '^_' },
    ],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/naming-convention': [
        "warn",
      {
        'selector': "variable",
        'format': ["camelCase"]
      }
    ],
    'curly': ['error', 'all'],
    'no-duplicate-imports': 'error',
    'no-mixed-operators': 'error',
    'no-debugger': 'error',
    'no-console': 'error',
    'no-process-exit': 'error',
    'no-fallthrough': [
      'warn',
      { 'commentPattern': '.*intentional fallthrough.*' },
    ],
    'comma-spacing': [
      'error',
      { 'before': false, 'after': true }
    ],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single']
  },
};
