import {pool} from '../db.js'

export const haceping = async (req, res) => {
    const [result] = await pool.query('SELECT "Prueba posta asereje" AS RESULT')
    res.json(result[0])
}