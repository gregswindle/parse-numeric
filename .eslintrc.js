module.exports = {
  env: {
    jest: true,
    node: true
  },
  extends: [
    'eslint:all',
    'standard',
    'xo',
    'plugin:security/recommended'
  ],
  plugins: [
    'import',
    'node',
    'prettier',
    'promise',
    'security',
    'standard'
  ],
  rules: {
    'arrow-parens': 'off',
    indent: [2, 2, {SwitchCase: 1}],
    'padding-line-between-statements': 'off',
    semi: 'off'
  }
}
