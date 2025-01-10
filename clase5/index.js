// setTimeout => ejecuta un proceso al cabo de xx segundos (ejecuta 1 sola vez). Se puede detener con clearTimeout
// Síncronismo
/* console.log("1- Inicio del Proceso");
console.log("2- Mitad del Proceso");
console.log("3- Fin del Proceso"); */

// Asíncronismo
/* console.log("1- Inicio del Proceso");

setTimeout(() => {
    console.log("2- Mitad del Proceso");
}, 3000)

console.log("3- Fin del Proceso"); */


// setInterval => ejecuta un proceso al cabo de xx segundos (de forma periódica). Se puede detener con clearInterval
// Síncronismo
/* console.log("1- Inicio del Proceso");

for (valor = 1; valor <=5; valor++) {
    console.log(valor);
}

console.log("3- Fin del Proceso"); */

// Asíncronismo
/* console.log("1- Inicio del Proceso");

const contador = () => {
    let counter = 1;
    
    let timer = setInterval(() => {
        console.log(counter);

        if (counter == 5) {
            clearInterval(timer);
            console.log("Detuvimos el setInterval!");
        }

        counter++;
    }, 2000)
}

contador();

console.log("3- Fin del Proceso"); */


// Utilizando el módulo FS (síncronico)
const fs = require("fs");
const archivo = "prueba.txt";

// Escribir un archivo del tipo string
/* fs.writeFileSync(archivo, "Hola Chicos, estamos cursando Backend en Coderhouse!"); */

// Escribir un archivo del tipo objeto/array (utilizar JSON.stringify() o JSON.parse())
/* const bebida = {id:1, nombre:"Coca Cola", precio:2200};
fs.writeFileSync("prueba.txt", JSON.stringify(bebida));
const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2200},
    {id:2, nombre:"Pepsi", precio:2000}
];
fs.writeFileSync("prueba.txt", JSON.stringify(bebidas)); */

// Para validar si existe un archivo
/* if (fs.existsSync(archivo)) {
    // Leer un archivo
    let contenido = fs.readFileSync(archivo, "utf-8");
    console.log(contenido);

    // Agregar contenido al archivo
    fs.appendFileSync(archivo, "\nEste es el nuevo contenido (OF)", "utf-8");

    // Eliminar un archivo
    //fs.unlinkSync(archivo);
} else {
    console.log("Error! No existe el archivo!");
} */



// Utilizando el módulo FS (con callbacks)
// Escribir un archivo del tipo string
/* fs.writeFile(archivo, "Hola Chicos, estamos cursando Backend en Coderhouse!", (error) => {
    console.log(error ? "Error! No se pudo escribir el archivo!" : "El archivo es creó correctamente!");
}); */

/* fs.readFile(archivo, "utf-8", (error, contenido) => {
    if (contenido) {
        console.log(contenido);
    }

    fs.appendFile(archivo, "\nMás contenidos!", (error) => {
        if (error) {
            console.log("Error! No se sobreescribir el archivo!");
        }    
    })

    fs.unlink(archivo, (error) => {
        console.log(error ? "Error! No se pudo eliminar el archivo" :  "El archivo se eliminó correctamente!");
    })

    if (error) {
        console.log("Error! No se pudo leer el archivo!");
    }
}) */


// Utilizando el módulo FS (con promesas)
/* const operacionesAsync = async () => {
    // Crear un archivo
    await fs.promises.writeFile(archivo, "Nuevo Contenidos en mi Perfil!");

    // Leer un archivo
    let resultado = await fs.promises.readFile(archivo, "utf-8");
    console.log(resultado);

    // Actualizar un archivo
    await fs.promises.appendFile(archivo, "\nNuevo Paquetes de Contenidos");

    // Eliminar un archivo
    await fs.promises.unlink(archivo);   
}

operacionesAsync(); */


// Escrbir/Leer un objeto con fs.promises
/* const bebida = {id:1, nombre:"Coca Cola", precio:2200};
const operacion = async () => {
    try {
        await fs.promises.writeFile(archivo, JSON.stringify(bebida));
        console.log("El archivo se guardó correctamente!");
        let contenido = JSON.parse(await fs.promises.readFile(archivo, "utf-8"));
        console.log(contenido);
    } catch(error) {
        console.log("Error! No se pudo leer el archivo!");
    }
}

operacion(); */

