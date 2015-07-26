'use strict';

var solver = require('../../src/trees/min-bst-from-sorted-array'),
	checker = require('../../src/trees/in-order-traversal'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Build minimum-height BST from sorted array', function () {
		it('should make a minimum binary search tree', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.deepEqual(
				checker.inOrderTraversal(
					solver.makeMinBSTFromSortedArray([1, 3, 5, 6, 7, 8])),
				checker.inOrderTraversal(tree.root)
			);
		});
	});
});