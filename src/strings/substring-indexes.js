'use strict';

/**
 * 1. find all indexes of the substring in the string
 * 2. find a shortest repeating substring in the string so
 *  string=(substring)+ (ex. for compress the string)
 */
module.exports = {

	/**
	 * Find all indexes of the substring in the string
	 * @param {string} substring
	 * @param {string} theString
	 * @return {Array<number>}
	 */
	findIndexesOfSubstringInTheString: function (substring, theString) {
		var zFunction = this.buildZFunction(substring + '#' + theString),
			n = theString.length,
			nSubstring = substring.length,
			indexes = [];

		for (var i = 0; i < n; i++) {
			if (zFunction[nSubstring + 1 + i] === nSubstring) {
				indexes.push(i);
			}
		}

		return indexes;
	},

	/**
	 * Find shortest repeating substring in the string
	 * @param {string} theString
	 * @return {string}
	 */
	findShortestRepeatingSubstring: function (theString) {
		var zFunction = this.buildZFunction(theString),
			n = zFunction.length;

		for (var i = 0; i < n; i++) {
			if ((i + zFunction[i] === n) && (n % i === 0)) {
				return theString.substr(0, i);
			}
		}

		return '';
	},

	/**
	 * Build z-function for the string
	 * @param {string} someString
	 * @return {Array<string>}
	 */
	buildZFunction: function (someString) {
		var n = someString.length,
			z = [],
			i,
			j;

		z.push(0);

		// s[0..l-1] == s[l..r]
		// z[l] == max length of s[l..r]
		var l = 0,
			r = 0;

		for (i = 1; i < n; i++) {
			z.push(0);

			if (i < r) {
				// using previous results, not zero
				z[i] = Math.min(n - i, z[i - l]);
			}

			for (j = z[i]; j < n - i; j++) {
				if (someString[j] !== someString[i + j]) {
					break;
				}
				z[i]++;
			}

			if (j - 1 > r) {
				// move to rightest solving position
				l = i;
				r = j - 1;
			}
		}

		return z;
	}
};