


const CustomAPIError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        res.status(err.statusCode).json({msg: err.message})
    }
    return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
        msg: "Something went wrong try later",
        error: err})
}

module.exports = errorHandlerMiddleware

