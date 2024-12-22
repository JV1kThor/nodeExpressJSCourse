const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}


module.exports = sayHi // it works because we export only one object, but we can use also module.exports = {sayHi} 
// or module.exports = {sayHi: sayHi}

//it is the same as export default sayHi in ES6 or React