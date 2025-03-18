import React from "react";
import AllCards from "./Card";

const All = ({ todos, setTodos }) => {
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <AllCards todo={todo} setTodos={setTodos} key={todo.id} />
        ))
      ) : (
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">No Tasks Available</h5>
              <p className="card-text">Start by adding a new task!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default All;
