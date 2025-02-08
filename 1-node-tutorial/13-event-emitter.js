const EventEmitter = require("events");
const  customEmitter = new EventEmitter()

// customEmitter.on listen for an event
// customEmitter.emit emit an event
// for other methods see documentation


customEmitter.emit("response") //the order maters - so first you listen "on", and then you respond "emit" - this line produces
//  nothing in console

customEmitter.on("response", (name, id)=> {
    console.log(`data received user ${name} with id: ${id}`)
})


customEmitter.on("response", ()=> {
    console.log(`data received again`)
})

customEmitter.emit("response", "john", 1332) // this line works