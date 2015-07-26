'use strict';

/**
 * Given an image represented by an NxN matrix,
 * where each pixel in the image is 4 bytes,
 * write a method to rotate the image by 90 degrees.
 * Can you do this in place?
 */
module.exports = {

	/**
	 * Rotate given matrix
	 * @param {Array<number>} matrix
	 * @returns {Array<number>}
	 */
	rotateMatrix: function (matrix) {
		var n = matrix.length,
			layer,
			first,
			last,
			top,
			i;

		if (!n) {
			return matrix;
		}

		for (layer = 0; layer < n / 2; layer++) {
			first = layer;
			last = n - layer - 1;
			for (i = first; i < last; i++) {
				top = matrix[first][first + i];
				matrix[first][first + i] = matrix[last - i][first];
				matrix[last - i][first] = matrix[last][last - i];
				matrix[last][last - i] = matrix[first + i][last];
				matrix[first + i][last] = top;
			}
		}

		return matrix;
	}
};