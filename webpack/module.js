'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    rules: [
        {
            enforce: 'pre',
            test: /\.ts$/,
            loader: 'tslint-loader'
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff&name=/fonts/[name].[ext]"
        },
        {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=/fonts/[name].[ext]"
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?v=.+)?$/,
            loader: 'file-loader?name=images/[name].[hash].[ext]'
        },
        {
            loader: "html-loader?exportAsEs6Default",
            test: /\.html$/,
            exclude: /node_modules/,
        },
        {
            test: /\.ts$/,
            loader: 'ts-loader'
        }
    ]
};
