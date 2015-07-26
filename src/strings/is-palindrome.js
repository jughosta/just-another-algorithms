'use strict';

module.exports = {

	/**
	 * Is the string a palindrome?
	 * @param {string} theString
	 * @returns {boolean}
	 */
	isPalindrome: function (theString) {
		var n = theString.length;

		if (n < 2) {
			return true;
		}

		var numberOfIterations = Math.floor(n / 2);
		for (var i = 0; i < numberOfIterations; i++) {
			if (theString[i] !== theString[n - i - 1]) {
				return false;
			}
		}

		return true;
	}
};