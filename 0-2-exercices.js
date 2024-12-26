/* First exercise
const { readFile } = require("fs");

console.log("Started first task")
//Check file path

readFile("./content/first.txt", "utf8", (err, result)=> {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log("completed first task")
})

console.log("starting next task")

*/


/*second example 

console.log("first")
setTimeout( ()=> {
    console.log("second")
}, 0)
console.log("third")

// the callback are off-loaded meaning they are executed only after all the 
// other code lines are executed 
// */

/* third example

setInterval( ()=> {
    console.log("Hello world")
}, 2000)
console.log("I will run first")

setTimeout( ()=> {
    console.log("Hello people")
}, 3000)

// SetInterval is a callback that runs every x seconds

*/

/* exercise four

const http = require("http")

const server = http.createServer( (req, res)=> {
    console.log("Request event")
    res.end("Hello world")
})

server.listen(5000, () => {
    console.log("Server listening on port : 5000....")
})
*/
