import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import "../assets/css/TodoList.css";
import Todo from "./Todo";
import TodosStatus from "./TodosStatus";

let index = 1;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todosDefault,setTodosDefault] = useState([]);


  const todoAdd = (todo) => {
    const todosClone = [...todos];

    const newTodo = {
      id: index,
      title: todo,
      isCompleted: false,
    };
    todosClone.push(newTodo);
    setTodos(todosClone);
    setTodosDefault(todosClone);

    index++;
  };

  useEffect(() => {
    console.log('Değişti => ',todosDefault)
  },[todosDefault])

  const listOfAllList = () => {
    setTodos(todosDefault);
  }

  const listOfCompletedList = () => {

    const completedList = todosDefault.filter(todo => todo.isCompleted === true);
    setTodos(completedList);


  }

  const listOfActiveList = () => {
    const activeList = todosDefault.filter(todo => todo.isCompleted === false);
    setTodos(activeList);

  }



  const deleteTodo = (todoId) => {
    const todosClone = todos.filter(todo => todo.id !== todoId);
    setTodos(todosClone);
    setTodosDefault(todosClone);

  }

  const updateTodo = (todoId) => {
    let findTodoIndex = todos.findIndex((todo) => todo.id === todoId);

    let todoClone = { ...todos[findTodoIndex] };
    todoClone.isCompleted = !todoClone.isCompleted;

    todos[findTodoIndex] = todoClone;

    let todosClone = [...todos];
    setTodos(todosClone);
    setTodosDefault(todosClone);

  };

  const allTodosChecked = () => {
    const todosUpdate = todos.map(todo => todo = {...todo,isCompleted:!todo.isCompleted});
    setTodos(todosUpdate);
    setTodosDefault(todosUpdate);

  }

  return (
    <div className="todo-list-component">
      <div className="todo-list">
        <div className="todo-form">
          <TodoForm addTodo={todoAdd} allTodosChecked={allTodosChecked} />
        </div>
        <div className="todo-list-section">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <Todo key={index} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            ))
          ) : (
            <div className="not-found-todo">Todo Yok</div>
          )}
        </div>
        <div className="todos-status">
          <TodosStatus 
            left={todos.filter(todo => todo.isCompleted === false).length}
            activeList={listOfActiveList}
            allList={listOfAllList}
            completedList={listOfCompletedList}  
          />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
