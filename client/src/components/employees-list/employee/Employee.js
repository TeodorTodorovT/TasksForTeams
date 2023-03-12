import { useState } from "react";

const Employee = ({ employee, tasks, deleteEmployee, editEmployee }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [phoneNumber, setPhoneNumber] = useState(employee.phoneNumber);
  const [birthday, setBirthday] = useState(employee.birthday);
  const [salary, setSalry] = useState(employee.salary);
  const [completedTasks, setCompletedTasks] = useState(employee.completedTasks)



  const editToggleHandler = (e) => {
    if (isEditing) {
        editEmployee(employee._id, name, email, phoneNumber, birthday, salary );
      setIsEditing(!isEditing);
    } else setIsEditing(!isEditing);
  };

  const currentEmployeeHandler = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;
      case "birthday":
        setBirthday(e.target.value);
        break;
      case "salary":
        setSalry(e.target.value);
        break;
      default:
        break;
    }
  };

  

  return (
    <div>
      <p>
        Name:{" "}
        {isEditing ? (
          <input
            type="text"
            required
            placeholder="Name"
            id="name"
            maxLength={20}
            value={name}
            onChange={currentEmployeeHandler}
          />
        ) : (
          <b>{employee.name}</b>
        )}
      </p>
      <p>
        Email:{" "}
        {isEditing ? (
          <input
            type="email"
            required
            placeholder="Email"
            id="email"
            maxLength={20}
            value={email}
            onChange={currentEmployeeHandler}
          />
        ) : (
          <b>{employee.email}</b>
        )}
      </p>
      <p>
        Phone Number:{" "}
        {isEditing ? (
          <input
            type="number"
            required
            placeholder="Phone number"
            id="phoneNumber"
            maxLength={20}
            value={phoneNumber}
            onChange={currentEmployeeHandler}
          />
        ) : (
          <b>{employee.phoneNumber}</b>
        )}
      </p>
      <p>
        Birthday:{" "}
        {isEditing ? (
          <input
            type="date"
            required
            placeholder="Birthday"
            id="birthday"
            maxLength={20}
            value={birthday === null ? "" : birthday.slice(0, 10)}
            onChange={currentEmployeeHandler}
          />
        ) : (
          <b>{employee.birthday.slice(0, 10)}</b>
        )}
      </p>
      <p>
        Salary:{" "}
        {isEditing ? (
          <input
            type="number"
            required
            placeholder="Salary"
            id="salary"
            maxLength={20}
            value={salary}
            onChange={currentEmployeeHandler}
          />
        ) : (
          <b>{employee.salary}</b>
        )}
      </p>
      <p>Completed tasks: <b>{tasks.filter(task => task.assignee === employee._id).length}</b></p>
      <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
      {isEditing ? (
        <button onClick={editToggleHandler}>Save</button>
      ) : (
        <button onClick={editToggleHandler}>Edit</button>
      )}
    </div>
  );
};

export default Employee;
