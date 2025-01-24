import { Router } from "express";

const food = [
    {id:1, nombre:"Hamburguesa", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar", precio:6000},
    {id:2, nombre:"Hamburguesa con Queso", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", precio:7000},
    {id:3, nombre:"McFiesta", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar", precio:8000},
    {id:4, nombre:"Doble Carne Doble Queso", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$krXm2g5T/200/200/original?country=ar", precio:9000},
    {id:5, nombre:"Triple Hamburguesa con Queso", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXsCqnz/200/200/original?country=ar", precio:10000}
]

const usuario = {nombre:"Wanda", apellido:"Nara", edad:35, role:"admin"};

const users = [];

const viewRouter = Router();
viewRouter.get("/", (req, res) => {
    // Primer Ejemplo
    //const usuario = {nombre:"Mauro", apellido:"Icardi", edad:30};
    //res.render("index", usuario);

    // Segundo Ejemplo
    /* const usuarios = [
        {nombre:"Mauro", apellido:"Icardi", edad:30},
        {nombre:"Wanda", apellido:"Nara", edad:35},
        {nombre:"Maria Eugenia", apellido:"Suarez", edad:28},
        {nombre:"Maxi", apellido:"Lopez", edad:35},
        {nombre:"LGante", apellido:"", edad:27}
    ]
    const numeroRandom = Math.floor(Math.random() * usuarios.length);
    const usuario = usuarios[numeroRandom];
    res.render("index", usuario);     */

    // Tercer Ejemplo
    res.render("index", {usuario:usuario, isAdmin:usuario.role=="admin" ? true:false, food:food, style:"estilos.css"})
})

viewRouter.get("/user", (req, res) => {
    res.render("form", {style:"estilos.css"});
})

viewRouter.post("/user", (req, res) => {
    const {nombre, email, pass} = req.body;
    const newUser = {nombre, email, pass};
    
    if (users.push(newUser)) {
        res.send({resultado:"ok", mensaje:"El usuario se guardó correctamente!", users:users})
    } else {
        res.send({resultado:"error", mensaje:"El usuario NO se guardó correctamente!"})
    }
})

export default viewRouter