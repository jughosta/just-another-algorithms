'use strict';

/**
 * Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end of the string
 * to hold the additional characters,
 * and that you are given the "true" length of the string
 */
module.exports = {

	/**
	 * Replace spaces in the string with '%20'
	 * @param {string} stringWithSpaces
	 * @returns {string}
	 */
	replaceSpaces: function (stringWithSpaces) {
		var symbols = stringWithSpaces.split(''),
			n = symbols.length,
			numberOfSpaces = 0,
			i;

		for (i = 0; i < n; i++) {
			if (symbols[i] === ' ') {
				numberOfSpaces++;
			}
		}

		if (numberOfSpaces === 0) {
			return stringWithSpaces;
		}

		var newLength = n - numberOfSpaces + numberOfSpaces * 3;

		for (i = n - 1; i >= 0; i--) {
			if (symbols[i] === ' ') {
				symbols[newLength - 1] = '0';
				symbols[newLength - 2] = '2';
				symbols[newLength - 3] = '%';
				newLength -= 3;
			} else {
				symbols[newLength - 1] = symbols[i];
				newLength -= 1;
			}
		}

		return symbols.join('');
	}
};