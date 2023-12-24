import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import {
  setCategory,
  setClearAdd,
  setColor,
  setDayName,
  setEvents,
  setMonthAndYears,
  setNote,
  setPattern,
  setTascName,
} from "../Redux/Slice/addDaySlice";
import AddHead from "../components/Add/AddHead";
import AddMonth from "../components/Add/AddMonth";
import AddCateg from "../components/Add/AddCateg";
import { setLoading } from "../Redux/Slice/paramSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResetEvents from "../components/Events/ResetEvents";

const AddDays: React.FC = () => {
  const {
    tascName,
    dayName,
    events,
    monthAndYears,
    category,
    color,
    note,
    pattern,
  } = useAppSelector((state: RootState) => state.addday);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const OnCLickSubmit = () => {
  //   const add = {
  //     tascName,
  //     dayName,
  //     events,
  //     monthAndYears,
  //     category,
  //     color,
  //     note,
  //     pattern,
  //   };
  //   console.log(add);
  //   dispatch(setLoading(true));
  //   axios.post("http://localhost:8888/days", add).then(() => {
  //     dispatch(setLoading(false));
  //     dispatch(setClearAdd());
  //     navigate("/");
  //   });
  // };
  const OnCLickSubmit = () => {
    const add = {
      tascName,
      dayName,
      events,
      monthAndYears,
      category,
      color,
      note,
      pattern,
    };
    dispatch(setLoading(true));
    axios.post(`http://localhost:8888/days`, add).then(() => {
      dispatch(setLoading(false));
      dispatch(setClearAdd());
      navigate("/");
    });
  };
  const {
    copytascName,
    copydayName,
    copyevents,
    copymonthAndYears,
    copycategory,
    copycolor,
    copynote,
    copypattern,
  } = useAppSelector((state: RootState) => state.copy);
  const PastDay = () => {
    dispatch(setDayName(copydayName));
    dispatch(setColor(copycolor));
    dispatch(setCategory(copycategory));
    dispatch(setMonthAndYears(copymonthAndYears));
    dispatch(setEvents(copyevents));
    dispatch(setTascName(copytascName));
    dispatch(setNote(copynote));
    dispatch(setPattern(copypattern));
  };
  return (
    <>
      <div className=" flex xl:flex-nowrap flex-wrap">
        <div className=" xl:mb-0 mb-2 w-full xl:w-1/2 bg-white rounded-xl p-2 xl:mr-2 ">
          <AddHead />
          <AddMonth />
          <AddCateg />
          <div className=" w-full">
            <div className=" mb-2">Enter note tasks</div>
            <textarea
              value={note}
              onChange={(e) => dispatch(setNote(e.target.value))}
              placeholder="Enter note"
              className=" h-96 mr-2 p-2 w-full bg-gray-200 border-none outline-none rounded-xl"
            ></textarea>
          </div>
        </div>
        <ResetEvents />
      </div>
      <div className=" mt-2 flex ">
        <div
          onClick={() => PastDay()}
          className=" hover:cursor-pointer bg-white rounded-xl mr-2 flex justify-center items-center w-36"
        >
          Past
        </div>
        <div
          onClick={() => dispatch(setClearAdd())}
          className=" hover:cursor-pointer bg-white rounded-xl mr-2 flex justify-center items-center w-36"
        >
          Remove
        </div>
        <div
          onClick={() => OnCLickSubmit()}
          className=" hover:cursor-pointer  w-full flex justify-center items-center bg-white rounded-xl p-2"
        >
          Add Day
        </div>
      </div>
    </>
  );
};

export default AddDays;
