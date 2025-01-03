const express = require('express')
const app = express()

const { PORT } = require('./config/ServerConfig')

const PrepareAndStartServer = () => {

    app.listen(PORT, () => {
        console.log(`server started on port : ${PORT}`)
    })
}

PrepareAndStartServer()