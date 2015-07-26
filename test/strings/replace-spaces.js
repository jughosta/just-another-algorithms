'use strict';

var solver = require('../../src/strings/replace-spaces'),
	assert = require('assert');

describe('Strings', function () {
	describe('Write a method to replace all spaces in a string with "%20". ' +
		'You may assume that the string has sufficient space at the end ' +
		'of the string to hold the additional characters, ' +
		'and that you are given the "true" length of the string', function () {
		it('should replace spaces', function () {
			assert.equal(solver.replaceSpaces('a b cc f ro'),
				'a%20b%20cc%20f%20ro');
		});
	});
});