import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.json({ message: "server started" });
});

app.listen(port, () => { 
  connectDB();
  console.log(`server is running in ${port}`);
});
