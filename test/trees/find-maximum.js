'use strict';

var solver = require('../../src/trees/find-maximum'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Find a maximum in a BST subtree', function () {
		it('should find a maximum', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.equal(solver.findMaximum(tree.root).key, 8);
		});
	});
});