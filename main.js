//                                      codePointAt 
// Los puntos de código Unicode van de 0 a 1114111 ( 0x10FFFF). Los primeros 128 puntos de 
/* The codePointAt() method returns a non-negative integer that is the 
// código Unicode son una coincidencia directa de la codificación de caracteres ASCII.
Unicode code point value at the given position. Note that this function 
// charCodeAt() siempre devolverá un valor menor que 65536. Esto se debe a que los puntos 
does not give the nth code point in a string, but the code point 
// de código más altos están representados por un par de pseudocaracteres "sustitutos" 
starting at the specified string index. */


const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"