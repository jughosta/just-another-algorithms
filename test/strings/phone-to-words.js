'use strict';

var solver = require('../../src/strings/phone-to-words'),
	assert = require('assert');

describe('Strings', function () {
	describe('Convert phone number to words', function () {
		it('should convert phone to words', function () {
			assert.deepEqual(solver.convertPhoneNumberToWords('53'),
				['JD', 'JE', 'JF', 'KD', 'KE', 'KF', 'LD', 'LE', 'LF']
			);
		});
	});
});