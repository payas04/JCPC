const express = require("express");
// const multer = require("multer");

const userRouter = express.Router();
const {
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  registerUser,
  uploadAndUpdateEmployees,
} = require("../controllers/userController");
const { isAdmin } = require("../middleware/auth");

// const upload = multer({ dest: "uploads/" });

userRouter.route("/register").post(isAdmin, registerUser);
userRouter.route("/").get(getUsers);
userRouter
  .route("/:id")
  .put(updateUser)
  .get(getUser)
  .delete(isAdmin, deleteUser);
userRouter.route("/csv-upload").post(uploadAndUpdateEmployees);

module.exports = userRouter;
