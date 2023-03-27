const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const { apartaments: ctrl } = require("../../controllers");

router.get("/", ctrlWrapper(ctrl.getApartments));
router.get("/:id", ctrlWrapper(ctrl.getApartmentsById));
router.post("/:id/reviews", ctrlWrapper(ctrl.postApartmentsReviews));
module.exports = router;
