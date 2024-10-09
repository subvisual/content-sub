module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  // plugins: ['prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/array-type': 'off',
    'import/extensions': 'off',
    'function-paren-newline': 'off',
    'prettier/prettier': 'off',
  },
}
