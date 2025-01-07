const { User , Role} = require('../models/index')

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
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

    async GetById(userId){
        try {
            const user = await User.findByPk(userId , {
                attributes: ['Email' , 'id']
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
                where : {
                    Email : userEmail
                }
            })
            return user;
        } catch (error) {
            console.log("something went wrong in fetching user by email")
        }
    }

    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const role = await Role.findOne({where : {
                name : 'ADMIN'
            }}) 
            // console.log( user , role)
            return user.hasRole(role)
        } catch (error) {
            console.log("something went wrong in Autherisation")
        }
    }
}

module.exports = UserRepository
 