const shortid = require("shortid")
const Url = require("../models/url");

async function handleGenerateShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(404).json({err: "URL Is Required"})
    const shortID = shortid()
    const createId = await Url.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: body.userId,
    })

    return res.json({ id: shortID, createId})
}

async function handleRedirect(req, res){
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
    res.json({redirectURL: getUrl.redirectURL, getUrl})
}

async function handleAnalytics(req, res){
    const id = req.params.id;
    const result = await Url.findOne({shortId: id})
    return res.json({
        totalClicks: result.visitHistory.length,
        analytuics: result.visitHistory
    })
}

module.exports = {
    handleGenerateShortUrl,
    handleRedirect,
    handleAnalytics,
}