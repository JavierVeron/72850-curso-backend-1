import express from "express"

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
})

let users = []; // Creamos un array de usuarios

const getId = () => {
    return users.length + 1;
}

app.get("/api/users", (req, res) => {
    res.send(users);
})

app.get("/api/users/:id", (req, res) => {
    const {id} = req.params;
    let user = users.find(item => item.id == id);

    res.send(user ? user : {"error":"No se encontró el usuario!"});
})

app.post("/api/users", (req, res) => {
    const {nombre, email} = req.body;

    if (!nombre) {
        res.status(400).send({"error":"No se encontró el campo Nombre!"});
        return false;
    }

    if (!email) {
        res.status(400).send({"error":"No se encontró el campo Email!"});
        return false;
    }

    const user = {id:getId(), name:nombre, email:email};
    users.push(user);
    res.send({resultado:"OK", mensaje:"El usuario se agregó correctamente!"});
})

app.put("/api/users/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, email} = req.body;
    const user = users.find(item => item.id == id);

    if (!user) {
        res.send({"error":"No se encontró el usuario!"});
        return false;
    }

    if (!nombre) {
        res.status(400).send({"error":"No se encontró el campo Nombre!"});
        return false;
    }

    if (!email) {
        res.status(400).send({"error":"No se encontró el campo Email!"});
        return false;
    }

    user.name = nombre;
    user.email = email;
    res.send({resultado:"OK", mensaje:"El usuario se actualizó correctamente!"});
})

app.delete("/api/users/:id", (req, res) => {
    const {id} = req.params;
    const user = users.find(item => item.id == id);

    if (!user) {
        res.send({"error":"No se encontró el usuario!"});
        return false;
    }

    users = users.filter(item => item.id != id);
    res.send({resultado:"OK", mensaje:"El usuario se eliminó correctamente!"});
})