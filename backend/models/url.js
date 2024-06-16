const mongoose = require("mongoose")

const urlSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Title"
    },
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timestamp: {
            type: Number,
        }
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
},
    { timestamps: true }
)

const Url = mongoose.model("url", urlSchema)

module.exports = Url;