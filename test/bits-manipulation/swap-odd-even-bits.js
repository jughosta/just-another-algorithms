'use strict';

var solver = require('../../src/bit-manipulation/swap-odd-even-bits'),
	assert = require('assert');

describe('Bit manipulation', function () {
	describe('Swap odd and even bits', function () {
		it('should swap bits', function () {
			assert.equal(solver.swapOddEvenBits('10101').toString(2), '101010');
		});

		it('should swap bits', function () {
			assert.equal(solver.swapOddEvenBits('1').toString(2), '10');
		});

		it('should swap bits', function () {
			assert.equal(solver.swapOddEvenBits('111').toString(2), '1011');
		});
	});
});