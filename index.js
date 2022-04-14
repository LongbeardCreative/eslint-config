module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': 0,
    'consistent-return': 0,
    'func-names': 0,
    import: 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'max-len': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'no-underscore-dangle': 0,
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],

    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prettier/prettier': 'error',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react/display-name': 1,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      1,
      {
        html: 'ignore',
        exceptions: ['Slider', 'Layout'],
      },
    ],
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/no-invalid-html-attribute': 'off',
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    radix: 0,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 'off',
    'space-before-function-paren': 0,
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  plugins: ['html', 'prettier', '@typescript-eslint'],
};
