//                                      Math.cos
/* The Math.cos() static method returns the cosine of a number in radians.*/


function getCircleX(radians, radius) {
    return Math.cos(radians) * radius;
  }
  
  console.log(getCircleX(1, 10));
  // Expected output: 5.403023058681398
  
  console.log(getCircleX(2, 10));
  // Expected output: -4.161468365471424
  
  console.log(getCircleX(Math.PI, 10));
  // Expected output: -10
  