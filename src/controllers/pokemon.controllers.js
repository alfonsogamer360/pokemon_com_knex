import { pokemonService } from "../services/pokemon.Services.js";

class PokemonController {
    
    async getall(req, res) {
    try {
        const pokemon = await pokemonService.getall();
        res.json(pokemon);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao pegar pokemon"})
    }}

    async getById(req, res) {
    const pokemonId = req.params.id
    try {
        const pokemon = await pokemonService.getById(pokemonId);
        res.json(pokemon);
    } catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao pegar pelo id pokemon"})
    }}

    async create(req, res)  {
    try {
        const pokemon = await pokemonService.create(req.body);
         res.status(201).json(pokemon);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao enviar pokemon"})
    }};
    
    async delete(req, res) {
    const pokemonId = req.params.id
    try {
        const pokemon = await pokemonService.delete(pokemonId);
         res.status(201).json(pokemon);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao remover pokemon"})
    }};

    async updatePut(req,res)  {
    const pokemonId = req.params.id;
    try {
        const pokemonAtualizado = await pokemonService.updatePut(pokemonId, req.body)
        res.status(201).json(pokemonAtualizado)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao atualizar pokemon"})
    }};

    async updateKnex(req,res) {
    const pokemonId = req.params.id;
    try {
        const pokemonAtualizado = await pokemonService.updateKnex(pokemonId, req.body)
        res.status(201).json(pokemonAtualizado)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao atualizar pokemon"})
    }};
}

export const pokemonController = new PokemonController()