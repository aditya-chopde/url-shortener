const express = require("express");
const { handleUserSignup, handleUserLogin, getUrls } = require("../controller/user");
const router = express.Router()

router.get("/:id", getUrls)
router.post("/signup", handleUserSignup)
router.post("/login", handleUserLogin)

module.exports = router;