const express = require("express")
const { handleGenerateShortUrl, handleRedirect, handleAnalytics, handleDeleteUrl } = require("../controller/url")
const router = express.Router()

router.post("/", handleGenerateShortUrl)
router.post("/delete/:id", handleDeleteUrl)
router.get("/:id", handleRedirect)
router.get('/analytics/:id', handleAnalytics)

module.exports = router;