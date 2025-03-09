const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect")
require("dotenv").config()
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

//middleware functions

app.use(express.static("./public"))
app.use(express.json())
// app.use(express.urlencoded({extended: false}))


/*
app.get("/", (req, res)=> {
    res.sendFile("./public/index.html")
})
*/
app.use("/api/v1/tasks/", taskRoutes)
const port = /*process.env.PORT || */ 3000

app.use(notFound) // must be places AFTER ROUTS !!!!
app.use(errorHandlerMiddleware)

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening at port: ${port}.....`))
    } catch (error) {console.log(error)}
}

start()


/*

const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Ciao")
    } 
});

server.listen(3000)
*/

/*
.then(() => console.log("CONNECTED TO DB..."))
.catch((err) => console.log(err))
*/