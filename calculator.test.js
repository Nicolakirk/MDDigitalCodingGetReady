import { add } from './calculator'; // no .js  extension with Node
test.skip('When given two numbers, their sum is returned', () => {
    const result = add(1, 1);
    expect(result).toBe(2);
});