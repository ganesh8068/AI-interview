import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodbUrl);
    console.log(`MongoDB Connected :)`);
  } catch (error) {
    console.log(`mongoDB error: ${error}`);
  }
}

export default connectDB;