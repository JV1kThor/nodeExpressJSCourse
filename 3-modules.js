// CommonJS, every file is module (by default)
// Models - encapsulated code (only share minimum)

//const secret = "SUPER SECRET"
//const john = "John"
//const peter = "Peter"

const names = require("./4-names") // when you require a own module, you always have to indicate ./ in the require input path
// use ../ if the files is two or more levels up - we don't have to indicate the extension
console.log(names)
const john = names.john


const sayHi = require("./5-utiles")
console.log(sayHi)

sayHi("Susan")
sayHi(john)
//sayHi(peter)

sayHi("Susan")
//sayHi(names.john)
sayHi(john)
sayHi(names.peter)

const data = require("./6-alternative-flavor")
require("./7-mind-grenade") // when you import a module you envoke it !!!!!

// const testing = addValues() the function addValues() runes when you require ./7-mind-grenade and i see the log in the console 
// but since I didn't export it i can't use it here in app.js

