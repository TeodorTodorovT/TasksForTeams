import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  assignee: String,
  dueDate: Date,
});

const taskModel = mongoose.model("taskModel", taskSchema);

export default taskModel;
