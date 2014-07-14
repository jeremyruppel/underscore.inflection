/**
 * Export underscore globally
 */
global._ = require('underscore');

/**
 * Export `expect` globally
 */
global.expect = require('chai').expect;

/**
 * Require the subject under test
 */
require('../src/underscore.inflection');
