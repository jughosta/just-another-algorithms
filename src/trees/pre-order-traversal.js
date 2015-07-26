'use strict';

module.exports = {

	/**
	 * Pre-order traversal
	 * @param {TreeNode} node
	 * @return {Array[number]}
	 */
	preOrderTraversal: function (node) {
		var traversal = [];
		if (node === null) {
			return [];
		}

		traversal = traversal.concat(node.key);
		traversal = traversal.concat(this.preOrderTraversal(node.left));
		traversal = traversal.concat(this.preOrderTraversal(node.right));

		return traversal;
	}
};