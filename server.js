require('dotenv').config()
const express = require('express')
const routes = require('./routes')

const port = process.env.PORT || 3000
const server = express()

server.use(express.json())
server.use(routes)

server.listen(port, () => {
    console.log('Server running at port:', port)
})
