let express = require("express");

let userRouter = express.Router(); //creating a router that has variables that conatin controller function
let {
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  registerUser
} = require("../controllers/userController");
//Getting functions from controller

userRouter.route("/register").post(registerUser) ;
userRouter.route("/").get(getUsers);
//routes having variables that conatin controller function which are imported from ContactController.js
userRouter.route("/:id").put(updateUser).get(getUser).delete(deleteUser);

module.exports = userRouter;
