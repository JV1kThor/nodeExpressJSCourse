const os = require("os");

// info about current user
user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

console.log(`The sistem uptime is ${os.uptime()} seconds.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);