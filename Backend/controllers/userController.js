let asynHandler = require("express-async-handler");
let User = require("../model/userModel");

//register user
const registerUser = asynHandler(async (req, res) => {
  try {
    const { domainID, password, isAdmin } = req.body;
    const userExists = await User.findOne({ domainID });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists!");
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, 10); // 2nd arg is by-default is salt
    let user = {
      domainID: domainID,
      password: password,
      isAdmin: isAdmin,
    };

    const newUser = new User(user); //varifying schema of user
    if (newUser) {
      user = newUser;
      await user.save();
      return res.status(200).json(user);
      // .json({ user , token: generateToken(user._id) });
    } else {
      throw new Error("User schema didn't match");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//@desc get all contacts
//@route GET /api/contact
//@access Public
let getUsers = asynHandler(async (req, res) => {
  let users = await User.find();
  res.status(200).json(users);
});

//@desc get a contact
//@route GET /api/contact/:id
//@access Public
let getUser = asynHandler(async (req, res) => {
  let user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(404);
  }
  res.status(200).json(user);
});

//@desc update profile
//@route PUT /api/contact/:id
//@access Public
const updateUser = asynHandler(async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(user, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//@desc delete contact
//@route DELETE /api/contact/:id
//@access Public
let deleteUser = asynHandler(async (req, res) => {
  res.status(200).json({ message: `User for ${req.params.id}` });
});

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  registerUser,
};
