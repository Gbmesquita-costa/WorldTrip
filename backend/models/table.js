const mongoose = require("mongoose")

const schema = mongoose.model("images", {
    title: String,
    continente: String,
    url: String,
    images: [Object]
})

module.exports = schema