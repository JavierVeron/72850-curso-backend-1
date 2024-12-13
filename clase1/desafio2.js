class Contador {
    constructor(nombre) {
        this.responsable = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable() {
        return this.responsable;
    }

    contar() {
        this.contador++;
        Contador.contadorGlobal++;
    }

    getCuentaIndividual() {
        return this.contador;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

const contador1 = new Contador("Counter #1");
const contador2 = new Contador("Counter #2");
const contador3 = new Contador("Counter #3");
console.log(contador1.getResponsable());
console.log(contador2.getResponsable());
contador1.contar();
contador1.contar();
contador1.contar();
contador2.contar();
contador2.contar();
console.log("Cuenta Individual #1:", contador1.getCuentaIndividual());
console.log("Cuenta Individual #2:", contador2.getCuentaIndividual());
console.log("Cuenta Global #1:", contador1.getCuentaGlobal());
console.log("Cuenta Global #2:", contador2.getCuentaGlobal());
console.log("Cuenta Global #3:", contador3.getCuentaGlobal());