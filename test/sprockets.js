/* jslint node: true */
'use strict';

var utils = require('..');
var should = require('should');
require('mocha');

describe('sprockets', function() {
  it('should exist', function(done) {
    should.exist(utils.sprockets);
    done();
  });
});
