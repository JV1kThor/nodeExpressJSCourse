
//destructure a  module

const { readFileSync, writeFileSync } = require("fs"); //is the same as
// const fs = require("fs")
// const myFs = fs.readFileSync()

//const path = require("path");

console.log("Start")

const firstTxt = readFileSync("./content/first.txt", "utf8") // readFileSync(path.join("content","first.txt"))
console.log(firstTxt)



const secondTxt = readFileSync("./content/second.txt", "utf8")
console.log(secondTxt)

writeFileSync("./content/result-sync.txt", `Here is the result: ${firstTxt}, ${secondTxt}`) // if the file is not there, 
// node will create it, if the file already exists all node will overwrite all the values.
// if you want to append to the existing file, use the option flag: "a"

writeFileSync("./content/result-sync.txt", `!!! Hello world !!!`, {flag: "a"})

console.log("done with this task")
console.log("starting the next one")