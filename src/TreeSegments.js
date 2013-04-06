define(function () {

    /**
     * Tree segments
     * @constructor
     */
    var TreeSegments = function () {

    };

    TreeSegments.prototype._data = [1, 3, 5, 6, 4, 7, 8];

    /**
     * Build sum tree
     * @param {Array.<Number>} tree
     * @param {Array.<Number>} a
     * @param {Number} level
     * @param {Number} leftIndex
     * @param {Number} rightIndex
     * @private
     */
    TreeSegments.prototype._buildSumTree = function (tree, a, level, leftIndex, rightIndex) {
        if (leftIndex === rightIndex) {
            tree[level] = a[leftIndex];
            return;
        }

        var middleIndex = (leftIndex + rightIndex) >> 1;
        this._buildSumTree(tree, a, level * 2, leftIndex, middleIndex);
        this._buildSumTree(tree, a, level * 2 + 1, middleIndex + 1, rightIndex);

        tree[level] = tree[level * 2] + tree[level * 2 + 1];
    };

    /**
     * Get sum in segment
     * @param {Array.<Number>} tree
     * @param {Number} level
     * @param {Number} leftIndex
     * @param {Number} rightIndex
     * @param {Number} left
     * @param {Number} right
     * @return {Number}
     * @private
     */
    TreeSegments.prototype._getSumInSegment = function (tree, level, leftIndex, rightIndex, left, right) {
        if (left > right) {
            return 0;
        }

        if (left === leftIndex && right === rightIndex) {
            return tree[level];
        }

        var middleIndex = (leftIndex + rightIndex) >> 1;
        return this._getSumInSegment(tree, level * 2, leftIndex, middleIndex, left, Math.min(right, middleIndex))
            + this._getSumInSegment(tree, level * 2 + 1, middleIndex + 1, rightIndex, Math.max(left, middleIndex + 1), right);
    };

    /**
     * Get sum in segment
     * @param {Array.<Number>} a
     * @param {Number} left
     * @param {Number} right
     * @return {Number}
     */
    TreeSegments.prototype.getSumInSegment = function (a, left, right) {
        a = a || this._data;

        if (!a.length) {
            return 0;
        }

        left = left || 0;
        right = (typeof right !== 'undefined')? right : a.length - 1;

        if (left === right && a.length > left) {
            return a[left];
        }

        var tree = [a.length];
        this._buildSumTree(tree, a, 1, 0, a.length - 1);
        this._tree = tree;

        return this._getSumInSegment(tree, 1, 0, a.length - 1, left, right);
    };

    /**
     * Update sum tree with new value
     * @param {Array.<Number>} tree
     * @param {Number} level
     * @param {Number} leftIndex
     * @param {Number} rightIndex
     * @param {Number} position
     * @param {Number} newValue
     * @private
     */
    TreeSegments.prototype._updateSumTree = function (tree, level, leftIndex, rightIndex, position, newValue) {
        if (leftIndex === rightIndex) {
            tree[level] = newValue;
            return;
        }

        var middleIndex = (leftIndex + rightIndex) >> 1;
        if (position <= middleIndex) {
            this._updateSumTree(tree, level * 2, leftIndex, middleIndex, position, newValue);
        }
        else {
            this._updateSumTree(tree, level * 2 + 1, middleIndex + 1, rightIndex, position, newValue);
        }

        tree[level] = tree[level * 2] + tree[level * 2 + 1];
    };

    /**
     * Update array with new value and get new sum
     * @param {Number} position
     * @param {Number} newValue
     * @param {Number} left
     * @param {Number} right
     * @return {Number}
     */
    TreeSegments.prototype.updateValueInArrayAndGetSum = function (position, newValue, left, right) {
        if (!this._tree) {
            return 0;
        }

        var n = this._tree[0];

        this._updateSumTree(this._tree, 1, 0, n - 1, position, newValue);

        left = left || 0;
        right = (typeof right !== 'undefined')? right : n - 1;

        return this._getSumInSegment(this._tree, 1, 0, n - 1, left, right);
    };

    return TreeSegments;
});