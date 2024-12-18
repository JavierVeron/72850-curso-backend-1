// Operador Exponencial **
/* let valores = [1, 2, 3, 4, 5];
//let nuevosValores = valores.map(item => item**2); // Elevar al cuadrado cada uno de los elementos
//let nuevosValores = valores.map(item => item**3); // Elevar al cubo cada uno de los elementos
let nuevosValores = valores.map((item, indice) => item**indice); // Elevar al cubo cada uno de los elementos
console.log(nuevosValores); */


// Método: includes => Sirve para verificar si existe un elemento en el array
/* let nombres = ["Juan", "Octavio", "Ana", "Matías"];

// Método #1
if (nombres.includes("Octavio")) {
    console.log("Existe!");
} else {
    console.log("No Existe!");    
}

// Método #2 (Operador Ternario => simplificado)
console.log(nombres.includes("pepe") ? "Existe!" : "No Existe!"); */


// Object Entries, Keys y Values
const producto = {id:1, nombre:"Coca Cola", precio:2000}; // Esto es un objeto
const productos = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1900},
    {id:3, nombre:"Manaos", precio:1700}
]; // Esto es un Array

// Object para Objetos
/* let entries = Object.entries(producto);
let claves = Object.keys(producto);
let values = Object.values(producto);
console.log(entries);
console.log(claves);
console.log(values); */
// Object para Arrays
/* let entries = Object.entries(productos);
let claves = Object.keys(productos);
let values = Object.values(productos);
console.log(entries);
console.log(claves);
console.log(values); */

// Método Reduce => Realiza la suma total de cada uno de los elementos de nuestro array
/* let total = productos.reduce((acum, item) => acum += item.precio, 0);
console.log(total); */


// Operador Spread
/* const objeto1 = {
    propiedad:10,
    propiedad2:"veinte",
    propiedad3:true
}
const objeto2 = {
    propiedad1:30,
    propiedad2:"treinta",
    propiedad3:false,
    propiedad4:["juan", "maría"]
}
const objeto3 = {...objeto2, ...objeto1};
console.log(objeto3);

// Desestructuración
let {propiedad2, propiedad4} = objeto2;
console.log(propiedad2);
console.log(propiedad4);

// Rest Operator => Devolvernos un nuevo objeto con las propiedes restantes desestructuradas
let {propiedad1, ...pepe} = objeto2;
console.log(propiedad1);
console.log(pepe);
console.log(pepe.propiedad4); */


// Actividad en clase
/* const objetos = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
] */


// Dynamic Import
/* async function dinamicImport() {
    const {Calculadora} = await import("./calculadora.js");
    const calculator = new Calculadora();
    console.log(calculator);
    
}

dinamicImport(); */


// Método: trim => Sirve para eliminar los espacios anteriores y posteriores de un string
/* let texto = "    Hola Mundo!   ";
console.log(texto.trim());
console.log(texto.trim().length); */

// Método: flat => Devuelve un array sin array intermedios
/* let numeros = [1, 2, [3, 4, [5, 6]]];
console.log(numeros.flat());
console.log(numeros.flat(1));
console.log(numeros.flat(2)); */


// Operador Nullish
/* console.log("a" && "OK");
console.log(20 && "OK");
console.log(0 && "OK");
console.log("" && "OK");
console.log(true && "OK");
console.log(false && "OK"); */

/* let variable = 0;
//let variableAsignable = variable || "Sin Valor";
let variableAsignable = variable ?? "Sin Valor";
console.log(variableAsignable); */


// Variable Privada
/* class Persona {
    #NombreCompleto // Propiedad Privada

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#setNombreCompleto(nombre, apellido);
    }

    getNombreCompleto() {
        return this.#NombreCompleto;
    }

    #setNombreCompleto(nombre, apellido) { // Método Privado
        this.#NombreCompleto = nombre + " " + apellido;
    }
}

const persona1 = new Persona("Juan", "Perez");
console.log(persona1);
console.log(persona1.getNombreCompleto()); */