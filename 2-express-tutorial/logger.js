const logger = (req, res, next) =>{
    const merhod = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(merhod, url, time)
    //res.send("Testing") if you use middleware you must either send the response in the middleware or
    next() //or you pass the next() function which evoks the next middleware, if present, or the next function
    // in the absence of res.send or next() the app will continue to wait for a response.........
}

module.exports = logger