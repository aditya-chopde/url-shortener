const express = require("express")
const URL = require("./models/url")
const cookieParser = require("cookie-parser")
const app = express()
const port = 3000;

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

//Getting all routes
const staticRoute = require("./routes/staticRoute")
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user")

//Connecting DB
const connectDB = require("./connect");
connectDB("mongodb://localhost:27017/urlShortener").then(() => {
    console.log("DB Connected !")
})

app.use("/", staticRoute)
app.use("/url", urlRoute)
app.use("/user", userRoute)

app.listen(port, () => {
    console.log("Server Started at PORT " + port)
})
