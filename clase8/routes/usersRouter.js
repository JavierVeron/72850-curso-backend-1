import { Router } from "express";

const usersRouter = Router();
const users = [];
usersRouter.get("/", (req, res) => {
    res.send(users);
})
usersRouter.post("/", (req, res) => {
    const name = req.body.nombre;
    const pass = Math.round(Math.random() * 1000);
    users.push({name, pass});
    res.send({estado:"OK", mensaje:"Se agregó el usuario: " + name});
})

export default usersRouter