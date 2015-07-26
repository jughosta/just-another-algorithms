'use strict';

var solver = require('../../src/strings/is-palindrome'),
	assert = require('assert');

describe('Strings', function () {
	describe('Is the string a palindrome?', function () {
		it('should be a palindrome', function () {
			assert.ok(solver.isPalindrome('abcba'));
		});

		it('should not be a palindrome', function () {
			assert.ok(!solver.isPalindrome('abcd'));
		});

		it('the empty string should be a palindrome', function () {
			assert.ok(solver.isPalindrome(''));
		});
	});
});