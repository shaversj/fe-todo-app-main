import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import { useState } from "react";

const TodoHeader = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleThemeClick() {
    setDarkTheme(!darkTheme);
  }

  darkTheme
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");

  return (
    <div
      className={
        "mb-6 flex h-[52px] w-[326px] items-center justify-center pb-6 pt-10 font-josefinSans text-[26px] font-semibold tracking-[.3em] text-white lg:mt-10 lg:flex lg:h-[63px] lg:w-[538px] lg:justify-start lg:self-auto lg:text-[40px]"
      }
    >
      <h1 className={""}>TODO</h1>

      <button
        onClick={handleThemeClick}
        className={"ml-auto"}
        title={"Theme Toggle Button"}
      >
        {darkTheme ? (
          <img className={" h-7 pb-2 lg:h-[34px] "} src={moon} alt={""} />
        ) : (
          <img className={" h-7 pb-2 lg:h-[34px] "} src={sun} alt={""} />
        )}
      </button>
    </div>
  );
};

export default TodoHeader;
