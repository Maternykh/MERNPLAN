import mongoose from "mongoose";
const daySchema = mongoose.Schema(
  {
    tascName: {
      type: String,
      require: true,
      unique: true,
    },
    dayName: {
      type: String,
      require: true,
    },
    events: [
      {
        id: { type: Number, require: true },
        act: { type: String, require: true },
        timeAct: { type: String, require: true },
        isComleted: { type: Boolean, require: true },
      },
    ],
    monthAndYears: {
      type: String,
      require: true,
    },
    category: [
      {
        id: { type: Number, require: true },
        categ: { type: String },
      },
    ],
    color: {
      type: String,
      require: true,
    },
    note: {
      type: String,
    },
    pattern: {
      type: String,
    },
    owner: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export const Day = mongoose.model("Day", daySchema);
