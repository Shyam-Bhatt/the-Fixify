const mongoose = require('mongoose');
const { offers, products } = require('./data/seed');
const Offer = require('./models/Offer');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB')
    .then(async () => {
        console.log('✅ MongoDB Connected. Seeding data...');
        await Offer.deleteMany();
        await Product.deleteMany();
        await Offer.insertMany(offers);
        await Product.insertMany(products);
        console.log('🌱 Data inserted successfully');
        mongoose.connection.close();
    })
    .catch((err) => console.error('❌ Error:', err));
