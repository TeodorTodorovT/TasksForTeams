import { useState, useEffect } from "react";
import "./Task.css";
import axios from "axios";

const Task = ({ task, employees, deleteTask, editTask }) => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [employee, setEmployee] = useState(task.assignee);
  const URL = "http://localhost:5000";
  useEffect(() => {
    axios
      .get(`${URL}/employees/${task.assignee}`)
      .then((response) => {
        setName(response.data.name);
        return response.data.name;
      })
      .catch((error) => {
        console.log(error);
      });

  }, [task.assignee]);

  const editToggleHandler = (e) => {
    if (isEditing) {
      editTask(task._id, title, description, employee);
      setIsEditing(!isEditing);
    } else setIsEditing(!isEditing);
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
      default:
        break;
    }
  };

  return (
    <li>
      <div className="task">
        <p>
          Title:{" "}
          {isEditing ? (
            <input
              type="text"
              name=""
              id="title"
              value={title}
              onChange={currentTaskHandler}
            />
          ) : (
            <b>{task.title}</b>
          )}
        </p>
        <p className="description"> 
          Description:{" "}
          {isEditing ? (
            <input
              type="text"
              name=""
              id="description"
              value={description}
              onChange={currentTaskHandler}
            />
          ) : (
            <b>{task.description}</b>
          )}
        </p>
        <p>
          Employee Asigned:{" "}
          {isEditing ? (
            <select
              id="employee"
              value={employee}
              onChange={currentTaskHandler}
            >
              {employees.map((oneEmployee) => {
                return (
                  <option value={oneEmployee._id} key={oneEmployee._id}>
                    {oneEmployee.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <b>{name}</b>
          )}
        </p>

        <button onClick={() => deleteTask(task._id)}>Delete</button>
        {isEditing ? (
          <button onClick={editToggleHandler}>Save</button>
        ) : (
          <button onClick={editToggleHandler}>Edit</button>
        )}
      </div>
    </li>
  );
};

export default Task;
