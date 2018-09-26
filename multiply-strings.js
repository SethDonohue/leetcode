var multiply = function(num1, num2) {
	let result = '0';
	let products = [];

	if(num1 == '0' || num2 == '0') return '0';
	// Long hand Multiplication
	// pad shorter string with zeros
	const padWithZeros = (shorterString, longerString) => {
		while(shorterString.length < longerString.length){
			shorterString = '0' + shorterString;
		}
		return { shorterString, longerString };
	};

	if(num1.length > num2.length){
		num2 = padWithZeros(num2, num1).shorterString;
	} else if(num2.length > num1.length) {
		num1 = padWithZeros(num1, num2).shorterString;
	}

	// multiply each char by all the other chars in the longer string
	const	loop = num1.toString().length;
	let multiplier = 1;
	for(let i = loop - 1; i >= 0; i--){
		let tempProduct = [];
		let carry = 0;
		for(let j = loop - 1; j >= 0; j--){
			let tempSum = parseInt(num1[i]) * parseInt(num2[j]) + carry;
			if(tempSum > 9){
				tempProduct[j] = (tempSum % 10);
		//		console.log(tempSum, tempProduct[j]);
				carry = Math.floor(tempSum / 10);
			} else {
				tempProduct[j] = tempSum.toString();
			}
		}
		if(carry > 0){
			tempProduct.unshift(carry);
		}
//		console.log(tempProduct.join(''));
		products.push(parseInt(tempProduct.join(''))*multiplier);
		multiplier *= 10;
	//	console.log('Multiplier: ', multiplier);
	}
	// sum the results together
	//console.log('Products before sum: ', products);
	result = products.reduce((accum, curr) => accum + curr);

	return result.toString();
};

module.exports = multiply;
