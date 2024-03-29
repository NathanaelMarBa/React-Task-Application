import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCar({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="textxl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 textsm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mr-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
