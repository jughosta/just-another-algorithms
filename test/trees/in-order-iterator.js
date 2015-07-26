'use strict';

var solver = require('../../src/trees/in-order-iterator'),
	BinaryTree = require('../../src/trees/data-structure/binary-tree'),
	assert = require('assert');

describe('Trees', function () {
	describe('Build a in-order iterator', function () {
		it('should iterate a tree like in-order traversal', function () {
			var tree = new BinaryTree();
			tree.add(5).add(1).add(3).add(7).add(6).add(8);

			var iterator = solver.inOrderIterator(tree.root);
			assert.equal(iterator.next().key, 1);
			assert.equal(iterator.next().key, 3);
			assert.equal(iterator.next().key, 5);
			assert.equal(iterator.next().key, 6);
			assert.equal(iterator.next().key, 7);
			assert.equal(iterator.next().key, 8);
			assert.equal(iterator.next(), null);
		});
	});
});