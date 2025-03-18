import React from "react";
import AllCards from "./Card";
const Completed = ({ todos, setTodos }) => {
  let completedTodos = todos.filter((e) => e.status === true);
  return (
    <>
      {completedTodos.map((todo) => (
        <AllCards todo={todo} setTodos={setTodos} key={todo.id} />
      ))}
    </>
  );
};

export default Completed;
