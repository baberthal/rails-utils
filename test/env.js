/* jslint node: true */
'use strict';

var utils = require('..');
var should = require('should');
require('mocha');

describe('env', function() {
  it('should exist', function(done) {
    should.exist(utils.env);
    done();
  });

  it('should return "development" by default', function(done) {
    should.equal(utils.env(), 'development');
    done();
  });

  describe('development', function() {
    it('returns true when the environment is development', function(done) {
      should.equal(utils.env.development(), true);
      done();
    });
  });
});
