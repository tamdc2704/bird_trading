const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './index.js',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html'})
    ]
}