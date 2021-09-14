const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json())

const TaskRoutes = require('./routes/TaskRouts')

server.use('/task', TaskRoutes)

server.listen(3000, () => {
    console.log('API ONLINE: localhost:3000')
})

