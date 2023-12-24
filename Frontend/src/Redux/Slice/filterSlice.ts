import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterType } from "../../Type";

const initialState: filterType = {
  selectMonthAndYear: 0,
  searchValue: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectMonth: (state, actions: PayloadAction<number>) => {
      state.selectMonthAndYear = actions.payload;
    },
    setSearchValue: (state, actions: PayloadAction<string>) => {
      state.searchValue = actions.payload;
    },
  },
});
export const { setSelectMonth, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
