import { Router } from "express";
import { uploader } from "../utils.js";

const petsRouter = Router();
const pets = [];
petsRouter.get("/", middle1Pets, (req, res) => {
    res.send(pets);
})
petsRouter.post("/", uploader.single('imagen'), (req, res) => {
    if (!req.file) {
        console.log("estoy aca");
        
        res.status(400).send({estado:"ERROR", mensaje:"No se envió una imagen!"});
        return false;
    }

    console.log(req.file);
    const nombre = req.body.nombre;
    const mascota = {nombre:nombre, imagen:req.file.path}    
    pets.push(mascota);
    res.send({estado:"OK", mensaje:"Se agregó la mascota: " + nombre});
})

function middle1Pets(req, res, next) {
    console.log("Hola Pets #1");
    next();
}

export default petsRouter