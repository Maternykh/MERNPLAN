import axios from "axios";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import { setLoading } from "../Redux/Slice/paramSlice";
import { setDays } from "../Redux/Slice/daySlice";
import DayCart from "../components/Days/DayCart";
import HeadDays from "../components/Days/HeadDays";
import { BiLoaderAlt } from "react-icons/bi";
const Home: React.FC = () => {
  const Loading = useAppSelector((state: RootState) => state.params.Loading);
  const days = useAppSelector((state: RootState) => state.days.days);
  const dispatch = useAppDispatch();
  const selectMonth = useAppSelector(
    (state: RootState) => state.filter.selectMonthAndYear
  );
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

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("https://fullstack-plans-app-mern.onrender.com/days")
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setDays(res.data));
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const searchValue = useAppSelector(
    (state: RootState) => state.filter.searchValue
  );

  const dayMap = days
    .filter((obj) => {
      if (obj.dayName.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((day) => {
      if (day.monthAndYears === monthyear[selectMonth]) {
        return <DayCart {...day} key={day._id} />;
      }
    });
  return (
    <div className=" flex xl:flex-nowrap flex-wrap">
      <div className=" xl:mb-0 mb-2 bg-white p-2 rounded-xl w-full xl:w-2/3 xl:mr-2">
        <HeadDays />
        <div className="  flex flex-wrap ">
          {Loading ? (
            <div className=" w-full h-80 animate-spin text-3xl flex justify-center items-center">
              <BiLoaderAlt />
            </div>
          ) : (
            dayMap
          )}
        </div>
      </div>
      <div className="className= bg-white p-2 rounded-xl w-full xl:w-2/5">
        awd
      </div>
    </div>
  );
};

export default Home;
