require("dotenv").config()
require("express-async-errors")
const connectDB = require ("./db/connect")
const router = require("./routes/main")

const express = require("express")
const app = express()

const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// middleware

app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1", router)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        const connect = await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}....`))
    } catch (error) {
        
    }
    
}


start()

