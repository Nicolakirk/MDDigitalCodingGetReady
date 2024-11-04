// Task: 
// Write a function that sorts book titles in order of their complexity (see scenario in workbook).
// All strings provided contain only ASCII characters.
// Bonus: Add timer before final order is announced

// You have been asked to help a librarian sort a list of book titles. The library wants to order the books by the "complexity" of their titles. The complexity is calculated by the sum of the ASCII values of each character in the title. If two titles have the same complexity, they should be sorted alphabetically.

// For example, given the following book titles:

// "The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Moby Dick"

// "The Catcher in the Rye" has a complexity of 2091
// "To Kill a Mockingbird" has a complexity of 2030
// "1984" has a complexity of 200
// "Moby Dick" has a complexity of 816
// The sorted output should be:

// "1984", "Moby Dick", "To Kill a Mockingbird", "The Catcher in the Rye"

// Write a function that orders book titles based on their complexity.
//split array in to subarrays, so we can look through each one  or
//crate a count for each book , as part of  
// let ascii = 65;
// console.log(String.fromCharCode(ascii)); 


const bookTitles = [
    "The Catcher in the Rye",
    "To Kill a Mockingbird",
    "1984",
    "Moby Dick"
 ];


//  const calculateAsciOfTitle = (bookTitle) => {

//  }

 const convertAsci = (bookTitles) => {
const newBookArray= [];
let bookAsci;

    bookTitles.forEach((book, index) => {
        bookAsci = book.trim().charCodeAt(index); 
    newBookArray.push(book +":"  + bookAsci )
})
   
console.log(newBookArray)
 
    
 }
 convertAsci(bookTitles)