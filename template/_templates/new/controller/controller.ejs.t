---
to: app/controller/<%= h.inflection.dasherize(name) %>.js
---
'use strict';

const { Controller } = require('@weibo/terra');

class <%= h.inflection.dasherize(name) %>Controller extends Controller {
  async index() {
    this.ctx.body = 'Hello World!';
  }
}

module.exports = <%= h.inflection.dasherize(name) %>Controller;
