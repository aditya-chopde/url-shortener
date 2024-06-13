const User = require("../models/user");
const Url = require("../models/url")
const { setUser } = require("../service/auth");

async function getUrls(req, res){
    try {
        const allUrls = await Url.find({ createdBy: req.params.id})
        if(!allUrls) return res.json({success: false, message: "User Not Found"})
        res.json({success: true, totalUrls: allUrls.length , allUrls})    
    } catch (err) {
        res.json({message: "Error Occurred", error: err})
    }
}

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        const createUser = await User.create({
            name,
            email,
            password,
        })
    
        const token = setUser(createUser)
        return res.send({ success: true, createUser, token })

    } catch (err) {
        return res.send({ success: false, error: err})
    }
    
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    try {
        const findUser = await User.findOne({
            email,
            password,
        })
    
        if (!findUser) return res.json({ msg: "Something Went Wrong" })
    
        const token = setUser(findUser)
        return res.json({ success: true, user: findUser, token: token })
    } catch (err) {
        return res.json({ success: false, error: err })
    }
}


module.exports = {
    handleUserSignup,
    getUrls,
    handleUserLogin,
}