//                                      indexOf 
/* El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.*/

const numbers = [45, 73, 12, 98, 7, 30, 12, 85]
console.log(numbers.indexOf(12))
// Expected output: 2
console.log(numbers.indexOf(12, -4))
// Expected output: 6
console.log(numbers.indexOf(20))
// Expected output: -1
