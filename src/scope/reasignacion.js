var firstName; // declarada pero sin valor, es undefined
firstName = "Ceci"; //asignada
console.log(firstName);

var lastName = "Biagiola"; //declarar y asignar
lastName = "Guevara"; //reasignar
console.log(lastName); //mostrar

var secondName = "Maria"; //declarar y asignar
var secondName = "Cecilia"; //reasignar
console.log(secondName); //va a mostrar el último valor

let fruit = "Apple" //declarar y asignar
fruit = "Kiwi"; //reasignar

let fruits = "Banana" //no se puede re declarar una variable con let con el mismo nombre. (Lavar es fruit y no fruits)
console.log(fruit);

//const

const animal = "Dog"; //declara y asigna
animal = "Cat"; //reasignado
console.log(animal);

//const no permite reasignar ni re declarar

// RESUMEN:
// VAR permite reasignar y re declarar ua variable
// LET permite reasignar pero no re declarar
// CONST no permite ni reasignar ni re declarar, el valor que tiene ya queda.

const vehicles = [];
vehicles.push("Toyota");
console.log(vehicles);

