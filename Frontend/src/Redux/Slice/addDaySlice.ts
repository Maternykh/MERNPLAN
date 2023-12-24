import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categType, dayMap, eventType } from "../../Type";

const initialState: dayMap = {
  _id: 0,
  tascName: "",
  dayName: "",
  events: [],
  monthAndYears: "January 2024",
  category: [],
  color: "base",
  note: "",
  pattern: "",
};
export const daySlice = createSlice({
  name: "addday",
  initialState,
  reducers: {
    setId: (state, actions: PayloadAction<number>) => {
      state._id = actions.payload;
    },
    setTascName: (state, actions: PayloadAction<string>) => {
      state.tascName = actions.payload;
    },
    setDayName: (state, actions: PayloadAction<string>) => {
      state.dayName = actions.payload;
    },
    addEvents: (state, actions: PayloadAction<eventType>) => {
      state.events.push(actions.payload);
    },
    setEvents: (state, actions: PayloadAction<eventType[]>) => {
      state.events = actions.payload;
    },
    deleteEvents: (state, actions: PayloadAction<number>) => {
      state.events = state.events.filter((obj) => obj.id !== actions.payload);
    },
    setMonthAndYears: (state, actions: PayloadAction<string>) => {
      state.monthAndYears = actions.payload;
    },
    addCategory: (state, actions: PayloadAction<categType>) => {
      state.category.push(actions.payload);
    },
    setCategory: (state, actions: PayloadAction<categType[]>) => {
      state.category = actions.payload;
    },
    delCategory: (state, actions: PayloadAction<number>) => {
      state.category = state.category.filter(
        (obj) => obj.id !== actions.payload
      );
    },
    setColor: (state, actions: PayloadAction<string>) => {
      state.color = actions.payload;
    },
    setNote: (state, actions: PayloadAction<string>) => {
      state.note = actions.payload;
    },
    setPattern: (state, actions: PayloadAction<string>) => {
      state.pattern = actions.payload;
    },
    setClearAdd: (state) => {
      (state._id = 0),
        (state.tascName = ""),
        (state.dayName = ""),
        (state.events = []),
        (state.monthAndYears = "January 2024"),
        (state.category = []),
        (state.color = "base"),
        (state.note = ""),
        (state.pattern = "");
    },
  },
});
export const {
  setId,
  setTascName,
  setDayName,
  addEvents,
  setMonthAndYears,
  addCategory,
  delCategory,
  setColor,
  setNote,
  setPattern,
  setClearAdd,
  setCategory,
  setEvents,
  deleteEvents,
} = daySlice.actions;
export default daySlice.reducer;
