import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb+srv://ksainarsimhareddy03:Parasfstorm28@cluster0.rkprzs7.mongodb.net/");
  console.log(`Mongodb is connected with ${connection.host}`);
};
