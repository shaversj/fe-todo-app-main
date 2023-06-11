import React from "react";

const FilterButton = ({ name, filter, setFilter }) => {
  return (
    <button
      type="button"
      className="font-josefinSans text-sm text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue"
      onClick={() => setFilter(name)}
    >
      {filter === name ? (
        <span className={"text-bright-blue"}>{name}</span>
      ) : (
        <span>{name}</span>
      )}
    </button>
  );
};

export default FilterButton;
