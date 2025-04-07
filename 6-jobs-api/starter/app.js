require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const jobsRouter = require("./routes/jobs-router");
const authRouter = require("./routes/auth");
const websiteRouter = require("./routes/website-routs");
const connectDB = require("./db/connect");

// middleware

app.use(express.json());
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authenticationMiddleware = require("./middleware/authentication")


// database

// routes

app.use("/api/v1/", websiteRouter)
app.use("/api/v1/jobs/", authenticationMiddleware, jobsRouter)
app.use("/api/v1/auth/", authRouter)

// error handling

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = 3000

const start = async() => {
    await connectDB(process.env.MONGO_URI)


    return app.listen(port, console.log(`Server is listening at port ${port}.......`))
}

start();

