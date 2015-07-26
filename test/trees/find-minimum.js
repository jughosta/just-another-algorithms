'use strict';

var solver = require('../../src/trees/find-minimum'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Find minimum in a BST subtree', function () {
		it('should find minimum', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.equal(solver.findMinimum(tree.root).key, 1);
		});
	});
});