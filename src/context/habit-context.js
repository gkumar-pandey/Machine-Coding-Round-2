import { createContext, useContext, useReducer, useState } from "react";
import { habitReducer } from "../reducer/habit-reducer";
import { habitData } from "../data/data";

const Habitcontext = createContext();

const initialState = {
  habits: habitData,
  archiveHabits: []
};
export const HabitContextProvider = ({ children }) => {
  const [habitState, dispatchHabit] = useReducer(habitReducer, initialState);

  const [habitForm, sethabitForm] = useState({
    name: "",
    description: "",
    repeatTime: "",
    startDate: "",
    timeOfDay: "",
    goal: ""
  });

  return (
    <Habitcontext.Provider
      value={{
        habitState,
        habitForm,
        sethabitForm,
        dispatchHabit
      }}
    >
      {children}
    </Habitcontext.Provider>
  );
};

export const useHabit = () => useContext(Habitcontext);
