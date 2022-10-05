const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "a5s03020302",
    host: "localhost",
    port: 5432,
    database: "ata_db"
})

module.exports = pool