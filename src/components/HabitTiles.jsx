import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import HabitCard from "./HabitCard";

const HabitTiles = ({
  name,
  description,
  repeatTime,
  startDate,
  timeOfDay,
  goal
}) => {
  const [bgcolor, setBgcolor] = useState("");

  const generateRandomColor = () => {
    const colorsArr = ["#0C134F", "#3F0071", "#1C0C5B", "#007880"];
    const randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    return `${randomColor}`;
  };

  useEffect(() => {
    setBgcolor(generateRandomColor());
  }, []);
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className=" m-2 border cursor-pointer  shadow-md p-4 min-h-[100px] min-w-[250px] rounded "
    >
      <div>
        <h2 className=" text-2xl font-bold text-white text-sans ">{name}</h2>
      </div>
    </div>
  );
};

export default HabitTiles;
