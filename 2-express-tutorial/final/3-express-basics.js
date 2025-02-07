const express = require("express");
const app = express()

// const app = require("express")(); shortcut for the above code

// app.get --> user wants to read data
// app.post --> user wants to insert data
// app.put --> user wants to update data
// app.delete --> user wants to delete data
// app.all --> works with all other methods, is the response if we cannot find the resource on the server
// app.use --> is responsable for the midleware, crucial part of express
// app.listen --> is like server.listen

app.get("/", (req, res) =>{ // it takes in two paramenters, the firs one is the path and the second is the callback function 
// that is called everytime the user requests the source
    console.log("User hit the resource!")
    res.status(200).send("Home Page") // same as end in node
})
app.get("/about", (req, res) =>{ 
        res.status(200).send("About Page") 
    })
app.get("*", (req, res) =>{ // * indicates in case of all the unfounded resources
        res.status(404).send("<h1>Resourse not found</h1>")
    })

app.listen(5000, () => {
    console.log("Server is listening on port 5000.....")
})