import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.set({
  strictQuery: false,
});
export const connectDB = () => {
  return mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};