const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
    icon: { type: String, required: true }, // FontAwesome icon class or image URL
    title: { type: String, required: true },
    summary: { type: String, required: true },
});

module.exports = mongoose.model("Feature", featureSchema);
