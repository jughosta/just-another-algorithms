'use strict';

var solver = require('../../src/trees/find-kth-largest'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Find the kth largest node', function () {
		it('should find the kth largest', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);
			assert.equal(solver.findKthLargestNode(tree.root, 3).key, 6);
		});
	});
});