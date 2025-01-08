module.exports = {
    preset: "ts-jest", // Use ts-jest for transforming TypeScript files
    testEnvironment: "node", // Set the test environment to node
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)", // Match test files in __tests__ directory
      "**/?(*.)+(spec|test).[tj]s?(x)", // Match files with .test.ts or .spec.ts
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files using ts-jest
    },
    moduleFileExtensions: ["ts", "js", "json", "node"], // Recognize .ts and .js files
  };
  