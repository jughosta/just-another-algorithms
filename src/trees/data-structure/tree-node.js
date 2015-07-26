'use strict';

module.exports = TreeNode;

function TreeNode(key, parent) {
	this.key = key;
	this.left = null;
	this.right = null;
	this.parent = parent || null;
	this.isVisited = false;
}