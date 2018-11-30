'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  exports.logger = {
    dir: path.join(appInfo.baseDir, 'logs'),
    level: 'NONE'
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [];

  return config;
};
