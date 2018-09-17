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
		const stringOne = '1111';
		const stringTwo = '1111';

		expect(multiply(stringOne, stringTwo)).toBe('2222');
	})
})
