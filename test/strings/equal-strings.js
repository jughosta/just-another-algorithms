'use strict';

var solver = require('../../src/strings/equal-strings'),
	assert = require('assert');

describe('Strings', function () {
	describe('Has more equal strings than half of strings', function () {
		it('should return true for ["abc", "abc", "def"]', function () {
			assert.ok(solver
				.hasMoreEqualStringsThanTheHalfOfStrings(['abc', 'abc', 'def']));
		});

		it('should return true for ["abc", "abc"]', function () {
			assert.ok(solver
				.hasMoreEqualStringsThanTheHalfOfStrings(['abc', 'abc']));
		});

		it('should return false for ["abc", "abc", "def", "dhdh", "fgh"]',
			function () {
				assert.ok(!solver
					.hasMoreEqualStringsThanTheHalfOfStrings(
					['abc', 'abc', 'def', 'dhdh', 'fgh']
				));
			});

		it('should return true for ["abc"]', function () {
			assert.ok(solver.hasMoreEqualStringsThanTheHalfOfStrings(['abc']));
		});
	});
});