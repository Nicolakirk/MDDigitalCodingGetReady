//
// When given:
// Fahrenheit, a value should be converted to Celsius
// Celsius, a value should be converted to Fahrenheit
// Tip:
// To obtain temperature in Celsius: (F - 32) / 9 x 5
// To obtain temperature in Fahrenheit: (C * 1.8) + 32

// function  celcicus convert to farenheit or reverse
// do calculation
//how to know if the value is celcius or fernehit, allow the function to take different arguments for each

export const convertTemperature = (celsius, fahrenheit) => {
    let celsiusCalculation;
    let fahrenheitCalculation;

  
    if (celsius === undefined && fahrenheit === undefined) {
        return 'Please enter a temperature';
    }

    if (celsius !== undefined && fahrenheit === undefined) {
        fahrenheitCalculation = (celsius * 1.8) + 32;
        return `Fahrenheit: ${fahrenheitCalculation}`;
    }


    if (fahrenheit !== undefined && celsius === undefined) {
        celsiusCalculation = (fahrenheit - 32) / 1.8;
        return `Celsius:${celsiusCalculation}`;
    }

    
    if (fahrenheit !== undefined && celsius !== undefined) {
        celsiusCalculation = (fahrenheit - 32) / 1.8;
        fahrenheitCalculation = (celsius * 1.8) + 32;
        return `Celsius: ${celsiusCalculation}, Fahrenheit: ${fahrenheitCalculation}`;
    }
};
