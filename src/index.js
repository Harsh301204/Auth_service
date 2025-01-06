const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const { PORT, JWT_KEY } = require('./config/ServerConfig')

const APIroutes = require('./routes/index')
// const UserRepository = require('./repository/User-repo')
const UserService = require('./services/user-service')

const PrepareAndStartServer = () => {

    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({ extended : true}))
    
    app.use('/api' , APIroutes)
    
    app.listen(PORT, async () => {
        console.log(`server started on port : ${PORT}`)
        // const repo = new UserRepository()
        // const res = await repo.GetById(1)
        // console.log(res)
        const ser = new UserService()
        // const newToken = await ser.GenerateToken({
        //     'Email' : "sdjflkj@gmail"
        // })
        // console.log("New Token is " ,newToken)

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InNkamZsa2pAZ21haWwiLCJpYXQiOjE3MzYxNTgzMTEsImV4cCI6MTczNjE2MTkxMX0.LK0pdD6M1COz1_8ReKYVdSEcBMPL-miY0fL6Eg5P2xM'
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InNkamZsa2pAZ21haWwiLCJpYXQiOjE3MzYxNTk2MTUsImV4cCI6MTczNjE2MzIxNX0.jzJj7j5V-ojnZ9I2YZbQokB7vk5llmbLr8l1v3Edvj9c'
        // const res1 =  ser.VerifyToken(token)
        // console.log(res1)

    })
}

PrepareAndStartServer()