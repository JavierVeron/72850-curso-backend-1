const fs = require("fs");

class UsersManager {
    constructor () {
        this.archivo = "Usuarios.json";
        this.usuarios = [];
    }

    async crearUsuario(nombre, apellido, edad, curso) {
        const usuario = {nombre:nombre, apellido:apellido, edad:edad, curso:curso};
        this.usuarios = JSON.parse(await fs.promises.readFile(this.archivo, "utf-8"));
        this.usuarios.push(usuario);
        await fs.promises.writeFile(this.archivo, JSON.stringify(this.usuarios));
        console.log("Se agregó el Usuario!");
    }

    async consultarUsuarios() {
        const resultado = await fs.promises.readFile(this.archivo, "utf-8");
        return resultado;
    }
}

const UM = new UsersManager();
//UM.crearUsuario("Matias", "Catuogno", 29, "Backend");
//UM.crearUsuario("Camilo", "Coria", 23, "Backend");
//UM.crearUsuario("Emiliano", "Silva", 41, "Backend");
console.log(UM.consultarUsuarios());