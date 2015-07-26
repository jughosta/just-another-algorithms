'use strict';

/**
 * Suppose we can translate numbers into characters: 1->a, 2->b, ...26->z
 * given an integer, for example, 11223,
 * output every translation of the number.
 */
module.exports = {

	/**
	 * Convert number to words
	 * @param {string} number
	 * @return {Array<string>}
	 */
	convertNumberToWords: function (number) {
		var n = number.length;

		if (!n) {
			return [];
		}

		var words = [],
			maxValue = 26;

		function splitNumberInDigits(word, indexInNumber) {
			if (indexInNumber >= n) {
				words.push(word.join(''));
				return;
			}

			var len = word.length;

			// single digit
			word.push(getChar(number[indexInNumber]));
			splitNumberInDigits(word, indexInNumber + 1);
			word.splice(len, n);

			// two-digit number
			if (indexInNumber === n - 1) {
				return;
			}
			var value = number[indexInNumber] + number[indexInNumber + 1];
			if (parseInt(value, 10) > maxValue) {
				return;
			}
			word.push(getChar(value));
			splitNumberInDigits(word, indexInNumber + 2);
			word.splice(len, n);
		}

		function getChar(number) {
			return String.fromCharCode(parseInt(number, 10) + 'a'.charCodeAt(0) - 1);
		}

		splitNumberInDigits([], 0);

		return words;
	}
};