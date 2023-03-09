//                                      Math.min
/* The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.*/

console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1
