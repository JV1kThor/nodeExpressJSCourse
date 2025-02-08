const http = require("http");



const server = http.createServer()


server.on("request", (req, res) => {
    if(req.url ==="/") {
        console.log(req.method)
        res.writeHead(200,{"content-type": "text/html"}) // the stuff you type here matters!! try "content-type": "text/plain"
        //res.end("<h1>Welcome to our home page</h1>") - the same as res.write and then res.end
        res.write(`<h1>Welcome to our home page</h1>`)
        res.end()
    } else if (req.url ==="/about") {
        res.writeHead(200,{"content-type": "text/html"})
        res.end("<h1>About Page</h1>")
    } else {
        res.writeHead(404,{"content-type": "text/html"})
        res.end("Error Page")
    }
})
server.listen(5000)
