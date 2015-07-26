define(function () {
	'use strict';

	/**
	 * Tree node
	 * @param {Number} key
	 * @param {Node} parent
	 * @constructor
	 */
	var Node = function (key, parent) {
		this.left = null;
		this.right = null;
		this.parent = parent || null;
		this.key = key;
	};

	/**
	 * Binary tree
	 * @constructor
	 */
	var BinaryTree = function () {

		/**
		 * Root of tree
		 * @type {Node}
		 */
		this._root = null;
	};

	/**
	 * Root of tree
	 * @type {Node}
	 */
	BinaryTree.prototype._root = null;

	/**
	 * Add nodes from array of keys
	 * @param {Array.<Number>} elements
	 */
	BinaryTree.prototype.addFromArray = function (elements) {
		for (var i = 0; i < elements.length; i++) {
			if (typeof elements[i] != 'number') {
				continue;
			}
			this.add(elements[i]);
		}
	};

	/**
	 * Add node
	 * @param {Number} key
	 */
	BinaryTree.prototype.add = function (key) {
		var targetNode = null,
			node = this._root;

		while (node !== null) {
			targetNode = node;
			if (node.key > key) {
				node = node.left;
			} else {
				node = node.right;
			}
		}

		var newNode = new Node(key, targetNode);

		if (targetNode === null) {
			this._root = newNode; // tree was empty
		} else if (targetNode.key > key) {
			targetNode.left = newNode;
		} else {
			targetNode.right = newNode;
		}
	};

	/**
	 * Search key
	 * @param {Number} key
	 * @param {Node} node
	 * @return {Node}
	 */
	BinaryTree.prototype.search = function (key, node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		if (!node || node.key === key) {
			return node;
		}

		if (node.key > key) {
			return this.search(key, node.left);
		}

		return this.search(key, node.right);
	};

	/**
	 * In order traversal
	 * @param {Node} node
	 * @return {String}
	 */
	BinaryTree.prototype.inOrderTraversal = function (node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		var traversalString = '';
		if (node === null) {
			return traversalString;
		}

		traversalString += this.inOrderTraversal(node.left);
		traversalString += node.key;
		traversalString += this.inOrderTraversal(node.right);

		return traversalString;
	};

	/**
	 * Pre order traversal
	 * @param {Node} node
	 * @return {String}
	 */
	BinaryTree.prototype.preOrderTraversal = function (node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		var traversalString = '';
		if (node === null) {
			return traversalString;
		}

		traversalString += node.key;
		traversalString += this.preOrderTraversal(node.left);
		traversalString += this.preOrderTraversal(node.right);

		return traversalString;
	};

	/**
	 * Post order traversal
	 * @param {Number} node
	 * @return {String}
	 */
	BinaryTree.prototype.postOrderTraversal = function (node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		var traversalString = '';
		if (node === null) {
			return traversalString;
		}

		traversalString += this.postOrderTraversal(node.left);
		traversalString += this.postOrderTraversal(node.right);
		traversalString += node.key;

		return traversalString;
	};

	/**
	 * Find minimum
	 * @param {Node} node
	 * @return {Node}
	 */
	BinaryTree.prototype.findMinimum = function (node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		if (node === null) {
			return null;
		}

		var minNode = node;
		while (minNode.left !== null) {
			minNode = minNode.left;
		}
		return minNode;
	};

	/**
	 * Find maximum
	 * @param {Node} node
	 * @return {Node}
	 */
	BinaryTree.prototype.findMaximum = function (node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		if (node === null) {
			return null;
		}

		var maxNode = node;
		while (maxNode.right !== null) {
			maxNode = maxNode.right;
		}
		return maxNode;
	};

	/**
	 * Find successor
	 * @param {Number} key
	 * @return {Node}
	 */
	BinaryTree.prototype.findSuccessor = function (key) {
		var node = this.search(key);

		if (node === null) {
			return null;
		}

		if (node.right !== null) {
			return this.findMinimum(node.right);
		}

		var parent = node.parent;
		while (parent !== null && node == parent.right) {
			node = parent;
			parent = parent.parent;
		}

		return parent;
	};

	/**
	 * Find predecessor
	 * @param {Number} key
	 * @return {Node}
	 */
	BinaryTree.prototype.findPredecessor = function (key) {
		var node = this.search(key);

		if (node === null) {
			return null;
		}

		if (node.left !== null) {
			return this.findMaximum(node.left);
		}

		var parent = node.parent;
		while (parent !== null && parent.left === node) {
			node = parent;
			parent = parent.parent;
		}
		return parent;
	};

	/**
	 * Get height
	 * @param {Node} node
	 * @return {Number}
	 */
	BinaryTree.prototype.getHeight = function (node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		if (node === null) {
			return 0;
		}

		var treeHeight,
			leftSubTreeHeight = this.getHeight(node.left),
			rightSubTreeHeight = this.getHeight(node.right);

		treeHeight = (leftSubTreeHeight > rightSubTreeHeight) ?
			leftSubTreeHeight :
			rightSubTreeHeight;

		return (treeHeight + 1);
	};

	/**
	 * Level by level traversal
	 * @param {Node} node
	 * @param {Array.<String>} keysByLevel
	 * @param {Number} level
	 * @return {*}
	 */
	BinaryTree.prototype.levelByLevelTraversal =
		function (node, keysByLevel, level) {
			if (typeof node === 'undefined') {
				node = this._root;
				keysByLevel = [];
				level = 0;
			}

			if (node === null) {
				return keysByLevel;
			}

			if (keysByLevel.length === level) {
				keysByLevel.push(''); // for this level
			}

			this.levelByLevelTraversal(node.left, keysByLevel, level + 1);
			keysByLevel[level] += node.key;
			this.levelByLevelTraversal(node.right, keysByLevel, level + 1);

			return keysByLevel;
		};

	/**
	 * Level order traversal
	 * @return {String}
	 */
	BinaryTree.prototype.levelOrderTraversal = function () {
		var queue = [],
			node,
			resultString = '';
		queue.push(this._root);

		while (queue.length > 0) {
			node = queue.shift();
			resultString += node.key;
			if (node.left !== null) {
				queue.push(node.left);
			}
			if (node.right !== null) {
				queue.push(node.right);
			}
		}

		return resultString;
	};

	/**
	 * Iterative post order traversal
	 * @return {String}
	 */
	BinaryTree.prototype.iterativePostOrderTraversal = function () {
		var stack = [],
			node,
			resultString = '';

		stack.push(this._root);
		while (stack.length > 0) {
			node = stack[stack.length - 1];
			if (node.left !== null && !node.left.isVisited) {
				stack.push(node.left);
			} else if (node.right !== null && !node.right.isVisited) {
				stack.push(node.right);
			} else {
				resultString += node.key;
				node.isVisited = true;
				stack.pop();
			}
		}

		return resultString;
	};

	/**
	 * Find Kth smallest
	 * @param {Number} k
	 * @return {Number}
	 */
	BinaryTree.prototype.findKthSmallest = function (k) {
		if (k < 0) {
			return null;
		}
		var smallest = this.findKSmallest(k);
		if (smallest.length != k) {
			return null;
		}
		return smallest[k - 1];
	};

	/**
	 * Find array of smallest
	 * @param {Number} k
	 * @param {Node} node
	 * @return {Array.<Number>}
	 */
	BinaryTree.prototype.findKSmallest = function (k, node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		var smallestStack = [];

		if (!node) {
			return smallestStack;
		}

		smallestStack = smallestStack.concat(this.findKSmallest(k, node.left));

		if (smallestStack.length === k) {
			return smallestStack;
		}

		smallestStack.push(node.key);

		if (smallestStack.length === k) {
			return smallestStack;
		}

		smallestStack = smallestStack.concat(
			this.findKSmallest(k - smallestStack.length, node.right)
		);

		return smallestStack;
	};

	/**
	 * Find Kth largest
	 * @param {Number} k
	 * @return {Number}
	 */
	BinaryTree.prototype.findKthLargest = function (k) {
		if (k < 0) {
			return null;
		}
		var largest = this.findKLargest(k);
		if (largest.length != k) {
			return null;
		}
		return largest[k - 1];
	};

	/**
	 * Find array of largest
	 * @param {Number} k
	 * @param {Node} node
	 * @return {Array.<Number>}
	 */
	BinaryTree.prototype.findKLargest = function (k, node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		var largestStack = [];

		if (!node) {
			return largestStack;
		}

		largestStack = largestStack.concat(this.findKLargest(k, node.right));

		if (largestStack.length === k) {
			return largestStack;
		}

		largestStack.push(node.key);

		if (largestStack.length === k) {
			return largestStack;
		}

		largestStack = largestStack.concat(
			this.findKLargest(k - largestStack.length, node.left)
		);

		return largestStack;
	};

	/**
	 * Build in-order iterator
	 * @return {Iterator}
	 */
	BinaryTree.prototype.inOrderIterator = function () {
		return (function (el) {
			var Iterator = function (elements) {
				this.elements = elements;
				this.index = 0;
			};
			Iterator.prototype.next = function () {
				if (this.index >= this.elements.length) {
					return null;
				}
				return this.elements[this.index++];
			};
			return new Iterator(el);
		})(this.inOrderElementsOfTree());
	};

	/**
	 * Get in-order elements of tree
	 * @param {Node} node
	 * @return {Array.<Number>}
	 */
	BinaryTree.prototype.inOrderElementsOfTree = function (node) {
		if (typeof node === 'undefined') {
			node = this._root;
		}

		var elements = [];

		if (node === null) {
			return elements;
		}

		elements = elements.concat(this.inOrderElementsOfTree(node.left));

		elements.push(node.key);

		elements = elements.concat(this.inOrderElementsOfTree(node.right));

		return elements;
	};

	/**
	 * Is isomorphic to other tree (has same shape)
	 * @param {Node} tree
	 * @param {Node} selfTree
	 * @return {boolean}
	 */
	BinaryTree.prototype.isIsomorphicToTree = function (tree, selfTree) {
		if (typeof selfTree === 'undefined') {
			selfTree = this._root;
		}

		if (!tree && !selfTree) {
			return true;
		}

		if ((!tree && selfTree) || (tree && !selfTree)) {
			console.warn(tree, selfTree);
			return false;
		}

		return (this.isIsomorphicToTree(tree.left, selfTree.left) &&
			this.isIsomorphicToTree(tree.right, selfTree.right)
		);
	};

	/**
	 * Empty tree
	 */
	BinaryTree.prototype.empty = function () {
		this._root = null;
	};

	return BinaryTree;
});