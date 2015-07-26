'use strict';

module.exports = {

	/**
	 * Find maximum in a BST subtree
	 * @param {TreeNode} node
	 * @return {TreeNode}
	 */
	findMaximum: function (node) {
		if (!node) {
			return null;
		}

		var maxNode = node;
		while (maxNode.right) {
			maxNode = maxNode.right;
		}

		return maxNode;
	}
};