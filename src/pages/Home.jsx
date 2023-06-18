import React, { useState } from "react";
import Modal from "../components/Modal";
import HabitForm from "../components/HabitForm";
import Container from "../components/Container";
import HabitTiles from "../components/HabitTiles";
import { useHabit } from "../context/habit-context";
import { AiOutlinePlus } from "react-icons/ai";
import HabitCard from "../components/HabitCard";
import { MOVE_TO_ARCHIVE } from "../reducer/habit-reducer";

const Home = () => {
  const {
    habitState: { habits },
    sethabitForm,
    dispatchHabit
  } = useHabit();
  const [habit, setHabit] = useState("");

  // Modal Handle
  const [openHabitDetailsModal, setOpenHabitDetails] = useState(false);
  const [openHabitFormModal, setOpenHabitFormModal] = useState(false);
  const [openEditHabitModal, setOpenEditHabitModal] = useState(false);
  const handleHabitFormModal = () => {
    sethabitForm("");
    setOpenHabitFormModal(!openHabitFormModal);
  };
  const handleHabitDetailsModal = () => {
    setOpenHabitDetails(!openHabitDetailsModal);
  };
  const handleHabitDetails = (habitName) => {
    const habitDetail = habits.find((item) => item.name === habitName);
    setHabit(habitDetail);
    handleHabitDetailsModal();
  };

  const handleEditHabit = () => {
    setOpenHabitDetails(false);
    setOpenEditHabitModal(!openEditHabitModal);
    sethabitForm(habit);
  };

  // delete function
  const handleDeleteBtn = (habit) => {
    dispatchHabit({ type: MOVE_TO_ARCHIVE, payload: habit });
    setOpenHabitDetails(false);
  };

  return (
    <div className=" min-h-screen bg-gray-50 ">
      <Container>
        <button
          onClick={handleHabitFormModal}
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
      {openHabitFormModal && (
        <Modal open={true} handleModal={handleHabitFormModal}>
          <HabitForm handleModal={handleHabitFormModal} />
        </Modal>
      )}

      {openHabitDetailsModal && (
        <Modal open={true} handleModal={handleHabitDetailsModal}>
          <HabitCard
            {...habit}
            handleEditHabit={handleEditHabit}
            handleDeleteBtn={handleDeleteBtn}
          />
        </Modal>
      )}
      {openEditHabitModal && (
        <Modal open={true} handleModal={handleEditHabit}>
          <HabitForm handleModal={handleEditHabit} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
