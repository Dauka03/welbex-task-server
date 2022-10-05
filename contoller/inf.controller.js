const db = require('../db')
class InfController{
    async createInf(req,res){
        const {name,amount,distance} = req.body 
        const newInf = await db.query('INSERT INTO inf(name, amount, distance) values($1,$2,$3) RETURNING *', [name,amount,distance])
        res.json(newInf.rows[0])
    }
    async getInf(req,res){
        const infs = await db.query('SELECT * FROM inf')
        res.json(infs.rows)
    }
    async getOneInf(req,res){
        const id = req.params.id
        const infs = await db.query('SELECT * FROM inf WHERE id = $1',[id])
        res.json(infs.rows[0])

    }
    async updateInf(req,res){
        const {name,amount,distance} = req.body
        const user = await db.query(
            'UPDATE inf set name = $1, amount = $2, distance = $3 RETURNING *'[name,amount,distance]
        )
        res.json(user.rows[0])
    }
    async deleteInf(req,res){
        const id = req.params.id
        const infs = await db.query('DELETE FROM inf WHERE id = $1',[id])
        res.json(infs.rows[0])
    }
}
module.exports = new InfController()