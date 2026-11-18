import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((curTask, i) => i !== index));
  };

  const editTask = (index) => {
    const updatedTask = prompt("Enter updated task:");

    if (updatedTask === null || updatedTask.trim() === "") {
      return;
    }

    const updatedTasks = tasks.map((curTask, i) => {
      if (i === index) {
        return updatedTask;
      } else {
        return curTask;
      }
    });

    setTasks(updatedTasks);
  };


  return (
    <>
      <h1>My TODO Application</h1>
      <p>Manage your Daily Tasks...!</p>

      <input type="text" placeholder="Enter Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((curTask, index) => {
          return <li key={index}>{curTask}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => editTask(index)}>Edit</button></li>
        })}
      </ul>
    </>
  );
}

export default App;