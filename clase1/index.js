// Let y Const
/* let nombre = "Juan";
nombre = "Pedro";
const nombre2 = "Juan";
//nombre2 = "Pedro";
console.log(nombre);
console.log(nombre2); */


// Variables local y global
// Variable Global
/* let numero = 10; // declaro la variable numero como variable global

const sumarNumero = () => {
    numero += 10;
    console.log(numero);
} */

// Variable Local
/* let numero = 10; // variable global

const sumarNumero = () => {
    let numero = 0; // variable local
    numero += 50;
    
    console.log(numero);
}

console.log(numero);
sumarNumero(); */


// Const mutables
// Buena práctica sería declarar un objeto, array o función como "const"
/* const bebida = {id:1, nombre:"Coca Cola", precio:2000};
bebida.precio = 3000;
console.log(bebida);

const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:2200},
    {id:3, nombre:"Seven Up", precio:2400}
]
bebidas[2].nombre = "Manaos";
bebidas[1] = "Sprite";
console.log(bebidas); */


// Declarando Funciones y Funciones flechas
/* function sumar(valor1, valor2) {
    return valor1 + valor2;
} */

// Declarar una función flecha o arrow function
/* const sumar = (valor1, valor2) => {
    //console.log(valor1);
    //console.log(valor2);
    
    return valor1 + valor2
}
console.log(sumar(20, 50)); */


// Tempalte Strings o Plantilla Literal
// Ejemplo #1 - Contacetenando strings con variables
/* let nombre = "Javier";
let apellido = "Jacobo";
let mensaje = "";
mensaje = "Hola, " + nombre + " " + apellido + "\n\n";
mensaje += "Cómo estás?";

// Ejemplo #2 - Concatenando con template strings
mensaje = `Hola, ${nombre.toUpperCase()} ${apellido.toUpperCase()}`;
mensaje = `Hola, ${(nombre + " " + apellido).toUpperCase()}

Cómo estás?`;
console.log(mensaje); */


// Declaración de Clases
class Animal {
    constructor(nombre) {
        this.name = nombre; // Esto es una propiedad (variable)
    }

    static clase = "Gatos"; // Esto es una variable estática (no es necesario instanciar)

    getNombre() { // Esto es una método (funciones)
        return "Hola, soy " + this.name
    }
}

class Animal2 {
    constructor() {
        this.name; // Esto es una propiedad (variable)
    }

    static clase = "Gatos"; // Esto es una variable estática (no es necesario instanciar)

    setNombre(valor) { // Pisar el valor de la propiedad name con un nuevo nombre
        this.name = valor;
    }

    getNombre() { // Esto es una método (funciones)
        return "Hola, soy " + this.name
    }
}

const mascota1 = new Animal("Amy"); // una nueva instancia de la Clase Animal
const mascota2 = new Animal2(); // otra instancia de la Clase Animal
mascota2.setNombre("Benita");
console.log(mascota1.getNombre());
console.log(mascota2.getNombre());
console.log(Animal.clase);
console.log(Animal.clase);
