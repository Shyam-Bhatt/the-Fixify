const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    service: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
