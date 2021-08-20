require('dotenv').config()

const express = require('express')
const mongo = require('mongoose')
const cors = require('cors')

const routesSf = require('./secrect-friend/routes.js')
const app = express()
const server = require('http').createServer(app)

console.log(process.env.MONGO_URL)

mongo.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routesSf)

const PORT = process.env.PORT || 3333

server.listen(PORT, console.log(`Server running on port ${PORT} ...`))