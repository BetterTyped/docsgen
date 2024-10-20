import { getJestProjects } from "@nx/jest";
import type { Config } from "@jest/types";

export default {
  projects: getJestProjects(),
};

export const getJestConfig = (): Config.InitialOptions => ({
  cache: false,
  verbose: true,
  testEnvironment: "jsdom",
  preset: "ts-jest/presets/default-esm",
  testRegex: [".spec.ts", ".spec.tsx"],
  testPathIgnorePatterns: ["__snapshots__"],
  roots: ["<rootDir>"],
  coverageProvider: "v8",
  coverageReporters: [["lcov", { projectRoot: "../.." }], "clover", "json", "text"],
  collectCoverageFrom: ["./src/**/*.ts", "./src/**/*.tsx"],
  coveragePathIgnorePatterns: [".spec", "__tests__", "test", "tests", "types", "constants", "index.ts", "__snapshots__"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(j|t)sx?$": [
      "ts-jest",
      { tsconfig: "./tsconfig.json", useESM: true, isolatedModules: true, babelConfig: "../../.babelrc.js" },
    ],
  },
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "jest-extended/all"],
});
