import { pool } from "../database/db.js";
import { knex } from "../database/knex.js";

class PokemonRepository{
    async getall() {
        const res = await pool.query("SELECT * FROM pokemon")
        return res.rows
    }

    async create({nome, nivel, tipo}) {
        const res = await pool.query("INSERT INTO pokemon (nome,nivel,tipo) VALUES ($1, $2, $3) RETURNING *", [nome,nivel,tipo]);
        return res.rows[0]
    }

    async getById(id) {
        const res = await pool.query("SELECT * FROM pokemon WHERE id_pokemon = $1", [id])
        return res.rows[0]
    }

    async delete(id){
        const res = await pool.query("DELETE FROM pokemon WHERE id_pokemon = $1 RETURNING *", [id])
        return {
            message: "Pokemon deletado com sucesso",
            veiculo: res.rows[0]
        }
    }
    
    async updatePut(id, data){
        const res = await pool.query("UPDATE pokemon SET nome=$2, nivel=$3, tipo=$4 WHERE id_pokemon = $1  RETURNING *", [id, data.nome, data.nivel, data.tipo])
        return {
            message: "Pokemon atualizado com sucesso!",
            veiculo: res.rows[0]
        }
    }

    async updateKnex (id_pokemon, dados) {
        const pokemonAtualizado = await knex("pokemon").where({ id_pokemon }).update(dados).returning("*")
        return {
            message: "Pokemon atualizado com sucesso!",
            pokemonAtualizado
        }
    }
}

export const pokemonRepository = new PokemonRepository()