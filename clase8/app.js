import express from "express"
import usersRouter from "./routes/usersRouter.js";
import petsRouter from "./routes/petsRouter.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(express.static("public")); // Mi ruta sería => http://localhost:8080/
app.use("/public", express.static("public")); // Mi ruta sería => http://localhost:8080/content/

app.use("/api/users", middle1, usersRouter);
app.use("/api/pets", middle1, middle2, petsRouter);

// Middleware a nivel de aplicación
function middle1(req, res, next) {
    console.log("Hola #1");
    next();
}

function middle2(req, res, next) {
    console.log("Hola #2");
    next();
}

app.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(500).send("Error: " + error.stack);
})

app.listen(port, () => {
    console.log("Servidor activo: " + port);
});