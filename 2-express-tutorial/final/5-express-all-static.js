const express = require("express");
const app = express();


// app.use(express.static("./navbar-app")) // tipically the static folder is called "public", so
// the path usually is app.use(express.static("./public"))
// actually i'll also use public

// setup static and midleware
app.use(express.static("./public"))
/*
// actually I don't need the below code to render index.html if I save it in the static repository
app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./navbar-app/index.html")) // or res.sendFile(path.join(__dirname, "./navbar-app/index.html"))
})
*/



app.all("*", (req, res)=> {
    res.status(404).send("Resource not found")
})

app.listen(5000, ()=> {
    console.log("Server is listening on port 5000.....")
})