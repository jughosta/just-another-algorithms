'use strict';

/**
 * Write an algorithm such that if an element in an MxN matrix is 0,
 * its entire row and column are set to 0
 */
module.exports = {

	/**
	 * Set zero in rows and columns with zero item
	 * @param {Array<number>} matrix
	 * @returns {Array<number>}
	 */
	setZero: function (matrix) {
		var m = matrix.length,
			n = (m > 0) ? matrix[0].length : 0;
		if (!m || !n) {
			return matrix;
		}

		var row = {},
			column = {},
			i, j;

		for (i = 0; i < m; i++) {
			for (j = 0; j < n; j++) {
				if (matrix[i][j] === 0) {
					row[i] = true;
					column[j] = true;
				}
			}
		}

		for (i = 0; i < m; i++) {
			for (j = 0; j < n; j++) {
				if (row[i] || column[j]) {
					matrix[i][j] = 0;
				}
			}
		}

		return matrix;
	}
};