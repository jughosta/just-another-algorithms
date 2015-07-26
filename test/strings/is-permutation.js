'use strict';

var solver = require('../../src/strings/is-permutation'),
	assert = require('assert');

describe('Strings', function () {
	describe('Given two strings, write a method to decide if one is' +
		' a permutation of the other', function () {
		it('"cool" is permutation of "colo"', function () {
			assert.ok(solver.isPermutation('cool', 'colo'));
		});

		it('"cool" is not permutation of "door"', function () {
			assert.ok(!solver.isPermutation('cool', 'door'));
		});

		it('"cool" is not permutation of "coca-cola"', function () {
			assert.ok(!solver.isPermutation('cool', 'coca-cola'));
		});
	});
});