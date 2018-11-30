'use strict';

const terra = require('@weibo/terra');

const workers = Number(process.argv[2] || require('os').cpus().length);
terra.startCluster({
  workers,
  baseDir: __dirname,
});
