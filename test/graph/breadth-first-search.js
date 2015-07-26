'use strict';

var solver = require('../../src/graph/breadth-first-search'),
	assert = require('assert');

describe('Graph', function () {
	describe('Breadth first search', function () {
		it('should show traverse order', function () {
			var bfs = solver.breadthFirstSearch([
				[1, 1, 0, 0, 1, 0, 0],
				[1, 1, 1, 1, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0],
				[0, 1, 0, 1, 0, 0, 0],
				[1, 0, 0, 0, 1, 1, 1],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 0, 1]
			], 0);

			assert.deepEqual(bfs.traverseOrder, [0, 1, 4, 2, 3, 5, 6]);
			assert.deepEqual(bfs.parents, [-1, 0, 1, 1, 0, 4, 4]);
			assert.deepEqual(bfs.distances, [0, 1, 2, 2, 1, 2, 2]);
		});
	});
});