---
to: app/middleware/<%= h.inflection.dasherize(name) %>.js
---
'use strict';

module.exports = () => {
  return async function <%= h.inflection.dasherize(name) %>(ctx, next) {

  };
};
