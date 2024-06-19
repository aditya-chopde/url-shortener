const { handleRedirect, working } = require("../controller/url");
const express = require("express")
const router = express.Router()

router.get("/:id", handleRedirect)
router.get("/", working)

module.exports = router;