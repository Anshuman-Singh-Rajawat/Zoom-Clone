import "dotenv/config";
import express from "express";
import { createServer } from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB connection successful`);
  server.listen(app.get("port"), () => {
    console.log("listening to port 8000");
  });
};

start();
