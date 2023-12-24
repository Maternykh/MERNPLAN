import React from "react";
import { MdCheck } from "react-icons/md";
import { eventType, useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import {
  setAct,
  setComplete,
  setIdEvent,
  setTime,
} from "../../Redux/Slice/EventSlice";

const EventCart: React.FC = () => {
  const { events, color } = useAppSelector((state: RootState) => state.addday);
  const greenbor = color === "green" && " border-green-400";
  const orangebor = color === "orange" && "  border-orange-400";
  const bluebor = color === "blue" && "  border-blue-400";
  const redbor = color === "red" && "  border-red-400";
  const indigobor = color === "indigo" && "  border-indigo-400";
  const basebor = color === "base" && "  border-gray-200";
  const greenbg = color === "green" && "bg-green-400 ";
  const orangebg = color === "orange" && " bg-orange-400 ";
  const bluebg = color === "blue" && " bg-blue-400 ";
  const redbg = color === "red" && " bg-red-400 ";
  const indigobg = color === "indigo" && " bg-indigo-400 ";
  const basebg = color === "base" && " bg-gray-200 ";
  const dispatch = useAppDispatch();
  const OnClickCart = (ev: eventType) => {
    dispatch(setAct(ev.act));
    dispatch(setTime(ev.timeAct));
    dispatch(setComplete(ev.isComleted));
    dispatch(setIdEvent(ev.id));
  };
  return (
    <div className=" w-full">
      {events.map((ev, index) => (
        <div
          onClick={() => OnClickCart(ev)}
          className={` py-2 justify-between items-center my-2  flex border-2 rounded-xl ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor}`}
          key={index}
        >
          <div
            className={` whitespace-nowrap px-2 flex items-center h-8 border-r-2 ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor}`}
          >
            {ev.timeAct}
          </div>
          <div className=" mx-2">{ev.act}</div>
          <div
            className={` px-2 flex items-center h-8 border-l-2 ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor}`}
          >
            <div
              className={`${
                !ev.isComleted
                  ? " w-6 h-6 "
                  : `${greenbg} ${orangebg} ${bluebg} ${redbg} ${indigobg} ${basebg}`
              } border-2 rounded-full ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor}`}
            >
              {ev.isComleted && <MdCheck className=" text-xl  text-white" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCart;
