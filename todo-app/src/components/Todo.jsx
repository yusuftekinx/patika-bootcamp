import Proptypes from "prop-types";
import { useState } from "react";
import "../assets/css/Todo.css";
function Todo(props) {
  const { todo, updateTodo,deleteTodo } = props;

  const updateTodoHandle = () => {
    updateTodo(todo.id);
  };

  const deleteTodoHandle = () => {
    deleteTodo(todo.id);
  }

  return (
    <div className="todo-component">
      <div className="todo-completed-div">
        <input
          className="todo-is-completed"
          type={"checkbox"}
          checked={todo.isCompleted}
          onChange={updateTodoHandle}
        />
      </div>
      <div className="todo-title">
        {todo.isCompleted ? (
          <del className="completed-todo">{todo.title}</del>
        ) : (
          <span>{todo.title}</span>
        )}
      </div>
      <button className="todo-delete-button" onClick={deleteTodoHandle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="todo-delete-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

Todo.propTypes = {
  todo: Proptypes.shape({
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    isCompleted: Proptypes.bool.isRequired,
  }),
  updateTodo: Proptypes.func.isRequired,
  deleteTodo: Proptypes.func.isRequired
};

export default Todo;
