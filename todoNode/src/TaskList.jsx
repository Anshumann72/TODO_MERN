import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
