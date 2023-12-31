import mongoose from "mongoose";
const purposeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
    isCompleted: {
      type: Boolean,
      require: true,
    },
    owner: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export const Purp = mongoose.model("Purp", purposeSchema);
