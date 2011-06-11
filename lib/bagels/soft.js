var fs = require('fs');

module.exports = {
  asyncFunc: function(callback) {
    fs.readFile('/tmp/hello.txt', 'utf8', function(err, result) {
      callback(null, result);
    })
  }
};

