'use strict';

var path = require('path');

module.exports = {
  contentBase: path.join(process.cwd(), 'dist'),
  clientLogLevel: 'info',
  port: process.env.NODE_ENV === 'test' ? 8081 : 8080,
  inline: true,
  historyApiFallback: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  }
};
