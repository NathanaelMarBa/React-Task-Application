import React from "react";

export default function TaskCar({ task, deleteTask }) {
  return (
    <div>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
      </div>
    </div>
  );
}
