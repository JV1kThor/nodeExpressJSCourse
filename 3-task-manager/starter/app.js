console.log('Task Manager App')
const express = require("express");
const app = express();
const taskRouts = require("./routes/tasks");

const port = 3000
app.listen(port, console.log(`Server is listening at port: ${port}.....`))

// app.use(express.static("./public"))
// app.use(express.json())
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
app.use("/api", taskRouts)
/*

const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Ciao")
    } 
});

server.listen(3000)
*/