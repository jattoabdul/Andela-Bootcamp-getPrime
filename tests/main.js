const assert = require('chai').assert;
const app = require('../src/main.js');

//Start Test
describe("Prime Number", () => {
	describe("checkPrimeNumber", () => {
		it("should exist", () => {
			assert.exists(app.checkPrimeNumber, 'checkPrimeNumber function exist and is neither null or undefined');
		});

		it("should be a function", () => {
			assert.isFunction(app.checkPrimeNumber, 'checkPrimeNumber is a function');
		});

		it("should return true for a prime number", () => {
			assert.equal(app.checkPrimeNumber(99), true);
		});

		it("should return false for a non prime number", () => {
			assert.equal(app.checkPrimeNumber(98), false);
		});

	})

	describe("addToArray", () => {
		it("should exist", () => {
			assert.exists(app.addToArray, 'check addToArray function exist and is neither null or undefined');
		});

		it("should be a function", () => {
			assert.isFunction(app.addToArray, 'addToArray is a function');
		});
	})

	describe("getPrime", () => {
		it("should exist", () => {
			assert.exists(app.getPrime, 'check getPrime function exist and is neither null or undefined');
		});

		it("should return false for a typeof(value) != number", () => {
			assert.equal(app.checkPrimeNumber(98), false);
		});

		it("should be a function", () => {
			assert.isFunction(app.getPrime, 'getPrime is a function');
		});

		// it("should log not a number for a typeof(value) != number", () => {

		// });
	})

})