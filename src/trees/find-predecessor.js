'use strict';

var searcher = require('../trees/find-maximum');

module.exports = {

	/**
	 * Find predecessor for a node on a BST
	 * @param {TreeNode} node
	 * @return {TreeNode}
	 */
	findPredecessor: function (node) {
		if (!node) {
			return null;
		}

		if (node.left) {
			return searcher.findMaximum(node.left);
		}

		var parent = node.parent;

		while (parent && parent.left === node) {
			node = parent;
			parent = parent.parent;
		}

		return parent;
	}
};