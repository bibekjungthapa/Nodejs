import mongoose from "mongoose";

const taskModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const task = mongoose.model("TaskModel", taskModel);
export default task;
