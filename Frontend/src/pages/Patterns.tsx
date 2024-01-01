import React, { useEffect, useState } from "react";
import { dayMap, useAppDispatch, useAppSelector } from "../Type";
import { setLoading } from "../Redux/Slice/paramSlice";
import axios from "axios";
import { RootState } from "../Redux/store";
import { setPatterns } from "../Redux/Slice/patternSlice";
import AddHead from "../components/Add/AddHead";
import AddMonth from "../components/Add/AddMonth";
import AddCateg from "../components/Add/AddCateg";
import { setClearAdd, setNote } from "../Redux/Slice/addDaySlice";
import ResetEvents from "../components/Events/ResetEvents";
import PatternCart from "../components/Pattern/PatternCart";

const Patterns: React.FC = () => {
  const dispatch = useAppDispatch();
  const owner = useAppSelector((state: RootState) => state.userAuth.userEmail);
  const patterns = useAppSelector((state: RootState) => state.pattern.patterns);
  const [render, setRender] = useState<boolean>(false);
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
  const greenbor = color === "green" && " border-green-400";
  const orangebor = color === "orange" && "  border-orange-400";
  const bluebor = color === "blue" && "  border-blue-400";
  const redbor = color === "red" && "  border-red-400";
  const indigobor = color === "indigo" && "  border-indigo-400";
  const basebor = color === "base" && "  border-gray-200";
  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("https://fullstack-plans-app-mern.onrender.com/pattern")
      .then((res) => {
        dispatch(setLoading(false));
        const filterData = res.data.filter(
          (obj: dayMap) => obj.owner === owner
        );
        dispatch(setPatterns(filterData));
        console.log(filterData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [render]);
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
      owner,
    };
    dispatch(setLoading(true));
    axios
      .post(`https://fullstack-plans-app-mern.onrender.com/pattern`, add)
      .then(() => {
        dispatch(setLoading(false));
        dispatch(setClearAdd());
        setRender(!render);
      });
  };
  return (
    <div className=" xl:flex">
      <div className="bg-white rounded-xl p-2 xl:w-1/2 w-full mr-2 xl:mb-0 mb-2">
        <div className=" flex justify-center">
          <div className=" xl:grid xl:grid-cols-3 w-11/12">
            {patterns.map((pattern) => (
              <PatternCart {...pattern} key={pattern._id} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-2 xl:w-1/2 w-full">
        <div className=" ">
          <div className=" xl:mb-0 mb-2 w-full  bg-white rounded-xl p-2 xl:mr-2 ">
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
            onClick={() => dispatch(setClearAdd())}
            className={`  hover:cursor-pointer border-2  ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor} rounded-xl mr-2 flex justify-center items-center w-36`}
          >
            Remove
          </div>
          <div
            onClick={() => OnCLickSubmit()}
            className={` hover:cursor-pointer  w-full flex justify-center items-center border-2  ${greenbor} ${orangebor} ${bluebor} ${redbor} ${indigobor} ${basebor} rounded-xl p-2`}
          >
            Add Day
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patterns;
