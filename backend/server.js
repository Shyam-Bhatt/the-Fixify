const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const aboutRoute = require("./routes/aboutRoute");
const contactRoute = require("./routes/contactRoute");
const featureRoute = require('./routes/featureRoute');
const serviceRoute = require("./routes/serviceRoute");
const feedbackRoute = require("./routes/feedbackRoute");

const Offer = require('./models/Offer');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 8020;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB Atlas Connected Successfully'))
    .catch(err => console.error('❌ MongoDB Connection Failed:', err));

// ✅ Health Check Route
app.get('/', (req, res) => {
    res.send({ status: 1, message: 'Backend running with MongoDB Atlas' });
});

// ✅ Routes
app.get('/api/offers', async (req, res) => {
    try {
        const data = await Offer.find();
        res.send({ status: 1, offers: data });
    } catch (err) {
        res.status(500).send({ status: 0, message: err.message });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const { limit } = req.query;
        let data = await Product.find();
        if (limit) data = data.slice(0, Number(limit));
        res.send({ status: 1, products: data });
    } catch (err) {
        res.status(500).send({ status: 0, message: err.message });
    }
});

// ✅ Feature, Service, Feedback, About, Contact Routes
app.use('/api/features', featureRoute);
app.use('/api/services', serviceRoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/about', aboutRoute);
app.use('/api/contact', contactRoute);

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
