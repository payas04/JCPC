import express from "express";
import { createServer } from "http";

const app = express();
const PORT = process.env.PORT || 8000;

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`server is running successfully on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`chat-app-server`);
});
