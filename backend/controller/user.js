const User = require("../models/user");
const Url = require("../models/url")
const { setUser } = require("../service/auth");
const bcrypt = require("bcrypt")

async function getUrls(req, res) {
    try {
        const userId = req.params.id;
        if (!userId) return res.status(400).json({ success: false, message: "User ID is required" });

        const allUrls = await Url.find({ createdBy: userId })
        if (!allUrls) return res.json({ success: false, message: "Urls Not Found" })
        res.json({ success: true, totalUrls: allUrls.length, allUrls })
    } catch (err) {
        res.json({ message: "Error Occurred", error: err, url: "Get url" })
    }
}

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        const exists = await User.findOne({ email })
        if (exists) return res.json({ success: false, message: "User already exists", action: "Got to the login page" })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const createUser = await User.create({
            name,
            email,
            password: hash,
        })

        const token = setUser(createUser)
        return res.send({ success: true, createUser, token })

    } catch (err) {
        return res.send({ success: false, error: err })
    }

}

async function handleUserLogin(req, res) {
    const {email, password} = req.body;

    try {
        const find = await User.findOne({
            email
         })

        if (!find) return res.json({success: false, msg: "user not found" })

        const matchPass = await bcrypt.compare(password, find.password)

        if (!matchPass) return res.json({ sucess: false, message: "something went wrong" })

        const token = setUser(find)
        return res.json({ success: true, find, token})

    } catch (err) {
        return res.json({ success: false, error: err })
    }
}


module.exports = {
    handleUserSignup,
    getUrls,
    handleUserLogin,
}