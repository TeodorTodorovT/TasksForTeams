import { useState, useEffect } from "react";


const EmployeesStatistics = ({employees, tasks}) => {

    const [topEmployeesList, setTopEmployeesList] = useState([])


    useEffect(() => {
        let topFiveEmployees = [];
        let employeesCompletedTasks = {}
    
      tasks.forEach((task) => {
        if(employeesCompletedTasks.hasOwnProperty(task.assignee)){
            employeesCompletedTasks[task.assignee] ++;
        }else{
            employeesCompletedTasks[task.assignee] = 1;
        }
      })

      let sortable = [];
        for (var employee in employeesCompletedTasks) {
        sortable.push([employee, employeesCompletedTasks[employee]]);
        }

        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });

        topFiveEmployees = sortable.splice(0, 5)
        setTopEmployeesList(topFiveEmployees)

    }, [tasks, employees])

        

    return(
        <div>

        <p>Top employees:</p>
            <ol>
                {topEmployeesList.map(employee => {
                    return(
                        <li key={employee[0]}>{employees.map(oneEmployee => oneEmployee._id === employee[0] ? oneEmployee.name : "")} - <b>{employee[1]}</b></li>
                    )
                })}
            </ol>
        <p>Number of all tasks: <b>{tasks.length}</b></p>
        <p>Number of all employees: <b>{employees.length}</b></p>
        </div>
    )
}

export default EmployeesStatistics;