//                                      Math.random
/* The Math.random() static method returns a floating-point, pseudo-random number 
that's greater than or equal to 0 and less than 1, with approximately uniform 
distribution over that range — which you can then scale to your desired range. 
The implementation selects the initial seed to the random number generation algorithm; 
it cannot be chosen or reset by the user. */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
