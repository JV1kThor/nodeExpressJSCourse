

const homepage = (req, res) => {
    console.log("homepage requested")
    res.json({msg: "welcome to our homepage"})
}

const register = (req, res) => {

    res.send("fuck you")
    throw new CustomAPIError()
} 




module.exports = {
    homepage,
    register
}