// npm - global comand, comes with node
// npm --version 

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

//package json - manifet file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step "guided" creation - press enter to skip)
// npm init -y (everything default)



const _ = require("lodash")
// when you install a dependency through npm it updates your dependences in -package-lock.json and creates new folder under node_moduls 
// in case of the first module node creates also the node modules folder, if the package you install is using other packages also the 
// other packages are installed but in dependences we see only the package we installed using npm command  

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)