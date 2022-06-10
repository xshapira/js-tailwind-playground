module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      null,
      {
        ignoreAtRules: ['/regex/', 'string']
      }
    ],
    'no-invalid-position-at-import-rule': null
  }
};
