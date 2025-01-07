const JWT = require('jsonwebtoken')
const bcrpyt = require('bcrypt')

const UserRepository = require('../repository/User-repo')
const { JWT_KEY } = require('../config/ServerConfig')
// const { decrypt } = require('dotenv')


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

    async SignIn(email, PlainPassword) {
        try {
            const user = await this.userRepository.GetByEmail(email)
            const checkPassword = this.checkPassword(PlainPassword, user.Password)

            if (!checkPassword) {
                console.log("Password doesn't match")
                throw ({ error: "Incorrect Password" })
            }

            const newJWT = this.GenerateToken({ Email: user.Email, id: user.id })
            return newJWT



        } catch (error) {
            console.log("Something went wrong while signing in")
            throw (error)
        }
    }

    async isAuthenticated(token) {
        try {
            const response = this.VerifyToken(token)
            if (!response) {
                throw { error: "invalid token" }
            }

            const user = await this.userRepository.GetById(response.id)
            if(!user) {
                throw { error : "no user with corresponding token exists"}
            }

            return user.id



        } catch (error) {
            console.log("Something went wrong while doing authentication")
            throw (error)
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

    GenerateToken(user) {
        try {
            const result = JWT.sign(user, JWT_KEY, { expiresIn: '1h' })
            return result
        } catch (error) {
            console.log("Something went wrong while generating the token")
            throw (error)
        }
    }

    VerifyToken(token) {
        try {
            const response = JWT.verify(token, JWT_KEY)
            return response
        } catch (error) {
            console.log("Something went wrong while verifying the token")
            throw (error)
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrpyt.compareSync(userInputPlainPassword, encryptedPassword)
        } catch (error) {
            console.log("something went wrong in password comparision")
            throw (error)
        }
    }

     isAdmin(userId){
        try {
            const user =  this.userRepository.isAdmin(userId)
            return user
        } catch (error) {
            console.log("something went wrong in Autherisation of Admin")
            throw (error)
        }
    }
}

module.exports = UserService
