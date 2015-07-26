'use strict';

var solver = require('../../src/trees/in-order-traversal'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('In-order traversal', function () {
		it('should print tree in-order traversal (using recursion)', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.deepEqual(
				solver.inOrderTraversal(tree.root),
				[1, 3, 5, 6, 7, 8]
			);
		});

		it('should print tree in-order traversal (using stack)', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.deepEqual(
				solver.inOrderTraversalUsingStack(tree.root),
				[1, 3, 5, 6, 7, 8]
			);
		});
	});
});