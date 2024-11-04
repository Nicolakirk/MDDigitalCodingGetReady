const sumOfRow = (row) => {
    // Calculate the first odd number in the row
    const firstOddNumber = row * (row - 1) + 1;
    // Calculate the sum of the row
    let sum = 0;

    for (let i = 0; i < row; i++) {
        sum += firstOddNumber + 2 * i;
    }
    
    return sum;
};

console.log(sumOfRow(1)); 
console.log(sumOfRow(2)); 
console.log(sumOfRow(3)); 
console.log(sumOfRow(4)); 
console.log(sumOfRow(5)); 
console.log(sumOfRow(6)); 