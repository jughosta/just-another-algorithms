'use strict';

module.exports = {

	/**
	 * In-order traversal
	 * @param {TreeNode} node
	 * @return {Array[number]}
	 */
	inOrderTraversal: function (node) {
		var traversal = [];
		if (node === null) {
			return [];
		}

		traversal = traversal.concat(this.inOrderTraversal(node.left));
		traversal = traversal.concat(node.key);
		traversal = traversal.concat(this.inOrderTraversal(node.right));

		return traversal;
	},

	/**
	 * In-order traversal
	 * Using stack
	 * @param {TreeNode} node
	 * @return {Array[number]}
	 */
	inOrderTraversalUsingStack: function (node) {
		var stack = [],
			traversal = [],
			current = node;

		if (!node) {
			return [];
		}

		stack.push(current);

		while (stack.length) {
			current = stack[stack.length - 1];

			if (current) {
				if (!current.isVisited) {
					stack.push(current.left);
				} else {
					traversal.push(current.key);
					stack.pop();
					stack.push(current.right);
				}
				continue;
			}

			stack.pop();
			if (stack.length) {
				stack[stack.length - 1].isVisited = true;
			}
		}

		return traversal;
	}
};