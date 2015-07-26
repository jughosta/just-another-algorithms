'use strict';

var TreeNode = require('../data-structure/tree-node');

module.exports = BinaryTree;

/**
 * Binary tree
 * @constructor
 */
function BinaryTree() {

	/**
	 * Root
	 * @type {TreeNode}
	 */
	this.root = null;
}

/**
 * Add tree node
 * @param {number} key
 */
BinaryTree.prototype.add = function (key) {
	var targetNode = null,
		node = this.root;

	while (node !== null) {
		targetNode = node;
		if (node.key > key) {
			node = node.left;
		} else {
			node = node.right;
		}
	}

	var newNode = new TreeNode(key, targetNode);

	if (targetNode === null) {
		this.root = newNode; // tree was empty
	} else if (targetNode.key > key) {
		targetNode.left = newNode;
	} else {
		targetNode.right = newNode;
	}

	return this;
};

/**
 * Add tree nodes from array
 * @param {Array[number]} elements
 */
BinaryTree.prototype.addFromArray = function (elements) {
	for (var i = 0; i < elements.length; i++) {
		if (typeof elements[i] !== 'number') {
			continue;
		}
		this.add(elements[i]);
	}
};

/**
 * Search node by key
 * @param {number} key
 * @param {TreeNode} node
 * @return {TreeNode}
 */
BinaryTree.prototype.search = function (key, node) {
	node = node || this.root;

	if (!node || (node.key === key)) {
		return node;
	}

	if (node.key > key) {
		return this.search(key, node.left);
	}

	return this.search(key, node.right);
};