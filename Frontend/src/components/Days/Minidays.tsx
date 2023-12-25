import React from "react";
import { dayMap, useAppDispatch } from "../../Type";
import { Link } from "react-router-dom";
import {
  setCategory,
  setColor,
  setDayName,
  setEvents,
  setId,
  setMonthAndYears,
  setNote,
  setPattern,
  setTascName,
} from "../../Redux/Slice/addDaySlice";

const Minidays: React.FC<dayMap> = ({
  dayName,
  color,
  monthAndYears,
  _id,
  category,
  events,
  tascName,
  note,
  pattern,
}) => {
  const green = color === "green" && "bg-green-400";
  const orange = color === "orange" && " bg-orange-400";
  const blue = color === "blue" && " bg-blue-400";
  const red = color === "red" && " bg-red-400";
  const indigo = color === "indigo" && " bg-indigo-400";
  const base = color === "base" && " bg-gray-200";
  const dispatch = useAppDispatch();
  const setFullDays = () => {
    dispatch(setId(_id));
    dispatch(setDayName(dayName));
    dispatch(setColor(color));
    dispatch(setCategory(category));
    dispatch(setMonthAndYears(monthAndYears));
    dispatch(setEvents(events));
    dispatch(setTascName(tascName));
    dispatch(setNote(note));
    dispatch(setPattern(pattern));
  };
  return (
    <Link
      onClick={() => setFullDays()}
      to={`/checkfullday/${_id}`}
      className={`${green} ${orange} ${blue} ${red} ${indigo} ${base} w-40 p-2 mr-2 my-2 rounded-2xl`}
    >
      <div className=" bg-white p-1 rounded-full flex justify-center mb-1">
        {dayName}
      </div>
      <div className="bg-white p-1 rounded-full flex justify-center">
        {monthAndYears}
      </div>
    </Link>
  );
};

export default Minidays;
