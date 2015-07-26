'use strict';

var TreeNode = require('../trees/data-structure/tree-node');

module.exports = {

	/**
	 * Given a sorted (increasing order) array with unique integer elements,
	 * write an algorithm to create a binary search tree with minimal height.
	 * @param {Array[number]} array
	 * @return {TreeNode}
	 */
	makeMinBSTFromSortedArray: function (array) {
		return this._makeMinBST(array, 0, array.length - 1);
	},

	/**
	 * Make min BST
	 * @param {Array[number]} array
	 * @param {number} left
	 * @param {number} right
	 * @return {TreeNode}
	 * @private
	 */
	_makeMinBST: function (array, left, right) {
		if (right < left) {
			return null;
		}
		var middle = Math.floor((left + right) / 2);

		var treeNode = new TreeNode(array[middle]);
		treeNode.left = this._makeMinBST(array, left, middle - 1);
		treeNode.right = this._makeMinBST(array, middle + 1, right);

		return treeNode;
	}
};