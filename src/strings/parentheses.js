'use strict';

module.exports = {

	/**
	 * Implement an algorithm to print all valid (i.e., properly opened and closed)
	 * combinations of n-pairs of parentheses
	 * @param {number} count
	 * @return {Array[string]}
	 */
	generateParens: function (count) {
		var row = [],
			list = [];
		this._addParen(list, count, count, row, 0);
		return list;
	},

	/**
	 * Add left or right paren
	 * @param {Array[string]} list
	 * @param {number} leftRemaining
	 * @param {number} rightRemaining
	 * @param {Array[number]} row
	 * @param {number} count
	 * @private
	 */
	_addParen: function (list, leftRemaining, rightRemaining, row, count) {
		if (leftRemaining < 0 || rightRemaining < leftRemaining) {
			return; // invalid state
		}

		if (leftRemaining === 0 && rightRemaining === 0) { // no more parens remaining
			list.push(row.join(''));
			return;
		}

		if (leftRemaining > 0) {
			row[count] = '(';
			this._addParen(list, leftRemaining - 1, rightRemaining, row, count + 1);
		}

		if (rightRemaining > leftRemaining) {
			row[count] = ')';
			this._addParen(list, leftRemaining, rightRemaining - 1, row, count + 1);
		}
	}
};