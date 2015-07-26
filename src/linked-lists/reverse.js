'use strict';

var ListNode = require('../linked-lists/data-structure/list-node');

module.exports = {

	/**
	 * Reverse Linked list
	 * @param {ListNode} head
	 * @return {ListNode}
	 */
	reverse: function (head) {
		if (!head || !head.next) {
			return head;
		}

		var current = head.next,
			tail = new ListNode(head.value);

		while (current) {
			tail = tail.prepend(current.value);
			current = current.next;
		}

		return tail;
	}
};