export default {
  collectCoverage: true,
  moduleFileExtensions: ['js', 'mjs'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  testRegex: '((\\.|/*.)(spec))\\.js?$',
};
