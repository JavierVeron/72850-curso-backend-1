import {Router} from "express"
import {userModel} from "../models/user.model.js"

const userRouter = Router();

userRouter.get("/", async (req, res) => {
    try {
        let usuarios = await userModel.find();
        res.send({status:"ok", payload:usuarios});
    } catch(error) {
        res.status(400).send({status:"error", message:"Error! No se pudo conectar con la Colección Usuarios!"});
    }
})

userRouter.post("/", async (req, res) => {
    let {nombre, apellido, email} = req.body;
    let resultado = await userModel.create({nombre, apellido, email});
    res.send({status:"ok", payload:resultado});
})

userRouter.put("/:id", async (req, res) => {
    let {id} = req.params;
    let {nombre, apellido, email} = req.body;
    let resultado = await userModel.updateOne({_id:id}, {nombre, apellido, email});
    res.send({status:"ok", payload:resultado});
})

userRouter.delete("/:id", async (req, res) => {
    let {id} = req.params;
    let resultado = await userModel.deleteOne({_id:id});
    res.send({status:"ok", payload:resultado});
})

export default userRouter