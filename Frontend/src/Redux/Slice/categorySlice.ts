import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categType } from "../../Type";

const initialState: categType = {
  id: 0,
  categ: "",
};
export const categorySlice = createSlice({
  name: "categ",
  initialState,
  reducers: {
    setCateg: (state, actions: PayloadAction<string>) => {
      state.categ = actions.payload;
    },
    setIdCateg: (state, actions: PayloadAction<number>) => {
      state.id = actions.payload;
    },
    removeCateg: (state) => {
      state.categ = "";
    },
  },
});
export const { setCateg, setIdCateg, removeCateg } = categorySlice.actions;
export default categorySlice.reducer;
