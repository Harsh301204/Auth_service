const clientErrorCodes = Object.freeze({
    BAD_REQUEST : 400,
    UNAUTHORISED : 401,
    NOT_FOUND : 404
})

const ServerErrorCodes = Object.freeze({
  INTERNAL_SERVER_ERROR : 500,
  NOT_IMPLEMENTED : 501  
})

const SuccessErrorCodes = Object.freeze({
    OK : 200 ,
    CREATED : 201
})


module.exports = {
    clientErrorCodes,
    ServerErrorCodes,
    SuccessErrorCodes
}