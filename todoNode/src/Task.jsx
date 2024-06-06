import React from "react";
import axios from "axios";

const Task = ({ task, updateTask, deleteTask }) => {
  const handleComplete = () => {
    if (task.completed) return;

    axios
      .patch(`http://localhost:5000/api/tasks/${task._id}/complete`)
      .then((response) => {
        updateTask(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error completing the task!",
          error.response ? error.response.data : error.message
        );
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/tasks/${task._id}`)
      .then(() => {
        deleteTask(task._id);
      })
      .catch((error) => {
        console.error(
          "There was an error deleting the task!",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}
      </span>
      <div>
        <button onClick={handleComplete}>
          {task.completed ? "Completed" : "Complete"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Task;
