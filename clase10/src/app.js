import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import {Server} from "socket.io"
import viewsRouter from "./routes/views.router.js"

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
    // Escuchar mensaje del Cliente con la etiqueta "mensajito"
    /* socket.on("mensajito", data => {
        console.log(data);
    })
    socket.emit("socket_actual", "Este es el mensaje #1");
    socket.broadcast.emit("todos_socket_menos_actual", "Este es el mensaje #2");
    socketServer.emit("socket_global", "Este mensaje lo reciben todos!"); */

    // Envio mensajes al Cliente
    socket.emit("mensajes", mensajes);
    socket.on("mensajes", data => {
        const objeto = {socketId:generarId(), mensaje:data};
        mensajes.push(objeto);
        socket.emit("mensajes", mensajes);
    })
})
