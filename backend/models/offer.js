const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    title: String,
    discount: String,
    image: String,
});

module.exports = mongoose.model('Offer', offerSchema);
