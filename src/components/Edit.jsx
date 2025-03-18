import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ todos, setTodos }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const todo = todos.find((t) => t.id === Number(id));
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setStatus(todo.status);
    }
  }, [id, todos]);

  const handleEdit = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === Number(id) ? { ...todo, title, description, status } : todo
      )
    );

    navigate("/title/all");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Edit Todo</h2>

      <div className="card p-4 shadow-lg">
        <div className="mb-3">
          <label className="form-label fw-bold">Todo Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value === "true")}
          >
            <option value="true">Completed</option>
            <option value="false">Not Completed</option>
          </select>
        </div>

        <button className="btn btn-success w-100" onClick={handleEdit}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Edit;
