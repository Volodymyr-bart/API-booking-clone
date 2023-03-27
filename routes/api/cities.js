const express = require("express");

const ctrl = require("../../controllers/cities");

const router = express.Router();

// get all cities
router.get("/", ctrl.getCities);

module.exports = router;
