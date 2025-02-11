import express from "express"
import userRouter from "./routes/user.router.js"
import mongoose from "mongoose"

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log("Servidor activo: " + port);
})

mongoose.connect("mongodb+srv://javierveron:Javier123!@cluster0.4sss6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");