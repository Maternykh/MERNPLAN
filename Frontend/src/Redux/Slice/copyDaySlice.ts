import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categType, copydayMap, eventType } from "../../Type";

const initialState: copydayMap = {
  copytascName: "",
  copydayName: "",
  copyevents: [],
  copymonthAndYears: "January 2024",
  copycategory: [],
  copycolor: "base",
  copynote: "",
  copypattern: "",
};
export const copyDaySlice = createSlice({
  name: "copy",
  initialState,
  reducers: {
    setCopyTascName: (state, actions: PayloadAction<string>) => {
      state.copytascName = actions.payload;
    },
    setCopyDayName: (state, actions: PayloadAction<string>) => {
      state.copydayName = actions.payload;
    },
    setCopyEvents: (state, actions: PayloadAction<eventType[]>) => {
      state.copyevents = actions.payload;
    },
    setCopyMonthAndYears: (state, actions: PayloadAction<string>) => {
      state.copymonthAndYears = actions.payload;
    },
    setCopyCategory: (state, actions: PayloadAction<categType[]>) => {
      state.copycategory = actions.payload;
    },
    setCopyColor: (state, actions: PayloadAction<string>) => {
      state.copycolor = actions.payload;
    },
    setCopyNote: (state, actions: PayloadAction<string>) => {
      state.copynote = actions.payload;
    },
    setCopyPattern: (state, actions: PayloadAction<string>) => {
      state.copypattern = actions.payload;
    },
    setCopyClearAdd: (state) => {
      (state.copytascName = ""),
        (state.copydayName = ""),
        (state.copyevents = []),
        (state.copymonthAndYears = "January 2024"),
        (state.copycategory = []),
        (state.copycolor = "base"),
        (state.copynote = ""),
        (state.copypattern = "");
    },
  },
});
export const {
  setCopyTascName,
  setCopyDayName,
  setCopyMonthAndYears,
  setCopyColor,
  setCopyNote,
  setCopyPattern,
  setCopyClearAdd,
  setCopyCategory,
  setCopyEvents,
} = copyDaySlice.actions;
export default copyDaySlice.reducer;
