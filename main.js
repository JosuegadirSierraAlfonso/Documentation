//                                      Math.log
/* The Math.log() static method returns the natural logarithm (base e) of a number. That is
∀ x > 0 , 𝙼𝚊𝚝𝚑.𝚕𝚘𝚐 ( 𝚡 ) = ln ( x ) = the unique  y  such that  e y = x */

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
  
  // 2 x 2 x 2 = 8
  console.log(getBaseLog(2, 8));
  // Expected output: 3
  
  // 5 x 5 x 5 x 5 = 625
  console.log(getBaseLog(5, 625));
  // Expected output: 4
