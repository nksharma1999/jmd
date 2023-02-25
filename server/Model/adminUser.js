import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  admin_id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userLevel: {
    type: Number,
    default: 1,
  },
  
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const AdminModel = mongoose.model("admin", adminSchema);