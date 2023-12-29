import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPurp, purpMap } from "../../Type";

const initialState: initialPurp = {
  purps: [],
};
export const purpSlice = createSlice({
  name: "purp",
  initialState,
  reducers: {
    setPurp: (state, actions: PayloadAction<purpMap[]>) => {
      state.purps = actions.payload;
    },
  },
});
export const { setPurp } = purpSlice.actions;
export default purpSlice.reducer;
