'use strict';

module.exports = {

	/**
	 * Implement a function to check if a binary tree is a binary search tree.
	 * @param {TreeNode} root
	 * @return {boolean}
	 */
	checkBinarySearchTree: function (root) {
		if (!root) {
			return true;
		}

		return this._checkBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
	},

	/**
	 * Check BST
	 * @param {TreeNode} node
	 * @param {number} min
	 * @param {number} max
	 * @return {boolean}
	 * @private
	 */
	_checkBST: function (node, min, max) {
		if (!node) {
			return true;
		}

		if (node.key <= min || node.key > max) {
			return false;
		}

		if (!this._checkBST(node.left, min, node.key)) {
			return false;
		}

		if (!this._checkBST(node.right, node.key, max)) {
			return false;
		}

		return true;
	}
};