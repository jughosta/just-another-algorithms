'use strict';

/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

module.exports = {
	isUniqueCharactersInTheStringByHash: isUniqueCharacters,
	isUniqueCharactersInTheStringByBitwiseOperations: isUniqueCharacters2
};

var NUMBER_OF_CHARACTERS = 256;

/**
 * Method #1: using hash
 * @param {string} theString
 * @returns {boolean}
 */
function isUniqueCharacters(theString) {
	if (theString.length > NUMBER_OF_CHARACTERS) {
		return false;
	}

	var characters = {},
		n = theString.length,
		i;

	for (i = 0; i < n; i++) {
		if (theString[i] in characters) {
			return false;
		}
		characters[theString[i]] = true;
	}
	return true;
}

/**
 * Method #2: using bitwise operations
 * @param {string} theString
 * @returns {boolean}
 */
function isUniqueCharacters2(theString) {
	if (theString.length > NUMBER_OF_CHARACTERS) {
		return false;
	}

	var charCode = 'a'.charCodeAt(0),
		n = theString.length,
		checker = 0,
		selectedBit,
		value,
		i;

	for (i = 0; i < n; i++) {
		if (theString.charCodeAt(i) < charCode) {
			continue;
		}
		value = theString.charCodeAt(i) - charCode;
		selectedBit = 1 << value;
		if ((checker & selectedBit) > 0) {
			return false;
		}
		checker = checker | selectedBit;
	}

	return true;
}