'use strict';

var solver = require('../../src/trees/level-order-traversal'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Level-order traversal', function () {
		it('should print tree pre-order traversal', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.deepEqual(
				solver.levelOrderTraversal(tree.root),
				[5, 1, 7, 3, 6, 8]
			);
		});

		it('should print tree pre-order traversal (using recursion)', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.deepEqual(
				solver.levelByLevelTraversal(tree.root),
				[[5], [1, 7], [3, 6, 8]]
			);
		});
	});
});