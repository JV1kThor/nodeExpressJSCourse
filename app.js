const http = require("http");

//const server = http.createServer((req, res) => {
//    res.end("Welcome")
//})

// Using Event Emitter API

const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
    if(req.url ==="/") {
        res.end("Welcome to our home page")
    } else if (req.url ==="/about") {
        res.end("About Page")
    } else {
        res.end("Error Page")
    }
    
})

server.listen(5000)






