'use strict';

/**
 * Reverse the string
 */
module.exports = {

	/**
	 * Reverse the string
	 * @param {string} theString
	 * @returns {string}
	 */
	reverse: function (theString) {
		if (!theString || !theString.length) {
			return '';
		}

		var n = theString.length,
			numberOfOperations = Math.floor(n / 2),
			symbols = theString.split(''),
			tmp; // because it's not possible to modify string in javascript

		for (var i = 0; i < numberOfOperations; i++) {
			tmp = symbols[i];
			symbols[i] = symbols[n - i - 1];
			symbols[n - i - 1] = tmp;
		}

		return symbols.join('');
	}
};