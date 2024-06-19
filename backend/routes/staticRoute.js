const { handleRedirect } = require("../controller/url");
const express = require("express")
const router = express.Router()

router.get("/:id", handleRedirect)

module.exports = router;