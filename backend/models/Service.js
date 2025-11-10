const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    icon: { type: String, required: true }, // e.g. "fas fa-tools"
    title: { type: String, required: true },
    summary: { type: String, required: true },
    features: [{ type: String, required: true }], // list items like ["AC Repair", "Fridge Repair"]
});

module.exports = mongoose.model("Service", serviceSchema);
