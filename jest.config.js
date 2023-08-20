module.exports = {
  collectCoverage: true,

  coveragePathIgnorePatterns: [
    '/node_modules/',
    'babel.config.js',
    'jest.config.js',
  ],

  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/App.js',
    '!<rootDir>/babel.config.js',
    '!<rootDir>/src/index.js',
    '!<rootDir>/jest.config.js',
    '!<rootDir>/src/redux/store.js',
    '!<rootDir>/src/components/Table/Table.js',
    '!<rootDir>/src/babel.config.js',
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