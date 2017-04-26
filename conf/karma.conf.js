const path = require('path');
const conf = require('./index');
const webpackConfig = require('./webpack.conf');

module.exports = function (config) {
    let configuration = {
        files: [
            'tests/index.js'
        ],
        basePath: '../',
        webpack: webpackConfig,

        singleRun: true,

        autoWatch: false,

        logLevel: config.LOG_WARN,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            require('karma-webpack'),
            'karma-coverage',
            'karma-nyan-reporter',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            require('karma-sourcemap-loader')
        ],

        reporters: [
            'nyan',
            'coverage'
        ],

        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'}
            ]
        },

        preprocessors: {
            'tests/index.js': ['webpack', 'sourcemap']
        },

        webpackMiddleware: {
            noInfo: 'errors-only'
        }
    };

    // This block is needed to execute Chrome on Travis
    // If you ever plan to use Chrome and Travis, you can keep it
    // If not, you can safely remove it
    // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
    if (configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
        configuration.customLaunchers = {
            'chrome-travis-ci': {
                base: 'Chrome',
                flags: ['--no-sandbox']
            },
        };
        configuration.browsers = ['chrome-travis-ci'];
    }

    config.set(configuration);
};
