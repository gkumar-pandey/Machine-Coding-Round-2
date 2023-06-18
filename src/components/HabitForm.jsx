import React, { useState } from "react";
import { useHabit } from "../context/habit-context";

const HabitForm = () => {
  const [habit, sethabit] = useState({
    name: "",
    description: "",
    repeatTime: "",
    startDate: "",
    timeOfDay: "",
    goal: ""
  });
  const { dispatchHabit } = useHabit();

  const handleSaveBtn = () => {};

  const handleChange = (key, value) => {
    sethabit((pre) => ({ ...pre, [key]: value }));
  };

  console.log(habit);
  return (
    <div className="  ">
      <form>
        <div className=" flex flex-col m-4  ">
          <label className=" text-xl font-semibold my-1 text-white ">
            Habit Name
          </label>
          <input
            placeholder="Enter your habit.."
            value={habit.name}
            required
            onChange={(e) => handleChange("name", e.target.value)}
            className="p-2 text-lg rounded "
          />
        </div>
        <div className="flex flex-row  items-center justify-between ">
          <div className=" flex flex-col m-4 ">
            <label className="text-lg uppercase font-semibold font-sans my-1 text-white ">
              Repeat
            </label>
            <select
              onChange={(e) => handleChange("repeatTime", e.target.value)}
              className=" w-full rounded p-2 "
            >
              <option value={"Daily"}>Daily</option>
              <option value={"Weekly"}>Weekly</option>
              <option value={"Monthly"}>Monthly</option>
            </select>
          </div>
          <div className=" flex flex-col m-4 ">
            <label className=" text-lg uppercase font-semibold font-sans my-1 text-white ">
              Goal
            </label>
            <select
              onChange={(e) => handleChange("goal", e.target.value)}
              className=" p-2 w-full rounded "
            >
              <option className="1 Times Daily">1 Times Daily</option>
              <option className="2 Times Daily">2 Times Daily</option>
              <option className="3 Times Daily">3 Times Daily</option>
              <option className="4 Times Daily">4 Times Daily</option>
            </select>
          </div>
        </div>

        <div className=" flex flex-row items-center justify-between ">
          <div className=" flex flex-col m-4 ">
            <label className=" text-lg uppercase font-semibold font-sans my-1 text-white ">
              Time of day
            </label>
            <select
              onChange={(e) => handleChange("timeOfDay", e.target.value)}
              className=" p-2 w-full rounded "
            >
              <option>Morning</option>
              <option>Evening</option>
              <option>Afternoon</option>
              <option>Anytime</option>
            </select>
          </div>{" "}
          <div className=" flex flex-col m-4 ">
            <label className=" text-lg uppercase font-semibold font-sans my-1  text-white ">
              Start date
            </label>
            <input
              onChange={(e) => handleChange("startDate", e.target.value)}
              type="date"
              className="p-2 rounded "
            />
          </div>
        </div>
        <div className=" flex items-center justify-end mx-4 gap-4 py-3">
          <button
            className=" text-white mx-2 bg-red-600 px-3 py-1 text-lg font-sans rounded "
            type="button"
          >
            Discard
          </button>
          <button
            className="text-white bg-blue-700 font-semibold font-sans text-lg py-1 px-3 rounded "
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default HabitForm;
