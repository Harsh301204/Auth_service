const { StatusCodes } = require('http-status-codes')
const AppError = require('./error-handler')

class validationError extends AppError {
    constructor(error) {
        let name = error.name;
        
        let explaination = [];
        error.errors.forEach((err) => {
            explaination.push(err.message)
        });


        super(
        // this.errorName = errorName,
            name,
            'Not Able to Validate the data sent in request',
            explaination,
            StatusCodes.BAD_REQUEST
           
        );


    }
}

module.exports = validationError