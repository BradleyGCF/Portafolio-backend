const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

// ---------------RUTAS------------------------

const about = require("./JSON/About.json");
const portafolio = require("./JSON/Portafolio.json");

app.get("/", (req, res) => {
    res.send("Amigo functions")
});

app.get('/about', (req, res) => {
    res.json(about)
});

app.get('/portafolio', (req, res) => {
    res.json(portafolio)
});



app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});