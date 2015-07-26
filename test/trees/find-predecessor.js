'use strict';

var solver = require('../../src/trees/find-predecessor'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Find a predecessor for a BST node', function () {
		it('should find a successor', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			// for 3 => 1
			assert.equal(solver.findPredecessor(tree.root.left.right).key, 1);
		});

		it('should find a predecessor', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			// for 6 => 5
			assert.equal(solver.findPredecessor(tree.root.right.left).key, 5);
		});
	});
});