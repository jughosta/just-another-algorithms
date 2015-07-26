'use strict';

var solver = require('../../src/strings/reverse'),
	assert = require('assert');

describe('Strings', function () {
	describe('Reverse the string', function () {
		it('should reverse string with odd length', function () {
			assert.equal(solver.reverse('abcde'), 'edcba');
		});

		it('should reverse string with even length', function () {
			assert.equal(solver.reverse('abcd'), 'dcba');
		});

		it('should reverse string with zero length', function () {
			assert.equal(solver.reverse(''), '');
		});
	});
});