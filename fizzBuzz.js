// Write a program that:
// Returns "fizz" if the number is a multiple of 3
// Returns "buzz" if its multiple of 5
// Returns "fizzbuzz" if the number is divisible by both 3 and 5.
// If the number is not divisible by either 3 or 5 then it should just return the number itself.
// Added challenge: Enhance your program to print out the outcome if provided a range of numbers 1 to 20 (i.e. a min and a max). For example it should print:
// 1 2 fizz 4 buzz fizz ...

// IF no number return error message
// IF divisible by 3 return fizz
// ELSE IF divisible by 5 return buzz
// ELSE IF divisible by 3 & 5 return fizzbuzz
// Otherwise return the number
//loop through the array to check if the numbers meet the condition 

const fizzChallenge = (num) => {
  let result;
  if (!num || typeof num  === "string") {
    result = "Please enter a number.";
  } else if (num % 15 === 0 ) {
    result = "FizzBuzz";
  } else if (num % 3 === 0) {
    result = "Fizz";
  } else if (num % 5 === 0) {
    result = "Buzz";
  } else {
    result = num;
  }
  console.log(result);
};

fizzChallenge("a");


// Added challenge: Enhance your program to print out the outcome if provided a range of numbers 1 to 20 (i.e. a min and a max). For example it should print:
// 1 2 fizz 4 buzz fizz ...

const fizzChallengeLoop = (min, max) => {

const fizzBuzzArray = [];

for(let i = min; i <= max; i ++){
    if (i % 15 === 0 ) {
        fizzBuzzArray.push("FizzBuzz");
      } else if (i % 3 === 0) {
        fizzBuzzArray.push("Fizz");
      } else if (i % 5 === 0) {
        fizzBuzzArray.push("Buzz");
      } else {
        fizzBuzzArray.push(i);
      }
}
console.log(fizzBuzzArray)

}
fizzChallengeLoop(1,20);