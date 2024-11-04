import { sumOfSequence } from './sequence'; // no .js  extension with No
test('When given no arguments a 0 is returned', () => {
    const result = sumOfSequence ();
    expect(result).toBe(0);
});


test('When given a start, end and step count return an of its total', () => {
    const result = sumOfSequence (1,4,1);
    expect(result).toBe(10);
});

test('When given a start, end and step count return  the sum of its total', () => {
    const result = sumOfSequence (2,6,2);
    expect(result).toBe(12);
});

test('When given a start number that is bigger than end number return an message ', () => {
    const result = sumOfSequence (10,6,2);
    expect(result).toBe("Start number must be larger than the end number.");
});