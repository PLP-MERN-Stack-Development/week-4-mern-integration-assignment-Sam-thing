const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
// This code defines the authentication routes for user registration and login in a Node.js application using Express. It includes endpoints for registering a new user and logging in an existing user, handling errors appropriately.