'use strict';

module.exports = {

	/**
	 * Find kth largest node
	 * @param {TreeNode} root
	 * @param {number} k
	 * @return {TreeNode}
	 */
	findKthLargestNode: function (root, k) {
		var smallestNodes = this._findLargestNodes(root, k);
		if (smallestNodes.length === k) {
			return smallestNodes[k - 1];
		}

		return null;
	},

	/**
	 * Find k largest nodes
	 * @param {TreeNode} node
	 * @param {number} k
	 * @return {Array[TreeNode]}
	 * @private
	 */
	_findLargestNodes: function (node, k) {
		if (!node) {
			return [];
		}

		var largestList;

		largestList = this._findLargestNodes(node.right, k);

		largestList.push(node);

		if (largestList.length >= k) {
			return largestList.slice(0, k);
		}

		largestList = largestList.concat(
			this._findLargestNodes(node.left, k - largestList.length)
		);

		largestList = largestList.slice(0, k);

		return largestList;
	}
};