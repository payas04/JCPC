const express = require("express");

const authRouter = express.Router();
const { loginUser, isAuthenticated,logout } = require("../controllers/authcontroller");

authRouter.route("/login").post(isAuthenticated,loginUser);
authRouter.route("/logout").post(logout)

module.exports = authRouter;
