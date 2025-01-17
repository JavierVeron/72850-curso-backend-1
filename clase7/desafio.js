import express from "express"

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
})

let frase = "Frase inicial";

app.get("/api/frase", (req, res) => {
    res.send({frase:frase});
})

app.get("/api/palabras/:pos", (req, res) => {
    let {pos} = req.params;
    pos--;
    const frases = frase.split(" ");
    res.send({buscada:frases[pos]});
})

app.post("/api/palabras", (req, res) => {
    const {palabra} = req.body;
    const frases = frase.split(" ");
    frase += " " + palabra;
    frases.push(palabra);
    res.send({palabra:palabra, pos:frases.length});
})

app.put("/api/palabras/:pos", (req, res) => {
    let {pos} = req.params;
    pos--;
    const {palabra} = req.body;
    const frases = frase.split(" ");
    const anterior = frases[pos];
    frases[pos] = palabra;
    frase = frases.join(" ");
    res.send({actualizada:palabra, anterior:anterior});
})

app.delete("/api/palabras/:pos", (req, res) => {
    let {pos} = req.params;
    pos--;
    let frases = frase.split(" ");
    const eliminada = frases[pos];
    frases = frases.filter(item => item != frases[pos])
    frase = frases.join(" ");
    res.send({eliminada:eliminada});
})