// Create a function that takes an array of numbers and returns the word ‘Boom!’ if the number 7 appears in the array. Otherwise return ‘No booming here’.

// Examples:
// sevenBoom([1, 2, 3, 5, 7]) => ‘Boom!’
// sevenBoom([1, 2, 3, 5, 9]) => ‘No booming here’
// sevenBoom([1, 2, 3, 5, 97]) => ‘Boom!’

// use an array of numbers a s the parameter, loop through the numbers, and if you find a 7 , print Boom or no booming here if no number 7
// use some, will be a truthy if 7 is there

function boomGame (numberArray){

    
    const isSeven= (number) => number.toString().includes("7");

let result; 

    if (numberArray.some(isSeven)) {
        result = "Boom!";
    } else {
        result = "No Booming here!";
    }

console.log(result)
}






let numberArray  = [1, 2, 3, 5, 7]

boomGame(numberArray);

numberArray = [1, 2, 3, 5, 9]

boomGame(numberArray);

numberArray = [1, 2, 3, 5, 97];
boomGame(numberArray);