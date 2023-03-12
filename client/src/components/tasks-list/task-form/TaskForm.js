import "./TaskForm.css";
import { useState } from "react";

const TaskForm = ({ employees, createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [employee, setEmployee] = useState("");
  const [date, setDate] = useState("");

  

  const formSubmitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    createTask({
      title: title,
      description: description,
      assignee: employee,
      date: date,
    });
    setTitle("");
    setDescription("");
    setEmployee("");
    setDate("");
  };

  const currentTaskHandler = (e) => {
    e.preventDefault();
    
    
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "employee":
        setEmployee(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      default:
        setEmployee(e.target.value);
        break;
    }
    if(employee === ""){
      setEmployee(employees[0]._id)
    }
  };

  return (
    <div className="wrapper">
      <p>Add a new task:</p>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          type="text"
          required
          placeholder="Task title"
          id="title"
          maxLength={65}
          onChange={currentTaskHandler}
        />
        <input
          type="text"
          required
          placeholder="Task description"
          id="description"
          maxLength={250}
          onChange={currentTaskHandler}
        />
        <select id="employee" onChange={currentTaskHandler} value={employee} required>
          {employees.map((oneEmployee) => {
            return (
              <option value={oneEmployee._id} key={oneEmployee._id}>
                {oneEmployee.name}
              </option>
            );
          })}
        </select>
        <input type="date" id="date" onChange={currentTaskHandler} required />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
