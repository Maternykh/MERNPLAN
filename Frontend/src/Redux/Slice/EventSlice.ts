import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { eventType } from "../../Type";

const initialState: eventType = {
  id: 0,
  act: "",
  timeAct: "",
  isComleted: false,
  length: 1,
};
export const eventSlice = createSlice({
  name: "eve",
  initialState,
  reducers: {
    setAct: (state, actions: PayloadAction<string>) => {
      state.act = actions.payload;
    },
    setTime: (state, actions: PayloadAction<string>) => {
      state.timeAct = actions.payload;
    },
    setComplete: (state, actions: PayloadAction<boolean>) => {
      state.isComleted = actions.payload;
    },
    setIdEvent: (state, actions: PayloadAction<number>) => {
      state.id = actions.payload;
    },
    removeState: (state) => {
      state.isComleted = false;
      state.act = "";
      state.timeAct = "";
    },
  },
});
export const { setAct, setTime, setComplete, removeState, setIdEvent } =
  eventSlice.actions;
export default eventSlice.reducer;
