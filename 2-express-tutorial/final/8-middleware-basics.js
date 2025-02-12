const express = require("express");
const app = express();


// req => middleware => res


app.listen(5000, () => {
    console.log("Server is listening on port 5000......")
})

const logger = (req, res, next) =>{
    const merhod = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(merhod, url, time)
    //res.send("Testing") if you use middleware you must either send the response in the middleware or
    next() //or you pass the next() function which evoks the next middleware, if present, or the next function
    // in the absence of res.send or next() the app will continue to wait for a response.........
}

/*
app.get("/", (req, res)=> {
    const merhod = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(merhod, url, time)
    res.send("Home")
})
*/

// Instead of adding the above logs to evety req we can use a middelware function "logger"
app.get("/", logger, (req, res)=> {
    res.send("Home")
})

app.get("/about", logger, (req, res)=> {
    res.send("About")
})