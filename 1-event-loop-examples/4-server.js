/* exercise four */

const http = require("http")

const server = http.createServer( (req, res)=> {
    console.log("Request event")
    res.end("Hello world")
})

server.listen(5000, () => {
    console.log("Server listening on port : 5000....")
})
