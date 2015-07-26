'use strict';

var solver = require('../../src/arrays/rotation'),
	assert = require('assert');

describe('Arrays', function () {
	describe('Given an image represented by an NxN matrix, where each pixel in ' +
		'the image is 4 bytes, write a method to rotate the image by 90 degrees. ' +
		'Can you do this in place?', function () {
		it('should rotate matrix', function () {
			assert.deepEqual(solver.rotateMatrix([
				[1, 2, 3, 4],
				[5, 6, 7, 8],
				[9, 10, 11, 12],
				[13, 14, 15, 16]
			]), [
				[13, 9, 5, 1],
				[14, 10, 6, 2],
				[15, 11, 7, 3],
				[16, 12, 8, 4]
			]);
		});
	});
});