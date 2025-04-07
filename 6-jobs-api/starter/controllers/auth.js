
const { StatusCodes } = require("http-status-codes")
const User = require("../models/User");
const { BadRequest, UnauthenticatedError } = require("../errors/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        throw new BadRequest("Please provide email and password")
    }
    const currentUser = await User.findOne({ email: email })

    if (!currentUser) {
        throw new UnauthenticatedError("User doesn't exist")
    }
    // compare passwords

    const isPassword = await currentUser.comparePassword(password)
    // console.log(isPassword)
    if (!isPassword) {
        throw new UnauthenticatedError("Invalid credentials")
    }

    token = currentUser.createJWT()
    res.status(StatusCodes.OK).json({ user: {
        name: currentUser.name,
    id: currentUser._id}, token })

}




const register = async (req, res) => {
    /*
        const { name, email, password } = req.body
        
        if (!name || !email || !password) {
            throw new BadRequest("Please provide name, email and password")
        }
    */ // we skip the above part because we validate the fields with mongoose

    // console.log(req.body)

    // create user with hashed passwords

    /*

    // we can hash the password also by using a mongoose middleware function (see user models file)
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    console.log(hashedPassword)

    const tempUser = { name, email, password: hashedPassword }
    console.log(tempUser)

    const creatingUser = await User.create({...tempUser})

    */

    // if we hash in controllers the code is simplier and more clean
    const creatingUser = await User.create({ ...req.body })
    // we can create the token here in controllers with the next line 
    // const token = jwt.sign({ userID: creatingUser._id, name: creatingUser.name }, "JWT_SECRET", { expiresIn: "30d", })
    // or we can setup a function on the user schema in the models file and run the below code
    const token = creatingUser.createJWT()

    /*
    // creating user without hashing
    
        const creatingUser = await User.create({ ...req.body }) // ... is a spread operator, 
        // it is equivalent to doing that: 
        // const { name, email, password } = req.body
        // const creatingUser = await User.create({name, email, password})
    
    */
    res.status(StatusCodes.CREATED).json({ user: { name: creatingUser.name }, token })
}

module.exports = {
    login,
    register,
}