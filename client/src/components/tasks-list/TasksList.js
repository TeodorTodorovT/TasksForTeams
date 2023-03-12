import Task from "../tasks-list/task/Task";
import TaskForm from "../tasks-list/task-form/TaskForm";

const TaskList = ({
  tasks,
  employees,
  createTask,
  deleteTask,
  editTask,
  completeTask,
}) => {
  return (
    <>
      {tasks ? (
        <ul>
          {tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              employees={employees}
              deleteTask={deleteTask}
              editTask={editTask}
              completeTask={completeTask}
            />
          ))}
        </ul>
      ) : (
        <p>No tasks</p>
      )}

      <TaskForm employees={employees} createTask={createTask} />
    </>
  );
};

export default TaskList;
