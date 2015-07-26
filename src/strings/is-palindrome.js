'use strict';

module.exports = {

	/**
	 * Is the string a palindrome?
	 * @param {string} text
	 * @returns {boolean}
	 */
	isPalindrome: function (text) {
		var n = text.length;

		if (n < 2) {
			return true;
		}

		var numberOfIterations = Math.floor(n / 2);
		for (var i = 0; i < numberOfIterations; i++) {
			if (text[i] !== text[n - i - 1]) {
				return false;
			}
		}

		return true;
	}
};