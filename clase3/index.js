// Método: Map
const numeros = [1, 2, 3, 4, 5];

const miFuncion = (item) => {
    return item * 2
}

//const nuevoArray = numeros.map(miFuncion); // Opción #1
/*const nuevoArray = numeros.map((item) => { // Opción #2
    return item * 2
});*/
/* const nuevoArray = numeros.map(item => item * 2); // Opción #3
console.log(nuevoArray); */
// Otros ejemplos de Map
const productos = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1900},
    {id:3, nombre:"Manaos", precio:1700}
];
// Genera un nuevo Array con solo el nombre del Producto
//const nuevoProductos = productos.map(pepe => pepe.nombre); 
// Genera un nuevo Array con un objeto donde tiene nombre y precio
//const nuevoProductos = productos.map(pepe => ({name:pepe.nombre, price:pepe.precio})); 
const nuevoProductos = productos.map(pepe => ({name:pepe.nombre.toUpperCase(), price:pepe.precio * 2, category:"bebidas"})); 
//console.log(nuevoProductos);

const esPar = (numero) => {
    return ((numero % 2) == 0) ? "Par" : "Impar";
}

const arraydePares = numeros.map(item => esPar(item));
//console.log(arraydePares);

// Proceso equivalente al método Map
/* function metodoMap(arreglo, funcion) {
    let nuevoArray = [];
    let resultado;

    for (let i=0; i<arreglo.length; i++) {        
        resultado = funcion(arreglo[i]);
        nuevoArray.push(resultado);
    }   

    return nuevoArray;
}

const arraydePares2 = metodoMap(numeros, esPar);
console.log(arraydePares); // Ejecuto con el método Map de Array
console.log(arraydePares2); // Ejemplo con la función metodoMap (hecha por nosotros) */


// Funciones recibiendo callbacks
/* const suma = (valor1, valor2) => valor1 + valor2;
const resta = (valor1, valor2) => valor1 - valor2;
const multi = (valor1, valor2) => valor1 * valor2;
const divi = (valor1, valor2) => valor1 / valor2;

const operacion = (valor1, valor2, op) => {
    return op(valor1, valor2);
}

let resultado = operacion(10, 20, suma);
resultado = operacion(10, 20, resta);
resultado = operacion(10, 20, multi);
resultado = operacion(30, 10, divi);
console.log("Resultado", resultado); */


// Promesas
/* const vamosAlCine = (pregunta) => {
    return new Promise ((resolve, reject) => {
        //console.log("Estoy dentro de la promesa!");
        
        if (pregunta.includes("Gladiador")) {
            resolve("Sí, vamos!");
        } else {
            reject("Naaaa, ni en pedo!");
        }
        //resolve("Si, vamos!"); // Siempre se va a cumplir
    })
} */

//console.log(vamosAlCine("Vamos a ver Volver al Futuro?"));
/* vamosAlCine("Gladiador 2")
.then(resultado => {
    console.log(resultado);
})
.catch(resultado => {
    console.log("Error: " + resultado);
}) */

// Ejemplo de la Promesa Divivir
const dividir = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        if (valor2 == 0) {
            reject("El denominador no debe ser igual a 0!")
        } else {
            resolve(valor1/valor2)
        }
    })
}

/* dividir(10,0)
.then(resultado => {
    console.log("Resultado:", resultado);
})
.catch(error => {
    console.log("ERROR: " + error);
}) */


// Consumo de API con Fetch (Método Then anidados)
/* fetch("https://jsonplaceholder.typicode.com/users")
.then(resultado => resultado.json())
.then(datos => {
    console.log(datos);
})
.catch(error => {
    console.log("ERROR: " + error);
}) */


// Ejemplo de una función sincrónica
// Ejemplo una ejecución sincrónica
/* const holaA = () => {
    console.log("hola #1");
    holaB();
    console.log("hola #2");
}

const holaB = () => {
    console.log("hola #3");
    holaC();
    console.log("hola #4");
}

const holaC = () => {
    console.log("hola #5");
}

holaA(); */

// Ejemplo asíncronca
/* const ejecutarAsincronia = async () => {
    try {
        let resultado = await dividir(10, 0);
        console.log("Resutado:", resultado);
    } catch(pepe) {
        console.log("ERROR: " + pepe);
    }
}

ejecutarAsincronia(); */

// Consumo de una API utilizando async/await
const callJsonPlaceHolder = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR: " + error);
    }
}

callJsonPlaceHolder();