const express = require("express");
const app = express();
const router = require("./routes/jobs-router");


// middleware

app.use(express.json());
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");


// routes

app.use("/api/v1/", router)

// error handling

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = 3000

const start = async() => {
    return app.listen(port, console.log(`Server is listenint at port ${port}.......`))
}

start();

