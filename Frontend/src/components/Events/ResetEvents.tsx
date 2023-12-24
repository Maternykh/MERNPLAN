import React from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { MdCheck } from "react-icons/md";
import { addEvents, deleteEvents } from "../../Redux/Slice/addDaySlice";
import EventCart from "./EventCart";
import { RootState } from "../../Redux/store";
import {
  setAct,
  setComplete,
  setIdEvent,
  setTime,
} from "../../Redux/Slice/EventSlice";
const ResetEvents: React.FC = () => {
  const color = useAppSelector((state: RootState) => state.addday.color);
  const { id, act, isComleted, timeAct, length } = useAppSelector(
    (state: RootState) => state.eve
  );
  const dispatch = useAppDispatch();

  const onClickAddEvent = () => {
    dispatch(setIdEvent(Math.random() * 20));
    const event = {
      id,
      act,
      timeAct,
      isComleted,
      length,
    };
    if (!!act && !!timeAct) {
      dispatch(addEvents(event));
    }
  };

  const greenbor = color === "green" && " border-green-400";
  const orangebor = color === "orange" && "  border-orange-400";
  const bluebor = color === "blue" && "  border-blue-400";
  const redbor = color === "red" && "  border-red-400";
  const indigobor = color === "indigo" && "  border-indigo-400";
  const basebor = color === "base" && "  border-gray-200";
  return (
    <div className=" bg-white p-2 rounded-xl w-full xl:w-1/2 flex flex-col items-center justify-between">
      <div className=" w-full flex flex-col items-center">
        <div className=" font-bold mb-2">Add events</div>
        <EventCart />
      </div>
      <div
        className={` ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor} border-2 p-2 rounded-xl`}
      >
        <div className=" flex justify-between">
          <input
            value={timeAct}
            onChange={(e) => dispatch(setTime(e.target.value))}
            type="text"
            placeholder="Enter time"
            className=" mr-2 w-24 bg-gray-200 rounded-xl p-2 outline-none"
          />
          <input
            value={act}
            onChange={(e) => dispatch(setAct(e.target.value))}
            type="text"
            placeholder="Enter value event"
            className=" mr-2 w-40 xl:w-60 bg-gray-200 rounded-xl p-2 outline-none"
          />
          <div
            onClick={() => dispatch(setComplete(!isComleted))}
            className={` ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor} hover:cursor-pointer w-10 h-10 border-2 rounded-full flex justify-center items-center`}
          >
            {isComleted && <MdCheck className=" text-2xl " />}
          </div>
        </div>
        <div className=" flex">
          <div
            onClick={() => dispatch(deleteEvents(id))}
            className=" text-white mr-2 hover:cursor-pointer p-2 bg-red-500 w-1/2 rounded-xl flex justify-center mt-2"
          >
            Delete Event
          </div>
          <div
            onClick={() => onClickAddEvent()}
            className=" hover:cursor-pointer p-2 bg-gray-200 w-1/2 rounded-xl flex justify-center mt-2"
          >
            Add Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetEvents;
