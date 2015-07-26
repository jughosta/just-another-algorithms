'use strict';

var solver = require('../../src/strings/number-to-words'),
	assert = require('assert');

describe('Strings', function () {
	describe('Convert number to words', function () {
		it('should convert number to words', function () {
			assert.deepEqual(solver.convertNumberToWords('11223'),
				['aabbc', 'aabw', 'aavc', 'albc', 'alw', 'kbbc', 'kbw', 'kvc']
			);
		});

		it('should convert number to words', function () {
			assert.deepEqual(solver.convertNumberToWords('26'),
				['bf', 'z']
			);
		});

		it('should convert number to words', function () {
			assert.deepEqual(solver.convertNumberToWords('27'),
				['bg']
			);
		});
	});
});