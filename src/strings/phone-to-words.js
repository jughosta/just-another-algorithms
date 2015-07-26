'use strict';

/**
 * Provided a phone number (654-876-0987),
 * return all possible strings that the phone number could represent
 * if 2 -> {A, B, C}, 3 -> {D, E, F}
 */
module.exports = {

	/**
	 * Convert phone number to words
	 * @param {string} phoneNumber
	 * @return {Array<string>}
	 */
	convertPhoneNumberToWords: function (phoneNumber) {
		var n = phoneNumber.length;

		if (!n) {
			return [];
		}

		var dictionary = [
			['0'],
			['1'],
			['A', 'B', 'C'],
			['D', 'E', 'F'],
			['G', 'H', 'I'],
			['J', 'K', 'L'],
			['M', 'N', 'O'],
			['P', 'Q', 'R', 'S'],
			['T', 'U', 'V'],
			['W', 'X', 'Y', 'Z']
		];

		var words = [];

		function convertDigit(word, indexOfDigitInPhone) {
			if (word.length === n) {
				words.push(word.join(''));
				return;
			}

			var symbols = dictionary[phoneNumber[indexOfDigitInPhone]];

			for (var i = 0; i < symbols.length; i++) {
				word[indexOfDigitInPhone] = symbols[i];
				word.splice(indexOfDigitInPhone + 1, n); // clear tail
				convertDigit(word, indexOfDigitInPhone + 1);
			}
		}

		convertDigit([], 0);
		return words;
	}
};