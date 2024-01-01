import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import EventCart from "../components/Events/EventCart";
import { useNavigate, useParams } from "react-router-dom";
import { setLoading } from "../Redux/Slice/paramSlice";
import axios from "axios";
import { setClearAdd } from "../Redux/Slice/addDaySlice";

const DelPatt: React.FC = () => {
  const { dayName, tascName, color, monthAndYears, category, note } =
    useAppSelector((state: RootState) => state.addday);
  const dispatch = useAppDispatch();
  const greenbg = color === "green" && "bg-green-400 ";
  const orangebg = color === "orange" && " bg-orange-400 ";
  const bluebg = color === "blue" && " bg-blue-400 ";
  const redbg = color === "red" && " bg-red-400 ";
  const indigobg = color === "indigo" && " bg-indigo-400 ";
  const basebg = color === "base" && " bg-gray-200 ";
  const greenbor = color === "green" && " border-green-400";
  const orangebor = color === "orange" && "  border-orange-400";
  const bluebor = color === "blue" && "  border-blue-400";
  const redbor = color === "red" && "  border-red-400";
  const indigobor = color === "indigo" && "  border-indigo-400";
  const basebor = color === "base" && "  border-gray-200";
  const navigate = useNavigate();
  const { id } = useParams();
  const Delete = () => {
    dispatch(setLoading(true));
    axios
      .delete(`https://fullstack-plans-app-mern.onrender.com/pattern/${id}`)
      .then(() => {
        dispatch(setLoading(false));
        navigate("/patterns");
        dispatch(setClearAdd());
      });
  };
  return (
    <>
      <div className=" flex xl:flex-nowrap flex-wrap">
        <div className=" bg-white rounded-xl p-3 w-full xl:w-1/2 xl:mr-2 xl:mb-0 mb-2">
          <div className=" flex justify-between items-center mb-2">
            <div className=" font-bold text-xl">{dayName}</div>
            <div className=" flex items-center">
              <div className=" mr-2">{tascName}</div>
              <div
                className={`${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor} flex justify-center items-center w-6 h-6 border-2 p-1 rounded-full`}
              >
                <div
                  className={`${greenbg} ${orangebg} ${bluebg} ${redbg} ${indigobg} ${basebg} p-2 rounded-full`}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={` p-2 rounded-xl w-56 ${greenbg} ${orangebg} ${bluebg} ${redbg} ${indigobg} ${basebg}`}
          >
            {monthAndYears}
          </div>
          <div className=" m-2">category:</div>
          <div className=" flex flex-wrap">
            {category.map((cat, index) => (
              <div key={index} className=" bg-gray-300 p-2 rounded-xl mr-2">
                {cat.categ}
              </div>
            ))}
          </div>
          <div className=" m-2">Note:</div>
          <div
            className={` rounded-xl mt-2 p-3 border-2 ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor}`}
          >
            {note === "" ? "The note is missing" : note}
          </div>
        </div>
        <div className=" bg-white rounded-xl p-3 w-full xl:w-1/2">
          <div className=" text-md font-bold">Events:</div>
          <EventCart />
        </div>
      </div>
      <div
        onClick={() => Delete()}
        className=" text-white hover:cursor-pointer mt-2 w-full flex justify-center items-center bg-red-500 rounded-xl p-2"
      >
        Delete this day
      </div>
    </>
  );
};

export default DelPatt;
