const User = require("../model/userModel");
const sendCookie = require("../utils/feature");

const loginUser = async (req, res) => {
	try {
		let { domainID, password } = req.body;
		domainID = domainID.toLowerCase();
		const user = await User.findOne({ domainID });

		if (!user)
			return res
				.status(401)
				.json({ success: false, message: "User Not Found" });
		if (user.password === password) {
			sendCookie(user, res, `Welcome back, ${user.domainID}`, 200);
		} else {
			return res
				.status(400)
				.json({ success: false, message: "Invalid Password" });
		}
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

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
