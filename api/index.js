import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

let PORT = 3000;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
