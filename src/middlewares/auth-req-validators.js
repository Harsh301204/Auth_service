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

const ValidateisAdmin = (req , res , next ) => {
    if(!req.body.id){
        return res.status(400).json({
            success : false,
            message : "Something went wrong",
            data : {},
            error : "User Id  is missing"
        
    })
}

next()
}

module.exports = {
    validateUserAuth,
    ValidateisAdmin
}