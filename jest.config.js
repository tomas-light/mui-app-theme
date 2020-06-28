/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
    preset: "ts-jest",
    testEnvironment: "node",
    transformIgnorePatterns: [
        "<rootDir>/(node_modules)/"
    ],
    testMatch: [
        "<rootDir>/**/*.test.ts(x)",
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer",
    ],
    setupFiles: [
        "<rootDir>/jest.enzyme-adapter.js",
    ],
};

module.exports = config;
