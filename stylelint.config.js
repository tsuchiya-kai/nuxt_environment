module.exports = {
  extends: [
    'stylelint-config-standard', // 最初からあった
    'stylelint-config-recess-order', // プロパティの順番
    'stylelint-rscss/config', // RSCSS用
    'stylelint-config-prettier', // 最初からあった
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // 'unicode-bom': 'never',
    'max-nesting-depth': [
      1,
      {
        ignore: ['pseudo-classes'],
        ignoreAtRules: ['include', 'media'],
      },
    ],
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'if', 'for'] }],
  },
  ignoreFiles: ['**/*.vue'], // NOTE: vueのスタイルは一旦無視で
};
