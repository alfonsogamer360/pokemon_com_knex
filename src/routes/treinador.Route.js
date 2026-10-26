import { Router } from "express";
import { treinadorService } from "../services/treinador.Services.js";

export const treinadorRouter = Router();

treinadorRouter.get("/treinador", async (req, res) => {
    try {
        const treinador = await treinadorService.getall();
        res.json(treinador);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao pegar treinador"})
    }
});

treinadorRouter.get("/treinador/:id", async (req, res) => {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorService.getById(treinadorId);
        res.json(treinador);
    }catch (error) {
        console.log(treinadorId)
        console.error (error);
        res.status(500).json({error: "Erro ao pegar pelo id treinador"})
    }
});

treinadorRouter.post("/treinador", async (req, res) => {
    try {
        const treinador = await treinadorService.create(req.body);
         res.status(201).json(treinador);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao enviar treinador"})
    }
});

treinadorRouter.delete("/treinador/:id", async (req, res) => {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorService.delete(treinadorId);
         res.status(201).json(treinador);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao remover treinador"})
    }
});

treinadorRouter.put("/treinador/:id", async (req,res) => {
    const treinadorId = req.params.id;
    try {
        const treinadorAtualizado = await treinadorService.updatePut(treinadorId, req.body)
        res.status(201).json(treinadorAtualizado)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao atualizar treinador"})
    }
} )

treinadorRouter.patch("/treinador/:id", async (req,res) => {
    const treinadorId = req.params.id;
    try {
        const treinadorAtualizado = await treinadorService.updateKnex(treinadorId, req.body)
        res.status(201).json(treinadorAtualizado)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao atualizar treinador"})
    }
} )