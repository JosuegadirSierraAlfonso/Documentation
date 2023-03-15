//                           functions as objects
/* In JavaScript, functions are called Function Objects because
they are objects. Just like objects, functions have properties and methods,
they can be stored in a variable or an array, and be passed as arguments to other functions.*/


function message() {
    console.log("Greetings Linda!");
}

console.log(typeof message);               // => function
console.log(message instanceof Object);    // => true