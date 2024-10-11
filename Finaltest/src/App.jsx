import { Routes, Route, json } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import All from "./pages/All";
import Active from "./pages/Active";
import Completed from "./pages/Completed";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Update local storage whenever tasks change
  useEffect(() => {
    if (tasks?.length) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Load tasks from local storage on app startup
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("storedTasks", storedTasks);
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteAll = () => {
    setTasks(tasks.filter((task) => task.completed === false));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <All
                handleAddTask={handleAddTask}
                toggleCompleted={toggleCompleted}
                tasks={tasks}
              />
            }
          />
          <Route
            path="/active"
            element={
              <Active
                handleAddTask={handleAddTask}
                toggleCompleted={toggleCompleted}
                tasks={tasks}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <Completed
                deleteTask={deleteTask}
                deleteAll={deleteAll}
                toggleCompleted={toggleCompleted}
                tasks={tasks}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
