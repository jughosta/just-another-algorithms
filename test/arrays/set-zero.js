'use strict';

var solver = require('../../src/arrays/set-zero'),
	assert = require('assert');

describe('Arrays', function () {
	describe('Write an algorithm such that if an element in an MxN matrix is 0, ' +
		'its entire row and column are set to 0', function () {
		it('should rotate matrix', function () {
			assert.deepEqual(solver.setZero([
				[1, 2, 3, 4],
				[5, 0, 7, 8],
				[9, 10, 11, 12],
				[13, 14, 0, 16]
			]), [
				[1, 0, 0, 4],
				[0, 0, 0, 0],
				[9, 0, 0, 12],
				[0, 0, 0, 0]
			]);
		});
	});
});