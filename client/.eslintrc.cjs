module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:import/typescript', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    importScripts: 'readonly',
    firebase: 'readonly',
    registration: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['react', 'prettier', 'react-hooks', 'import-helpers', 'import'],
  ignorePatterns: ['!.eslintrc.js', '!.stylelintrc.js'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js', '.tsx', '.ts'] }],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unstable-nested-components': 'off', // rever aqui
    'react/function-component-definition': 'off', // rever aqui
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', 'module', ['/^@src/'], ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  },
  settings: {
    'import/core-modules': ['react-router-dom'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'translate/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts',
      ],
      env: {
        browser: true,
        es6: true,
        jest: true,
      },
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        importScripts: 'readonly',
        firebase: 'readonly',
        registration: 'readonly',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: '**/tsconfig.json',
      },
      plugins: [
        'react',
        'prettier',
        'react-hooks',
        'import-helpers',
        '@typescript-eslint',
        'import',
      ],
      rules: {
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: ['function-declaration', 'arrow-function'],
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '_',
            caughtErrorsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^[A-Z]',
              match: true,
            },
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react/jsx-curly-newline': 'off',
        'no-undef': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-restricted-imports': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-nocheck': 'allow-with-description' }],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
        '@typescript-eslint/no-namespace': 'off',
        'import/no-unresolved': ['error'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/no-empty-object-type': [
          'error',
          { allowInterfaces: 'with-single-extends' },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: ['src/index.tsx', 'src/bootstrap.tsx'],
      rules: {
        'global-require': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
};
