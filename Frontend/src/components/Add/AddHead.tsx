import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import {
  setColor,
  setDayName,
  setTascName,
} from "../../Redux/Slice/addDaySlice";
import { RootState } from "../../Redux/store";

const AddHead: React.FC = () => {
  const colors: string[] = ["green", "orange", "blue", "red", "indigo", "base"];
  const { color, dayName, tascName } = useAppSelector(
    (state: RootState) => state.addday
  );
  const greenbg = color === "green" && "bg-green-400 ";
  const orangebg = color === "orange" && "bg-orange-400 ";
  const bluebg = color === "blue" && "bg-blue-400 ";
  const redbg = color === "red" && "bg-red-400 ";
  const indigobg = color === "indigo" && "bg-indigo-400 ";
  const basebg = color === "base" && "bg-gray-200 ";
  const greenbor = color === "green" && " border-green-400";
  const orangebor = color === "orange" && "  border-orange-400";
  const bluebor = color === "blue" && "  border-blue-400";
  const redbor = color === "red" && "  border-red-400";
  const indigobor = color === "indigo" && "  border-indigo-400";
  const basebor = color === "base" && "  border-gray-200";
  const [popUp, setPopUp] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const onClickColor = (col: string) => {
    dispatch(setColor(col));
    setPopUp(false);
  };
  return (
    <>
      <div className=" mb-2 flex justify-between ">
        <div className=" text-xl font-bold">Constructor days</div>
        <div
          onClick={() => setPopUp(!popUp)}
          className={`${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor} hover:cursor-pointer flex justify-center items-center w-6 h-6 border-2 p-1 rounded-full `}
        >
          <div
            className={`${greenbg} ${orangebg} ${bluebg} ${redbg} ${indigobg} ${basebg} p-2 rounded-full`}
          ></div>
        </div>
      </div>
      <div className=" flex justify-between relative">
        <input
          value={dayName}
          onChange={(e) => dispatch(setDayName(e.target.value))}
          placeholder="Example: 3 Sunday"
          type="text"
          className=" w-1/2 mr-2 p-2 bg-gray-200 border-none outline-none rounded-xl"
        />
        <input
          value={tascName}
          onChange={(e) => dispatch(setTascName(e.target.value))}
          placeholder="Enter name day"
          type="text"
          className=" w-1/2 mr-2 p-2  bg-gray-200 border-none outline-none rounded-xl"
        />
        {popUp && (
          <div className=" top-0 right-0 absolute z-10 bg-white rounded-xl">
            {colors.map((col, index) => (
              <div
                onClick={() => onClickColor(col)}
                className={`${
                  col === color
                    ? `${greenbg} ${bluebg} ${redbg} ${indigobg} ${basebg} ${orangebg}`
                    : " hover:cursor-pointer"
                } p-2 rounded-xl `}
                key={index}
              >
                {col}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AddHead;
