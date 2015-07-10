var package = require('../package');
var bower = require('../bower');
var assert = require('assert');

describe('package', function() {
  it('has the same package name', function() {
    assert.equal(package.name, bower.name);
  });
  it('has the same package version', function() {
    assert.equal(package.version, bower.version);
  });
  it('requires the same version of underscore', function() {
    assert.equal(package.devDependencies.underscore, bower.dependencies.underscore);
  });
});
