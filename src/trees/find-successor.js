'use strict';

var searcher = require('../trees/find-minimum');

module.exports = {

	/**
	 * Find successor for a node on a BST
	 * @param {TreeNode} node
	 * @return {TreeNode}
	 */
	findSuccessor: function (node) {
		if (!node) {
			return null;
		}

		if (node.right) {
			return searcher.findMinimum(node.right);
		}

		var parent = node.parent;

		while (parent && parent.right === node) {
			node = parent;
			parent = parent.parent;
		}

		return parent;
	}
};