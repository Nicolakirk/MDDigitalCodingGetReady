// Given a set of defined golf course holes and their respective shot counts, work out the score for a player when they complete 18 rounds of golf.
// For example, an 18 round course has the following scoring holes per round:


// A players score can fluctuate between 2 shots to 5, so for the user in this challenge their 18 hole shots per round were:


const  calculateGolfScore = (parArray, shotArray) =>{
   
if (parArray.length !== shotArray.length){
    console.log("please enter more scores")
    return;
}
const scoreString = shotArray.join(" ")
let parTotal = parArray.reduce((accum, curr) => accum + curr,0)
    let shotTotal = shotArray.reduce((accum, curr) => accum + curr,0)
        console.log(parTotal)
let totalScore = shotTotal - parTotal
console.log(`The total score, (Strokes over/under par) = ${totalScore}`)
console.log(`Scores for each hole ${scoreString}`)
}
const parSores = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
const shotScores = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]

calculateGolfScore(shotScores, parSores)