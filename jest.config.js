module.exports = {
  collectCoverage: true,

  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],

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