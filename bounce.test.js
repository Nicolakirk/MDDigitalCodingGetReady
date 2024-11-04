import { bounceCalculator} from './bounce'; // no .js  extension with Node
test('When 0 parmeters return -1 ', () => {
    const result = bounceCalculator();
    expect(result).toBe(-1);
});

test('WHight, is 1, windowheight is 0.5, bounce factor 0.66 return 3', () => {
    const result = bounceCalculator(1,0.5,0.66);
    expect(result).toBe(3);
});


test('WHight, is 3, windowheight is 0.5, bounce factor 0.66 return 9', () => {
    const result = bounceCalculator(3,0.5,0.66);
    expect(result).toBe(9);
});
test('WHight, is 1, windowheight is 2.5, bounce factor 0.66 return -1', () => {
    const result = bounceCalculator(1,2.5,0.66);
    expect(result).toBe(-1);
});