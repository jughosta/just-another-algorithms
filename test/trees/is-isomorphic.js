'use strict';

var solver = require('../../src/trees/is-isomorphic'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Is tree isomorphic to other tree?', function () {
		it('should be isomorphic', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);

			var otherTree = new BinaryTree();
			otherTree.add(6).add(2).add(4).add(8).add(7).add(9);
			assert.ok(solver
				.isTreeIsomorphicToOtherTree(tree.root, otherTree.root));
		});

		it('should not be isomorphic', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);

			var otherTree = new BinaryTree();
			otherTree.add(6).add(2).add(4).add(8).add(7);
			assert.ok(!solver
				.isTreeIsomorphicToOtherTree(tree.root, otherTree.root));
		});
	});
});