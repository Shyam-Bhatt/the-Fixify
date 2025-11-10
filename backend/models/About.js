const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    paragraphs: {
        type: [String], // Array of paragraphs
        required: true,
    },
    stats: [
        {
            value: { type: String, required: true },
            label: { type: String, required: true },
        },
    ],
});

module.exports = mongoose.model("About", aboutSchema);
