/* jslint node: true */
'use strict';

var fs = require('fs');
var SprocketsChain = require('sprockets-chain');

function RailsSprocketsDeps(paths) {
  if (typeof paths === 'undefined' || paths === null) {
    paths = [];
  }
  this.sc = new SprocketsChain;
  this.sc.appendPath('app/assets/javascripts');
  this.sc.appendPath('app/assets/stylesheets');
  this.sc.appendExtensions('css', 'scss');
  this.assetPaths = paths;
  this.assetPaths.forEach(function(p) { this.sc.appendPath(p); });
};

RailsSprocketsDeps.prototype.resolve = function(filename) {
  return this.sc.depChain(file);
};

module.exports = {
  create: function(paths) { return new RailsSprocketsDeps(paths); }
};
