const  UserService  = require('../services/user-service')

const userService = new UserService()

const create = async (req, res) => {
    try {
        const response = await userService.create({
            Email: req.body.Email,
            Password: req.body.Password
        })
        return res.status(201).json({
            message: "Successfully created a new user",
            err: {},
            data: response,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong",
            err: error
        })
    }
}

    const SignIn = async (req , res) => {
        try {
            const response = await userService.SignIn(req.body.Email , req.body.Password)
            return res.status(200).json({
                message: "Successfully logged in",
                err: {},
                data: response,
                success: true
            })
        } catch (error) {
            return res.status(500).json({
                data: {},
                success: false,
                message: "Something went wrong",
                err: error
            })
            
        }
    }


module.exports  = {
    create,
    SignIn
}