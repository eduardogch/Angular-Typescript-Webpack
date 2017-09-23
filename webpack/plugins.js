'use strict';

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = [
    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
        template: '../src/index.html',
        chunksSortMode: 'dependency'
    }),

    new ExtractTextPlugin({
        filename: 'css/bundle.css'
    }),

    new CopyWebpackPlugin([{from: '../src'}])
];
