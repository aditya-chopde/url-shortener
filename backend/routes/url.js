const express = require("express")
const { handleGenerateShortUrl, handleRedirect, handleAnalytics } = require("../controller/url")
const router = express.Router()

router.post("/", handleGenerateShortUrl)
router.get("/:id", handleRedirect)
router.get('/analytics/:id', handleAnalytics)

module.exports = router;