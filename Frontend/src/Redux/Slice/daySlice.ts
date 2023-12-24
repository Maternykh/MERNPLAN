import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dayMap, initialDay } from "../../Type";

const initialState: initialDay = {
  days: [],
};
export const daySlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    setDays: (state, actions: PayloadAction<dayMap[]>) => {
      state.days = actions.payload;
    },
  },
});
export const { setDays } = daySlice.actions;
export default daySlice.reducer;
