var testHelper = require('../test_helper');
var it = testHelper.it(exports);

var bagel = require('bagels/soft');

it('passes the first test', function(test) {
  test.assert.equal(4, 1+3);
  test.finish();
});

it('passes the second test', function(test) {
  bagel.asyncFunc(function(err, result) {
    result.should.include.string('hello');
    test.finish();
  })
});

it('properly uses the sandbox', function(test) {
  test.stub(bagel, 'asyncFunc').yields(null, 'chubby');

  bagel.asyncFunc(function(err, result) {
    result.should.include.string('chubby');
    test.finish();
  })
});

it('properly uses the sandbox again', function(test) {
  test.stub(bagel, 'asyncFunc').yields(null, 'bones');

  bagel.asyncFunc(function(err, result) {
    result.should.include.string('bones');
    test.finish();
  })
});

