import { useState } from "react";

const EmployeesForm = ({ employees, createEmployee }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthday, setBirthday] = useState("");
    const [salary, setSalry] = useState("");

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


      const formSubmitHandler = (e) => {
        e.preventDefault();
        e.target.reset();
        createEmployee({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            birthday: birthday,
            salary: salary
        });
        setName("");
        setEmail("");
        setPhoneNumber("");
        setBirthday("");
        setSalry("")
      };


  return (
    <div className="wrapper">
      <p>Add a new employee:</p>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          type="text"
          required
          placeholder="Name"
          id="name"
          maxLength={20}
          onChange={currentEmployeeHandler}
        />
        <input
          type="email"
          required
          placeholder="Email"
          id="email"
          maxLength={50}
          onChange={currentEmployeeHandler}
        />
        <input
          type="number"
          required
          placeholder="Phone Number"
          id="phoneNumber"
          maxLength={10}
          onChange={currentEmployeeHandler}
        />
        <input
          type="date"
          id="birthday"
          onChange={currentEmployeeHandler}
          required
        />
        <input
          type="number"
          required
          placeholder="Salary"
          id="salary"
          maxLength={10}
          onChange={currentEmployeeHandler}
        />
        <button>Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeesForm;
