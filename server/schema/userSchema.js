import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  domainID: { type: String, required: true },
  emailID: { type: String, required: true },
  bitImoji: { type: String, required: true },
  profileImage: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;