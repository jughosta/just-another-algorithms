'use strict';

module.exports = {

	/**
	 * Post-order traversal
	 * @param {TreeNode} node
	 * @return {Array[number]}
	 */
	postOrderTraversal: function (node) {
		var traversal = [];
		if (node === null) {
			return [];
		}

		traversal = traversal.concat(this.postOrderTraversal(node.left));
		traversal = traversal.concat(this.postOrderTraversal(node.right));
		traversal = traversal.concat(node.key);

		return traversal;
	},

	/**
	 * Post-order traversal
	 * Using stack
	 * @param {TreeNode} node
	 * @return {Array[number]}
	 */
	postOrderTraversalUsingStack: function (node) {
		var stack = [],
			current,
			traversal = [];

		stack.push(node);

		while (stack.length) {
			current = stack[stack.length - 1];

			if (current.left && !current.left.isVisited) {
				stack.push(current.left);
				continue;
			}

			if (current.right && !current.right.isVisited) {
				stack.push(current.right);
				continue;
			}

			traversal.push(current.key);
			current.isVisited = true;
			stack.pop();
		}

		return traversal;
	}
};