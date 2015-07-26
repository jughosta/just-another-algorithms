'use strict';

var solver = require('../../src/strings/unique-characters'),
	assert = require('assert');

describe('Strings', function () {
	describe('Implement an algorithm to determine if a string has ' +
		'all unique characters',
		function () {
			it('All characters in "abc" are unique (hash)', function () {
				assert.ok(solver.isUniqueCharactersInTheStringByHash('abc'));
			});

			it('Characters in "abcba" are not unique (hash)', function () {
				assert.ok(!solver.isUniqueCharactersInTheStringByHash('abcba'));
			});

			it('All characters in "abc" are unique (bit)', function () {
				assert.ok(
					solver.isUniqueCharactersInTheStringByBitwiseOperations('abc')
				);
			});

			it('Characters in "abcba" are not unique (bit)', function () {
				assert.ok(!solver
						.isUniqueCharactersInTheStringByBitwiseOperations('abcba')
				);
			});
		});
});