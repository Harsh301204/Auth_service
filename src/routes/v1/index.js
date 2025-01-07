const express = require('express')

const router = express.Router()

const  { AuthMiddleware } = require('../../middlewares/index')

const UserController = require('../../controllers/user-controller')

router.post('/signup' , AuthMiddleware.validateUserAuth , UserController.create)
router.post('/signin' , AuthMiddleware.validateUserAuth , UserController.SignIn)

router.get('/isAuthenticated' ,AuthMiddleware.ValidateisAdmin, UserController.isAuthenticated )

router.get('/isAdmin' , UserController.isAdmin)

router.get('/dummy' , (req , res) => {
    return res.status(200).json({
        message: "ok"
    })
})

module.exports = router