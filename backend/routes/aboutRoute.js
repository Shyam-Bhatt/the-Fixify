const express = require("express");
const { getAbout, updateAbout } = require("../controllers/aboutController");

const router = express.Router();

router.get("/", getAbout);
router.post("/", updateAbout);

module.exports = router;
