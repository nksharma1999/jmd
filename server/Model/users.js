import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    
  },
  phoneNumber:{
    type:Number,
    required:true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
export const UserModel = mongoose.model("JMDUser", userSchema);