// Write a program that calculates the number of points obtained by a football team over a given season
// A score is denoted by “X:Y” where X is the home score and Y is the away score. Assume we played our games at home all season.
// Input: an array of 38 strings.
// All score combinations should be covered.
// x > y = 3 
// X< y = 0
// x= y = 1

const scores = [
    "2:1", "1:1", "3:2", "0:1", "2:2", "1:0", "4:3", "0:0", "3:3", "2:0",
    "1:2", "3:1", "1:1", "4:2", "2:1", "1:3", "3:3", "2:0", "0:1", "3:0",
    "1:2", "2:1", "0:0", "1:1", "2:3", "1:0", "4:1", "0:0", "3:2", "2:1",
    "1:1", "0:2", "3:3", "2:0", "1:0", "2:1", "3:3", "0:1"
  ];

  const caluculateScores = (scoreArray) =>{
    const scoreCalcs = [];

    scoreArray.forEach((score)=>{
        // console.log(score[0],score[2])
        let homeScore = score[0]
        let awayScore = score[2]
        if (homeScore > awayScore ){
            scoreCalcs.push(3)

                }        else if(homeScore < awayScore){
            scoreCalcs.push(0);
        }else{
            scoreCalcs.push(1)
        }
    })
        let totalScores = scoreCalcs.reduce((accum, curr)=> accum + curr, 0);
    console.log(totalScores) 

        }
    

 caluculateScores(scores);