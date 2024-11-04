//  <!-- Write a program for NPC that calculates the cost of parking based on the time of day. It takes a hour as a parameter and returns cost of parking:
//   -->
// <!--
//  Hour 0 is deemed as midnight
//   Hour 1 is 1am
//   Hour 13 is 1pm -->

//   <!-- - Hours between midnight to 5am costs 300
//   - Hours between 5am to 10am costs 350
//   - Hours between 10am to 3pm costs 500
//   - Hours between 3pm to 8pm costs 700
//   - Hours between 8pm to midnight costs 400 --> -->

// <!-- create a function, taht takes in hours as parameter, returns cost of parking, depnding on the time of th dy - cost is in pence -->

function calculateParkingCost(hours) {
  let cost;

  if (hours >= 0 && hours < 5) {
    cost = 300;
  } else if (hours >= 5 && hours < 10) {
    cost = 350;
  } else if (hours >= 10 && hours < 15) {
    cost = 500;
  } else if (hours >= 15 && hours < 20) {
    cost = 700;
  } else if (hours >= 20 && hours <= 23) {
    cost = 400;
  }
  
  return cost;
}
function calculateParkingMessage(hours, calculateParkingCost) {
  if (hours === undefined) {
    console.log("Please enter the hour");
   
  } 
  else if  (hours >= 24 ){
    console.log(`${hours} is not valid. Please return a valid hour between 0 & 23.`)
  }
  else if ( hours <= 23) {
    console.log(
      `The cost of parking at hour ${hours} is ${calculateParkingCost(
        hours
      )} pence.`
    );

  }
}

let hours;

calculateParkingMessage(hours, calculateParkingCost);

hours = 0;
calculateParkingMessage(hours, calculateParkingCost);
hours = 13;
calculateParkingMessage(hours, calculateParkingCost);

hours = 23;
calculateParkingMessage(hours, calculateParkingCost);
hours = 24;
calculateParkingMessage(hours, calculateParkingCost);
hours = 17;
calculateParkingMessage(hours, calculateParkingCost);

hours = 12;
calculateParkingMessage(hours, calculateParkingCost);
hours = 1;
calculateParkingMessage(hours, calculateParkingCost);
hours = 0;
calculateParkingMessage(hours, calculateParkingCost);