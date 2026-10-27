import { treinadorRepository } from "../repositories/treinador.repository.js";

class TreinadorService{
    async getall() {
        const res = await treinadorRepository.getall();
        return res;
    }

    async create({nome}) {
        const res = await treinadorRepository.create(nome);
        return res;
    }

    async getById(id) {
        const res = await treinadorRepository.getById(id);
        return res;
    }

    async delete(id){
        const res = await treinadorRepository.delete(id);
        return res;
    }
    
    async updatePut(id, data){
        const res = await treinadorRepository.updatePut(id,data);
        return res;
    }

    async updateKnex (id_treinador, dados) {
        const treinadorAtualizado = await treinadorRepository.updateKnex(id_treinador,dados);
        return treinadorAtualizado;
    };
};

export const treinadorService = new TreinadorService()