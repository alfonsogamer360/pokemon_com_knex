import { pokemonRouter } from "./routes/pokemon.Route.js";
import { treinadorRouter } from "./routes/treinador.Route.js";
import express from "express";

const port = 3000
const app = express();

app.use(express.json())
app.use("/", pokemonRouter)
app.use("/", treinadorRouter)

app.listen (port, () => {
    console.log(`App rodando em http://localhost:${port}`);
})