const express = require('express')
const infRouter = require('./routes/inf.router')
const cors = require('cors')
const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", infRouter) //use router
app.listen(PORT, () => console.log("Connect"))