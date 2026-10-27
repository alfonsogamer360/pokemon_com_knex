import { pokemonRepository } from "../repositories/pokemon.repository.js";

class PokemonService{
    async getall() {
        const pokemonPegar = await pokemonRepository.getall();
        return pokemonPegar;
    }

    async create({nome, nivel, tipo}) {
        const pokemonCriado = await pokemonRepository.create(nome,nivel,tipo);
        return pokemonCriado;
    }

    async getById(id) {
        const pokemonPegarId = await pokemonRepository.getById(id);
        return pokemonPegarId;
    }

    async delete(id){
        const pokemonDeletado = await pokemonRepository.delete(id);
        return pokemonDeletado;
    }
    
    async updatePut(id, data){
        const pokemonAtualizadoPut = await pokemonRepository.updatePut(id,data);
        return pokemonAtualizadoPut;
    }

    async updateKnex (id_pokemon, dados) {
        const pokemonAtualizado = await pokemonRepository.updateKnex(id_pokemon,dados);
        return pokemonAtualizado;
    };
};

export const pokemonService = new PokemonService()