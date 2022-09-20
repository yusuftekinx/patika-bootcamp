import Proptypes from "prop-types";
import { useState } from "react";
import "../assets/css/TodoForm.css";
function TodoForm(props) {

  const [todo,setTodo] = useState('');

  const {allTodosChecked} = props;

  const addNewTodoHandle = (e) => {
    e.preventDefault();
    props.addTodo(todo);

    setTodo('');
  }


  const allTodosCheckedHandle = () => {
    allTodosChecked();
  }

  return (
    <div className="todo-form-component">
      <form onSubmit={addNewTodoHandle} className="todo-form">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} className="todo-input" placeholder="Yeni Görev" />
        <button className="all-checked-buttons" type="button" onClick={allTodosCheckedHandle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="checked-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  addTodo: Proptypes.func.isRequired,
  allTodosChecked: Proptypes.func.isRequired
}

export default TodoForm;
