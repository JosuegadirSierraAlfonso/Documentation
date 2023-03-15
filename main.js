//                  anonymous function
/* An anonymous function is a function without a name.
Note that if you don’t place the anonymous function inside the (),
you’ll get a syntax error. The () makes the anonymous function an
expression that returns a function object.
An anonymous function is not accessible after its initial creation.
Therefore, you often need to assign it to a variable.*/


let show = function() {
    console.log('Anonymous function');
};

show();