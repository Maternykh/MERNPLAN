import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    userEmail: {
      type: String,
      require: true,
      unique: true,
    },
    userPasswordHash: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
