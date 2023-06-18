import React, { useState } from "react";
import Modal from "../components/Modal";
import HabitForm from "../components/HabitForm";
import Container from "../components/Container";
import { habitData } from "../data/data";
import HabitTiles from "../components/HabitTiles";
import { useHabit } from "../context/habit-context";
import { AiOutlinePlus } from "react-icons/ai";
import HabitCard from "../components/HabitCard";

const Home = () => {
  const {
    habitState: { habits },
    sethabitForm
  } = useHabit();
  const [habit, setHabit] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [habitDetails, setHabitDetails] = useState(false);
  const [editHabitModal, setEditHabitModal] = useState(false);
  const handleModal = () => {
    sethabitForm("");
    setOpenModal(!openModal);
  };
  const handleHabitDetailsModal = () => setHabitDetails(!habitDetails);
  const handleHabitDetails = (habitName) => {
    const habitDetail = habits.find((item) => item.name === habitName);
    setHabit(habitDetail);
    handleHabitDetailsModal();
  };

  const handleEditHabit = () => {
    setHabitDetails(false);
    setEditHabitModal(!editHabitModal);
    sethabitForm(habit);
  };
  return (
    <div className=" min-h-screen bg-gray-50 ">
      <Container>
        <button
          onClick={handleModal}
          className=" flex text-lg flex-row items-center border bg-blue-800 text-white rounded font-semibold px-3 py-2  "
        >
          <AiOutlinePlus className="text-2xl mx-1 " />
          Add New Habit
        </button>
        <div className="flex flex-row flex-wrap ">
          {habits.map((item) => (
            <div onClick={() => handleHabitDetails(item.name)}>
              <HabitTiles {...item} />
            </div>
          ))}
        </div>
      </Container>
      <Modal open={openModal} handleModal={handleModal}>
        <HabitForm handleModal={handleModal} />
      </Modal>
      {habitDetails && (
        <Modal open={true} handleModal={handleHabitDetailsModal}>
          <HabitCard {...habit} handleEditHabit={handleEditHabit} />
        </Modal>
      )}
      {editHabitModal && (
        <Modal open={true} handleModal={handleEditHabit}>
          <HabitForm handleModal={handleEditHabit} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
