// A child is playing with a ball on the nth floor of a tall building. The height h of this floor is known. He drops the ball out of the window. The ball bounces to two thirds of it's height, i.e. 0.66. His mother looks on from a window that is 1.5m from the ground.
// How many times will the mother see the ball pass her window (including the time the ball falls and whilst its bouncing)?
// Assume you have the following arguments to your function:
// h is a float that is greater than 0 
// bounce is a float that is greater than 0 and less than 1 
// window must be less than h
// If all of the above argument criterias are matched, return the outcome of occurrences, as an integer, otherwise return -1





export const bounceCalculator = (initialHeight, windowHeight, bounceFactor) => {
    
    let bounceCount = 0;

   if (initialHeight > windowHeight){
    bounceCount++;}

    let bounceHeight = initialHeight * bounceFactor;

    // Count the bounces
    while (bounceHeight > windowHeight) {
        bounceCount += 2; 
        bounceHeight *= bounceFactor; 
    }
        if (bounceCount === 0){
            return -1
        }else {
            return bounceCount
        }
};

