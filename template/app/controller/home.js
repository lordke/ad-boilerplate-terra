'use strict';

const { Controller } = require('@weibo/terra');

class HomeController extends Controller {
  async hello() {
    this.ctx.body = 'hello';
  }
}

module.exports = HomeController;
