import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import {Server} from "socket.io"
import viewsRouter from "./routes/views.router.js"
import { log } from "console"

const app = express();
const port = 8080;
const httpServer = app.listen(port, () => {
    console.log("Servidor activo: " + port);
})
const socketServer = new Server(httpServer);

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use("/", viewsRouter);

const mensajes = [];
const generarId = () => {
    return mensajes.length + 1;
}

socketServer.on("connection", socket => {
    console.log("Nuevo Cliente conectado!");

    socket.on("nuevoUsuario", data => {
        socket.broadcast.emit("nuevoUsuario", data + " se ha conectado!");
    })

    socket.on("message", data => {
        const mensaje = {id:generarId(), ...data};
        mensajes.push(mensaje);
        socket.emit("messageLogs", mensajes);
    })
})
