import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialParams } from "../../Type";
const initialState: initialParams = {
  pathname: "/",
  Loading: false,
};
export const paramSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    setPathName: (state, actions: PayloadAction<string>) => {
      state.pathname = actions.payload;
    },
    setLoading: (state, actions: PayloadAction<boolean>) => {
      state.Loading = actions.payload;
    },
  },
});
export const { setPathName, setLoading } = paramSlice.actions;
export default paramSlice.reducer;
