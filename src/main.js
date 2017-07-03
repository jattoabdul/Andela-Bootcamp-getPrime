'use strict';

module.exports = {
	// check if passed number is a prime number
	checkPrimeNumber: (n) => {
		for (let c=2; c<=n - 1; c++){
			if ( n%c === 0 ){
				return false;
			}
			return true;
		}
	},

	// creating a array variable to hold the prime numbers
	primeArray: [],

	// add checked number to primeArray
	addToArray: (number) => {
		//check if checking of prime number is true
		if(checkPrimeNumber(number) === true) {

			// Push to the prime array
			primeArray.push(number)
		}
	},

	getPrime: (num) => {
		//check if type of value is not a number
		if (typeof(num) !== 'number'){
			console.log('Number was not Passed into the function');
		} else {
			// if value is a number
			// Loop through 0 to number passed in
			for (let i=1; i<=num; i++){
				// for each number, run the addto Array function on it
				addToArray(i);
			}
			console.log(primeArray);
		}
	}
}

