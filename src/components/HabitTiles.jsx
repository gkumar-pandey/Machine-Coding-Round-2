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
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
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
