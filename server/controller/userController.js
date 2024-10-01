import User from "../schema/userSchema.js";

//create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, domainID, bitImoji, profileImage } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists!");
    }
    let user = {
      name: name,
      email: email,
      domainID: domainID,
      bitImoji: bitImoji,
      profileImage: profileImage,
    };

    const newUser = new User(user); //varifying schema of user
    if (newUser) {
      user = newUser;
      await user.save();
      return res.status(200).json({ user });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error while creating a new user :", error });
  }
};

// Fetch all users
export const getUsers = async (req, res) => {
  try {
    let users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error while fetching the users from db : ", error });
  }
};
