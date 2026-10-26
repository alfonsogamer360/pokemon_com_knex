import { Router } from "express";
import { pokemonService } from "../services/pokemon.Services.js";

export const pokemonRouter = Router();

pokemonRouter.get("/pokemon", async (req, res) => {
    try {
        const pokemon = await pokemonService.getall();
        res.json(pokemon);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao pegar pokemon"})
    }
});

pokemonRouter.get("/pokemon/:id", async (req, res) => {
    const pokemonId = req.params.id
    try {
        const pokemon = await pokemonService.getById(pokemonId);
        res.json(pokemon);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao pegar pelo id pokemon"})
    }
});

pokemonRouter.post("/pokemon", async (req, res) => {
    try {
        const pokemon = await pokemonService.create(req.body);
         res.status(201).json(pokemon);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao enviar pokemon"})
    }
});

pokemonRouter.delete("/pokemon/:id", async (req, res) => {
    const pokemonId = req.params.id
    try {
        const pokemon = await pokemonService.delete(pokemonId);
         res.status(201).json(pokemon);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao remover pokemon"})
    }
});

pokemonRouter.put("/pokemon/:id", async (req,res) => {
    const pokemonId = req.params.id;
    try {
        const pokemonAtualizado = await pokemonService.updatePut(pokemonId, req.body)
        res.status(201).json(pokemonAtualizado)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao atualizar pokemon"})
    }
} )

pokemonRouter.patch("/pokemon/:id", async (req,res) => {
    const pokemonId = req.params.id;
    try {
        const pokemonAtualizado = await pokemonService.updateKnex(pokemonId, req.body)
        res.status(201).json(pokemonAtualizado)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao atualizar pokemon"})
    }
} )