let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
	{
		domainID: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, required: true },
		name: { type: String, default: "", required: true },
		role: { type: String, default: "" },
		dob: { type: Date, default: "" },
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

userSchema.pre("updateOne", async function (next) {
	try {
		const update = this.getUpdate();
		const isIssuesUpdated =
			update.$set &&
			(update.$set.issues ||
				update.$set["issues.blocker"] ||
				update.$set["issues.critical"] ||
				update.$set["issues.major"] ||
				update.$set["issues.normal"] ||
				update.$set["issues.minor"]);

		if (isIssuesUpdated) {
			const doc = await this.model.findOne(this.getFilter());

			// Create a temporary document to calculate the score
			const tempDoc = doc
				? doc.toObject()
				: {
						issues: {
							blocker: 0,
							critical: 0,
							major: 0,
							normal: 0,
							minor: 0,
						},
				  };

			// Override issues with any updates
			if (update.$set.issues) {
				tempDoc.issues = { ...tempDoc.issues, ...update.$set.issues };
			} else {
				// Handle individual issue updates
				["blocker", "critical", "major", "normal", "minor"].forEach(
					(issueType) => {
						if (update.$set[`issues.${issueType}`] !== undefined) {
							tempDoc.issues[issueType] = update.$set[`issues.${issueType}`];
						}
					}
				);
			}

			// Calculate the new current score
			const currentScore =
				tempDoc.issues.blocker * 10 +
				tempDoc.issues.critical * 8 +
				tempDoc.issues.major * 5 +
				tempDoc.issues.normal * 3 +
				tempDoc.issues.minor * 1;

			// Add the score update to the existing update operation
			this.updateOne(
				{},
				{
					$set: {
						"score.current": currentScore,
						"score.previous": doc ? doc.score.current : 0,
					},
				}
			);
		}

		next();
	} catch (error) {
		next(error);
	}
});
module.exports = mongoose.model("User", userSchema);
