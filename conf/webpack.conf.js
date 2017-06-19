const webpack = require('webpack');
const conf = require('./index');

const ENV = process.env.NODE_ENV || 'dev';
const PROD = ENV === 'production';
const TEST = ENV === 'test' || ENV === 'test-watch';

let webpackConf = {
    entry: !TEST ? conf.paths.index.js : undefined,
    output: !TEST ? {
        path: conf.paths.dist,
        filename: conf.paths.index.name,
        library: conf.names.module,
        libraryTarget: 'umd'
    } : {},
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'ng-annotate-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: 'es2015',
                            minified: PROD
                        }
                    }
                ]
            }
        ]
    },
    devtool: PROD ? 'source-map' : 'inline-source-map',
    plugins: []
};

if (PROD) {
    webpackConf.plugins.push(new webpack.optimize.UglifyJsPlugin());
}


module.exports = webpackConf;
