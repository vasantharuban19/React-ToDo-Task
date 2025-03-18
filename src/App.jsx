import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import All from "./components/All";
import Edit from "./components/Edit";
import Title from "./components/Title";
import Completed from "./components/Completed";
import NotCompleted from "./components/NotCompleted";

const App = () => {
  const [todos, setTodos] = useState([]);
  // console.log("Initial todos state:", todos);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    // console.log("Loaded from localStorage:", storedTodos);
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos)); // Ensure JSON parsing doesn't fail
      } catch (error) {
        console.error("Error parsing todos from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    // console.log("Saving to localStorage:", JSON.stringify(todos));
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="container-fluid mt-3 mb-5">
      <BrowserRouter>
        <Routes>
          <Route
            path="/title"
            element={<Title todos={todos} setTodos={setTodos} />}
          >
            <Route
              path="all"
              element={<All todos={todos} setTodos={setTodos} />}
            />
            <Route
              path="completed"
              element={<Completed todos={todos} setTodos={setTodos} />}
            />
            <Route
              path="notcompleted"
              element={<NotCompleted todos={todos} setTodos={setTodos} />}
            />
          </Route>
          <Route
            path="/edit/:id"
            element={<Edit todos={todos} setTodos={setTodos} />}
          />
          <Route path="/*" element={<Navigate to="/title/all" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
