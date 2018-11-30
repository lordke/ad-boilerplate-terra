---
to: app/service/<%= h.inflection.dasherize(name) %>.js
---
'use strict';

const { Service } = require('@weibo/terra');

class <%= h.inflection.dasherize(name) %> extends Service {

  async index() {

  }

}

module.exports = <%= h.inflection.dasherize(name) %>;
