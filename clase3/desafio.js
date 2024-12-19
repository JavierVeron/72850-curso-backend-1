const suma = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        ((valor1 == 0) || (valor2 == 0)) && reject("Operación innecesaria!");
        let resultado = valor1 + valor2;
        (resultado > 0) ? resolve(resultado) : reject("La Calculadora debe devolver valores positivos!");
    })
}

const resta = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        ((valor1 == 0) || (valor2 == 0)) && reject("Operación innecesaria!");
        let resultado = valor1 - valor2;
        (resultado > 0) ? resolve(resultado) : reject("La Calculadora debe devolver valores positivos!");
    })
}

const multi = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        ((valor1 == 0) || (valor2 == 0)) && reject("Operación innecesaria!");
        let resultado = valor1 * valor2;
        (resultado > 0) ? resolve(resultado) : reject("La Calculadora debe devolver valores positivos!");
    })
}

const divi = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        ((valor1 == 0) || (valor2 == 0)) && reject("Operación innecesaria!");
        let resultado = valor1 / valor2;
        (resultado > 0) ? resolve(resultado) : reject("La Calculadora debe devolver valores positivos!");
    })
}

const calculos = async () => {
    try {
        let resultado = await divi(30, 10);
        console.log("RESULTADO:", resultado);
    } catch(error) {
        console.log("ERROR: " + error);
    }
}

calculos();