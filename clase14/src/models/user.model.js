import mongoose from "mongoose"

const userCollection = "usuarios";

const userSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    email:String
})

export const userModel = mongoose.model(userCollection, userSchema);