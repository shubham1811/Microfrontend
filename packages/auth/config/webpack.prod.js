const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const PackageJson = require('../package.json');
const commonWebpack = require('./webpack.common');


const prodconfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            shared: PackageJson.dependencies
        })
    ]
}
module.exports = merge(commonWebpack, prodconfig);