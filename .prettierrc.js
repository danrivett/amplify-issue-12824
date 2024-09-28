module.exports = {
  printWidth: 125,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '**/*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
