let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
	{
		domainID: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, required: true },
		name: { type: String, default: "", required: true },
		role: { type: String, default: "" },
		image: { type: String, default: "" },
		issues: {
			blocker: { type: Number, default: 0 },
			critical: { type: Number, default: 0 },
			major: { type: Number, default: 0 },
			normal: { type: Number, default: 0 },
			minor: { type: Number, default: 0 },
		},
		courses: { type: String, default: "" },
		bio: { type: String, default: "" },
		extraActivites: { type: String, default: "" },
		tag: { type: String, default: "" },
		score: {
			previous: { type: Number, default: 0 },
			current: { type: Number, default: 0 },
		},
	},
	{
		timestamp: true,
	}
);

userSchema.virtual("currentScore").get(function () {
	return (
		this.issues.blocker * 10 +
		this.issues.critical * 8 +
		this.issues.major * 5 +
		this.issues.normal * 3 +
		this.issues.minor * 1
	);
});

// Add middleware to automatically update score before saving
userSchema.pre("save", function (next) {
	this.score.current = this.currentScore;
	next();
});
module.exports = mongoose.model("User", userSchema);
