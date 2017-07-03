const assert = require('chai').assert;
const app = require('../src/main.js');

describe("Prime Number", () => {

	it("checkPrimeNumber should exist", () => {
		assert.exists(app.checkPrimeNumber, 'checkPrimeNumber function exist and is neither null or undefined');
	});

	it("addToArray should exist", () => {
		assert.exists(app.addToArray, 'check addtoArray function exist and is neither null or undefined');
	});

	it("getPrime should exist", () => {
		assert.exists(app.getPrime, 'check getPrime function exist and is neither null or undefined');
	});

	describe("It handles Valid Input", () => {
		it("should return true for a prime number", () => {
			assert.equal(app.checkPrimeNumber(99), true);
		});

		it("should return false for a non prime number", () => {
			assert.equal(app.checkPrimeNumber(98), false);
		});

	})

	describe('it Handles inValid INput', () => {

	})

})