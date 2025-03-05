const express = require("express");
const app = express();
const taskRouts = require("./routes/tasks");
const connectDB = require("./db/connect")
require("dotenv").config()

//middleware functions

// app.use(express.static("./public"))
app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.get("/hello", (req, res)=> {
    res.send("Task manager app")
    return
})
/*
app.get("/", (req, res)=> {
    res.sendFile("./public/index.html")
})
*/
app.use("/api/v1/tasks/", taskRouts)
const port = 3000

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