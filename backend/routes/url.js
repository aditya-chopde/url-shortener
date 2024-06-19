const express = require("express")
const { getUrls } = require("../controller/user");
const { handleGenerateShortUrl, handleAnalytics, handleDeleteUrl } = require("../controller/url")
const router = express.Router()

router.post("/", handleGenerateShortUrl)
router.post("/delete/:id", handleDeleteUrl)
router.get("/:id", getUrls)
router.get('/analytics/:id', handleAnalytics)

module.exports = router;