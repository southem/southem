module.exports = {
  preset: 'react-native',
  cacheDirectory: '<rootDir>/dist/jest/cache',
  coverageDirectory: '<rootDir>/dist/jest/coverage',
  snapshotResolver: '<rootDir>/jest.config.snapshot',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  setupFiles: [
    '<rootDir>/jest/setup.js'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/showcases/',
    '<rootDir>/template/javascript/',
    '<rootDir>/template/typescript/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/website',
  ],
};
