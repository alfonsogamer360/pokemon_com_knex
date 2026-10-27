import { Router } from "express";
import { pokemonController } from "../controllers/pokemon.controllers.js";

export const pokemonRouter = Router();

pokemonRouter.get("/", pokemonController.getall)
pokemonRouter.get("/:id", pokemonController.getById)
pokemonRouter.post("/", pokemonController.create)
pokemonRouter.delete("/:id", pokemonController.delete)
pokemonRouter.put("/:id", pokemonController.updatePut)
pokemonRouter.patch("/:id", pokemonController.updateKnex)
