require('dotenv').config()
// async errors
const express = require("express");
const app = express();
console.log("api-store");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

//middleware

app.use(express.json())


//rootes 

app.get("/", (req, res) => {
    res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>")
})


//product route

app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        return await app.listen(3000, console.log(`Server is listening at port: ${port}.....`))
    } catch (error) {
        next(error)
    }
    
}
start();

