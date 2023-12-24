import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { setMonthAndYears } from "../../Redux/Slice/addDaySlice";
const AddMonth: React.FC = () => {
  const monthyear: string[] = [
    "January 2024",
    "February 2024",
    "March 2024",
    "April 2024",
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
  ];
  const [popMon, setPopMon] = useState<boolean>(false);
  const { monthAndYears, color } = useAppSelector(
    (state: RootState) => state.addday
  );
  const dispatch = useAppDispatch();
  const greenbg = color === "green" && "bg-green-400 ";
  const orangebg = color === "orange" && "bg-orange-400 ";
  const bluebg = color === "blue" && "bg-blue-400 ";
  const redbg = color === "red" && "bg-red-400 ";
  const indigobg = color === "indigo" && "bg-indigo-400 ";
  const basebg = color === "base" && "bg-gray-200 ";
  const onClickMonth = (mon: string) => {
    dispatch(setMonthAndYears(mon));
    setPopMon(false);
  };
  return (
    <div className=" relative w-full ">
      <div
        onClick={() => setPopMon(!popMon)}
        className=" hover:cursor-pointer mr-2 flex justify-between bg-gray-200  items-center p-2 my-2 rounded-xl"
      >
        <div>Select month: {monthAndYears}</div>
        {popMon ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </div>
      {popMon && (
        <div className=" absolute bg-white rounded-xl">
          {monthyear.map((mon, index) => (
            <div
              onClick={() => onClickMonth(mon)}
              className={` rounded-xl p-2 ${
                mon === monthAndYears
                  ? `${greenbg} ${orangebg} ${bluebg} ${redbg} ${indigobg} ${basebg}`
                  : " hover:cursor-pointer"
              }`}
              key={index}
            >
              {mon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddMonth;
