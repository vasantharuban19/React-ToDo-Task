import React from "react";
import AllCards from "./Card";
const NotCompleted = ({ todos, setTodos }) => {
  let notCompletedTodos = todos.filter((e) => e.status === false);
  return (
    <>
      {notCompletedTodos.map((todo) => (
        <AllCards todo={todo} setTodos={setTodos} key={todo.id} />
      ))}
    </>
  );
};

export default NotCompleted;
