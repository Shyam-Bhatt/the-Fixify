const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// ✅ Get all feedback
router.get("/", async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json({ status: 1, feedbacks });
    } catch (err) {
        res.json({ status: 0, message: "Failed to fetch feedback", error: err.message });
    }
});

// ✅ Add new feedback
router.post("/", async (req, res) => {
    try {
        const { name, feedback, rating } = req.body;
        const newFeedback = new Feedback({ name, feedback, rating });
        await newFeedback.save();
        res.json({ status: 1, message: "Feedback added successfully" });
    } catch (err) {
        res.json({ status: 0, message: "Failed to add feedback", error: err.message });
    }
});

module.exports = router;
