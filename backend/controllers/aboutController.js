const About = require("../models/About");

// ✅ Get About Data
exports.getAbout = async (req, res) => {
    try {
        const about = await About.findOne(); // only one about section
        if (!about) return res.send({ status: 0, message: "No about data found" });
        res.send({ status: 1, about });
    } catch (err) {
        res.status(500).send({ status: 0, message: err.message });
    }
};

// ✅ Insert or Update About Data
exports.updateAbout = async (req, res) => {
    try {
        const { paragraphs, stats } = req.body;
        let about = await About.findOne();

        if (about) {
            // Update existing
            about.paragraphs = paragraphs;
            about.stats = stats;
            await about.save();
        } else {
            // Create new
            about = new About({ paragraphs, stats });
            await about.save();
        }

        res.send({ status: 1, message: "About data saved successfully", about });
    } catch (err) {
        res.status(500).send({ status: 0, message: err.message });
    }
};
