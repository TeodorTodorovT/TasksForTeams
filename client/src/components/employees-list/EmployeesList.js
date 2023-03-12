import Employee from "./employee/Employee";
import EmployeeForm from "./employee-form/EmployeeForm"


const EmployeesList = ({employees, tasks, createEmployee, deleteEmployee, editEmployee}) => {
    return (
      <>
              {employees ? (
        <ul>
          {employees.map((employee) => (
            <Employee
              key={employee._id}
              employee={employee}
              tasks={tasks}
              deleteEmployee={deleteEmployee}
              editEmployee={editEmployee}
            />
          ))}
        </ul>
      ) : (
        <p>No Employees</p>
      )}
        <EmployeeForm createEmployee={createEmployee}/>
      </>
    );
  };
  
  export default EmployeesList;