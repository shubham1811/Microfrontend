const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const PackageJson = require('../package.json');
const commonWebpack = require('./webpack.common');


const prodconfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: PackageJson.dependencies
        })
    ]
}
module.exports = merge(commonWebpack, prodconfig);