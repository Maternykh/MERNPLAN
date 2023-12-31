import React from "react";
import { Link } from "react-router-dom";
import { linksMap, useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setPathName } from "../../Redux/Slice/paramSlice";
import { setClearAdd } from "../../Redux/Slice/addDaySlice";
import { setClearPurps } from "../../Redux/Slice/addPurps";
import { TbGridPattern } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineAddToPhotos } from "react-icons/md";
const NavBar: React.FC = () => {
  const location = useAppSelector((state: RootState) => state.params.pathname);
  const dispatch = useAppDispatch();
  const links: linksMap[] = [
    {
      icon: <FaHome className=" flex justify-center items-center " />,
      value: "Home",
      path: "/",
    },
    {
      icon: <LuCalendarDays className=" flex justify-center items-center " />,
      value: "Calendar",
      path: "/calendar",
    },
    {
      icon: <TbGridPattern className=" flex justify-center items-center " />,
      value: "Patterns",
      path: "/patterns",
    },
    {
      icon: <HiViewGridAdd className=" flex justify-center items-center " />,
      value: "Add Day",
      path: "/addDay",
    },
    {
      icon: (
        <MdOutlineAddToPhotos className=" flex justify-center items-center " />
      ),
      value: "Add Purp",
      path: "/addNote",
    },
  ];
  const onClickLink = (lin: linksMap) => {
    dispatch(setPathName(lin.path));
    dispatch(setClearAdd());
    dispatch(setClearPurps());
  };
  return (
    <div className=" hidden  xl:mb-0 mb-2 w-full xl:w-1/2 xl:flex  xl:justify-between items-center bg-white xl:px-8 xl:py-3 xl:rounded-full rounded-xl">
      {links.map((lin, index) => (
        <Link onClick={() => onClickLink(lin)} to={lin.path} key={index}>
          <div
            className={`${
              location === lin.path ? " text-orange-500" : "text-slate-800"
            } flex justify-center xl:justify-normal my-2 text-lg items-center`}
          >
            <div className=" flex justify-center items-center text-xl mr-1">
              {lin.icon}
            </div>
            <div className=" flex justify-center items-center">{lin.value}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
