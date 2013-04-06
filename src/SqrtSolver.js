define(function () {

    /**
     * Sqrt solver
     * @constructor
     */
    var SqrtSolver = function () {

    };

    /**
     * Solve sqrt of number
     * @param {Number} value
     * @param {Number} epsilon
     * @return {Number}
     */
    SqrtSolver.prototype.solve = function (value, epsilon) {
        epsilon = epsilon || 0.00001;

        var result = 0,
            low = 0,
            high = value;

        while (high - low > epsilon) {
            result = (low + high) / 2;
            if (result * result < value) {
                low = result;
            }
            else {
                high = result;
            }
        }

        if (!this.check(value, result, epsilon)) {
            console.warn('bad answer');
        }
        return result;
    };

    /**
     * Check
     * @param {Number} value
     * @param {Number} sqrl
     * @param {Number} epsilon
     * @return {boolean}
     */
    SqrtSolver.prototype.check = function (value, sqrl, epsilon) {
        return (Math.abs(Math.sqrt(value) - sqrl) < epsilon);
    };

    return SqrtSolver;
});