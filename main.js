//                                      Math.sqrt
/* The Math.sqrt() static method returns the square root of a number. That is
∀ x ≥ 0 , 𝙼𝚊𝚝𝚑.𝚜𝚚𝚛𝚝 ( 𝚡 ) = x = the unique  y ≥ 0  such that  y 2 = x */

function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
  }
  
  console.log(calcHypotenuse(3, 4));
  // Expected output: 5
  
  console.log(calcHypotenuse(5, 12));
  // Expected output: 13
  
  console.log(calcHypotenuse(0, 0));
  // Expected output: 0
