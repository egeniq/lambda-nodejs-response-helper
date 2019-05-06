// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        "/node_modules/",
    ],

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ["text"],
    
    // The test environment that will be used for testing
    testEnvironment: "node",
};
