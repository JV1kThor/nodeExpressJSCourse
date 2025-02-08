
//destructure a  module

const { readFile, writeFile } = require("fs")

console.log("Start")

readFile("./content/first.txt", "utf8", (error, result) => {
    if (error) {
        console.log(error)
        return
    }
    const firstTxt = result
    
    readFile("./content/second.txt", "utf8", (error, result) => {
        if (error) {
            console.log(error)
            return
        }
        const secondTxt = result
        writeFile("./content/result-async.txt", 
            `This is my first text: ${firstTxt} ad this is the second: ${secondTxt}`, (error, result) => {
                if (error) {
                    console.log(error)
                    return
                }
                console.log("done with this task")
            })
    })
})
console.log("starting the next one") // the cool thing is that this line is executed wthout waiting for the read and writing file 
// functions to be executed meaning that your app can continue working and serving other users even if this process hasn't been
//  completed yet. 
