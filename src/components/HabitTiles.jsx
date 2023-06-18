import React, { useState } from "react";
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
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => setOpenModal(!openModal);
  const habit = { name, description, repeatTime, startDate, timeOfDay, goal };
  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div
      style={{ backgroundColor: generateRandomColor() }}
      className=" m-2 border cursor-pointer  shadow-md p-4 min-h-[100px] min-w-[250px] rounded "
      onClick={handleModal}
    >
      <div>
        <h2 className=" text-2xl font-bold text-white text-sans ">{name}</h2>
      </div>
      <Modal open={openModal} handleModal={handleModal}>
        <HabitCard {...habit} />
      </Modal>
    </div>
  );
};

export default HabitTiles;
