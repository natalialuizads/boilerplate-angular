import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};

export default config;
