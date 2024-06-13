const { getUrls } = require("../controller/user");
const express = require("express")
const router = express.Router()

router.get("/:id", getUrls)

module.exports = router;