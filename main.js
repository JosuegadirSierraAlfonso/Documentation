//                  Promises
/*
Una Promesa es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. 
Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una 
acción asíncrona. Esto permite que los métodos asíncronos devuelvan valores como los métodos 
síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve 
la promesa de proporcionar el valor en algún momento en el futuro.*/


function multiplicar(num1, num2) {
    return new Promise(function(resolve, reject) {
      let resultado = num1 * num2;
      if(resultado >= 0) {
        resolve(resultado);
      } else {
        reject("El resultado es negativo");
      }
    });
  }
  
  multiplicar(6, 10)
    .then(function(resultado) {
      console.log("El resultado es: " + resultado);
    })
    .catch(function(error) {
      console.log("Error: " + error);
    });
  