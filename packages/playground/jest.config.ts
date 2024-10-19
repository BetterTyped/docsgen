import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  cacheDirectory: "../../node_modules/.cache/rhf/jest",
  verbose: true,
  testEnvironment: "jsdom",
  preset: "ts-jest/presets/default-esm",
  testRegex: [".spec.ts", ".spec.tsx"],
  roots: ["<rootDir>"],
  coverageProvider: "v8",
  coverageReporters: [["lcov", { projectRoot: "../.." }], "clover", "json", "text"],
  collectCoverageFrom: ["./src/**/*.ts", "./src/**/*.tsx"],
  coveragePathIgnorePatterns: [".spec", "test", "tests", "types", "constants", "index.ts"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(j|t)sx?$": [
      "ts-jest",
      { tsconfig: "./tsconfig.json", useESM: true, isolatedModules: true, babelConfig: "../../.babelrc.js" },
    ],
  },
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  setupFilesAfterEnv: ["jest-extended/all", "<rootDir>/jest.setup.ts"],
};
export default config;
