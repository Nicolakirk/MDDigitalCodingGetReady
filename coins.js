
//Given you have available coins as 25, 10, 5, 2 and 1, write a program to //work convert an amount of money to coins.


export const coinCalculator = (money) => {
    const coins = [];
    
   //while loop to find the coins 
    while (money >= 25) {
        coins.push(25);
        money -= 25;
    }
    
    while (money >= 10) {
        coins.push(10);
        money -= 10;
    }
    
    while (money >= 5) {
        coins.push(5);
        money -= 5;
    }
    
    while (money >= 2) {
        coins.push(2);
        money -= 2;
    }
    
    while (money >= 1) {
        coins.push(1);
        money -= 1;
    }

    return coins;
};
   
