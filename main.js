//                                      Math.asin
/* The Math.asin() static method returns the inverse sine (in radians) of a number. That is,
∀ x ∊ [ − 1 , 1 ] , 𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗 ( 𝚡 ) = arcsin ( x ) = the unique  y ∊ [ − π 2 , π 2 ]  such that  sin ( y ) = x */


// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, hypotenuse) {
    return Math.asin(opposite / hypotenuse);
  }
  
  console.log(calcAngle(6, 10));
  // Expected output: 0.6435011087932844
  
  console.log(calcAngle(5, 3));
  // Expected output: NaN