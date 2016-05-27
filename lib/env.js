/* jslint node: true */
'use strict';

function env() {
  return process.env.RAILS_ENV || 'development';
};

env.production = function() {
  return env() === 'production';
};

env.development = function() {
  return env() === 'development';
};

module.exports = env;
