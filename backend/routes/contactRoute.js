const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const ContactInfo = require("../models/ContactInfo");

// POST /api/contact/submit  -> save form submission
router.post("/submit", async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;
        if (!name || !email || !service || !message) {
            return res.status(400).send({ status: 0, message: "Missing required fields." });
        }

        const c = new Contact({ name, email, phone, service, message });
        await c.save();
        res.send({ status: 1, message: "Request submitted successfully." });
    } catch (err) {
        console.error("Contact submit error:", err);
        res.status(500).send({ status: 0, message: "Server error." });
    }
});

// GET /api/contact/info -> fetch contact info (single doc)
router.get("/info", async (req, res) => {
    try {
        const info = await ContactInfo.findOne();
        if (!info) return res.send({ status: 0, message: "No contact info found." });
        res.send({ status: 1, data: info });
    } catch (err) {
        console.error("Contact info error:", err);
        res.status(500).send({ status: 0, message: "Server error." });
    }
});

module.exports = router;
