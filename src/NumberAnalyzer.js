define(function () {

    /**
     * Number analyzer
     * @constructor
     */
    var NumberAnalyzer = function () {

    };

    /**
     * Get greatest common divisor
     * @param {Number} numberA
     * @param {Number} numberB
     * @return {Number}
     */
    NumberAnalyzer.prototype.greatestCommonDivisor = function (numberA, numberB) {
        if (numberB === 0) {
            return Math.abs(numberA);
        }
        return this.greatestCommonDivisor(numberB, numberA % numberB);
    };

    /**
     * Get least common multiple
     * @param {Number} numberA
     * @param {Number} numberB
     * @return {Number}
     */
    NumberAnalyzer.prototype.leastCommonMultiple = function (numberA, numberB) {
        return Math.abs(numberA * numberB / this.greatestCommonDivisor(numberA, numberB));
    };

    /**
     * Find max subarray
     * @param {Array.<Number>} array
     * @param {Number} low
     * @param {Number} high
     * @return {Object}
     */
    NumberAnalyzer.prototype.findMaxSubArray = function (array, low, high) {
        if (typeof low === 'undefined') {
            low = 0;
        }

        if (typeof high === 'undefined') {
            high = array.length;
        }

        if (high === low) {
            return {
                lowIndex: low,
                highIndex: high,
                maxSum: array[low]
            };
        }

        var mid = (low + high) >> 1;

        var leftSideResult = this.findMaxSubArray(array, low, mid);
        var rightSideResult = this.findMaxSubArray(array, mid + 1, high);
        var crossSideResult = this._findMaxCrossingSubArray(array, low, mid, high);

        if (leftSideResult.maxSum >= rightSideResult.maxSum && leftSideResult.maxSum >= crossSideResult.maxSum) {
            return leftSideResult;
        }

        if (rightSideResult.maxSum >= leftSideResult.maxSum && rightSideResult.maxSum >= crossSideResult.maxSum) {
            return rightSideResult;
        }

        return crossSideResult;
    };

    /**
     * Find max crossing subarray
     * @param {Array.<Number>} array
     * @param {Number} low
     * @param {Number} mid
     * @param {Number} high
     * @return {Object}
     * @private
     */
    NumberAnalyzer.prototype._findMaxCrossingSubArray = function (array, low, mid, high) {
        var leftSum = null, rightSum = null,
            sum = 0,
            maxSumLeftIndex, maxSumRightIndex;

        for (var i = mid; i >= low; i--) {
            sum += array[i];
            if (leftSum === null || sum > leftSum) {
                leftSum = sum;
                maxSumLeftIndex = i;
            }
        }

        sum = 0;

        for (var j = mid + 1; j < high; j++) {
            sum += array[j];
            if (rightSum === null || sum > rightSum) {
                rightSum = sum;
                maxSumRightIndex = j;
            }
        }

        return {
            lowIndex: maxSumLeftIndex,
            highIndex: maxSumRightIndex,
            maxSum: leftSum + rightSum
        };
    };

    /**
     * Binary search
     * @param {Array.<Number>|Array.<Object>} array
     * @param {Number} key
     * @param {boolean} isAlreadySorted
     * @return {Number} index
     */
    NumberAnalyzer.prototype.binarySearch = function (array, key, isAlreadySorted) {
        var sortedArray = (isAlreadySorted)? array : [];
        if (!isAlreadySorted) {
            for (var i = 0; i < array.length; i++) {
                sortedArray.push({
                    key: array[i],
                    index: i
                });
            }
            sortedArray.sort(function (a, b) {
                return a.key - b.key;
            });
        }

        var low = 0, high = array.length - 1,
            mid;

        while (low <= high) {
            mid = (low + high) >> 1;
            if (sortedArray[mid].key === key) {
                return (isAlreadySorted)? mid : sortedArray[mid].index;
            }
            else if (sortedArray[mid].key < key) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }

        return -1;
    };

    /**
     * Find all 3-elements groups that sum equal zero
     * @param {Array.<Number>} array
     * @return {Array.<String>}
     */
    NumberAnalyzer.prototype.find3ElementsThatSumIsZero = function (array) {
        var sortedArray = [];
        for (var i = 0; i < array.length; i++) {
            sortedArray.push({
                key: array[i],
                index: i
            });
        }
        sortedArray.sort(function (a, b) {
            return a.key - b.key;
        });

        var k, result = [];
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                k = this.binarySearch(sortedArray, -(sortedArray[i].key + sortedArray[j].key), true);
                if (k <= j) {
                    continue;
                }
                result.push(sortedArray[i].key + ' ' + sortedArray[j].key + ' ' + sortedArray[k].key);
            }
        }

        return result;
    };

    /**
     * Find all 3-elements groups that third key equal first key plus second key
     * @param {Array.<Number>} array
     * @return {Object}
     */
    NumberAnalyzer.prototype.find3ElementsThatSumIsEqual = function (array) {
        var sortedArray = [];
        for (var i = 0; i < array.length; i++) {
            sortedArray.push({
                key: array[i],
                index: i
            });
        }
        sortedArray.sort(function (a, b) {
            return a.key - b.key;
        });

        var k, result = {};
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                k = this.binarySearch(sortedArray, sortedArray[i].key + sortedArray[j].key, true);
                if (k < 0 || k == j || k == i || result[sortedArray[i].key + ' ' + sortedArray[j].key]) {
                    continue;
                }
                result[sortedArray[i].key + ' ' + sortedArray[j].key] = sortedArray[i].key + ' ' + sortedArray[j].key + ' ' + sortedArray[k].key;
            }
        }

        return result;
    };

    /**
     * Get a^n
     * @param {Number} a
     * @param {Number} n
     * @return {Number}
     */
    NumberAnalyzer.prototype.binPow = function (a, n) {
        if (n === 0) {
          return 1;
        }
        if (n % 2 === 1) {
            return this.binPow(a, n - 1) * a;
        }
        var result = this.binPow(a, n / 2);
        return result * result;
    };

    /**
     * Sieve of Eratosthenes
     * @param {Number} n
     * @return {Object}
     */
    NumberAnalyzer.prototype.getPrimeNumbersLessThenN = function (n) {
        var isNumberPrimeMap = {}, i, j;
        // first: all prime
        for (i = 0; i < n; i++) {
            isNumberPrimeMap[i] = true;
        }
        // removed others
        isNumberPrimeMap[0] = isNumberPrimeMap[1] = false;
        for (i = 2; i < n; i++) {
            if (!isNumberPrimeMap[i]) {
                continue;
            }
            for (j = i * i; j < n; j += i) {
                isNumberPrimeMap[j] = false;
            }
        }

        return isNumberPrimeMap;
    };

    /**
     * Solve Fibonacci number of n
     * @param {Number} n
     * @return {Number}
     */
    NumberAnalyzer.prototype.fibonacciNumber = function (n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        var a = [[0, 1], [1, 1]];
        return this.binMatrixPow(a, n)[0][1];
    };

    /**
     * Bin matrix power
     * @param {Array.<Array.<Number>>} a
     * @param {Number} n
     * @return {Array.<Array.<Number>>}
     */
    NumberAnalyzer.prototype.binMatrixPow = function (a, n) {
        if (n === 0) {
            return 1;
        }
        if (n % 2 === 1) {
            return this.powMatrixNxN(this.binMatrixPow(a, n - 1), a);
        }
        var result = this.binMatrixPow(a, n / 2);
        return this.powMatrixNxN(result, result);
    };

    /**
     * Pow matrix NxN
     * @param {Array.<Array.<Number>>} a
     * @param {Array.<Array.<Number>>} b
     * @return {Array.<Array.<Number>>}
     */
    NumberAnalyzer.prototype.powMatrixNxN = function (a, b) {
        if (a === 1) {
            return b;
        }
        var c = [],
            len = a.length,
            m, n, k;
        for (m = 0; m < len; m++) {
            c.push([]);
            for (n = 0; n < len; n++) {
                c[m].push(0);
                for (k = 0; k < len; k++) {
                    c[m][n] += a[m][k] * b[n][k];
                }
            }
        }
        return c;
    };

    /**
     * Find max power x: n!/(k^x) -> 1
     * @param n
     * @param k
     * @return {Number}
     */
    NumberAnalyzer.prototype.findPowerToFactorial = function (n, k) {
        var result = 0;
        while (n) {
            n /= k;
            result += n;
        }
        return result;
    };

    /**
     * Decompose number into sequences
     * @param {Number} n
     * @return {String}
     */
    NumberAnalyzer.prototype.decomposeNumber = function (n) {
        var result = [], component = [];
        this._decomposeNumber(n, component, 0, result);
        return '[' + result.join('], [') + ']';
    };

    /**
     * Decompose number into sequences
     * @param {Number} n
     * @param {Array.<Number>} component
     * @param {Number} length
     * @param {Array.<String>} componentsString
     * @private
     */
    NumberAnalyzer.prototype._decomposeNumber = function (n, component, length, componentsString) {
        if (n === 0) {
            component.length = length;
            componentsString.push(component.join(' '));
            return;
        }

        for (var i = 1; i <= n; i++) {
            if (i === n && length === 0) {
                break;
            }
            component[length] = i;
            this._decomposeNumber(n - i, component, length + 1, componentsString);
        }
    };

    /**
     * Translate phone number to possible words
     * @param {String} number
     * @return {String}
     */
    NumberAnalyzer.prototype.translatePhoneNumberToWord = function (number) {
        number = number.toString();
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

        var resultString = [],
            results = [];
        this._translateNextPhoneNumber(dictionary, number, resultString, 0, results);

        return '[' + results.join('], [') + ']';
    };

    /**
     * Translate next number of phone
     * @param {Array.<Array.<number>>} dictionary
     * @param {String} number
     * @param {Array.<String>} component
     * @param {Number} index
     * @param {Array.<String>} componentsString
     * @private
     */
    NumberAnalyzer.prototype._translateNextPhoneNumber = function (dictionary, number, component, index, componentsString) {
        if (number.length === index) {
            componentsString.push(component.join(''));
            return;
        }

        var rowInDictionary = dictionary[number[index]];

        for (var i = 0; i < rowInDictionary.length; i++) {
            component[index] = rowInDictionary[i];
            this._translateNextPhoneNumber(dictionary, number, component, index + 1, componentsString);
        }
    };

    /**
     * Sum two binary numbers
     * @param {String} a
     * @param {String} b
     * @return {String}
     */
    NumberAnalyzer.prototype.sumTwoBinaryNumbers = function (a, b) {
        var resultNumber = [],
            firstNumber = a,
            secondNumber = b,
            currentSum, i,
            value,
            addition = false;

        if (b.length > a.length) {
            firstNumber = b;
            secondNumber = a;
        }

        for (i = 0; i < firstNumber.length; i++) {
            value = (i >= secondNumber.length)? '0' : secondNumber[secondNumber.length - i - 1];
            currentSum = this._addBit(firstNumber[firstNumber.length - i - 1], value, addition);
            if (currentSum.length === 1) {
                resultNumber.unshift(currentSum);
                addition = false;
            }
            else {
                resultNumber.unshift(currentSum[1]);
                addition = true;
            }
        }

        if (addition) {
            resultNumber.unshift('1');
        }

        return resultNumber.join('');
    };

    /**
     * Sum two string bits
     * @param {String} a
     * @param {String} b
     * @param {boolean} addition
     * @return {String}
     * @private
     */
    NumberAnalyzer.prototype._addBit = function (a, b, addition) {
        if (a === '0' || b === '0') {
            if (a === '1' || b === '1') {
                return (!addition)? '1' : '10';
            }
            return (!addition)? '0' : '1';
        }
        return (!addition)? '10' : '11';
    };

    /**
     * Get min and max of array
     * @param {Array.<number>} a
     * @return {Object}
     */
    NumberAnalyzer.prototype.getMinAndMaxOfArray = function (a) {
        if (!a || !a.length) {
            return null;
        }
        var min = a[0],
            max = a[0];
        for (var i = 1; i < a.length; i++) {
            if (a[i] > max) {
                max = a[i];
            }
            else if (a[i] < min) {
                min = a[i];
            }
        }

        return {
            min: min,
            max: max
        };
    };

    return NumberAnalyzer;

});