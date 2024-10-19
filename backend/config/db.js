import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbUrl = process.env.DB_URL;
    const connect = await mongoose.connect(dbUrl);
    if (connect) {
      console.log(`MongoDB Connected : ${connect.connection.host}`);
    }
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

export default connectDB;
