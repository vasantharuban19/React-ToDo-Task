import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllCards = ({ todo, setTodos }) => {
  if (!todo) return null;

  const [state, setState] = useState(todo.status);
  const [color, setColor] = useState("");
  const [option, setOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setOption("Completed");
      setColor("bg-success");
    } else {
      setOption("Not Completed");
      setColor("bg-danger");
    }
  }, [state]);

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((task) => task.id !== id);

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const handleCompleted = (id, newState) => {
    setTodos((prevTodos) =>
      prevTodos.map((task) =>
        task.id === id ? { ...task, status: newState } : task
      )
    );
    setState(newState);
    setIsOpen(false);
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <p className="card-text">Title: {todo.title}</p>
          <p className="card-text">Description: {todo.description}</p>

          {/* Dropdown */}
          <div className="card-text d-flex gap-1">
            Status:{" "}
            <span>
              <div className="dropdown">
                <button
                  className={`btn btn-secondary dropdown-toggle ${color}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {option}
                </button>
                <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleCompleted(todo.id, true)}
                    >
                      Completed
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleCompleted(todo.id, false)}
                    >
                      Not Completed
                    </button>
                  </li>
                </ul>
              </div>
            </span>
          </div>

          <div className="justify-content-end d-flex mt-3">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => navigate(`/edit/${todo.id}`)}
            >
              Edit
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
