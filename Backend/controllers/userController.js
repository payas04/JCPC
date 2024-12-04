let asynHandler = require("express-async-handler");
let User = require("../model/userModel");

const csv = require("csv-parser");
const fs = require("fs");

const registerUser = async (req, res) => {
  try {
    let { domainID, password, isAdmin, email, name } = req.body;
    domainID = domainID.toLowerCase();
    const userExists = await User.findOne({ domainID });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists!");
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, 10); // 2nd arg is by-default is salt
    let user = {
      domainID,
      password,
      isAdmin,
      email,
      name,
    };

    const newUser = new User(user);
    if (newUser) {
      await newUser.save();
      return res
        .status(200)
        .json({ success: true, message: "New User Created", newUser });
    } else {
      throw new Error("User schema didn't match");
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

let getUsers = asynHandler(async (req, res) => {
  let users = await User.find();
  res.status(200).json(users);
});

let getUser = asynHandler(async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
  }
  res.status(200).json({ success: true, user });
});

const updateUser = asynHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    // const updatedUser = await User.findByIdAndUpdate(user, req.body, {
    // 	new: true,
    // 	runValidators: true,
    // });
    // res.status(200).json(updatedUser);

    // Copies all properties from req.body to the user object.
    // If req.body has a property that already exists in user, it overwrites the value in user.
    // If req.body has a property that does not exist in user, it adds the new property to user.
    Object.assign(user, req.body);
    const updatedUser = await user.save();
    res.status(200).json({
      success: true,
      message: `${user.domainID} profile updated successfully`,
      updatedUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    await user.deleteOne();
    res.status(200).json({
      success: true,
      message: `User ${user.domainID} has been deleted`,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const uploadAndUpdateEmployees = async (req, res) => {
  try {
    let users = req.body;
    console.log(users);

    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({ message: "Invalid or empty data." });
    }

    // Process each user in the array
    for (const user of users) {
      const { domainID, issues } = user;

      if (!domainID || !issues) {
        console.warn(`Skipping invalid user: ${JSON.stringify(user)}`);
        continue; // Skip invalid entries
      }

      // Update or insert user data based on `domainID`
      await User.updateOne(
        { domainID }, // Match by domainID
        {
          $set: {
            issues, // Update issues field
          },
        },
        { upsert: true } // Create a new document if it doesn't exist
      );
    }

    res.status(200).json({ message: "Bulk upload/update successful!" });
  } catch (error) {
    console.error("Error during bulk update:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing data." });
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  registerUser,
  uploadAndUpdateEmployees,
};
