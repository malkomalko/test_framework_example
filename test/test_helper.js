var should = require('should');
var sinon = require('sinon');

exports.it = function(exports) {
  return function(statement, callback) {
    exports['test: ' + statement] = function(done) {
      var sandbox = sinon.sandbox.create();
      sandbox.finish = function() {
        sandbox.restore();
        done();
      }
      callback(sandbox);
    }
  };
};

