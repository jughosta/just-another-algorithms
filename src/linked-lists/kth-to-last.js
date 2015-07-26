'use strict';

/**
 * Implement an algorithm to find the kth to last element
 * of a singly linked list
 */
module.exports = {

	/**
	 * Find the k-th to last element of a singly linked list
	 * Using two cursors
	 * @param {ListNode} head
	 * @param {number} k
	 * @return {ListNode}
	 */
	kthToLast: function (head, k) {
		var p1 = head,
			p2 = head;

		for (var i = 0; i < k - 1; i++) {
			p1 = p1.next;
			if (!p1) {
				return null;
			}
		}

		while (p1.next) {
			p2 = p2.next;
			p1 = p1.next;
		}

		return p2;
	},

	/**
	 * Find the k-th to last element of a singly linked list
	 * Using recursion
	 * @param {ListNode} head
	 * @param {number} k
	 * @return {ListNode}
	 */
	kthToLastUsingRecursion: function (head, k) {
		var result = {
			count: 0
		};

		return countKthToLast(head, k, result);
	}
};

function countKthToLast (head, k, result) {
	if (!head) {
		return null;
	}

	var node = countKthToLast(head.next, k, result);
	result.count++;

	if (result.count === k) {
		return head;
	}

	return node;
}