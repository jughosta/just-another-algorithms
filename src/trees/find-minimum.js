'use strict';

module.exports = {

	/**
	 * Find minimum in a BST subtree
	 * @param {TreeNode} node
	 * @return {TreeNode}
	 */
	findMinimum: function (node) {
		if (!node) {
			return null;
		}

		var minNode = node;
		while (minNode.left) {
			minNode = minNode.left;
		}

		return minNode;
	}
};