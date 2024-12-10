// Diferentes salidas de la función console
/* console.log("Hola Mundo!");
console.info("Hola Mundo!");
console.warn("Hola Mundo!");
console.error("Hola Mundo!");

const bebida = {id:1, nombre:"Coca Cola", precio:2000};
const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1900},
    {id:3, nombre:"Manaos", precio:1500}
]

console.log(bebida);
console.log(bebidas); */

// Variables por Copia
/* let valor1 = 10;
let valor2 = valor1; // Copiar el contenido de la variable "valor1" en la variable "valor2"
valor1 = 20;
console.log(valor1);
console.log(valor2); */

// Variables por Copia por Referencia (Objetos)
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:2000};
const bebida2 = bebida1; // La referencia del objeto "bebida1" en "bebida2"
bebida1.precio = 3000;
bebida2.nombre = "Cunnington Cola";
console.log(bebida1);
console.log(bebida2);
// ¿Cómo se soluciona?
// Solución #1 (Operador Spread)
const bebida3 = {descuento:true, ...bebida1, id:4, categoria:"bebidas"}; // Crear un nuevo objeto en "bebida3" con las propiedades del objeto "bebida1"
bebida3.precio = 2000;
console.log(bebida3); */

// Variables por Copia por Referencia (Arrays)
/* const bebidas1 = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1900},
    {id:3, nombre:"Manaos", precio:1500}
];
const bebidas2 = bebidas1;
bebidas1[1].precio = 5000; // La referencia al array "bebidas1" en la variable "bebidas2"
console.log(bebidas1);
console.log(bebidas2);
// ¿Cómo se soluciona?
// Solución #1 (Operador Spread)
console.log("Creo un array a partir del operador Spread");
const bebidas3 = [{id:0, nombre:"Sin Nombre"}, ...bebidas1, {id:4, nombre:"Seven Up", precio:2300}];
bebidas3[1].precio = 500;
console.log(bebidas3);
// Solución #2 (Método Map)
console.log("Creo un array a partir del método Map");
const bebidas4 = bebidas1.map(item => ({id:item.id, nombre:item.nombre.toUpperCase(), precio:item.precio * 1.1}));
bebidas4[1].precio = 2500;
console.log(bebidas4);
// Solución #3 (Método Concat)
console.log("Creo un array a partir del método Concat");
const bebidas5 = bebidas1.concat([]);
bebidas5[1].precio = 1000;
console.log(bebidas5); */

// Creamos un array nombres
/* const nombres = ["Matias", "Joel", "Rocío", "Juan"]; // Array original
const nombres2 = nombres; // Copia de la referencia del array nombres
nombres.push("Allan");
nombres2.unshift("Franco");
console.log(nombres);
console.log(nombres2);
const nombres3 = [...nombres]; // Crear un nuevo array desparramando los elementos del array nombres
nombres.push("Juan");
nombres3.push("Estanilao");
console.log(nombres3);
console.log(nombres); */

// Cómo buscar un elemento en un Array?
const bebidas1 = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1900},
    {id:3, nombre:"Manaos", precio:1500}
];
/* let bebida = bebidas1.find(producto => producto.id == 2);
bebida = bebidas1.find(producto => producto.nombre.toLowerCase() == "pepsi");
bebida = bebidas1.find(producto => producto.precio >= 1500 && producto.precio <= 1899);
console.log(bebida); */

// Cómo filtrar elementos de un Array?
/* let bebidasFiltro = bebidas1.filter(producto => producto.id == 2); // Filtro por el producto #2
bebidasFiltro = bebidas1.filter(producto => producto.id != 2); // Eliminando el producto #2
bebidasFiltro = bebidas1.filter(producto => producto.nombre.toLowerCase() == "pepsi"); // Filtro por el producto "pepsi"
bebidasFiltro = bebidas1.filter(producto => producto.nombre.toLowerCase() != "pepsi"); // Filtro por todos elementos distintos de "pepsi"
bebidasFiltro = bebidas1.filter(producto => producto.precio >= 1500 && producto.precio <= 1899); // Filtro por precio
console.log(bebidasFiltro); */








