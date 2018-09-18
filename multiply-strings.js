var multiply = function(num1, num2) {
	let result = '0';
	let newNumOne = num1;
	let newNumTwo = num2;

	if(num1 == '0') return num2;
	if(num2 == '0') return num1;
	// Long hand Multiplication
	// pad shorter string with zeros
	const padWithZeros = (shorterString, longerString) => {
		console.log('Got to Padder');
		while(shorterString.length < longerString.length){
			console.log('Shorter Before: ', shorterString);
			shorterString = '0' + shorterString;
			console.log('Shorter After: ', shorterString);
			}
		console.log(shorterString, longerString);
		return { shorterString, longerString };
	};

	console.log(num1.length, num2.length);
	if(newNumOne.length > newNumTwo.length){
//		padWithZeros(newNumTwo, newNumOne).num1 = num1;
//		padWithZeros(newNumTwo, newNumOne).num2 = num2;
	} else if(newNumTwo.length > newNumOne.length) {
//		padWithZeros(newNumOne, newNumTwo).num1 = num1;
//		padWithZeros(newNumOne, newNumTwo).num2 = num2;
			console.log(padWithZeros(num1, num2));
	}

	console.log('After pad: ', num1, num2);

	//while(

	// multiply each char by all the other chars in the longer string

	// sum the results together
	

	return result;
};

multiply('10', '100000');

module.exports = multiply;
