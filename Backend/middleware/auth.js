let jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const isAuthenticated = async (req, res, next) => {
	try {
		const { token } = req.cookies;
		if (!token) {
			return res.status(404).json({
				success: false,
				message: "Please login first",
			});
		}

		// Verify token
		const decoded = jwt.verify(token, "randomsecretkey");

		// Find user and attach to request
		req.user = await User.findById(decoded._id);
		next();
	} catch (error) {
		res.status(404).json({
			success: false,
			message: "Login First",
		});
	}
};

module.exports = isAuthenticated;
