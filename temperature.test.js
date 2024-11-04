import { convertTemperature } from './temperature'; // no .js  extension with Node
test('When given no temepratures arguments return 0 ', () => {
    const result = convertTemperature();
    expect(result).toBe('Please enter a temperature'
);
});

test('When given a celcius  temp return temp in farenheit ', () => {
    const result = convertTemperature(30, undefined);
    expect(result).toBe('Fahrenheit: 86');
});


test('When given a farenheit  temp return temp in celcius ', () => {
    const farenheit = 86 
    const result = convertTemperature(undefined, farenheit);
    expect(result).toBe('Celsius:30');
});

test('When given a farenheit & celcius  temp return the correct temperatures in the opposite one  ', () => {
    
    const result = convertTemperature(30, 86);
    expect(result).toBe('Celsius: 30, Fahrenheit: 86');
});