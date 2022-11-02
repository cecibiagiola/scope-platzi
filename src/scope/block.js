// BLOCK SCOPE -solo peden ser usadas dentro del bloque 

function fruits(){
    if(true) {
        var fruit1 = "Apple"; //solo este funciona
        let fruit2 = "Kiwi"; // este no porque está fuera del bloque
        const fruit3 ="Banana"; //este tampoco
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}