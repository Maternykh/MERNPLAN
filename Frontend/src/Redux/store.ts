import { configureStore } from "@reduxjs/toolkit";
import paramSlice from "./Slice/paramSlice";
import daySlice from "./Slice/daySlice";
import addDaySlice from "./Slice/addDaySlice";
import eventSlice from "./Slice/EventSlice";
import categorySlice from "./Slice/categorySlice";
import copyDaySlice from "./Slice/copyDaySlice";
import filterSlice from "./Slice/filterSlice";

export const store = configureStore({
  reducer: {
    params: paramSlice,
    days: daySlice,
    addday: addDaySlice,
    eve: eventSlice,
    categ: categorySlice,
    copy: copyDaySlice,
    filter: filterSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
