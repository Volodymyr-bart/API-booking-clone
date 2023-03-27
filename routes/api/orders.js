const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/orders");

router.get("/", ctrl.getOrders);
router.post("/", ctrl.addOrders);
router.delete("/:id", ctrl.deleteOrders);
module.exports = router;
