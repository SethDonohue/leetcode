//Tester...
 const {
	describe,
	it,
	expect
} = require('./tester/tester.js');

//Functions to test...
const multiply = require('./multiply-strings.js');

describe('Multiply Function', () => {
	it('Adds two basic string numbers together correctly without a carry over:', () => {
		const stringOne = '111';
		const stringTwo = '1111';

		expect(multiply(stringOne, stringTwo)).toBe('2222');
	})

	it('Adds 0 as first or second argument without a carry over:', () => {
		const stringOne = '0';
		const stringTwo = '1111';

		expect(multiply(stringOne, stringTwo)).toBe('1111');
		expect(multiply(stringTwo, stringOne)).toBe('1111');
	})

})
