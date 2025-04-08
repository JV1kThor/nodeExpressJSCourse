

// const CustomAPIError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong, try again later"
    }
    /*
    // non serve perché lo faccio settando la variabile customError, quindi in caso di custom error lo status e il messaggio
    //  vengono aggiornati sopra 
        if (err instanceof CustomAPIError) {
            res.status(customError.statusCode).json({ msg: customError.msg })
        }
        */
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please chose another value`
        customError.statusCode = 400
        return res.status(customError.statusCode).json({ msg: customError.msg })
    }
    if (err.name === "ValidationError") {
        customError.statusCode = 400
        let errorObj = Object.values(err.errors).map(item => item.message).join(",")
        customError.msg = `Validation failed: ${errorObj}.`
        console.log(errorObj)
        // let errorObj2 = errorObj.map(e=> e.message)
        // console.log(typeof errorObj2[0])
        // const messages = Object.values(errorObj).map(e => e.message)
        // console.log(messages)
        // customError.msg = message
        //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
        return res.status(customError.statusCode).json({ msg: customError.msg })
    }
    if (err.name === "CastError") {
        customError.statusCode = 404
        customError.msg = `No job with id: ${err.value}`
        
    }
    //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
    return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware

