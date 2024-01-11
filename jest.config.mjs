import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "^@/(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(test|spec).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  preset: "ts-jest",
  collectCoverageFrom: [
    "**/*.[jt]s?(x)",
    "!**/*.stories.[jt]s?(x)",
    "!**/*.{container,constsant,suspense,fallback,config}.[jt]s?(x)",
    "!**/*webpack*",
    "!**/*.hot-update*",
    "!**/src/util/testless/**/*",
    "!**/coverage/**/*",
    "!**/analyze/**/*",
    "!**/__mocks__/**/*",
    "!**/{.next,node_modules,public,coverage,src/style,pages,.storybook,core/{component,constant,ref,type},cypress,firebase,_component}/**/*.{js,jsx,ts,tsx}",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
