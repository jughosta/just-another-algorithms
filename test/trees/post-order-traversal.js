'use strict';

var solver = require('../../src/trees/post-order-traversal'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Post-order traversal', function () {
		it('should print tree post-order traversal (using recursion)', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.deepEqual(
				solver.postOrderTraversal(tree.root), [3, 1, 6, 8, 7, 5]);
		});

		it('should print tree post-order traversal (using stack)', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.deepEqual(
				solver.postOrderTraversalUsingStack(tree.root),
				[3, 1, 6, 8, 7, 5]
			);
		});
	});
});