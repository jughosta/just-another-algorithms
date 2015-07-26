'use strict';

var solver = require('../../src/graph/depth-first-search'),
	assert = require('assert');

describe('Graph', function () {
	describe('Depth first search', function () {
		it('should show traverse order', function () {
			var dfs = solver.depthFirstSearch([
				[1, 1, 0, 0, 1, 0, 0],
				[1, 1, 1, 1, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0],
				[0, 1, 0, 1, 0, 0, 0],
				[1, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 1]
			], 0);

			assert.deepEqual(dfs.traverseOrder, [0, 1, 2, 3, 4, 5]);
			assert.deepEqual(dfs.colors, [2, 2, 2, 2, 2, 2, 0]);
			assert.deepEqual(dfs.timeIn, [0, 1, 2, 4, 7, 8, -1]);
			assert.deepEqual(dfs.timeOut, [11, 6, 3, 5, 10, 9, -1]);
		});
	});
});