const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const { PORT } = require('./config/ServerConfig')

const APIroutes = require('./routes/index')

const PrepareAndStartServer = () => {

    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({ extended : true}))

    app.use('/api' , APIroutes)

    app.listen(PORT, () => {
        console.log(`server started on port : ${PORT}`)
    })
}

PrepareAndStartServer()