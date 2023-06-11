import React, { useRef, useState } from "react";

const TodoForm = ({ handleAddTodoClick }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const formRef = useRef(null);

  function handleInputChange(event) {
    setTodoTitle(event.target.value);
  }

  function handleCheckboxChange(event) {
    handleAddTodoClick(event, todoTitle);
    formRef.current.reset();
  }

  function handleKeydown(event) {
    handleAddTodoClick(event, todoTitle);
  }

  return (
    <div
      className={
        "mb-4 flex h-[52px] w-[326px] items-center rounded-md bg-white text-[12px] text-light-dark-grayish-blue dark:border-t-dark-very-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue dark:text-dark-light-grayish-blue lg:h-[63px] lg:w-[538px] lg:text-[16px]"
      }
    >
      <form ref={formRef}>
        <input
          type={"checkbox"}
          title={"Add Todo"}
          onChange={handleCheckboxChange}
          className={
            "ml-2 h-[20px] w-[20px] rounded-full border-light-light-grayish-blue checked:text-purple-400 active:bg-purple-400 dark:border-dark-very-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue lg:ml-6 lg:h-[24px] lg:w-[24px]"
          }
        />
        <input
          onChange={handleInputChange}
          onKeyDown={handleKeydown}
          className={
            "ml-4 font-josefinSans outline-none placeholder:text-light-dark-grayish-blue dark:border-dark-very-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue"
          }
          placeholder={"Create a new todo.."}
        />
      </form>
    </div>
  );
};

export default TodoForm;
