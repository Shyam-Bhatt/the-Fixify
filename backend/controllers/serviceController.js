const Service = require("../models/Service");

// Get all services
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({ status: 1, services });
    } catch (err) {
        res.status(500).json({ status: 0, message: err.message });
    }
};

// Add a new service
exports.addService = async (req, res) => {
    try {
        const { icon, title, summary, features } = req.body;

        const newService = new Service({ icon, title, summary, features });
        await newService.save();

        res.status(201).json({ status: 1, message: "Service added successfully" });
    } catch (err) {
        res.status(400).json({ status: 0, message: err.message });
    }
};
