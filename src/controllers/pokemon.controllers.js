import { treinadorService } from "../services/treinador.services";

class TreinadorController {
    
    async getall(req, res) {
    try {
        const treinador = await treinadorService.getall();
        res.json(treinador);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao pegar treinador"})
    }}

    async getById(req, res) {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorService.getById(treinadorId);
        res.json(treinador);
    } catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao pegar pelo id treinador"})
    }}

    async create(req, res)  {
    try {
        const treinador = await treinadorService.create(req.body);
         res.status(201).json(treinador);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao enviar treinador"})
    }};
    
    async delete(req, res) {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorService.delete(treinadorId);
         res.status(201).json(treinador);
    }catch (error) {
        console.error (error);
        res.status(500).json({error: "Erro ao remover treinador"})
    }};

    async updatePut(req,res)  {
    const treinadorId = req.params.id;
    try {
        const treinadorAtualizado = await treinadorService.updatePut(treinadorId, req.body)
        res.status(201).json(treinadorAtualizado)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao atualizar treinador"})
    }};

    async updateKnex(req,res) {
    const treinadorId = req.params.id;
    try {
        const treinadorAtualizado = await treinadorService.updateKnex(treinadorId, req.body)
        res.status(201).json(treinadorAtualizado)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao atualizar treinador"})
    }};
}

export const treinadorController = new TreinadorController()