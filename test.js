var assert = require('assert');
var expressDefaults = require('./');

var sample = {
  params: {
    foo: 5
  },
  query: {
    boo: 4
  }
};

var called;
var req;
var res;
var sut;

// without a spec
sut = expressDefaults();
called = false;
req = null;
res = null;
sut(req, res, function() {
  called = true;
});
assert.ok(called);

// should not override request values
sut = expressDefaults(sample);
called = false;
req = {params: {foo: 6}, query: {boo: 10}};
res = null;
sut(req, res, function() {
  called = true;
});
assert.equal(req.params.foo, 6);
assert.equal(req.query.boo, 10);
assert.ok(called);

// should set undefined request values
sut = expressDefaults(sample);
called = false;
req = {params: {}, query: {}};
res = null;
sut(req, res, function() {
  called = true;
});
assert.equal(req.params.foo, 5);
assert.equal(req.query.boo, 4);
assert.ok(called);
