'use strict';

var minimum = require('../trees/find-minimum'),
	successor = require('../trees/find-successor');

module.exports = {

	/**
	 * In-order iterator
	 * @param {TreeNode} root
	 * @return {InOrderIterator}
	 */
	inOrderIterator: function (root) {
		return new InOrderIterator(root);
	}
};

/**
 * In-order iterator implementation
 * @param {TreeNode} root
 * @constructor
 */
function InOrderIterator(root) {
	this.node = null;
	this.root = root;
}

/**
 * Get next node
 * @return {TreeNode}
 */
InOrderIterator.prototype.next = function () {
	if (!this.node) {
		this.node = minimum.findMinimum(this.root);
		return this.node;
	}

	this.node = successor.findSuccessor(this.node);
	return this.node;
};