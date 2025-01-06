const UserRepository = require('../repository/User-repo')

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
}

module.exports = UserService
