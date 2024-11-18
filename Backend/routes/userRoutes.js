const express = require("express");
const userRouter = express.Router();
const {
	updateUser,
	getUsers,
	getUser,
	deleteUser,
	registerUser,
} = require("../controllers/userController");
const { isAdmin } = require("../middleware/auth");

userRouter.route("/register").post(isAdmin, registerUser);
userRouter.route("/").get(getUsers);
userRouter
	.route("/:id")
	.put(updateUser)
	.get(getUser)
	.delete(isAdmin, deleteUser);

module.exports = userRouter;
