'use strict';

var solver = require('../../src/strings/substring-indexes'),
	assert = require('assert');

describe('Strings', function () {
	describe('Find all indexes of the substring in the string', function () {
		it('should return [0,2,5] for ("ab", "ababvabba")', function () {
			assert.deepEqual(
				solver.findIndexesOfSubstringInTheString('ab', 'ababvabba'),
				[0, 2, 5]
			);
		});

		it('should return [0,1,2,3,6,7] for ("a", "aaaabbaa")', function () {
			assert.deepEqual(
				solver.findIndexesOfSubstringInTheString('a', 'aaaabbaa'),
				[0, 1, 2, 3, 6, 7]
			);
		});

		it('should return [0,3,6,9] for ("abc", "abcabcabcabc")', function () {
			assert.deepEqual(
				solver.findIndexesOfSubstringInTheString('abc', 'abcabcabcabc'),
				[0, 3, 6, 9]
			);
		});
	});

	describe('Build z-function for the string', function () {
		it('z-function for "aaaaa" is [0,4,3,2,1]', function () {
			assert.deepEqual(
				solver.buildZFunction('aaaaa'),
				[0, 4, 3, 2, 1]
			);
		});

		it('z-function for "abacaba" is [0,0,1,0,3,0,1]', function () {
			assert.deepEqual(
				solver.buildZFunction('abacaba'),
				[0, 0, 1, 0, 3, 0, 1]
			);
		});

		it('z-function for "aaabaab" is [0,2,1,0,2,1,0]', function () {
			assert.deepEqual(
				solver.buildZFunction('aaabaab'),
				[0, 2, 1, 0, 2, 1, 0]
			);
		});

		it('z-function for "abcabcabcabc" is [0,0,0,9,0,0,6,0,0,3,0,0]',
			function () {
				assert.deepEqual(
					solver.buildZFunction('abcabcabcabc'),
					[0, 0, 0, 9, 0, 0, 6, 0, 0, 3, 0, 0]
				);
			});
	});

	describe('Find shortest repeating substring in the string', function () {
		it('should return "abc" for "abcabcabcabc"', function () {
			assert.equal(
				solver.findShortestRepeatingSubstring('abcabcabcabc'),
				'abc'
			);
		});

		it('should return "a" for "aaaaa"', function () {
			assert.equal(solver.findShortestRepeatingSubstring('aaaaa'), 'a');
		});

		it('should return empty string for "abcabca"', function () {
			assert.equal(solver.findShortestRepeatingSubstring('abcabca'), '');
		});

		it('should return empty string for "abc"', function () {
			assert.equal(solver.findShortestRepeatingSubstring('abc'), '');
		});
	});
});