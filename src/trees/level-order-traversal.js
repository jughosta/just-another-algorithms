'use strict';

module.exports = {

	/**
	 * Level-order traversal
	 * @param {TreeNode} node
	 * @return {Array[number]}
	 */
	levelOrderTraversal: function (node) {
		var queue = [],
			current,
			traversal = [];

		queue.push(node);

		while (queue.length) {
			current = queue.shift(); // take first
			traversal.push(current.key);

			if (current.left) {
				queue.push(current.left);
			}

			if (current.right) {
				queue.push(current.right);
			}
		}

		return traversal;
	},

	/**
	 * Level by level traversal
	 * @param {TreeNode} node
	 * @param {Array[Array[number]]} keysByLevel
	 * @param {number} level
	 * @return {Array[Array[number]]}
	 */
	levelByLevelTraversal: function (node, keysByLevel, level) {
		keysByLevel = keysByLevel || [];
		level = level || 0;

		if (!node) {
			return keysByLevel;
		}

		if (keysByLevel.length === level) {
			keysByLevel.push([]); // row of level
		}

		this.levelByLevelTraversal(node.left, keysByLevel, level + 1);
		keysByLevel[level].push(node.key);
		this.levelByLevelTraversal(node.right, keysByLevel, level + 1);

		return keysByLevel;
	}
};