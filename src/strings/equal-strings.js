'use strict';

/**
 * Given N credits cards, determine
 * if more than half of them belong to the same person/owner.
 * All you have is an array of the credit card numbers,
 * and an api call like isSamePerson(num1, num2)
 */
module.exports = {

	/**
	 * Has more equal strings than the half of strings
	 * @param {Array<string>} arrayOfStrings
	 * @return {boolean}
	 */
	hasMoreEqualStringsThanTheHalfOfStrings: function (arrayOfStrings) {
		var dictionary = {},
			n = arrayOfStrings.length,
			halfOfStrings = n / 2,
			currentString;

		for (var i = 0; i < n; i++) {
			currentString = arrayOfStrings[i];
			if (!(currentString in dictionary)) {
				dictionary[currentString] = 0;
			}
			if (++dictionary[currentString] > halfOfStrings) {
				return true;
			}
		}

		return false;
	}
};