const express = require("express")
const URL = require("./models/url")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 3000;
require('dotenv').config()

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Getting all routes
const staticRoute = require("./routes/staticRoute")
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user")

//Connecting DB
const connectDB = require("./connect");
connectDB("mongodb+srv://adityachopde27:QkjV1lYSzjJskzsB@cluster0.o3lzf.mongodb.net/url-shortener").then(() => {
    console.log("DB Connected...")
})

app.use("/", staticRoute)
app.use("/url", urlRoute)
app.use("/user", userRoute)

app.listen(port, () => {
    console.log("Server Started at PORT " + port)
})
