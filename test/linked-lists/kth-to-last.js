'use strict';

var solver = require('../../src/linked-lists/kth-to-last'),
	ListNode = require('../../src/linked-lists/data-structure/list-node'),
	assert = require('assert');

describe('Linked lists', function () {
	describe('Find k-th to last', function () {
		it('should find k-th to last', function () {
			var head = new ListNode(1);
			head.append(2).append(3).append(2).append(4).append(5).append(5);
			assert.equal(solver.kthToLast(head, 3).value, 4);
		});

		it('should not find k-th to last', function () {
			var head = new ListNode(1);
			head.append(2).append(3).append(2).append(4).append(5).append(5);
			assert.ok(!solver.kthToLast(head, 10));
		});

		it('should find k-th to last (using recursion)', function () {
			var head = new ListNode(1);
			head.append(2).append(3).append(2).append(4).append(5).append(5);
			assert.equal(solver.kthToLastUsingRecursion(head, 3).value, 4);
		});

		it('should not find k-th to last (using recursion)', function () {
			var head = new ListNode(1);
			head.append(2).append(3).append(2).append(4).append(5).append(5);
			assert.ok(!solver.kthToLastUsingRecursion(head, 10));
		});
	});
});