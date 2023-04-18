//                  Callback
/*A callback in JavaScript is a function that is passed as 
an argument to another function and is called inside the main function at some specific time.*/


function multiplicar(num1, num2, callback) {
    let resultado = num1 * num2;
    callback(resultado);
  }
  
  function mostrarResultado(res) {
    console.log("El resultado es: " + res);
  }
  
  multiplicar(5, 10, mostrarResultado); // Muestra "El resultado es: 50"