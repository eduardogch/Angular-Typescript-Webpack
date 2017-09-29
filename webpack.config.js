'use strict';
var path = require('path');

module.exports = {
    entry: require('./webpack/entry'),

    context: path.join(process.cwd(), 'src'),

    output: require('./webpack/output'),

    plugins: require('./webpack/plugins'),

    resolve: require('./webpack/resolve'),

    devServer: require('./webpack/dev-server'),

    devtool: 'source-map'
};