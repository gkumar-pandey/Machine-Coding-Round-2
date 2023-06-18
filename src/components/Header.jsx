import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import HabitForm from "./HabitForm";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" border bg-grey-100 p-4 ">
      <div className=" flex flex-row items-center justify-around ">
        <Link to={"/"}>
          <h1 className=" text-3xl font-semibold font-sans ">Habit Tracker</h1>
        </Link>
        <div className="flex items-center gap-3 ">
          <Link to={"/archive"}>
            <button className=" text-xl font-sans bg-red-700 px-3 py-2 text-white rounded font-semibold ">
              Archives
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
