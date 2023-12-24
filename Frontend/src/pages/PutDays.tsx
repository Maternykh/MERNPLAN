import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import { setClearAdd, setNote } from "../Redux/Slice/addDaySlice";
import AddHead from "../components/Add/AddHead";
import AddMonth from "../components/Add/AddMonth";
import AddCateg from "../components/Add/AddCateg";
import { setLoading } from "../Redux/Slice/paramSlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ResetEvents from "../components/Events/ResetEvents";

const PutDays: React.FC = () => {
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
  const { id } = useParams();
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
    axios.put(`http://localhost:8888/days/${id}`, add).then(() => {
      dispatch(setLoading(false));
      dispatch(setClearAdd());
      navigate("/");
    });
  };

  return (
    <>
      <div className=" flex xl:flex-nowrap flex-wrap">
        <div className=" w-full xl:w-1/2 bg-white rounded-xl p-2 xl:mr-2 mb-2 xl:mb-0">
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
      <div
        onClick={() => OnCLickSubmit()}
        className=" hover:cursor-pointer mt-2 w-full flex justify-center items-center bg-white rounded-xl p-2"
      >
        Put Day
      </div>
    </>
  );
};

export default PutDays;
