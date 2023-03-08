//                                      charCodeAt
// Los puntos de código Unicode van de 0 a 1114111 ( 0x10FFFF). Los primeros 128 puntos de 
// código Unicode son una coincidencia directa de la codificación de caracteres ASCII.
// charCodeAt() siempre devolverá un valor menor que 65536. Esto se debe a que los puntos 
// de código más altos están representados por un par de pseudocaracteres "sustitutos" 
// (de menor valor) que se utilizan para comprender el carácter real.
// Debido a esto, para examinar (o reproducir) el carácter completo para valores de caracteres
// individuales de 65536o mayores, para dichos caracteres, es necesario recuperar no solo 
// charCodeAt(i), sino también charCodeAt(i+1)(como si se manipulara una cadena con dos letras),
// o para usar codePointAt(i)en su lugar. Ver ejemplos 2 y 3 (abajo).


let frase = "SHINZOU WO SASAGEYO"
// primero
console.log(frase.charCodeAt(0))
// ultimo
console.log(frase.charCodeAt(frase.length - 1))
// por defecto
console.log(frase.charCodeAt())
// fuera de rango
console.log(frase.charCodeAt(19)) //NaN