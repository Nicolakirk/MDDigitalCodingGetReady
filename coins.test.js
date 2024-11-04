import { coinCalculator } from './coins'; // no .js  extension with Node

test('that the coin calulator returns an array with the coins, 25,10,5,2,1', () => {
    const result = coinCalculator();
    expect(result).toStrictEqual([]);
});


test('that the coin calculator returns an array with the expected  coins, 25,10,5,2,1, for 25', () => {
    const result = coinCalculator(25);
    expect(result).toStrictEqual([25]);
});


test('that the coin calculator returns an array with the expected  coins for 46', () => {
    const result = coinCalculator(46);
    expect(result).toStrictEqual([25,10,10,1]);
});

test('that the coin calculator returns an array with the expected  coins for 135', () => {
    const result = coinCalculator(135);
    expect(result).toStrictEqual([25,25,25,25,25,10]);
});

test('that the coin calculator returns an array with the expected  coins for 3', () => {
    const result = coinCalculator(3);
    expect(result).toStrictEqual([2,1]);
});