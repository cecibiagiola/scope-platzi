// global scope - se puede leer en todo el código

//GLOBAL SCOPE

var fruit = "Apple"; //global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = "Colombia";
    console.log(country);
}

countries();
console.log(country);

function greeting() {
    let userName = "Ceci";
    console.log(userName);

    if(userName === "Ceci") {
        console.log(`Hello ${userName}!`)
    }
}

greeting();
console.log(userName); // este está fuera del alcance ed la función - scope local



