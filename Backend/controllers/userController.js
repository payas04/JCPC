let asynHandler = require("express-async-handler");
let User = require("../model/userModel");

const registerUser = async (req, res) => {
	try {
		const { domainID, password, isAdmin, email } = req.body;
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
		};

		const newUser = new User(user);
		if (newUser) {
			user = newUser;
			await user.save();
			return res.status(200).json(user);
		} else {
			throw new Error("User schema didn't match");
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

let getUsers = asynHandler(async (req, res) => {
	let users = await User.find();
	res.status(200).json(users);
});

let getUser = asynHandler(async (req, res) => {
	let user = await User.findById(req.params.id);
	console.log(user);
	if (!user) {
		res.status(404);
	}
	res.status(200).json(user);
});

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

module.exports = {
	getUsers,
	getUser,
	updateUser,
	deleteUser,
	registerUser,
};
