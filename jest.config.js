module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js'
    ],
    automock: false,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testURL: 'http://localhost',
    testEnvironment: 'node',
    collectCoverageFrom: [
        'src/**/*.{js,ts,tsx}',
        '!src/**/*.d.{ts,tsx}'
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/'
    ],
    coverageReporters: [
        'html',
        'text',
        'text-summary'
    ],
};