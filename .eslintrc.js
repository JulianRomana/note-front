module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'prettier',
    'prettier/vue',
  ],
  rules: {
    'max-len': ['warn', {
      code: 100,
      ignoreComments: true,
      ignoreStrings: true,
      // fix for svg icons
      ignorePattern: 'd=([s]*?)',
    }],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': [1],
    'object-shorthand': ['error', 'always', { ignoreConstructors: false }],
    'no-bitwise': 'off',
    'vue/no-unused-vars': 'error',
    'vue/max-attributes-per-line': [1],
    'vue/html-indent': [1],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'ignores': []
    }],
  },
}