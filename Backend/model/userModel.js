let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
	{
		domainID: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, required: true },
		role: { type: String, default: "" },
		name: { type: String, default: "" },
		image: { type: String, default: "" },
		issues: {
			blocker: { type: String, default: 0 },
			critical: { type: String, default: 0 },
			major: { type: String, default: 0 },
			normal: { type: String, default: 0 },
			minor: { type: String, default: 0 },
		},
		courses: { type: String, default: "" },
		bio: { type: String, default: "" },
		extraActivites: { type: String, default: "" },
		tag: { type: String, default: "" },
	},
	{
		timestamp: true,
	}
);

module.exports = mongoose.model("User", userSchema);
