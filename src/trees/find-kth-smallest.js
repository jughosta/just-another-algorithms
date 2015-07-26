'use strict';

module.exports = {

	/**
	 * Find kth smallest node
	 * @param {TreeNode} root
	 * @param {number} k
	 * @return {TreeNode}
	 */
	findKthSmallestNode: function (root, k) {
		var smallestNodes = this._findLargestNodes(root, k);
		if (smallestNodes.length === k) {
			return smallestNodes[k - 1];
		}

		return null;
	},

	/**
	 * Find k smallest nodes
	 * @param {TreeNode} node
	 * @param {number} k
	 * @return {Array[TreeNode]}
	 * @private
	 */
	_findLargestNodes: function (node, k) {
		if (!node) {
			return [];
		}

		var smallestList;

		smallestList = this._findLargestNodes(node.left, k);

		smallestList.push(node);

		if (smallestList.length >= k) {
			return smallestList.slice(0, k);
		}

		smallestList = smallestList.concat(
			this._findLargestNodes(node.right, k - smallestList.length)
		);

		smallestList = smallestList.slice(0, k);

		return smallestList;
	}
};