'use strict';

var solver = require('../../src/strings/parentheses'),
	assert = require('assert');

describe('Strings', function () {
	describe('Print all combinations of n-pairs of parentheses', function () {
		it('should print parentheses', function () {
			assert.deepEqual(
				solver.generateParens(3),
				['((()))', '(()())', '(())()', '()(())', '()()()']
			);
		});
	});
});