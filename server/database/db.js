import mongoose from "mongoose";
export const Connection = async (USERNAME, PASSWORD) => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.cuppt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(URL, {
      serverSelectionTimeoutMS: 30000, // 30 seconds
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while conneccting with the database", error.message);
  }
};

export default Connection;
