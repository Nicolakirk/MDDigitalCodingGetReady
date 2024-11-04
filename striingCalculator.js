// Write a calculator function that takes a string of numbers and performs addition with the rules:
// The function should accept 0, 1, or 2 numbers; an empty string should return an empty string.
// It should handle an unknown number of numbers but ignore numbers larger than 1000.
// Throw an exception for any negative numbers.
// Be prepared to discuss your code on return

//can except 0, 1, 02 nums  -- if 0 nums - please enter some numbers , if 1 - please enter two numbers,
//take th string and chnage it to numbers
//add them together
//return the total




const stringCalculator = (num1, num2) => {
  console.log(num1 , num2);

  if (num1 === undefined && num2 === undefined) {
    console.log("Please enter two numbers");
  } 
  else if (num1 === undefined || num1.trim().length === 0 && num2.trim().length >= 1)   {
    console.log("Please enter another number");
  }
   else if (num2 === undefined || num2.trim().length === 0 && num1.trim().length >= 1) {
    console.log("Please enter another number");
  } 
 
  else if (num1.trim().length === 0  &&  num2.trim().length === 0) {
    console.log("Please enter two numbers");
  } 
  else if (num1.trim().length >= 1 && num2.trim().length >= 1) {
  let newNumOne = Number(num1)
  let newNumTwo = Number(num2)
  if(newNumOne >= 1000 || newNumTwo >=1000){
    console.log("please make sure your number is less than 1000")
  }else if(newNumOne < 0 || newNumTwo < 0 ) {
    console.log("Please enter a number great than o")

  } 
  else {
  console.log(newNumOne + newNumTwo)
  }

  }
};

stringCalculator("-12","-12" );
