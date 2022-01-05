module.exports={
    setupFilesAfterEnv:['jest-enzyme'],
    testEnvironment: 'enzyme',
    testEnvironmentOptions:{
        enzymeAdapter:'react16'
    },
    transform:{
        '.+\\.(js|jsx|ts|tsx)$':'<rootDir>/jest-preprocess.js'
    },
    collectCoverageFrom:[
        '/components/*/*.js',
        '!/components/*/*tw-styles.js',
        '!/components/*/test/*'
    ],
    testRegex:'(\\.(test|spec))\\.(jsx|js)',
    testPathIgnorePatterns:[
        '/node_modules/',
        '/.next/',

    ],
    setupFiles:['<rootDir>/jest-setup.js']
}