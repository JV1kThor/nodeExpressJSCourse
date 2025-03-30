
// check username and password in post login request
// if exists create new JWT
// send back to front end
// setup authentication so that only authenticated users can see dashboard

const { BadRequest } = require("../errors/");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
    // we can validate user and psw in mongoose by setting username and psw as required
    // or using joi  
    // or here in the controllers by throwing a custom error
    const { username, password } = req.body
    // console.log(req.body)

    if (!username || !password) {
        throw new BadRequest("Please provide email and password")
    } else {
        // just for demo, usually id is provided by the DB
        const id = new Date().getDate()
        // best practice is to minimize the payload (the information we send back, in this example id and username) 
        const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "30d" })
        return res.status(200).json({ msg: "user created", token })
    }
}

const dashboard = async (req, res) => {
    console.log(req.user)
    // console.log(req.headers)

    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        success: true,
        msg: `Hello ${req.user.username}`,
        secret: `Here is your authorized data, you are lucky number: ${luckyNumber}`
    })
}

module.exports = {
    login,
    dashboard
}
