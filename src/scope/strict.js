'use strict'; // modo estricto. Las variables tienen que sí o sí designarse con var, let o const
pi = 3.1416; // una variable sin var, let o const
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction()); //da error por el modo estricto.