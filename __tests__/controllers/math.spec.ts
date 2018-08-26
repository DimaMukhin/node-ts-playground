import { addTwoNumbers } from '../../src/controllers/math';

describe('controllers/math.ts', () => {
    it('should add two numbers', () => {
        debugger;
        expect(addTwoNumbers(10, 20)).toBe(30);
    });
});