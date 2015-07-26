'use strict';

module.exports = {
	removeDuplicatesUsingHash: function (head) {
		if (!head || !head.next) {
			return head;
		}

		var hash = {},
			nextNode,
			node = head;

		hash[node.value] = 0;

		while (node.next) {
			nextNode = node.next;

			if (!(nextNode.value in hash)) {
				hash[nextNode.value] = 0;
				node = nextNode;
				nextNode = nextNode.next;
				continue;
			}

			hash[nextNode.value]++;
			node.next = nextNode.next;
			nextNode = nextNode.next;
		}

		return head;
	}
};