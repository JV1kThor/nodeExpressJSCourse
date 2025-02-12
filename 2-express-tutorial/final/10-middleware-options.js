const express = require("express");
const app = express();
const logger = require("./logger");
const autorize = require("./authorize");
const morgan = require("morgan");

// req => middleware => res
// 1- use vs route
// 2- our own / express / third party

app.listen(5000, () => {
    console.log("Server is listening on port 5000......")
})
/*
const logger = (req, res, next) =>{
    const merhod = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(merhod, url, time)
    //res.send("Testing") if you use middleware you must either send the response in the middleware or
    next() //or you pass the next() function which evoks the next middleware, if present, or the next function
    // in the absence of res.send or next() the app will continue to wait for a response.........
}
*/

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

//app.use([logger, autorize]) // instead of puting the loger function in all the app.get routs we can simply use app.use(logger)
//  see the qbout and items example below 
// ORDER MATTERS!! app.use() must be placed before the gets!! 
// to use more middleware function put them in the list [], alsi in this case the ORDER MATTERS !!! The first middleware function 
// in the list will be executed first and so on with the next functioins

// app.use("/api", logger) it is possible to apply a particular middleware function only to specific URL, to do so you need 
// to indicate the root path as the first argument of .use method

app.use(morgan("tiny"))

app.get("/", [logger], (req, res)=> {
    res.send("Home")
})

app.get("/about", [logger], (req, res)=> {
    res.send("About")
})

app.get("/api/products", [logger, autorize], (req, res)=> {
    console.log(req.user)
    res.send("Products")
})


app.get("/api/items", [logger, autorize], (req, res)=> {
    console.log(req.user)
    res.send("Items")
})