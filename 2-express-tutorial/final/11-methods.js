const express = require("express");
const app = express(); 
let { people } = require("./data");

// use static files
app.use(express.static("./methods-public"))

// parse from data

/*
app.use(express.urlencoded({ extended: true }))
*/

// parse from json
app.use(express.json())

app.get("/api/people", (req, res)=> {
    res.status(200).json({success: true, data: people})
})

app.post("/api/people", (req, res)=> {
    console.log(req.body)
    const {name} = req.body
    if (name) {res.status(201).json({success: true, person: name})} else {
        res.status(400).json({success: false, msg: "please provide name value"})
    }
})

app.post("/login", express.urlencoded({ extended: true }), (req, res)=> {
    const { name } = req.body
    if (name) {
        res.send(`Benvenuto ${name}`)
    } else {
        res.status(401).send("Please provide credentials!")
    }
    console.log(req.body)
    res.send("Ciao")

})

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

app.put("/api/people/:id", (req, res)=> {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((findPerson) => findPerson.id === Number(id))

    if (!person) {
        return res.status(404).json({success: false, msg: "User doesn't exist"})
    }
    const newPeople = people.map((mapPerson)=> {
        if (mapPerson.id === Number(id)) {
            mapPerson.name = name
            }
            return mapPerson
        })
        return res.status(200).json({success: true, newData: newPeople})  
    })

    app.delete("/api/people/:id", (req, res)=> {
        /*const {id} = req.params*/
        const person = people.find((findPerson)=> findPerson.id === Number(req.params.id))
        if (!person) {return res.status(404).json({success: false, msg: "ID doesn't exist"})} 

        const newPeople = people.filter((filterPeople)=> filterPeople.id !== Number(req.params.id))
        return res.status(200).json({success:true, data:newPeople})



    })

app.listen(5000, ()=> {
    console.log("Server is listening on port 5000.......")
})