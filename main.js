//                  Closures
/* A closure or closure is a function that keeps references
to the adjacent state (lexical scope). In other words,
a closure allows access to the scope of an outer function from an inner function.
In JavaScript, closures are created every time a function is created.*/


function iniciar() {
    var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
      alert(nombre)  // Usa una variable declarada en la función externa.
    }
    mostrarNombre()
  }
  iniciar()