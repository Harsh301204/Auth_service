const express = require('express')

const router = express.Router()

const  { AuthMiddleware } = require('../../middlewares/index')

const UserController = require('../../controllers/user-controller')

router.post('/signup' , AuthMiddleware.validateUserAuth , UserController.create)
router.post('/signin' , AuthMiddleware.validateUserAuth , UserController.SignIn)

module.exports = router