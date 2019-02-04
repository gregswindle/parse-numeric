module.exports = {
  env: {
    jest: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:security/recommended',
    'plugin:unicorn/recommended'
  ],
  plugins: [
    'import',
    'node',
    'prettier',
    'promise',
    'security',
    'standard',
    'unicorn'
  ]
}
