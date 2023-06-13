import TodoHeader from "./TodoHeader.jsx";
import data from "../data.json";
import TodoList from "./TodoList.jsx";
import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoFilter from "./TodoFilter.jsx";

const TodoPage = () => {
  const [todos, setTodos] = useState(data);
  const [filter, setFilter] = useState("All");

  function handleCompleteClick(event) {
    const newState = todos.map((todo) => {
      if (todo.title === event.target.value) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(newState);
  }

  function handleDeleteClick(event) {
    const newState = todos.filter(
      (todo) => todo.id !== parseInt(event.currentTarget.id)
    );
    setTodos(newState);
  }

  function handleAddTodoClick(event, todoTitle) {
    if (event.key === "Enter" || event.target.checked) {
      event.preventDefault();
      const newTodo = {
        id: todos.length + 1,
        title: todoTitle,
        isComplete: false,
      };

      setTodos([...todos, newTodo]);
      event.target.value = "";
    }
  }

  function handleClearCompleted() {
    const newState = todos.filter((todo) => todo.isComplete !== true);
    setTodos(newState);
  }

  return (
    <div
      className={
        "min-h-screen bg-light-very-light-gray dark:bg-dark-very-dark-blue"
      }
    >
      <div
        className={
          "h-[200px] w-full bg-light-desktop-bg bg-cover bg-center bg-no-repeat dark:bg-dark-desktop-bg lg:h-[300px]"
        }
      >
        <div className={"flex flex-col items-center"}>
          <TodoHeader />
          <TodoForm handleAddTodoClick={handleAddTodoClick} />

          <TodoList
            todoList={todos}
            handleCompleteClick={handleCompleteClick}
            handleDeleteClick={handleDeleteClick}
            handleClearCompleted={handleClearCompleted}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
