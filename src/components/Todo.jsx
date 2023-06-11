import cross from "../assets/images/icon-cross.svg";
const Todo = ({ todo, handleCompleteClick, handleDeleteClick }) => {
  return (
    <div
      className={
        "box-border flex h-[52px] w-[326px] items-center border-t bg-white font-josefinSans text-[12px] text-light-very-dark-grayish-blue drop-shadow-lg first:rounded-t-md dark:border-t-dark-very-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue dark:text-dark-light-grayish-blue lg:h-[63px] lg:w-[538px] lg:text-[16px]"
      }
    >
      <input
        className={
          "ml-2 h-[20px] w-[20px] rounded-full border-light-light-grayish-blue checked:bg-purple-400 checked:text-purple-400 focus:ring-0 dark:border-dark-very-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue lg:ml-6 lg:h-[24px] lg:w-[24px]"
        }
        type={"checkbox"}
        id={todo.id}
        checked={todo.isComplete}
        onChange={handleCompleteClick}
        value={todo.title}
        title={"Toggle Todo Complete"}
      />
      {todo.isComplete ? (
        <>
          <span className={"pl-4 text-light-light-grayish-blue line-through"}>
            {todo.title}
          </span>
        </>
      ) : (
        <span className={"pl-4"}>{todo.title}</span>
      )}

      <button
        className={"ml-auto pr-4"}
        onClick={handleDeleteClick}
        id={todo.id}
        title={"Delete Todo"}
      >
        <img className={"h-[13px] w-[13px] lg:hidden"} src={cross} alt={""} />
      </button>
    </div>
  );
};

export default Todo;
