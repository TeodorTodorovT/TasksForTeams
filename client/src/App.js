import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TaskList from "./components/tasks-list/TasksList";
import EmployeesList from "./components/employees-list/EmployeesList";
import EmployeesStatistics from "./components/employees-statisctics/EmployeesStatistics";

const URL = "http://localhost:5000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);
  
  // Populate state with tasks and employees from DB and update lists
  useEffect(() => {
    axios
      .get(`${URL}/tasks`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [JSON.stringify(tasks)]);

  useEffect(() => {
    axios
      .get(`${URL}/employees`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [JSON.stringify(employees)]);
  
  // tasks actions
  const createTask = (task) => {
    axios
      .post(`${URL}/tasks`, {
        title: task.title,
        description: task.description,
        assignee: task.assignee,
        dueDate: task.date,
      })
      .then((response) => {
        setTasks((oldTasks) => [...oldTasks, task]);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/tasks/${id}`)
      .then(setTasks((oldTasks) => oldTasks.filter((task) => task._id !== id)));
      
  };

  const editTask = (id, newTitle, newDescription, newEmployee) => {
    axios
      .patch(`${URL}/tasks/${id}`, {
        title: newTitle,
        description: newDescription,
        assignee: newEmployee,
      })
      .then((response) => {
        setTasks((oldTasks) =>
          oldTasks.map((task) =>
            task._id === id
              ? {
                  title: newTitle,
                  description: newDescription,
                  assignee: newEmployee,
                }
              : task
          )
        );
      });
  };

  // const completeTask = (id, isCompleted) => {
  //   axios
  //     .patch(`${URL}/tasks/${id}`, {
  //       isCompleted: !isCompleted,
  //     })
  //     .then((response) => {
  //       setTasks((oldTasks) =>
  //         oldTasks.map((task) =>
  //           task._id === id ? { ...task, isCompleted: isCompleted } : task
  //         )
  //       );
  //     });
    
  // };

  // employees actions
  const createEmployee = (employee) => {
    axios
      .post(`${URL}/employees`, {
        name: employee.name,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        birthday: employee.birthday,
        salary: employee.salary
      })
      .then((response) => {
        console.log(`${employee.name} added`);
        setEmployees((oldEmployees) => [...oldEmployees, employee]);
      });


  };

  const deleteEmployee = (id) => {
    axios
    .delete(`${URL}/employees/${id}`)
    .then(setEmployees((oldEmployees) => oldEmployees.filter((employee) => employee._id !== id)));
  }

  const editEmployee = (id, newName, newEmail, newPhoneNumber, newBirthday, newSalary, newCompletedTasks) => {
    axios
    .patch(`${URL}/employees/${id}`, {
      name: newName,
      email: newEmail,
      phoneNumber: newPhoneNumber,
      birthday: newBirthday,
      salary: newSalary,
      completedTasks: newCompletedTasks
    })
    .then((response) => {
      setEmployees((oldEmployees) =>
        oldEmployees.map((employee) =>
        employee._id === id
            ? {
              ...employee,
              name: newName,
              email: newEmail,
              phoneNumber: newPhoneNumber,
              birthday: newBirthday.slice(0, 10),
              salary: newSalary,
              }
            : employee
        )
      );
    });
  }

  return (
    <div className="App">
      <TaskList
        tasks={tasks}
        employees={employees}
        createTask={createTask}
        deleteTask={deleteTask}
        editTask={editTask}
        // completeTask={completeTask}
      />
      <EmployeesList
        employees={employees}
        tasks={tasks}
        createEmployee={createEmployee}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />
      <EmployeesStatistics
        employees={employees}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
