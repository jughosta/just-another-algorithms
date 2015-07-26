'use strict';

module.exports = {

	/**
	 * Given a real number between 0 and 7 (e.g., 0.72)
	 * that is passed in as a double,
	 * print the binary representation.
	 * If the number cannot be represented accurately in binary
	 * with at most 32 characters, print "ERROR."
	 * @param {number} number
	 * @return {string}
	 */
	printBinary: function (number) {
		if (number >= 1 || number <= 0) {
			return 'ERROR';
		}

		var binary = '0.',
			frac = 0.5;

		while (number > 0) {
			if (binary.length > 34) {
				return 'ERROR';
			}

			if (number >= frac) {
				binary += '1';
				number -= frac;
				number = parseFloat(number.toFixed(2));
			} else {
				binary += '0';
			}

			frac /= 2;
		}

		return binary;
	}
};