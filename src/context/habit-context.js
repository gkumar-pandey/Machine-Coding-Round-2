import { createContext, useContext, useReducer, useState } from "react";
import { habitReducer } from "../reducer/habit-reducer";

const Habitcontext = createContext();

const initialState = {
  habits: [],
  archiveHabits: []
};
export const HabitContextProvider = ({ children }) => {
  const [habitState, dispatchHabit] = useReducer(habitReducer, initialState);
  const [openModal, setOpenModal] = useState(false);
  return (
    <Habitcontext.Provider
      value={{ habitState, dispatchHabit, openModal, setOpenModal }}
    >
      {children}
    </Habitcontext.Provider>
  );
};

export const useHabit = () => useContext(Habitcontext);
