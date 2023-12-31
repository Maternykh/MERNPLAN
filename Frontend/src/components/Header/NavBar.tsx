import React from "react";
import { Link } from "react-router-dom";
import { linksMap, useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setPathName } from "../../Redux/Slice/paramSlice";
import { setClearAdd } from "../../Redux/Slice/addDaySlice";
import { setClearPurps } from "../../Redux/Slice/addPurps";

const NavBar: React.FC = () => {
  const location = useAppSelector((state: RootState) => state.params.pathname);
  const dispatch = useAppDispatch();
  const links: linksMap[] = [
    {
      value: "Home",
      path: "/",
    },
    {
      value: "Calendar",
      path: "/calendar",
    },
    {
      value: "Patterns",
      path: "/patterns",
    },
    {
      value: "Add Day",
      path: "/addDay",
    },
    {
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
            } flex justify-center xl:justify-normal my-2 text-lg mx-5`}
          >
            {lin.value}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
