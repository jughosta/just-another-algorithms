'use strict';

/**
 * Assume you have a method isSubstring
 * which checks if one word is a substring of another.
 * Given two strings, s1 and s2,
 * write code to check
 * if s2 is a rotation of s1
 * using only one call to isSubstring
 * (e.g.,"waterbottle" is a rotation of "erbottlewat").
 */
module.exports = {

	/**
	 * Is the first string is a rotation of the second string?
	 * @param {string} string1
	 * @param {string} string2
	 * @returns {boolean}
	 */
	isRotation: function (string1, string2) {
		if (string1.length !== string2.length) {
			return false;
		}

		var xyxy = string1 + string1;
		return this.isSubstring(string2, xyxy);
	},

	/**
	 * Is the first string a substring of the second string?
	 * @param {string} substring
	 * @param {string} instring
	 * @returns {boolean}
	 */
	isSubstring: function (substring, instring) {
		return (instring.search(substring) >= 0);
	}
};