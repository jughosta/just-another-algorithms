'use strict';

var solver = require('../../src/trees/check-bst'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Check BST', function () {
		it('should check if a binary tree is a binary search tree', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.ok(solver.checkBinarySearchTree(tree.root));
		});
	});
});