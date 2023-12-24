import React from "react";
import { FaHome, FaCalendar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setPathName } from "../../Redux/Slice/paramSlice";
const Navigation: React.FC = () => {
  const pathname = useAppSelector((state: RootState) => state.params.pathname);
  const dispatch = useAppDispatch();
  const links = [
    {
      icon: <FaHome />,
      path: "/",
    },
    {
      icon: <FaCalendar />,
      path: "/calendar",
    },
    {
      icon: <FaMessage />,
      path: "/messages",
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
  return (
    <div className=" xl:hidden flex w-full rounded-xl bg-white mb-2 justify-between">
      {links.map((lin, index) => (
        <Link
          className="w-1/5 "
          onClick={() => dispatch(setPathName(lin.path))}
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
      {/* <Link className={`${pathname} `} to={`/`}>
        <FaHome />
      </Link> */}
    </div>
  );
};

export default Navigation;
