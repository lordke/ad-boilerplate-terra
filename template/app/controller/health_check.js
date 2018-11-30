'use strict';

const { Controller } = require('@weibo/terra');

class HealthCheckController extends Controller {
  async index() {
    this.ctx.body = 'OK';
  }
}

module.exports = HealthCheckController;
