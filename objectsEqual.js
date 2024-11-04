// Write a program to compare two objects to determine if the first one contains the same properties as the other (which may contain additional properties). Example:


// const firstObj = { a: 1, b: 2, c: 3 };
// const secondObj = { a: 1, b: 2, c: 3 };
// const thirdObj = { a: 1, b: 2, d: 3 }


// firstObj and secondObj will return true as they both contain the same properties whereas firstObj and thirdObj will return false, as there is no d property in firstObj.


const checkObjects = (firstObj,secondObj) => {
    const firstKeys = Object.keys(firstObj);
    const secondKeys = Object.keys(secondObj);
   
    if(firstKeys.length !== secondKeys.length){
        console.log(false)
    }
    const equalArray = [];
    for (const key of firstKeys) {
        if (firstObj[key] !== secondObj[key]) {
            equalArray.push(false);
          
           
        } else {
         equalArray.push(true)       
        }

    }
    if(equalArray.includes(false)){
        console.log(false)
    } else {
        console.log(true)
    }
}
const firstObj = { a: 1, b: 2, c: 3 };
const secondObj = { a: 1, b: 2, c: 3 };
const thirdObj = { a: 1, b: 2, d: 3 }

checkObjects(firstObj, secondObj)

checkObjects(secondObj,thirdObj)

checkObjects(firstObj, thirdObj)