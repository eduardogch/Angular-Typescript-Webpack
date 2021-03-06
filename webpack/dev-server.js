'use strict';

var path = require('path');

module.exports = {
  contentBase: path.join(process.cwd(), 'dist'),
  clientLogLevel: 'info',
  port: 3000,
  inline: true,
  historyApiFallback: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  }
};
