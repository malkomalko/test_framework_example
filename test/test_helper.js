var should = require('should');
var sinon = require('sinon');

exports.it = function(exports) {
  return function(statement, callback) {
    exports['test: ' + statement] = function(test, assert) {
      var sandbox = sinon.sandbox.create();
      sandbox.assert = assert;
      sandbox.finish = function() {
        sandbox.restore();
        test.finish();
      };
      sandbox.skip = function() {
        sandbox.restore();
        test.skip();
      };
      callback(sandbox);
    };
  };
};

