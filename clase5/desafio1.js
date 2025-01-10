const fs = require("fs");
const nombreArchivo = "desafio1.txt";

const fechaActual = new Date();
const fecha = `${fechaActual.getDate()}-${fechaActual.getMonth()+1}-${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;
// Escribir el archivo
fs.writeFile(nombreArchivo, fecha, (error) => {
    // Leer el archivo
    fs.readFile(nombreArchivo, "utf-8", (error, contenido) => {
        console.log(contenido);
    })
})
