const http = require("http")

const server = http.createServer( (req, res)=> {
    if(req.url === "/") {
        res.end("Home Page")
        return
    } if(req.url === "/about") {
        //bloking code
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 100; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end("About Page")
        return
    } else {res.end("Error Page")}
})

server.listen(5000, () => {
    console.log("Server listening on port : 5000....")
})

/* Second example

const http = require("http")

const server = http.createServer((req, res)=> {
    if (req.url === "/") {
        res.end("Home Page")
        return
    }
    if (req.url === "/about") {
        // blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(` ${i} + ${j} `)
            }
        }
        res.end("About Page")
        return
    }
    res.end("Error Page")

})

server.listen(5000, ()=> {
    console.log("Server is listening on port: 5000...")
})