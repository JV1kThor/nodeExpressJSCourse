const CustomAPIError = require("../errors/custom-error")

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        res.status(500).json({msg: "something went wrong, please try later"})
    }
}

module.exports = errorHandlerMiddleware