const http = require("http");

const server = http.createServer((req, res)=> { // the first parameter (req) is the incoming request from the client (browser) 
// the second parameter (res) is the response we are sending, both parameters are object
//console.log(req)
    if (req.url === "/") {
        res.end("Welcome to our home page")
    }
    else if (req.url === "/about") {
        res.end("Here is our short hiostory")
    }
    else {res.end(`
        <h1>Ooops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)}
})

server.listen(5000)