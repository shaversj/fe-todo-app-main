import FilterButton from "./FilterButton.jsx";
import { useState } from "react";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.isComplete,
  Completed: (task) => task.isComplete,
};

// invisible gap-3  lg:visible lg:flex
//mb-10 mt-4 flex items-center justify-center gap-4 rounded-md bg-white drop-shadow-md sm:h-[52px] sm:w-[326px]

const FILTER_NAMES = Object.keys(FILTER_MAP);
const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div
      className={
        "bg-white dark:border-t-dark-very-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue dark:text-dark-light-grayish-blue sm:absolute sm:bottom-1/2 sm:right-[.02rem] sm:top-14 sm:z-30 sm:mb-10 sm:mt-4 sm:flex sm:h-[52px] sm:w-[326px] sm:items-center sm:justify-center sm:gap-4 sm:rounded-md sm:drop-shadow-md lg:absolute lg:-top-[.1rem] lg:left-64 lg:h-[25px] lg:w-[0px] lg:border-none lg:drop-shadow-none"
      }
    >
      {FILTER_NAMES.map((name) => (
        <FilterButton
          key={name}
          name={name}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </div>
  );
};

export default TodoFilter;
