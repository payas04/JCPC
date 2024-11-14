const asynHandler = require("express-async-handler");
const User = require("../model/userModel");
const sendCookie = require("../utils/feature");

//register user

//login User
const loginUser = asynHandler(async (req, res) => {
	try {
		const { domainID, password } = req.body;

		const user = await User.findOne({ domainID });

		if (!user) return res.send("User Not Found").status(401);
		if (user.password === password) {
			sendCookie(user, res, `Welcome back, ${user.domainID}`, 200);
		} else {
			res.status(400).json({ message: "Invalid Password" });
			throw new Error("Invalid Password");
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

const logout = (req, res) => {
	res
		.status(200)
		.cookie("token", "", {
			expires: new Date(Date.now()),
			sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
			secure: process.env.NODE_ENV === "Development" ? false : true,
		})
		.json({
			success: true,
			message: "Logout Successful",
		});
};

const getMyDetails = (req, res) => {
	const { user } = req;

	res.status(200).json({
		success: true,
		user,
	});
};

module.exports = {
	loginUser,
	logout,
	getMyDetails,
};
