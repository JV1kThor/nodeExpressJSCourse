require('dotenv').config()
require("express-async-errors")

const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const productRouter = require("./routes/products")

//middleware

app.use(express.json())

//rootes 


app.use("/api/v1/products", productRouter)

// async errors
app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        return app.listen(port, console.log(`Server is listening at port: ${port}.....`))
    } catch (error) {
        console.log(error)
    }
    
}
start();

