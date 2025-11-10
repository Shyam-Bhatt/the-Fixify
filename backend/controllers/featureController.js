const Feature = require("../models/featureModel");

// Get all features
exports.getFeatures = async (req, res) => {
    try {
        const features = await Feature.find();
        res.json({ status: 1, features });
    } catch (error) {
        res.status(500).json({ status: 0, message: "Error fetching features", error });
    }
};

// Insert a new feature
exports.addFeature = async (req, res) => {
    try {
        const newFeature = new Feature(req.body);
        await newFeature.save();
        res.json({ status: 1, message: "Feature added successfully" });
    } catch (error) {
        res.status(500).json({ status: 0, message: "Error adding feature", error });
    }
};
