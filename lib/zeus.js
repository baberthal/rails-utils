/* jslint node: true */
'use strict';

var fs = require('fs');

module.exports = {
  running: function(callback, errorHandler) {
    if (typeof errorHandler === 'undefined' || errorHandler === null) {
      errorHandler = function(e) { console.error(e); };
    }

    fs.stat('.zeus.sock', function(err, stats) {
      if (err) {
        errorHandler(err);
      } else if (stats.isSocket()) {
        callback();
      }
    });
  },

  runningSync: function() {
    try {
      var stats = fs.statSync('.zeus.sock');
      return stats.isSocket();
    } catch (e) {
      console.error(e);
      return false;
    }
  }
};
