module.exports = {
  collectCoverage: true,

  coveragePathIgnorePatterns: [
    '/node_modules/',
    'babel.config.js',
    'jest.config.js',
  ],

  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/App.js',
    '!babel.config.js',
    '!src/index.js',
    '!jest.config.js',
    '!src/redux/store.js',
    '!src/components/Table/Table.js',
    '!src/babel.config.js',
  ],

  coverageDirectory: 'coverage',

  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  testEnvironment: 'jsdom',
};