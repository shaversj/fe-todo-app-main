import FilterButton from "./FilterButton.jsx";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.isComplete,
  Completed: (task) => task.isComplete,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);
const TodoFilter = ({ filter, setFilter }) => {
  return (
    <>
      {FILTER_NAMES.map((name) => (
        <FilterButton
          key={name}
          name={name}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </>
  );
};

export default TodoFilter;
