const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes");
const cloudinary = require("cloudinary").v2;

const app = express();

dotenv.config({
	path: "./.env",
});

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
		credentials: true,
		allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
	})
);
app.use(express.urlencoded({ extended: true })); //accepts form data from request body
app.use(express.json()); //accept json data from request body
app.use(cookieParser());
app.use("/api/auth/user", authRoute);
app.use("/api/user", userRoute);
// app.use(errorHandler);

app.get("/", (req, res) => {
	res.send("Hello Server is working");
});

module.exports = app;
