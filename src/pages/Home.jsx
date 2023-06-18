import React from "react";
import Modal from "../components/Modal";
import HabitForm from "../components/HabitForm";
import Container from "../components/Container";
import { habitData } from "../data/data";
import HabitTiles from "../components/HabitTiles";

const Home = () => {
  return (
    <div className=" min-h-screen bg-gray-50 ">
      <Container>
        <div className="flex flex-row flex-wrap ">
          {habitData.map((item) => (
            <HabitTiles {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
