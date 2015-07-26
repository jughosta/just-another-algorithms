'use strict';

/**
 * Find the longest common substring in 2 strings,
 * "abcdef" "gbcdh" would return "bcd"
 */
module.exports = {

	/**
	 * Find longest common substring
	 * @param {string} a
	 * @param {string} b
	 * @return {string}
	 */
	findLongestCommonSubstring: function (a, b) {
		var backwardDirections = new Matrix2d(),
			computesMatrix = new Matrix2d(),
			i,
			j;

		// fill first row
		// computedMatrix[0][j] = 0

		// fill first column
		// computedMatrix[i][0] = 0

		for (i = 1; i <= a.length; i++) {
			for (j = 1; j <= b.length; j++) {
				if (a[i - 1] === b[j - 1]) {
					computesMatrix
						.set(i, j, (computesMatrix.get(i - 1, j - 1) + 1));
					backwardDirections.set(i, j, 'd'); // back-along-diagonal
				} else if (computesMatrix
						.get(i - 1, j) >= computesMatrix.get(i, j - 1)) {
					computesMatrix.set(i, j, (computesMatrix.get(i - 1, j)));
					backwardDirections.set(i, j, 't'); // back-to-top
				} else {
					computesMatrix.set(i, j, (computesMatrix.get(i, j - 1)));
					backwardDirections.set(i, j, 'l'); // back-to-left
				}
			}
		}

		return getLongestCommonSubstring(a, b, backwardDirections);
	}
};

function Matrix2d(initialValue) {
	this.initialValue = initialValue || 0;

	this.matrix = [];
}

Matrix2d.prototype.get = function (i, j) {
	if ((typeof this.matrix[i] !== 'undefined') &&
		(typeof this.matrix[i][j] !== 'undefined')) {
		return this.matrix[i][j];
	}

	if (typeof this.matrix[i] === 'undefined') {
		this.matrix[i] = [];
	}

	this.matrix[i][j] = this.initialValue;
	return this.matrix[i][j];
};

Matrix2d.prototype.set = function (i, j, value) {
	if ((typeof this.matrix[i] !== 'undefined') &&
		(typeof this.matrix[i][j] !== 'undefined')) {
		this.matrix[i][j] = value || this.initialValue;
	}

	if (typeof this.matrix[i] === 'undefined') {
		this.matrix[i] = [];
	}

	this.matrix[i][j] = value || this.initialValue;
};

function getLongestCommonSubstringLength(a, b, computedMatrix) {
	return computedMatrix.get(a.length, b.length);
}

function getLongestCommonSubstring(a, b, backwardDirectionsMatrix) {
	function printLCS(i, j) {
		if (i === 0 || j === 0) {
			return '';
		}

		if (backwardDirectionsMatrix.get(i, j) === 'd') {
			return printLCS(i - 1, j - 1) + a[i - 1]; // back-along-diagonal
		}

		if (backwardDirectionsMatrix.get(i, j) === 't') {
			return printLCS(i - 1, j); // back-to-top
		}

		return printLCS(i, j - 1); // back-to-left
	}

	return printLCS(a.length, b.length);
}