define(function () {
	'use strict';

	/**
	 * Sorter
	 * @constructor
	 */
	var Sorter = function () {

	};

	/**
	 * Quick sort
	 * @param {Array.<Number>} array
	 * @param {Number} low
	 * @param {Number} high
	 */
	Sorter.prototype.quickSort = function (array, low, high) {
		if (typeof low === 'undefined') {
			low = 0;
		}

		if (typeof high === 'undefined') {
			high = array.length - 1;
		}

		var pIndex; // index of partition

		if (high - low > 0) {
			pIndex = this._partition(array, low, high);
			this.quickSort(array, low, pIndex - 1);
			this.quickSort(array, pIndex + 1, high);
		}
	};

	/**
	 * Get partition index
	 * @param {Array.<Number>} array
	 * @param {Number} low
	 * @param {Number} high
	 * @return {Number}
	 * @private
	 */
	Sorter.prototype._partition = function (array, low, high) {
		var i,
			pIndex, // pivot element index
			firstHighIndex; // divider position for pivot element

		pIndex = high;
		firstHighIndex = low;
		for (i = low; i < high; i++) {
			if (array[i] < array[pIndex]) {
				this._swap(array, i, firstHighIndex);
				firstHighIndex++;
			}
		}

		this._swap(array, pIndex, firstHighIndex);

		return firstHighIndex;
	};

	/**
	 * Swap elements in array
	 * @param {Array.<Number>} array
	 * @param {Number} aIndex
	 * @param {Number} bIndex
	 * @private
	 */
	Sorter.prototype._swap = function (array, aIndex, bIndex) {
		var t = array[aIndex];
		array[aIndex] = array[bIndex];
		array[bIndex] = t;
	};

	/**
	 * Merge sort
	 * @param {Array.<Number>} array
	 * @param {Number} low
	 * @param {Number} high
	 */
	Sorter.prototype.mergeSort = function (array, low, high) {
		if (typeof low === 'undefined') {
			low = 0;
		}

		if (typeof high === 'undefined') {
			high = array.length;
		}

		if (low + 1 < high) {
			var middleIndex = (low + high) >> 1;
			this.mergeSort(array, low, middleIndex);
			this.mergeSort(array, middleIndex, high);

			var size = high - low,
				b = [],
				i = low,
				j = middleIndex;

			for (var k = 0; k < size; k++) {
				if (j >= high || i < middleIndex && array[i] < array[j]) {
					b[k] = array[i++];
				} else {
					b[k] = array[j++];
				}
			}

			// copy
			for (i = 0; i < size; i++) {
				array[low + i] = b[i];
			}
		}
	};

	/**
	 * Merge two sorted arrays
	 * @param {Array.<Number>} firstArray
	 * @param {Array.<Number>} secondArray
	 * @return {Array.<Number>}
	 */
	Sorter.prototype.mergeTwoSortedArrays = function (firstArray, secondArray) {
		var mergedArray = [],
			cursorInFirstArray = 0,
			cursorInSecondArray = 0;
		for (var i = 0; i < firstArray.length + secondArray.length; i++) {
			if (firstArray[cursorInFirstArray] < secondArray[cursorInSecondArray] ||
				cursorInSecondArray === secondArray.length) {
				mergedArray.push(firstArray[cursorInFirstArray++]);
			} else {
				mergedArray.push(secondArray[cursorInSecondArray++]);
			}
		}

		return mergedArray;
	};

	return Sorter;

});