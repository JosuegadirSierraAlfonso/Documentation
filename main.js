//                                      Math.atan2
/* The Math.atan2() static method returns the angle in the plane (in radians) 
between the positive x-axis and the ray from (0, 0) to the point (x, y), for Math.atan2(y, x).*/


function calcAngleDegrees(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  
  console.log(calcAngleDegrees(5, 5));
  // Expected output: 45
  
  console.log(calcAngleDegrees(10, 10));
  // Expected output: 45
  
  console.log(calcAngleDegrees(0, 10));
  // Expected output: 90
  