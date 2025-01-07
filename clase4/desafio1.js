const generarNumAleatorio = () => {
    return new Promise((res) => {
        res(Math.round((Math.random() * 19)) + 1);
    })
}

const generarObjNumeros = async () => {
    let numerosAleatorios = [];
    let objOutput = {};
    let total = 0;

    for(let i=0; i<10000; i++) {
        let numeroAleatorio = await generarNumAleatorio(); 
        numerosAleatorios.push(numeroAleatorio);
    }

    // Recorrer el Array de Números Aleatorios
    for (const elemento of numerosAleatorios) {
        let arrayTemp = numerosAleatorios.filter(item => item == elemento);
        objOutput[elemento] = arrayTemp.length;
    }

    // Recorrer el Objeto con las claves con sus respectivos totales
    for (const key in objOutput) {
        total += objOutput[key];
    }

    console.log(objOutput);
    console.log(total);
    console.log("Fin del proceso!");
}

generarObjNumeros();