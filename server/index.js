import express from "express";

import userRoutes from "./routes/userRoutes.js";
import Connection from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 8000;

const mongoURI =
  "mongodb+srv://sameepvishwakarma:X7ftDE9PDREbN8In@clusterjcpc.wkqzb.mongodb.net/";

app.listen(PORT, () => {
  console.log(`server is running successfully on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`jcpc server`);
});

Connection(mongoURI);
app.use("/api/user/" ,userRoutes) ;