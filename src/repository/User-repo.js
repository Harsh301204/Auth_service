const { User, Role } = require('../models/index');
const ClientError = require('../utils/Client-Error');
const validationError = require('../utils/validationError')
const { StatusCode }  = require('http-status-codes')
const { clientErrorCodes } = require('../utils/error-codes')

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            // console.log(error)
            if (error.name === "SequelizeValidationError") {

                // let ValidationError = new validationError(error)
                // console.log(ValidationError)
                throw new validationError(error);
            }
            // // console.log(error.name)
            console.log("Something went wrong in Repository Layer")
            throw error;
        }
    }

    async delete(userId) {
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            })
            return true
        } catch (error) {
            console.log("Something went wrong in Repository Layer")
            throw error
        }
    }

    async GetById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['Email', 'id']
            })

            return user
        } catch (error) {
            console.log("Something went wrong in Repository Layer")
            throw error
        }
    }

    async GetByEmail(userEmail) {
        try {
            const user = await User.findOne({
                where: {
                    Email: userEmail
                }
            })
            // console.log(!user)
            if (!user) {
                throw new ClientError(
                    "EmailNotFound",
                    "Invalid Email sent in Request",
                    "Email not found , Please Check Email",
                    clientErrorCodes.NOT_FOUND
                    
                );
            }
            // console.log(user)

            return user;
        } catch (error) {
            console.log(error)
            console.log("something went wrong in fetching user by email")
            throw error
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const role = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            })
            // console.log( user , role)
            return user.hasRole(role)
        } catch (error) {
            console.log("something went wrong in Autherisation")
        }
    }
}

module.exports = UserRepository
