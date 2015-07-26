'use strict';

module.exports = {

	/**
	 * Get a height of a binary tree
	 * @param {TreeNode} node
	 * @return {number}
	 */
	getHeight: function (node) {
		if (!node) {
			return 0;
		}

		return (Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1);
	}
};