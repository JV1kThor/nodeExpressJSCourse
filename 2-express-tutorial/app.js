const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");
const loginRouter = require("./routes/auth");



// use static files
app.use(express.static("./methods-public"))

// parse from data


app.use(express.urlencoded({ extended: true }))


// parse from json
app.use(express.json())
app.use("/login", loginRouter)
app.use("/api/people", peopleRouter)







app.listen(5000, ()=> {
    console.log("Server is listening on port 5000.......")
})





/*
app.post("/api/postman/people", (req, res)=> {
    const {price} = req.body
    if (isNaN(Number(price))) {
        return  res
        .status(400)
        .json({success:false, msg:"Please enter price"})
    } else if (Number(price) < 100) {return res
        .status(200)
        .json({success:true, msg:"You won the bid"})} else if (Number(price) >=100) {
        return res.status(200)
        .json({success:true, msg:"You lost the bid!"})
    }
})
*/

/* my version
app.put("/api/people/:id", (req, res)=> {
    const {id} = req.params
    console.log(id)
    const person = people[id]
    console.log(person)
    if (!person) {res.status(400).json({success:false, msg: "User doesn't exist"})} else {
        person.name = req.body.name
        console.log(people[id])
        res.status(202).json({success: true, newData: people[id]})  
    }
})
*/