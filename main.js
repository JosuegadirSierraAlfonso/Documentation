//                  Lexical scope
/*Lexical scope describes how nested functions (also known as "children")
have access to variables defined in the boundaries of their parents.*/


const miFuncion = () => {
    let miValor = 2;
    console.log(miValor);

    const funcionHija = () => {
         console.log(miValor += 1);
    }

    funcionHija()
}

miFuncion()