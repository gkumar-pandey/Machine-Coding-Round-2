import { generateNewId } from "../utils/newid";
// ** Actions
export const ADD_HABIT = "ADD_HABIT";
export const EDIT_HABIT = "EDIT_HABIT";
export const MOVE_TO_ARCHIVE = "MOVE_TO_ARCHIVE";
export const DELETE_HABIT = "DELETE_HABIT";

export const habitReducer = (state, { type, payload }) => {
  switch (type) {
    case MOVE_TO_ARCHIVE:
      return {
        ...state,
        habits: state.habits.filter((item) => item._id !== payload._id),
        archiveHabits: [...state.archiveHabits, payload]
      };
    case ADD_HABIT:
      return {
        ...state,
        habits: [
          ...state.habits,
          { _id: generateNewId(state.habits), ...payload }
        ]
      };
    case EDIT_HABIT:
      return {
        ...state,
        habits: state.habits.reduce(
          (acc, curr) =>
            curr._id === payload._id ? [...acc, payload] : [...acc, curr],
          []
        )
      };
    default:
      return state;
  }
};
