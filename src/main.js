'use strict';

module.exports = {
	checkPrimeNumber: (n) => {
		for (let c=2; c<=n - 1; c++){
			if ( n%c === 0 ){
				return false;
			}
			return true;
		}
	},
	primeArray: [],
	addToArray: (number) =>{
		if(checkPrimeNumber(number) === true) {
			primeArray.push(number)
		}
	},
	getPrime: (num) => {
		if (typeof(num) !== 'number'){
			console.log('Number was not Passed into the function');
		} else {
			for (let i=1; i<=num; i++){
				addToArray(i);
			}
			console.log(primeArray);
		}
	}
}

