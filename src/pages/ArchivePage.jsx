import React from "react";
import Container from "../components/Container";
import { useHabit } from "../context/habit-context";
import HabitTiles from "../components/HabitTiles";

const ArchivePage = () => {
  const {
    habitState: { archiveHabits }
  } = useHabit();
  return (
    <div>
      <Container>
        <h1 className=" text-4xl text-center  ">Archive Habits</h1>
        <div className="flex flex-row flex-wrap">
          {archiveHabits.map((item) => (
            <div>
              <HabitTiles {...item} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ArchivePage;
