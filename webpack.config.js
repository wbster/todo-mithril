const path = require('path')

/** @type {import("webpack").Configuration} */
module.exports = {
    entry: {
        main: path.join(__dirname, './src/index.js')
    },
    output: {
        path: path.join(__dirname, './dist')
    }
}