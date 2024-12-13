const lista = ["agua", "cocacola", "beer"];

const mostrarLista = (unArray) => {
    if (unArray.length == 0) {
        return "Lista vacía!";
    }

    let salida = "";

    unArray.forEach(elemento => {
        salida += `${elemento}\n`;
    });

    salida += `Total: ${unArray.length}`;

    return salida;
}

let resultado = mostrarLista(lista);
console.log(resultado);