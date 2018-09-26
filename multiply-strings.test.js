//Tester...
 const {
	describe,
	it,
	expect
} = require('./tester/tester.js');

//Functions to test...
const multiply = require('./multiply-strings.js');

describe('Multiply Function', () => {
	it('Multiplies two basic string numbers together correctly WITHOUT a carry over:', () => {
		const stringOne = '111';
		const stringTwo = '1111';

		expect(multiply(stringOne, stringTwo)).toBe('123321');
		expect(multiply(stringTwo, stringOne)).toBe('123321');
	})

	it('Multiplies two basic string numbers together correctly WITH a carry over:', () => {
		const stringOne = '99';
		const stringTwo = '99';

		expect(multiply(stringOne, stringTwo)).toBe('9801');
	})

	it('Multplies 0 as first or second argument, returns 0:', () => {
		const stringOne = '0';
		const stringTwo = '1111';

		expect(multiply(stringOne, stringTwo)).toBe('0');
		expect(multiply(stringTwo, stringOne)).toBe('0');
	})

	it('Multplies long strings together:', () => {
		const stringOne = '123456789';
		const stringTwo = '1234567890';

		expect(multiply(stringOne, stringTwo)).toBe('0');
		expect(multiply(stringTwo, stringOne)).toBe('0');
	})

})
