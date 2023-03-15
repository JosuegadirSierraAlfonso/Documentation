//                           functions by expression
/* The function keyword can be used to define a function inside an expression.
You can also define functions using the function declaration or the arrow syntax.*/



const getRectArea = function(width, height) {
    return width * height;
  };
 
  console.log(getRectArea(3, 4));
  // Expected output: 12