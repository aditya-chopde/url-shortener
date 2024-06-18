const shortid = require("shortid")
const Url = require("../models/url");

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(404).json({ err: "URL Is Required" })
    const shortID = shortid()
    const createId = await Url.create({
        title: body.title,
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: body.userId,
    })

    return res.json({ id: shortID, createId })
}

async function handleRedirect(req, res) {
    const id = req.params.id;
    const getUrl = await Url.findOneAndUpdate({
        shortId: id
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    })
    res.redirect(getUrl.redirectURL)
}

async function handleAnalytics(req, res) {
    const id = req.params.id;
    const result = await Url.findOne({ shortId: id })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytuics: result.visitHistory
    })
}

async function handleDeleteUrl(req, res) {
    const id = req.params.id;
    try {
        const deleteUrl = await Url.findByIdAndDelete(id)
        res.json({ success: true, deleteUrl })
    } catch (err) {
        res.json({success: false, error: err} )
    }
}

module.exports = {
    handleGenerateShortUrl,
    handleRedirect,
    handleAnalytics,
    handleDeleteUrl,
}