var should = require('should');
var sinon = require('sinon');

exports.it = function(exports) {
  return function(statement, callback) {
    exports['test: ' + statement] = function(test) {
      var sandbox = sinon.sandbox.create();
      sandbox.skip = function() {
        sandbox.restore();
        test.skip();
      };
      sandbox.finish = function() {
        sandbox.restore();
        test.finish();
      };
      callback(sandbox);
    }
  };
};

