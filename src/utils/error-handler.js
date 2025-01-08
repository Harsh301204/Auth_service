const { StatusCodes } = require('http-status-codes')


class AppError extends Error {
    constructor(name = "AppError",
        message = "Something went wrong",
        explaination = [],
        StatusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        
        super();
        this.name = name,
        this.message = message,
        this.explaination = explaination,
        this.StatusCode = StatusCode
    }
}

module.exports = AppError