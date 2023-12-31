import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../Type";

const initialState: userType = {
  isAuth: false,
  userEmail: "",
  userPasswordHash: "",
  userAvatar: "",
};
export const daySlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setIsAuth: (state, actions: PayloadAction<boolean>) => {
      state.isAuth = actions.payload;
    },
    setUserEmail: (state, actions: PayloadAction<string>) => {
      state.userEmail = actions.payload;
    },
    setUserPasswordHash: (state, actions: PayloadAction<string>) => {
      state.userPasswordHash = actions.payload;
    },
    setUserAvatar: (state, actions: PayloadAction<string>) => {
      state.userAvatar = actions.payload;
    },
  },
});
export const { setIsAuth, setUserEmail, setUserPasswordHash, setUserAvatar } =
  daySlice.actions;
export default daySlice.reducer;
