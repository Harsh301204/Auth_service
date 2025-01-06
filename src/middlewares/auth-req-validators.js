const validateUserAuth = (req , res , next ) => {
    if(!req.body.Email || !req.body.Password)
    {
        return res.status(400).json({
            success : false,
            message : "Something went wrong",
            data : {},
            error : "Email Id or Password is missing"
        })
    }

    next()
}

module.exports = {
    validateUserAuth
}