'use strict';

module.exports = {

	/**
	 * Is tree isomorphic to other tree (has same shape)
	 * @param {TreeNode} treeRoot
	 * @param {TreeNode} otherTreeRoot
	 * @return {boolean}
	 */
	isTreeIsomorphicToOtherTree: function (treeRoot, otherTreeRoot) {
		if (!treeRoot && !otherTreeRoot) {
			return true;
		}

		if (treeRoot && !otherTreeRoot || !treeRoot && otherTreeRoot) {
			return false;
		}

		return (
			this.isTreeIsomorphicToOtherTree(treeRoot.left, otherTreeRoot.left) &&
			this.isTreeIsomorphicToOtherTree(treeRoot.right, otherTreeRoot.right)
		);
	}
};