// Cómo crear un Servidor Web con módulo nativo "http"
/* const http = require("http");
const port = 8080;
const server = http.createServer((req, res) => {
    res.end("Hola Chicos, estamos cursando Backend en CODERHOUSE!");
})
server.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
}) */


// Cómo crear un Servidor Web con módulo "exrpess"
import express from "express"

const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));

/* app.get("/saludo", (req, res) => {
    res.send("Hola Chicos, estamos cursando Backend en CODERHOUSE!");
})

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
}) */


// Ejemplo
/* app.get("/bienvenida", (req, res) => {
    const contenido = `<html>
    <body>
    <div style="background-color:black; padding:5px;">
    <h1 style="color:yellow;">CODERHOUSE</h1>
    </div>
    </body>
    </html>`;
    res.send(contenido);
})

app.get("/usuario", (req, res) => {
    const usuario = {nombre:"Mauro", apellido:"Icardi", edad:30, email:"mauroicardi@gmail.com"};
    res.send(usuario);
})

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
}) */


// Request Params
/* app.get("/posts/:id", (req, res) => {
    // Opción #1 => obtengo la variable indicada
    //const id = req.params.id;
    // Opción #2 => desestructuro del objeto req.params
    const {id} = req.params;
    res.send("El #ID enviado es: " + id);
})

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
})  */

// Ejemplo de Request Params
/* const usuarios = [
    {id:1, nombre:"Ana", apellido:"Arredondo Valdez", edad:23},
    {id:2, nombre:"Matias", apellido:"Catuogno", edad:29},
    {id:3, nombre:"Joel", apellido:"Lemos", edad:25}
]

app.get("/", (req, res) => {
    res.send(usuarios);
})

app.get("/:idUsuario", (req, res) => {
    const {idUsuario} = req.params;
    const usuario = usuarios.find(item => item.id == idUsuario);
    res.send(usuario ? usuario : "Error! No se encuentra el Usuario con #" + idUsuario);
})

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
}) */


// Request Query
/* app.get("/posts/", (req, res) => {
    // Opción #1 => obtengo los parámetros bajo un objeto
    //const parametros = req.query;
    //console.log(parametros.nombre + " " + parametros.apellido);
    
    // Opción #2 => desestructuro las propiedades del objeto req.query
    const {nombre, apellido, edad} = req.query;
    res.send(`<p>Nombre: <b>${nombre.toUpperCase()}</b>, Apellido: <b>${apellido.toUpperCase()}</b>, Edad: <b>${edad}</b></p>`);
})

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
}) */

// Ejemplo de Request Query
const usuarios = [
    {id:1, nombre:"Ana", apellido:"Arredondo Valdez", edad:23, genero:"f"},
    {id:2, nombre:"Matias", apellido:"Catuogno", edad:29, genero:"m"},
    {id:3, nombre:"Joel", apellido:"Lemos", edad:25, genero:"m"},
    {id:4, nombre:"Agustín", apellido:"Sosa", edad:22, genero:"m"}
]

app.get("/", (req, res) => {
    let {genero} = req.query;
    
    if ((genero != "m" && genero != "f")) {
        genero = null;
    }

    res.send(genero ? usuarios.filter(item => item.genero == genero) : usuarios);
})

app.get("/:idUsuario", (req, res) => {
    const {idUsuario} = req.params;
    const usuario = usuarios.find(item => item.id == idUsuario);
    res.send(usuario ? usuario : "Error! No se encuentra el Usuario con #" + idUsuario);
})

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
})
