import TaskModel from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  try {
    const allTasks = await TaskModel.find();
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;

  const newTask = new TaskModel(task);
  try {
    await newTask.save();

    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getTask = async (req, res) => {
  const id = req.params.id;

  const oneTask = await TaskModel.findById(id);

  try {
    res.status(200).json(oneTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;

  try {
    await TaskModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const task = req.body;

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(id, task, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
