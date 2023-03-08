//                                      concat 
/* The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.*/

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]