import mongoose from "mongoose";
export const dbConnect = () => {
mongoose.set('strictQuery', true);

  mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Database connected successfully");
  });
};
