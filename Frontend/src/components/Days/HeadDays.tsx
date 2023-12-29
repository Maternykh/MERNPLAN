import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setSelectMonth } from "../../Redux/Slice/filterSlice";

const HeadDays: React.FC = () => {
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
  const selectMonth = useAppSelector(
    (state: RootState) => state.filter.selectMonthAndYear
  );
  const dispatch = useAppDispatch();
  const nextMonth = () => {
    if (selectMonth < 11) {
      dispatch(setSelectMonth(selectMonth + 1));
    }
  };
  const lastMonth = () => {
    if (selectMonth > 0) {
      dispatch(setSelectMonth(selectMonth - 1));
    }
  };
  return (
    <div className=" xl:flex justify-between block mb-2">
      <div className=" font-bold text-xl">Upcoming Schedule</div>
      <div className=" flex items-center">
        <div
          onClick={() => lastMonth()}
          className=" w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center"
        >
          <MdKeyboardArrowLeft className=" flex items-center justify-center" />
        </div>
        <div className=" py-1 px-3 bg-gray-200 rounded-full mr-2">
          {monthyear.map((mon, index) => (
            <div key={index}>{selectMonth === index && mon}</div>
          ))}
        </div>
        <div
          onClick={() => nextMonth()}
          className=" w-8 h-8 bg-gray-200 rounded-full  flex items-center justify-center"
        >
          <MdKeyboardArrowRight className=" flex items-center justify-center" />
        </div>
      </div>
    </div>
  );
};

export default HeadDays;
