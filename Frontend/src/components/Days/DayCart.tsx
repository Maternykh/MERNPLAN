import React, { useState } from "react";
import { categType, dayMap, useAppDispatch } from "../../Type";
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
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaPencilRuler } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { MdOutlineCopyAll } from "react-icons/md";
import {
  setCopyCategory,
  setCopyColor,
  setCopyDayName,
  setCopyEvents,
  setCopyMonthAndYears,
  setCopyNote,
  setCopyPattern,
  setCopyTascName,
} from "../../Redux/Slice/copyDaySlice";
const DayCart: React.FC<dayMap> = ({
  _id,
  dayName,
  color,
  category,
  monthAndYears,
  events,
  tascName,
  note,
  pattern,
}) => {
  const [editDay, setEditDay] = useState<boolean>(false);
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
  const setCopyDay = () => {
    dispatch(setCopyDayName(dayName));
    dispatch(setCopyColor(color));
    dispatch(setCopyCategory(category));
    dispatch(setCopyMonthAndYears(monthAndYears));
    dispatch(setCopyEvents(events));
    dispatch(setCopyTascName(tascName));
    dispatch(setCopyNote(note));
    dispatch(setCopyPattern(pattern));
  };
  return (
    <div
      onClick={() => setEditDay(!editDay)}
      className=" w-full xl:w-48 mr-2 mb-2 "
    >
      <div
        className={`${green} ${orange} ${blue} ${red} ${indigo} ${base} w-full h-full justify-between flex flex-col px-4 py-2  rounded-3xl `}
      >
        <div>
          <div className=" font-bold ">{dayName}</div>
          <div className="  mb-2">{tascName}</div>
          <div>
            <div
              className={`${green} ${orange} ${blue} ${red} ${indigo} ${base} mr-2 flex flex-wrap`}
            >
              {category.map((cat, index) => (
                <div
                  key={index}
                  className=" mr-1 mb-1 p-1 bg-white rounded-xl h-min"
                >
                  {cat.categ}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className=" mb-1 flex justify-between bg-white p-1 rounded-full">
            <div>Tasks:</div>
            <div
              className={` flex justify-center items-center w-6 h-6 rounded-full p-2 ${green} ${orange} ${blue} ${red} ${indigo} ${base}`}
            >
              {events.length}
            </div>
          </div>

          {editDay && (
            <div className=" flex ">
              <Link
                className=" mb-1 mr-1 "
                onClick={() => setFullDays()}
                to={`/checkfullday/${_id}`}
              >
                <div className=" hover:border-blue-500 border-2 border-transparent text-blue-500 text-2xl w-9 h-8 flex justify-center items-center bg-white rounded-xl">
                  <BiShow />
                </div>
              </Link>
              <div
                onClick={() => setCopyDay()}
                className=" hover:border-green-500 border-2 border-transparent text-green-500 hover:cursor-pointer text-2xl w-9 h-8 flex justify-center items-center mb-1 bg-white rounded-xl mr-1"
              >
                <MdOutlineCopyAll />
              </div>
              <Link
                className=" mb-1 mr-1"
                onClick={() => setFullDays()}
                to={`/putDay/${_id}`}
              >
                <div className=" hover:border-orange-500 border-2 border-transparent w-9 h-8 flex justify-center items-center text-orange-500  bg-white rounded-xl ">
                  <FaPencilRuler />
                </div>
              </Link>
              <Link
                className=" mb-1 mr-1"
                onClick={() => setFullDays()}
                to={`/deleteDay/${_id}`}
              >
                <div className=" hover:border-red-500 border-2 border-transparent  text-xl w-9 h-8 flex justify-center items-center text-red-500  bg-white rounded-xl ">
                  <RiDeleteBack2Fill />
                </div>
              </Link>
            </div>
          )}
          <div className=" flex justify-end">{monthAndYears}</div>
        </div>
      </div>
    </div>
  );
};

export default DayCart;
