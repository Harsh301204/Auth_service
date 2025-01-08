const { StatusCodes } = require('http-status-codes')
const AppError = require('./error-handler')

class ClientError extends AppError {
    constructor( name , message , explaination , statuscode) {
        super(
            name,
            message,
            explaination,
            statuscode
        );


    }
}

module.exports = ClientError