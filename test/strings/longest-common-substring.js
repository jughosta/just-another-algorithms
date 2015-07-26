'use strict';

var solver = require('../../src/strings/longest-common-substring'),
	assert = require('assert');

describe('Strings', function () {
	describe('Find longest common substring', function () {
		it('should return "bcd" for "abcdef" and "gbcdh"', function () {
			assert.equal(solver.findLongestCommonSubstring('abcdef', 'gbcdh'),
				'bcd');
		});
	});
});