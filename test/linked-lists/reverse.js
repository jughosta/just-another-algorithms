'use strict';

var solver = require('../../src/linked-lists/reverse'),
	ListNode = require('../../src/linked-lists/data-structure/list-node'),
	assert = require('assert');

describe('Linked lists', function () {
	describe('Reverse linked list', function () {
		it('should reverse linked list', function () {
			var head = new ListNode(1);
			head.append(2).append(3).append(2).append(4).append(5).append(5);
			assert.equal(solver.reverse(head).toString(), '[5, 5, 4, 2, 3, 2, 1]');
		});

		it('should reverse linked list that has single node', function () {
			var head = new ListNode(1);
			assert.equal(solver.reverse(head).toString(), '[1]');
		});

		it('should reverse linked list that has two nodes', function () {
			var head = new ListNode(1);
			head.append(5);
			assert.equal(solver.reverse(head).toString(), '[5, 1]');
		});
	});
});