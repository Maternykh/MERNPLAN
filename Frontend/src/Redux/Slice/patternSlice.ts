import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dayMap, initialPattern } from "../../Type";

const initialState: initialPattern = {
  patterns: [],
};
export const patternSlice = createSlice({
  name: "pattern",
  initialState,
  reducers: {
    setPatterns: (state, actions: PayloadAction<dayMap[]>) => {
      state.patterns = actions.payload;
    },
  },
});
export const { setPatterns } = patternSlice.actions;
export default patternSlice.reducer;
