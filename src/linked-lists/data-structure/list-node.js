'use strict';

module.exports = ListNode;

/**
 * List node
 * @param {*} value
 * @constructor
 */
function ListNode(value) {

	/**
	 * Value in the node
	 * @type {*}
	 */
	this.value = value;

	/**
	 * Next node in a list
	 * @type {ListNode}
	 */
	this.next = null;
}

/**
 * Append value to the linked list
 * @param {*} value
 * @return {ListNode}
 */
ListNode.prototype.append = function (value) {
	var next = new ListNode(value);
	this.next = next;
	return next;
};

/**
 * Prepend value to the linked list
 * @param {*} value
 * @return {ListNode}
 */
ListNode.prototype.prepend = function (value) {
	var previous = new ListNode(value);
	previous.next = this;
	return previous;
};

/**
 * Print tail of a list from the node
 * @return {string}
 */
ListNode.prototype.toString = function () {
	var self = this,
		tail = [];
	while (self) {
		tail.push(self.value);
		self = self.next;
	}

	return '[' + tail.join(', ') + ']';
};