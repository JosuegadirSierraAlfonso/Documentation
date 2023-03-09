//                                      Math.atan
/* The Math.atan() static method returns the inverse tangent (in radians) of a number, that is
𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗 ( 𝚡 ) = arctan ( x ) = the unique  y ∊ [ − π 2 , π 2 ]  such that  tan ( y ) = x */


// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, adjacent) {
    return Math.atan(opposite / adjacent);
  }
  
  console.log(calcAngle(8, 10));
  // Expected output: 0.6747409422235527
  
  console.log(calcAngle(5, 3));
  // Expected output: 1.0303768265243125