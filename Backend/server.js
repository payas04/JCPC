let express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
let dotenv = require("dotenv").config();
let cors = require("cors");
const cookieParser = require("cookie-parser");

connectDB();
let app = express();
let port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use("/api/profiles", require("./routes/profileRoutes")); // middleware pointing towards contacRoutes.js
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/auth/user", require("./routes/authRoutes"));
app.use(errorHandler);
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
  })
)

app.listen(port, () => {
  console.log(`server has started on ${port}`);
});
