'use strict';

var solver = require('../../src/trees/get-height'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Get height of a binary tree', function () {
		it('should return height', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.equal(solver.getHeight(tree.root), 3);
		});

		it('should return height 2', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1);
			assert.equal(solver.getHeight(tree.root), 2);
		});

		it('should return height 1', function () {
			var tree = new BinaryTree();
			tree.add(5);
			assert.equal(solver.getHeight(tree.root), 1);
		});
	});
});