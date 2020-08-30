const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin')
const JsConfigWebpackPlugin = require('js-config-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

/** @type {import("webpack").Configuration} */
module.exports = {
    entry: {
        main: path.join(__dirname, './src/index.js')
    },
    plugins: [
        new ScssConfigWebpackPlugin(),
        new CleanWebpackPlugin(),
        new JsConfigWebpackPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/',
    },
}