const express = require("express")
const { getUrls } = require("../controller/user");
const { handleGenerateShortUrl, handleAnalytics, handleDeleteUrl, handleUrlEdit } = require("../controller/url")
const router = express.Router()

router.post("/", handleGenerateShortUrl)
router.post("/delete/:id", handleDeleteUrl)
router.get('/analytics/:id', handleAnalytics)
router.post("/edit/:id", handleUrlEdit)

module.exports = router;