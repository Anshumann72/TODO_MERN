import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Task title cannot be empty.");
      return;
    }

    axios
      .post("http://localhost:5000/api/tasks", { title, description, dueDate })
      .then((response) => {
        addTask(response.data);
        setTitle("");
        setDescription("");
        setDueDate("");
      })
      .catch((error) => {
        console.error("There was an error creating the task!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label htmlFor="dueDate">Due Date</label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
