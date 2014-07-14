/**
 * Export underscore globally
 */
global._ = require('underscore');

/**
 * Export `expect` globally
 */
global.expect = require('chai').expect;

/**
 *
 */
require('../src/underscore.inflection');
