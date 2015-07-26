'use strict';

/**
 * Given two strings, write a method to decide
 * if one is a permutation of the other.
 */
module.exports = {

	/**
	 * Is the first string a permutation of the second string?
	 * @param {string} oneString
	 * @param {string} anotherString
	 * @returns {boolean}
	 */
	isPermutation: function (oneString, anotherString) {
		if (oneString.length !== anotherString.length) {
			return false;
		}

		var characters = {},
			n = oneString.length,
			i;

		for (i = 0; i < n; i++) {
			if (oneString[i] in characters) {
				characters[oneString[i]]++;
				continue;
			}
			characters[oneString[i]] = 1;
		}

		n = anotherString.length;

		for (i = 0; i < n; i++) {
			if (!(anotherString[i] in characters)) {
				return false;
			}

			if (--characters[anotherString[i]] < 0) {
				return false;
			}
		}

		return true;
	}
};