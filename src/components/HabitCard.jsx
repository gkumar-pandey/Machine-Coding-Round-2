import React from "react";

const HabitCard = ({
  name,
  description,
  repeatTime,
  startDate,
  timeOfDay,
  goal
}) => {
  return (
    <div className="px-5 py-2">
      <div className=" text-white  ">
        <h1 className="text-3xl font-bold font-sans my-1 ">{name}</h1>
        <p className="text-xl font-sans my-1 ">
          {" "}
          <span className="text-lg  font-semibold ">Description</span> :{" "}
          {description}
        </p>
        <p>
          <span className="text-xl font-semibold  ">Repeat Time</span> :{" "}
          <span className=" text-lg ">{repeatTime}</span>
        </p>
        <p>
          <span className="text-lg font-semibold">Start Date</span>:{" "}
          <span className=" text-lg ">{startDate}</span>
        </p>
        <p>
          <span className="text-lg font-bold">Time of Day</span> :{" "}
          <span className=" text-lg ">{timeOfDay}</span>
        </p>
        <p>
          <span className="text-lg font-semibold">Goal</span> :{" "}
          <span className=" text-lg ">{goal}</span>
        </p>
        <div className=" flex justify-end items-center gap-5 ">
          <button className=" bg-blue-900 font-semibold px-4 py-1 text-xl rounded ">
            Edit
          </button>
          <button className="bg-red-800 font-semibold px-4 py-1 text-xl rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
