import mongoose from "mongoose";

const Connection = async (mongoURI) => {
  try {
    console.log("connected");
    await mongoose.connect(mongoURI);
    console.log("database connected succesfully");
  } catch (error) {
    console.log("error while connecting with database : ", error);
  }
};

export default Connection;
