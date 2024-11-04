// Given an array containing hashes of names, return a string formatted as a list of names separated by commas except for the last two names which should be separated by an ampersand.
// Example:


const returnstringOfNames = (inputArray) => {
    
    let greetingString = "";


if (inputArray.length === 1){
    for(let i = 0; i < inputArray.length; i ++){
        console.log(inputArray[i].name)
    }
} 
else if( inputArray.length > 1){
for(let i =0 ; i < inputArray.length-2; i ++){
    console.log(inputArray[i].name)
    greetingString += inputArray[i].name + ","
}
for(let i = inputArray.length-2; i < inputArray.length; i ++){
    console.log(inputArray[i].name )
    greetingString += inputArray[i].name +  " & "
}
console.log(greetingString.substring(0,greetingString.length-2))
}

 

}


const firstList = [ { name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]// returns 'Bart, Lisa & Maggie'
returnstringOfNames(firstList);


const secondList = [ { name: 'Bart' }, { name: 'Lisa' }] // returns 'Bart & Lisa'
returnstringOfNames(secondList)
const fourthList = [ { name: 'Bart' }] // returns 'Bart'

returnstringOfNames(fourthList);