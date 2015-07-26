'use strict';

var solver = require('../../src/linked-lists/remove-duplicates'),
	ListNode = require('../../src/linked-lists/data-structure/list-node'),
	assert = require('assert');

describe('Linked lists', function () {
	describe('Remove duplicates from the linked list', function () {
		it('should remove duplicates', function () {
			var head = new ListNode(1);
			head.append(2).append(3).append(2).append(4).append(5).append(5);
			assert.equal(solver.removeDuplicatesUsingHash(head).toString(),
				'[1, 2, 3, 4, 5]');
		});
	});
});