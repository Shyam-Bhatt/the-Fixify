const express = require("express");
const { getServices, addService } = require("../controllers/serviceController");
const router = express.Router();

router.get("/view", getServices);
router.post("/add", addService);

module.exports = router;
