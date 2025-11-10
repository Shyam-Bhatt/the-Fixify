const express = require("express");
const { getFeatures, addFeature } = require("../controllers/featureController");
const router = express.Router();

router.get("/view", getFeatures);
router.post("/add", addFeature);

module.exports = router;
