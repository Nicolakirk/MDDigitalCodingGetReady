// given the strat number, add numbers on until you reach the endnumber
// check if end number is bugger than start number, create an emoty arry , oush start number, push every nth number
//depending on the step amount until it reaches the end amount, return the array

export const sumOfSequence = (startNumber, endNumber, stepAmount) => {
  const sequenceArray = [];

  if (startNumber > endNumber) {
    return "Start number must be larger than the end number.";
  }

  let nextNumber = startNumber;

  while (nextNumber <= endNumber) {
    sequenceArray.push(nextNumber);
    nextNumber = nextNumber + stepAmount;
  }
 
  const arrayTotal = sequenceArray.reduce((accum, curr) => accum + curr, 0);
  return arrayTotal;
};
