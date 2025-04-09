require("dotenv").config();
require("express-async-errors");

// extra security packages

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit");


const express = require("express"); 
const app = express();

// database

const connectDB = require("./db/connect");

// routers

const jobsRouter = require("./routes/jobs-router");
const authRouter = require("./routes/auth");
const websiteRouter = require("./routes/website-routs");

// error handling

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authenticationMiddleware = require("./middleware/authentication")

// middleware
app.set("trust proxy", 1); 
app.use(rateLimiter({
    windowMs: 15*60*1000, // 15 minutes
    max: 100 // max number of requests per IP 
})); 
app.use(express.json());
app.use(helmet);
app.use(cors);
app.use(xss);




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

