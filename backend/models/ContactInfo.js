const mongoose = require("mongoose");

const contactInfoSchema = new mongoose.Schema({
    phone: String,
    phoneNote: String,
    email: String,
    altEmail: String,
    addressLine1: String,
    addressLine2: String,
    hours: String,
    emergency: String,
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
});

module.exports = mongoose.model("ContactInfo", contactInfoSchema);
