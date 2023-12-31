import React from "react";
import { FaHome, FaCalendar } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";
import { iconMap, useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setPathName } from "../../Redux/Slice/paramSlice";
import { setClearAdd } from "../../Redux/Slice/addDaySlice";
import { setClearPurps } from "../../Redux/Slice/addPurps";
import { TbGridPattern } from "react-icons/tb";
const Navigation: React.FC = () => {
  const pathname = useAppSelector((state: RootState) => state.params.pathname);
  const dispatch = useAppDispatch();
  const links: iconMap[] = [
    {
      icon: <FaHome />,
      path: "/",
    },
    {
      icon: <FaCalendar />,
      path: "/calendar",
    },
    {
      icon: <TbGridPattern />,
      path: "/patterns",
    },
    {
      icon: <HiViewGridAdd />,
      path: "/addDay",
    },
    {
      icon: <MdOutlineAddToPhotos />,
      path: "/addNote",
    },
  ];
  const onCLickLinks = (lin: iconMap) => {
    dispatch(setPathName(lin.path));
    dispatch(setClearAdd());
    dispatch(setClearPurps());
  };
  return (
    <div className=" xl:hidden flex w-full rounded-xl bg-white mb-2 justify-between">
      {links.map((lin, index) => (
        <Link
          className="w-1/5 "
          onClick={() => onCLickLinks(lin)}
          to={lin.path}
          key={index}
        >
          <div
            className={` flex justify-center border-2 rounded-xl p-2 text-xl  ${
              lin.path === pathname
                ? " border-orange-400 text-orange-400"
                : " border-transparent text-gray-300"
            }`}
          >
            {lin.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
