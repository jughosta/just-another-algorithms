'use strict';

var solver = require('../../src/graph/find-shortest-path'),
	assert = require('assert');

describe('Graph', function () {
	describe('Find shortest path', function () {
		it('should show path from 0 to 5', function () {
			var path = solver.findShortestPath([
				[1, 1, 0, 0, 1, 0, 0],
				[1, 1, 1, 1, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0],
				[0, 1, 0, 1, 0, 0, 0],
				[1, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 1]
			], 2, 5);

			assert.deepEqual(path, [2, 1, 0, 4, 5]);
		});

		it('should determine an absence of path', function () {
			var path = solver.findShortestPath([
				[1, 1, 0, 0, 1, 0, 0],
				[1, 1, 1, 1, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0],
				[0, 1, 0, 1, 0, 0, 0],
				[1, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 1]
			], 2, 6);

			assert.deepEqual(path, null);
		});
	});
});