
let { people } = require('../data')

const peopleGet = (req, res)=> {
    return res.status(200).json({success: true, data: people})
}

const peopleGetID = (req, res)=> {
    const {id} = req.params
    const person = people.find((findPerson)=> findPerson.id === Number(id))
    if (!person) {return res.status(404).json({success: false, msg: "User doesn't exist."})}
    else {return res.status(200).json({success: true, data: person})}
    
}

const peoplePost = (req, res)=> {
    console.log(req.body)
    const {name} = req.body
    if (name) {res.status(201).json({success: true, person: name})} else {
        res.status(400).json({success: false, msg: "please provide name value"})
    }
}

const peoplePut = (req, res)=> {
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
    }

    const peopleDelete = (req, res)=> {
        /*const {id} = req.params*/
        const person = people.find((findPerson)=> findPerson.id === Number(req.params.id))
        if (!person) {return res.status(404).json({success: false, msg: "ID doesn't exist"})} 

        const newPeople = people.filter((filterPeople)=> filterPeople.id !== Number(req.params.id))
        return res.status(200).json({success:true, data:newPeople})
    }

    module.exports = {
        peopleGet,
        peopleGetID,
        peoplePost,
        peoplePut,
        peopleDelete
    }