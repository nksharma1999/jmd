import mongoose from "mongoose";

const jmdUserSchema = new mongoose.Schema({
  user_id: {
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
  },
  password: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: String,
    },
  ],
  address:[{}],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const jmdUserModel = mongoose.model("jmdUser", jmdUserSchema);