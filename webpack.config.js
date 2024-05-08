const path = require('path');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {extensions: ['.ts', '.tsx']},
    plugins: [
        new HTMLWebpackPlugin({template: './template.html'}),
    ],
    module: {
        rules: [
            {
                test: /.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env']}
                }
            },
            {
                test: /\.(css)$/,
                use: {loader: 'css-loader'},
            },
            {
                test: /\.(scss)$/,
                use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {
                    loader: 'postcss-loader',
                    options: {postcssOptions: {plugins: () => [autoprefixer]}}
                },
                {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: {loader: 'file-loader'}
            },

        ]
     }
};