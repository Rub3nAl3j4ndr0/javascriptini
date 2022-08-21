function suma(a, b) {
    return a + b 
}

suma(1, 2);
// booleanos
let a = true;
console.log(a);
console.log(typeof a);


// numeros
let b = 10;
console.log(b);
console.log(typeof b);

//null
let c = null;
console.log(c);
console.log(typeof c);

//undefined
let d;
console.log(d);
console.log(typeof d);

//bigint
let e = BigInt(10);
console.log(e);
console.log(typeof e);

//string
let f = "hola"
console.log(f);
console.log(typeof f);

//symbol
let g = Symbol("hola");
console.log(g);
console.log(typeof g);

//object
let perro = {
    nombre: "firulais"
    edad: "2"
    raza: "labrador"
    color: "blanco"
};
console.log(perro);
console.log(typeof perro);

class gatos{
    constructor(nombre,edad,raza,color) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color = color;
    }
}





















