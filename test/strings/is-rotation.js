'use strict';

var solver = require('../../src/strings/is-rotation'),
	assert = require('assert');

describe('Strings', function () {
	describe('Assume you have a method isSubstring which checks if one word is ' +
		'a substring of another.Given two strings, s1 and s2, write code ' +
		'to check if s2 is a rotation of s1 using only one call to ' +
		'isSubstring (e.g.,"waterbottle" is a rotation of "erbottlewat").',
		function () {
			it('"bookkeeper" should contain "keep"', function () {
				assert.ok(solver.isSubstring('keep', 'bookkeeper'));
			});

			it('"bookkeeper" should not contain "boss"', function () {
				assert.ok(!solver.isSubstring('boss', 'bookkeeper'));
			});

			it('"bookkeeper" is a rotation of "keeperbook"', function () {
				assert.ok(solver.isRotation('bookkeeper', 'keeperbook'));
			});

			it('"bookkeeper" is not a rotation of "keepbooker"', function () {
				assert.ok(!solver.isRotation('bookkeeper', 'keepbooker'));
			});
		});
});