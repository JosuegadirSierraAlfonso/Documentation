//                                      Math.acos
/* The Math.acos() static method returns the inverse cosine (in radians) of a number. That is,
∀ x ∊ [ − 1 , 1 ] , 𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜 ( 𝚡 ) = arccos ( x ) = the unique  y ∊ [ 0 , π ]  such that  cos ( y ) = x */


// Calculates angle of a right-angle triangle in radians
function calcAngle(adjacent, hypotenuse) {
    return Math.acos(adjacent / hypotenuse);
  }
  
  console.log(calcAngle(8, 10));
  // Expected output: 0.6435011087932843
  
  console.log(calcAngle(5, 3));
  // Expected output: NaN