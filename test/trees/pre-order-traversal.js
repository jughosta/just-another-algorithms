'use strict';

var solver = require('../../src/trees/pre-order-traversal'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Pre-order traversal', function () {
		it('should print tree pre-order traversal (using recursion)', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.deepEqual(
				solver.preOrderTraversal(tree.root),
				[5, 1, 3, 7, 6, 8]
			);
		});
	});
});