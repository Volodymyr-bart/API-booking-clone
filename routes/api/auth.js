const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// register
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

//get current user
router.get("/current", authenticate, ctrl.currentUser);

//logout
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
