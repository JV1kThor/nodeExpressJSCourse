const express = require("express");
const app = express();
const path = require("path")


// app.use(express.static("./navbar-app")) // tipically the static folder is called "public", so
// the path usually is app.use(express.static("./public"))
// actually i'll also use public

// setup static and midleware
app.use(express.static("./public"))


app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./navbar-app/index.html")) // or res.sendFile(path.join(__dirname, "./navbar-app/index.html"))
})


app.get("/about", (req, res)=> {

    res.send("About Page")
})


app.get("/contacts", (req, res)=> {

    res.send("Contact us Page")
})


app.all("*", (req, res)=> {
    res.status(404).send("Resource not found")
})

app.listen(5000, ()=> {
    console.log("Server is listening on port 5000.....")
})