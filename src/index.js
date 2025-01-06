const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const { PORT } = require('./config/ServerConfig')

const APIroutes = require('./routes/index')
// const UserRepository = require('./repository/User-repo')

const PrepareAndStartServer = () => {

    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({ extended : true}))
    
    app.use('/api' , APIroutes)
    
    app.listen(PORT, async () => {
        console.log(`server started on port : ${PORT}`)
        // const repo = new UserRepository()
        // const res = await repo.GetById(1)
        // console.log(res)
    })
}

PrepareAndStartServer()