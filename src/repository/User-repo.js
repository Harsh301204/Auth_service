const { User } = require('../models/index')

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
}

module.exports = UserRepository
 