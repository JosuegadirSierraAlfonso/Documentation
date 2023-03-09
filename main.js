//                                      slice 
/* The slice() method returns a copy of a part of the array into a new array starting from start to end (end not included). The original array will not be modified. */

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);
console.log(masculinos)
// masculinos contiene ['Pedro','Miguel']
