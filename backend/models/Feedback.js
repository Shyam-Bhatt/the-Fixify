const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    feedback: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
