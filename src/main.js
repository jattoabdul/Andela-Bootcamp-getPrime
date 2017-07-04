'use strict';

module.exports = {
	checkPrimeNumber: (n) => {
		let c = '';
		for (c=2; c<=n - 1; c++){
			if ( n%c == 0 ){
				return false;
			}
			return true;
		}
	},

	primeArray: [],

	addToArray: (numb) => {

		if(checkPrimeNumber(numb) == true)
		{
			primeArray.push(number)
		}

		return primeArray;
	},

	getPrime: (num) => {
		if (typeof(num) === 'number' && num >= 1)
		{
		// if value is a number
		// Loop through 0 to number passed in
			for (let i=1; i<=num; i++){
				// for each number, run the addto Array function on it
				addToArray(i);
			}
			return console.log(primeArray);
		}
		return console.log('Number was not Passed into the function');
	}
}