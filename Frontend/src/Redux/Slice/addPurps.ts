import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { purpMap } from "../../Type";

const initialState: purpMap = {
  _id: 0,
  title: "",
  desc: "",
  value: "",
  isCompleted: false,
};
export const daySlice = createSlice({
  name: "addpurp",
  initialState,
  reducers: {
    setIdPurps: (state, actions: PayloadAction<number>) => {
      state._id = actions.payload;
    },
    setTitlePurps: (state, actions: PayloadAction<string>) => {
      state.title = actions.payload;
    },
    setDescPurps: (state, actions: PayloadAction<string>) => {
      state.desc = actions.payload;
    },
    setValuePurps: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
    setIsCompletedPurps: (state, actions: PayloadAction<boolean>) => {
      state.isCompleted = actions.payload;
    },
    setClearPurps: (state) => {
      state._id = 0;
      state.title = "";
      state.desc = "";
      state.value = "";
      state.isCompleted = false;
    },
  },
});
export const {
  setIdPurps,
  setTitlePurps,
  setDescPurps,
  setValuePurps,
  setIsCompletedPurps,
  setClearPurps,
} = daySlice.actions;
export default daySlice.reducer;
