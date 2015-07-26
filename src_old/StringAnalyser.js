define(function () {
	'use strict';

	/**
	 * String formatter and analyser
	 * @constructor
	 */
	var StringAnalyser = function () {

	};

	/**
	 * Reverse elements in string
	 * @param {String} text
	 * @return {String}
	 */
	StringAnalyser.prototype.reverse = function (text) {
		if (text.length < 2) {
			return text;
		}

		var length = text.length,
			numberOfIterations = Math.floor(length / 2),
			result = []; // because can not modify string in javascript

		for (var i = 0; i < numberOfIterations; i++) {
			result[length - i - 1] = text[i];
			result[i] = text[length - i - 1];
		}

		if (numberOfIterations * 2 < length) {
			result[numberOfIterations] = text[numberOfIterations];
		}

		return result.join('');
	};

	/**
	 * Is palindrome
	 * @param {String} text
	 * @return {boolean}
	 */
	StringAnalyser.prototype.isPalindrome = function (text) {
		if (text.length < 2) {
			return true;
		}

		var length = text.length,
			numberOfIterations = Math.floor(length / 2);

		for (var i = 0; i < numberOfIterations; i++) {
			if (text[length - i - 1] !== text[i]) {
				return false;
			}
		}

		return true;
	};

	/**
	 * Has more equal strings then half of strings
	 * @param {Array.<String>} arrayOfStrings
	 * @return {boolean}
	 */
	StringAnalyser.prototype.hasMoreEqualStringsThenHalfOfStrings =
		function (arrayOfStrings) {
			var dictionary = {},
				length = arrayOfStrings.length,
				lengthOfMiddle = Math.round(length / 2);

			for (var i = 0; i < length; i++) {
				if (typeof dictionary[arrayOfStrings[i]] === 'undefined') {
					dictionary[arrayOfStrings[i]] = 1;
					continue;
				}

				dictionary[arrayOfStrings[i]]++;

				if (dictionary[arrayOfStrings[i]] > lengthOfMiddle) {
					return true;
				}
			}

			return false;
		};

	/**
	 * Compress string
	 * @param {String} text
	 * @return {String}
	 */
	StringAnalyser.prototype.compress = function (text) {
		var length = text.length,
			result = [],
			symbol = null,
			count;

		if (length < 2) {
			return text;
		}

		count = 1;

		for (var i = 0; i < length; i++) {
			if (symbol === text[i]) {
				count++;
				continue;
			}

			symbol = text[i];

			if (count > 1) {
				result.push(count);
				count = 1;
			}

			if (count === 1) {
				result.push(symbol);
			}
		}

		if (count > 1) {
			result.push(count);
		}

		return result.join('');
	};

	/**
	 * Match string to pattern
	 * @param {String} text
	 * @param {String} pattern
	 * @return {boolean}
	 */
	StringAnalyser.prototype.match = function (text, pattern) {
		var symbol = null,
			indexInPattern = 0;
		for (var i = 0; i < text.length; i++) {
			if (pattern[indexInPattern] != text[i] &&
				pattern[indexInPattern] != '.' &&
				pattern[indexInPattern] != '*') {
				return false;
			}

			if (symbol != text[i]) {
				symbol = text[i];
			}

			if (pattern[indexInPattern] === '.') {
				indexInPattern++;
				continue;
			}

			if (pattern[indexInPattern] === '*' &&
				indexInPattern > 0 && pattern[indexInPattern - 1] === '.') {
				if (indexInPattern + 1 < pattern.length &&
					symbol === pattern[indexInPattern + 1]) {
					indexInPattern += 2;
					continue;
				}
			} else if (pattern[indexInPattern] === '*' &&
				i > 0 && symbol != text[i - 1]) {
				indexInPattern++;
			}

			if (pattern[indexInPattern] === text[i]) {
				indexInPattern++;
			}
		}

		if (indexInPattern === pattern.length - 1 &&
			pattern[pattern.length - 1] === '*') {
			return true;
		}

		return indexInPattern === pattern.length;
	};

	/**
	 * Get Z-function
	 * @param {String} text
	 * @return {Array.<Number>}
	 */
	StringAnalyser.prototype.getZFunction = function (text) {
		var n = text.length,
			z = [0];

		for (var i = 1; i < n; i++) {
			if (z.length - 1 < i) {
				z[i] = 0;
			}
			while ((i + z[i] < n) && (text[z[i]] == text[i + z[i]])) {
				z[i] += 1;
			}
		}

		return z;
	};

	/**
	 * Find substring in string
	 * @param {String} text
	 * @param {String} substring
	 * @return {Array.<Number>}
	 */
	StringAnalyser.prototype.findAllSubstringIndexesInString =
		function (text, substring) {
			var zFunction = this.getZFunction(substring + '#' + text),
				result = [];
			for (var i = 0; i < text.length; i++) {
				if (zFunction[substring.length + 1 + i] === substring.length) {
					result.push(i);
				}
			}
			return result;
		};

	/**
	 * Get Pi-function
	 * @param {String} text
	 * @return {Array.<Number>}
	 */
	StringAnalyser.prototype.getPiFunction = function (text) {
		var n = text.length,
			pi = [],
			k = 0,
			i;

		for (i = 0; i < n; i++) {
			pi.push(0);
		}

		for (i = 1; i < n; i++) {
			while ((k > 0) && (text[k + 1] != text[i])) {
				k = pi[k];
			}

			if (text[i] === text[k + 1]) {
				k++;
			}

			pi[i] = k;
		}
		console.warn(pi);
		return pi;
	};

	/**
	 * Knut-Moris-Pratt
	 * @deprecated does not work
	 * @param {String} text1
	 * @param {String} text2
	 * @return {Number}
	 */
	StringAnalyser.prototype.findMaxCommonSubString = function (text1, text2) {
		var piFunction = this.getPiFunction(text2);
		var maxLength = 0;
		for (var i = 0; i < text1.length; i++) {
			while (maxLength > 0 && text1[i] != text2[maxLength]) {
				// next character does not matches
				maxLength = piFunction[maxLength];
			}
			if (text1[i] === text2[maxLength]) {
				maxLength += 1; // next matches
			}
			if (maxLength === text2.length - 1) {
				return i - text2.length;
			}
		}
		return -1;
	};

	/**
	 * Find longest common substring
	 * @param {string} a
	 * @param {string} b
	 * @return {String}
	 */
	StringAnalyser.prototype.findLongestCommonSubstring = function (a, b) {
		var backwardDirections = [],
			computedMatrix = [], i, j;

		computedMatrix.push([]);
		backwardDirections.push([]);

		// fill first row
		for (j = 0; j <= b.length; j++) {
			computedMatrix[0].push(0); // computedMatrix[0][j] = 0
		}

		// fill first column
		for (i = 1; i <= a.length; i++) {
			computedMatrix.push([0]); // computedMatrix[i][0] = 0
			backwardDirections.push([]);
		}

		for (i = 1; i <= a.length; i++) {
			for (j = 1; j <= b.length; j++) {
				if (a[i - 1] === b[j - 1]) {
					computedMatrix[i][j] = computedMatrix[i - 1][j - 1] + 1;
					backwardDirections[i][j] = 'back-diagonal';
				} else if (computedMatrix[i - 1][j] >= computedMatrix[i][j - 1]) {
					computedMatrix[i][j] = computedMatrix[i - 1][j];
					backwardDirections[i][j] = 'back-top';
				} else {
					computedMatrix[i][j] = computedMatrix[i][j - 1];
					backwardDirections[i][j] = 'back-left';
				}
			}
		}

		// now print result

		var printLCS = function (i, j) {
			if (i === 0 || j === 0) {
				return '';
			}

			if (backwardDirections[i][j] === 'back-diagonal') {
				return printLCS(i - 1, j - 1) + a[i - 1];
			}

			if (backwardDirections[i][j] === 'back-top') {
				return printLCS(i - 1, j);
			}

			return printLCS(i, j - 1);
		};

		return printLCS(a.length, b.length) + ' length: ' +
			computedMatrix[a.length][b.length];
	};

	return StringAnalyser;
});