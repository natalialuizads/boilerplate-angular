import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageDirectory: 'dist/coverage',
  collectCoverageFrom: [
    "src/app/**/*.ts"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "setup-jest.ts",
    "public-api.ts",
    ".module.ts",
    ".interface.ts",
    ".enum.ts",
    ".mock.ts",
  ],
  modulePaths: [
    "<rootDir>"
  ],
  rootDir: '.',
  moduleNameMapper: {
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
  },

};

export default config;
