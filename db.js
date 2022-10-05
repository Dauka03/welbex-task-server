const Pool = require('pg').Pool
const pool = new Pool({
    user: "ydjufuegoavqlx",
    password: "431a6db7a2d98be06893ae48bf7ad1bc71438c2839edee5a1eb198238c24e216",
    host: "ec2-44-205-63-142.compute-1.amazonaws.com",
    port: 5432,
    database: "d5vpkhrl13olul"
})

module.exports = pool