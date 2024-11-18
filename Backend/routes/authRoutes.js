const express = require("express");

const authRouter = express.Router();
const {
	loginUser,
	logout,
	getMyDetails,
} = require("../controllers/authcontroller");
const { isAuthenticated } = require("../middleware/auth");

authRouter.route("/login").post(loginUser);
authRouter.route("/logout").get(logout);
authRouter.route("/me").get(isAuthenticated, getMyDetails);

module.exports = authRouter;
