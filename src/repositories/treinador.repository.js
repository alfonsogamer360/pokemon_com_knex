import { pool } from "../database/db.js";
import { knex } from "../database/knex.js";

class TreinadorRepository{
    async getall() {
        const res = await pool.query("SELECT * FROM treinador")
        return res.rows
    }

    async create({nome}) {
        const res = await pool.query("INSERT INTO treinador (nome) VALUES ($1) RETURNING *", [nome]);
        return res.rows[0]
    }

    async getById(id) {
        const res = await pool.query("SELECT * FROM treinador WHERE id_treinador = $1", [id])
        return res.rows[0]
    }

    async delete(id){
        const res = await pool.query("DELETE FROM treinador WHERE id_treinador = $1 RETURNING *", [id])
        return {
            message: "treinador deletado com sucesso",
            Treinador: res.rows[0]
        }
    }
    
    async updatePut(id, data){
        const res = await pool.query("UPDATE treinador SET nome=$2 WHERE id_treinador = $1 RETURNING *", [id, data.nome])
        return {
            message: "treinador atualizado com sucesso!",
            Treinador: res.rows[0]
        }
    }

    async updateKnex (id_treinador, dados) {
        const treinadorAtualizado = await knex("treinador").where({ id_treinador }).update(dados).returning("*")
        return {
            message: "treinador atualizado com sucesso!",
            treinadorAtualizado
        }
    }
}
export const treinadorRepository = new TreinadorRepository()