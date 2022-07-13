module.exports = {
  root: true,

  settings: {
    // Allow importing more file types
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    },
  },

  extends: ['airbnb', 'airbnb-typescript', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },

  env: {
    browser: true,
    node: true,
    jest: true,
  },

  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    'object-curly-newline': ['error', { multiline: true }],
    'import/extensions': 'off',
  },
};
