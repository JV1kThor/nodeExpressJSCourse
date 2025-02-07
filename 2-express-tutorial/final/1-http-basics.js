const http = require("http");
const { readFileSync } = require("fs")

// get all files

const homePage = readFileSync("./navbar-app/index.html")
const homeStyles = readFileSync("./navbar-app/styles.css")
const homeImage = readFileSync("./navbar-app/logo.svg")
const homeLogic = readFileSync("./navbar-app/browser-app.js")

const server = http.createServer()


server.on("request", (req, res) => {
    console.log(req.url)
    // HomePage
    if(req.url ==="/") {
        console.log(req.method)
        res.writeHead(200,{"content-type": "text/html"}) // the stuff you type here matters!! try "content-type": "text/plain"
        //res.end("<h1>Welcome to our home page</h1>") - the same as res.write and then res.end
        res.write(homePage)
        res.end()

        //about page 
    } else if (req.url ==="/about") {
        res.writeHead(200,{"content-type": "text/html"})
        res.end("<h1>About Page</h1>")
        // Styles
    } else if (req.url ==="/styles.css") {
        res.writeHead(200,{"content-type": "text/css"})
        res.write(homeStyles)
        res.end()
        // Img
    } else if (req.url ==="/logo.svg") {
        res.writeHead(200,{"content-type": "image/svg+xml"})
        res.write(homeImage)
        res.end()
        // Logic
    } else if (req.url ==="/browser-app.js") {
        res.writeHead(200,{"content-type": "text/javascript"})
        res.write(homeLogic)
        res.end()
    } else {
        res.writeHead(404,{"content-type": "text/html"})
        res.end("Error Page")
    }
})

server.listen(5000)
