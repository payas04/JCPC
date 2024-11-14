let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    domainID: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    role: { type: String },
    name: { type: String },
    email: { type: String, unique: true },
    image: { type: String },
    issues: {
      blocker: { type: String },
      critical: { type: String },
      major: { type: String },
      normal: { type: String },
      minor: { type: String },
    },
    courses: {type: String },
    bio: { type: String },
    extraActivites: { type: String },
    tag: { type: "String" },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
