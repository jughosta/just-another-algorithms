'use strict';

module.exports = {

	/**
	 * Write a program to swap odd and even bits in an integer
	 * with as few instructions as possible
	 * (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on)
	 * @param {number} x
	 * @return {number}
	 */
	swapOddEvenBits: function (x) {
		x = parseInt(x, 2);
		var swapOddBits = (x & 0xaaaaaaaa) >> 1,
			swapEvenBits = (x & 0x55555555) << 1;
		return swapOddBits | swapEvenBits;
	}
};