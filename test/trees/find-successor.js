'use strict';

var solver = require('../../src/trees/find-successor'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Find a successor for a BST node', function () {
		it('should find a successor', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			// for 3 => 5
			assert.equal(solver.findSuccessor(tree.root.left.right).key, 5);
		});

		it('should find a successor', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			// for 6 => 7
			assert.equal(solver.findSuccessor(tree.root.right.left).key, 7);
		});
	});
});