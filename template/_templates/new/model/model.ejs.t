---
to: app/model/<%= h.inflection.dasherize(name) %>.js
---
'use strict';

module.exports = app => {
  const { STRING, TEXT } = app.Sequelize;

  const <%= h.inflection.dasherize(name) %> = app.model.define('promote_setting', {
    key: { type: STRING, primaryKey: true },
    value: TEXT,
  });

  return <%= h.inflection.dasherize(name) %>;
};
