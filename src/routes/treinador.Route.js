import { Router } from "express";
import { treinadorController } from "../controllers/treinador.controllers.js";

export const treinadorRouter = Router();

treinadorRouter.get("/", treinadorController.getall)
treinadorRouter.get("/:id", treinadorController.getById)
treinadorRouter.post("/", treinadorController.create)
treinadorRouter.delete("/:id", treinadorController.delete)
treinadorRouter.put("/:id", treinadorController.updatePut)
treinadorRouter.patch("/:id", treinadorController.updateKnex)
