
/*second example */

console.log("first")
setTimeout( ()=> {
    console.log("second")
}, 0)
console.log("third")

// the callback are off-loaded meaning they are executed only after all the 
// other code lines are executed 
