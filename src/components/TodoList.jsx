import Todo from "./Todo.jsx";
import TodoFilter from "./TodoFilter.jsx";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.isComplete,
  Completed: (task) => task.isComplete,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const TodoList = ({
  todoList,
  handleCompleteClick,
  handleDeleteClick,
  handleClearCompleted,
  filter,
  setFilter,
  children,
}) => {
  const todoNotCompleted = todoList.filter(
    (todo) => todo.isComplete === false
  ).length;

  return (
    <div>
      {todoList.filter(FILTER_MAP[filter]).map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleCompleteClick={handleCompleteClick}
            handleDeleteClick={handleDeleteClick}
          />
        );
      })}

      <div
        className={
          "text-light-grayish-blue h-[52px] w-[326px] rounded-b-md border-t bg-white p-4 font-josefinSans text-[12px] text-light-dark-grayish-blue drop-shadow-lg dark:border-t-dark-very-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue dark:text-dark-dark-grayish-blue lg:h-[50px] lg:w-[538px] lg:text-[14px]"
        }
      >
        <div className={"sm:flex lg:grid lg:grid-cols-3 "}>
          <span> {todoNotCompleted} items left</span>
          <div className={"invisible gap-5 lg:visible lg:flex"}>
            <TodoFilter filter={filter} setFilter={setFilter} />
          </div>
          <button
            className={"sm:ml-auto lg:col-start-3"}
            onClick={handleClearCompleted}
          >
            <span>Clear Completed</span>
          </button>
        </div>
      </div>
      <div
        className={
          "mt-6 flex h-[52px] w-[326px] items-center justify-center gap-4 rounded-lg bg-white font-josefinSans drop-shadow-lg dark:border-t-dark-very-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue dark:text-dark-light-grayish-blue lg:invisible lg:h-[50px] lg:w-[538px] lg:text-[14px]"
        }
      >
        <TodoFilter filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default TodoList;
