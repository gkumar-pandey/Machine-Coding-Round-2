import React, { useState } from "react";
import { useHabit } from "../context/habit-context";
import { ADD_HABIT } from "../reducer/habit-reducer";

const HabitForm = ({ handleModal }) => {
  const { habitState, dispatchHabit, habitForm, sethabitForm } = useHabit();

  const handleSaveBtn = (e) => {
    e.preventDefault();
    dispatchHabit({ type: ADD_HABIT, payload: habitForm });
    handleModal();
  };

  const handleChange = (key, value) => {
    sethabitForm((pre) => ({ ...pre, [key]: value }));
  };

  return (
    <div className="  ">
      <form onSubmit={handleSaveBtn}>
        <div className=" flex flex-col m-4  ">
          <label className=" text-xl font-semibold my-1 text-white ">
            Habit Name
          </label>
          <input
            placeholder="Enter your habit.."
            value={habitForm.name}
            required
            onChange={(e) => handleChange("name", e.target.value)}
            className="p-2 text-lg rounded "
          />
        </div>
        <div className="flex flex-col m-4 ">
          <label className="text-xl font-semibold my-1 text-white ">
            Description
          </label>
          <input
            placeholder="Habit description"
            className="p-2 text-lg rounded "
            type="text"
            value={habitForm.description}
          />
        </div>
        <div className="flex flex-row  items-center justify-between ">
          <div className=" flex flex-col m-4 w-full ">
            <label className="text-lg uppercase font-semibold font-sans my-1 text-white ">
              Repeat
            </label>
            <select
              onChange={(e) => handleChange("repeatTime", e.target.value)}
              className=" w-full rounded p-2 "
              value={habitForm.repeatTime}
            >
              <option value={"Daily"}>Daily</option>
              <option value={"Weekly"}>Weekly</option>
              <option value={"Monthly"}>Monthly</option>
            </select>
          </div>
          <div className=" flex flex-col m-4   w-full ">
            <label className=" text-lg uppercase font-semibold font-sans my-1 text-white ">
              Goal
            </label>
            <select
              onChange={(e) => handleChange("goal", e.target.value)}
              className=" p-2 w-full rounded "
              value={habitForm.goal}
            >
              <option className="1 Times Daily">1 Times Daily</option>
              <option className="2 Times Daily">2 Times Daily</option>
              <option className="3 Times Daily">3 Times Daily</option>
              <option className="4 Times Daily">4 Times Daily</option>
            </select>
          </div>
        </div>

        <div className=" flex flex-row items-center justify-between ">
          <div className=" flex flex-col m-4 w-full ">
            <label className=" text-lg uppercase font-semibold font-sans my-1 text-white ">
              Time of day
            </label>
            <select
              onChange={(e) => handleChange("timeOfDay", e.target.value)}
              value={habitForm.timeOfDay}
              className=" p-2 w-full rounded "
            >
              <option>Morning</option>
              <option>Evening</option>
              <option>Afternoon</option>
              <option>Anytime</option>
            </select>
          </div>{" "}
          <div className=" flex flex-col m-4  w-full">
            <label className=" text-lg uppercase font-semibold font-sans my-1  text-white ">
              Start date
            </label>
            <input
              onChange={(e) => handleChange("startDate", e.target.value)}
              value={habitForm.startDate}
              type="date"
              className="p-2 rounded "
            />
          </div>
        </div>
        <div className=" flex items-center justify-end mx-4 gap-4 py-3">
          <button
            className=" text-white mx-2 bg-red-600 px-3 py-1 text-lg font-sans rounded "
            type="button"
            onClick={handleModal}
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
