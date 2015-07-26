'use strict';

var solver = require('../../src/strings/compress'),
	assert = require('assert');

describe('Strings', function () {
	describe('Compress the string', function () {
		it('should compress "aabbbcccd" to "a2b3c3d1"', function () {
			assert.equal(solver.compress('aabbbcccd'), 'a2b3c3d1');
		});

		it('should not compress "abcc" to "a1b1c2"', function () {
			assert.equal(solver.compress('abcc'), 'abcc');
		});
	});
});