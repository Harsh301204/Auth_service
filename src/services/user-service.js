const JWT = require('jsonwebtoken')

const UserRepository = require('../repository/User-repo')
const { JWT_KEY } = require('../config/ServerConfig')


class UserService {
    constructor() {
        this.userRepository = new UserRepository()
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data)
            return user
        }
        catch (error) {
            console.log("There is a error in the service layer")

        }

    }
    // async GetById(userId) {
    //     try {
    //         const user = await this.userRepository.GetById(userId)
    //         return user
    //     } catch (error) {
    //         console.log("There is a error in the service layer")
    //     }
    // }

    async GenerateToken(user) {
        try {
            const result = JWT.sign(user , JWT_KEY , { expiresIn: '1h'}) 
            return result
        } catch (error) {
            console.log("Something went wrong while generating the token")
            throw(error)
        }
    }

    VerifyToken(token){
        try {
            const response = JWT.verify(token, JWT_KEY)
            return response
        } catch (error) {
            console.log("Something went wrong while verifying the token")
            throw(error)
        }
    }
}

module.exports = UserService
