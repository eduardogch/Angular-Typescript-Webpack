'use strict';

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = [
    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
        template: '../public/index.html',
        chunksSortMode: 'dependency'
    }),

    new ExtractTextPlugin({
        filename: 'css/bundle.css'
    }),

    new CopyWebpackPlugin([{from: '../public'}]),

    new BrowserSyncPlugin({
        proxy: 'localhost:3000',
        port: 3001,
        notify: false,
        browser: 'google chrome',
        host: 'localhost',
        open: 'local'
    })
];
