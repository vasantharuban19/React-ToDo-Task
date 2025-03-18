import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

const Title = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState("bg-info");
  const [option, setOption] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleCreate = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter a valid Todo Name and Description.");
      return;
    }

    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newArray = [...todos, { id, title, description, status }];
    setTodos(newArray);
    setTitle("");
    setDescription("");
    navigate("/title/all");
  };

  const handleFilterChange = (filter, colorClass) => {
    setOption(filter);
    setColor(colorClass);
    setIsOpen(false);
    document.activeElement.blur();
  };

  return (
    <>
      <h1 className="title">My Todo</h1>

      <div className="container my-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Todo Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Todo Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-md-4 text-center">
            <button className="btn add-btn" onClick={handleCreate}>
              Add Todo
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center px-5">
        <h2 className="todo">My Todos</h2>
        <div>
          <h3>
            <div id="status" className="d-flex gap-2">
              Status Filter:{" "}
              <div className="dropdown">
                <button
                  className={`btn dropdown-toggle ${color}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {option}
                </button>
                <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  <li>
                    <Link
                      to="all"
                      className="dropdown-item"
                      onClick={() => handleFilterChange("All", "bg-info")}
                    >
                      All
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="completed"
                      className="dropdown-item"
                      onClick={() =>
                        handleFilterChange("Completed", "bg-success")
                      }
                    >
                      Completed
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="notcompleted"
                      className="dropdown-item"
                      onClick={() =>
                        handleFilterChange("Not Completed", "bg-danger")
                      }
                    >
                      Not Completed
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </h3>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Title;
